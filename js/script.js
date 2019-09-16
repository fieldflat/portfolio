const body = document.querySelector('main');
const loading = document.getElementById('loading');
const link = document.querySelectorAll('a:not([href^="#"]):not([target])');

window.onload = function () {
  loading.classList.remove('fadeOut');
};
/* loading */
window.addEventListener('DOMContentLoaded', function () {
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function (e) {
      e.preventDefault();
      let url = this.getAttribute('href');
      if (url !== '') {
        loading.classList.add('fadeOut');
        setTimeout(function () {
          window.location = url;
        }, 800);
        return false;
      };
    });
  }
});