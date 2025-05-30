
document.querySelectorAll('footer button[data-lang]').forEach(btn => {
  btn.addEventListener('click', function() {
    const lang = this.getAttribute('data-lang');
    const allLangs = ['ko', 'En', 'Ja', 'Cn'];
    allLangs.forEach(l => {
      document.querySelectorAll('.' + l).forEach(div => {
        if (l === lang) {
          div.classList.remove('disable');
        } else {
          div.classList.add('disable');
        }
      });
    });
  });
});
