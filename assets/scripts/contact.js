// Progressive enhancement for the contact form.
//
// The form works with no JS at all: it's a plain <form method="post"> posting
// directly to Web3Forms, which redirects to its own thank-you page. This script
// upgrades that into an inline success/error state without a page reload. If it
// fails to load or throws, the native form submission still goes through.
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const errorBanner = document.getElementById('contact-error');
  const successBanner = document.getElementById('contact-success');

  function setSubmitting(isSubmitting) {
    submitButton.disabled = isSubmitting;
    submitButton.textContent = isSubmitting ? 'Sending…' : 'Send message';
  }

  function showError() {
    errorBanner.hidden = false;
    successBanner.hidden = true;
  }

  function showSuccess() {
    form.hidden = true;
    errorBanner.hidden = true;
    successBanner.hidden = false;
  }

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    errorBanner.hidden = true;
    setSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      const result = await response.json();

      if (result.success) {
        showSuccess();
        // Field values are intentionally left in place until success is confirmed
        // (component contract §4.12: never clear the form on a failed submit).
        form.reset();
      } else {
        showError();
      }
    } catch (err) {
      showError();
    } finally {
      setSubmitting(false);
    }
  });

  document.getElementById('contact-send-another')?.addEventListener('click', function () {
    successBanner.hidden = true;
    form.hidden = false;
  });
})();
