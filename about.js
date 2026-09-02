document.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hostname === window.location.hostname) {
      e.preventDefault(); 
      const href = this.href;

      document.body.classList.add('page-exit'); 

      setTimeout(() => {
        window.location.href = href; 
      }, 500); 
    }
  });
});