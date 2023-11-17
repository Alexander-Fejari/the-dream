import "./style.css";
import { setupCounter } from "./counter.js";
import javascriptLogo from "./javascript.svg";

// Appeler le backend pour récupérer les données
fetch('/api/data')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur lors de la requête au backend - ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        // Appeler la fonction pour afficher les données dans le HTML
        console.log(data)
    })
    .catch(error => {
        console.error('Erreur lors de la requête au backend:', error);
    });

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <div class="test"></div>
  </div>
`;

setupCounter(document.querySelector("#counter"));
