document.addEventListener('DOMContentLoaded', function() {
  const code = window.location.hash.replace('#', '').toUpperCase().trim();
  
  if (code && code.length > 0) {
    document.getElementById('invite-code').textContent = code;
  } else {
    document.getElementById('invite-code').textContent = 'INVALID';
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
