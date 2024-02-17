function toggleAboutPage() {
    var aboutPage = document.querySelector('#about');
    if (aboutPage.style.display === 'none') {
      aboutPage.style.display = 'block';
    } else {
      aboutPage.style.display = 'none';
    }
  }


  document.querySelector('#menu').addEventListener('click', toggleAboutPage);