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
(function () {
    const saved = localStorage.getItem('theme');
    if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();

const toggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function getTheme() {
    return html.getAttribute('data-theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateToggleText(theme);
}

toggle.addEventListener('click', () => {
    const current = getTheme();
    setTheme(current === 'dark' ? 'light' : 'dark');
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
    }
});
const form = document.getElementById('form');
const ThankYouMessage = document.getElementById('thank-you-message');
 form.addEventListener('submit', function(e){

    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('psw').value.trim();
    const phone = document.getElementById('numb-phone').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!email || !username || !phone || !message){
        alert('Please fill in all fields');
        return;
    }

    fetch(form.action, {
        method:"POST",
         body: new FormData(form),
        headers: { 'Accept': 'application/json' }
    })
    .then(response=>{
        if(response.ok){
        form.style.display = 'none';
        ThankYouMessage.textContent = 'Thank you for information';
        ThankYouMessage.style.display = 'block';
        } 
        else{
            alert('Something went wrong, please try again.');
      }

      
    })
    .catch(() => alert('Something went wrong, please try again.'));
    
 });
 