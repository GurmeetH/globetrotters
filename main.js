import './src/css/style.css'
import './src/css/about.css'
import './src/css/menu.css'
import'./src/js/menu'
import viteLogo from '/assets/logo/globe-svgrepo-com.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>

    <h1>Globetrotters International</h1>
    <h1 class="moto">Global Adventures, Local Connections</h1>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

document.querySelector('#about').innerHTML = `
  <div>
    <h2>About Us</h2>
    <p>Welcome to Globetrotters International, your gateway to global adventures!</p>
    <p>Explore our website to discover exciting destinations and connect with fellow travelers.</p>
  </div>
`;

document.querySelector('#menu').innerHTML = `
  <div>
    <p>Menu</p>
  </div>
`;

