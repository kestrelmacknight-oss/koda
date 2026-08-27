document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname;
  const href = window.location.href;
  document.getElementById('invite-code').textContent = href; // show full URL
  // ... rest of code

  const match = path.match(/\/invite\/([A-Z0-9_-]+)/i);
  const code = match ? match[1].toUpperCase() : null;

  if (code) {
    document.getElementById('invite-code').textContent = code;
  } else {
    document.getElementById('invite-code').textContent = 'NO MATCH: ' + path;
  }

  function copyCode() {
    const code = document.getElementById('invite-code').textContent;
    navigator.clipboard.writeText(code).then(() => {
      const toast = document.getElementById('toast');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2500);
    });
  }

  document.getElementById('copy-btn').addEventListener('click', copyCode);
});
