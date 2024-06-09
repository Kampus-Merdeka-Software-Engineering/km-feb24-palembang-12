const heroTemplate = document.createElement("template");
heroTemplate.innerHTML = `
  <style>
    .hero {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(to bottom, var(--secondary-color), #000);
      padding: 20px;
      color: white;
      border-radius: 15px;
    }
    
    .hero-content h1 {
      font-size: 24px;
      margin-bottom: 10px;
    }
    
    .hero-content h2 {
      font-size: 40px;
      margin-bottom: 20px;
    }
    
    .hero-content p {
      font-size: 18px;
      margin-bottom: 20px;
    }
    
    .search-box {
      display: flex;
      align-items: center;
    }
    
    .search-box input {
      padding: 10px;
      margin-right: 10px;
      border: none;
      border-radius: 5px;
    }
    
    .search-box button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    
    .hero-image {
      display: flex;
      justify-content: flex-end;
      background-size: fixed;
      width: 50%;
      height: 617px;
      position: relative;

      & img{
        position: absolute;
        right: -70px;
      }
    }
    
    .contact .button {
      padding: 10px 20px;
      border-radius: 18px;
      border: none;
      background-color: #ddd;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    
    .contact .button:hover {
      background-color: #ccc;
    }

    @media (max-width: 880px) {
      .hero {
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        border-radius: 0;
      }

      .hero-image {
        display: none;
      }

      .hero-content h2 {
        font-size: 30px;
        margin-bottom: 15px;
      }

      .hero-content p {
        font-size: 16px;
        margin-bottom: 15px;
      }
    }

  </style>

  <section id="hero">
  <div class="hero">
    <div class="hero-content">
      <h1><slot name="page" /></h1>
      <h2><slot name= "title" /></h2>
      <p><slot name= "desc" /></p>
      <div class="contact">
        <button class="button" id="contactUs">Contact Us</button>
      </div>
    </div>
    <div class="hero-image">
      <img src="./assets/images/hero-logo.png" />
    </div>
  </div>
  </section>
`;
class Hero extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(heroTemplate.content.cloneNode(true));

    const contact = shadowRoot.getElementById('contactUs');
    contact.addEventListener('click', function() {
    window.location.href = 'contact.html';})
  }
}

window.customElements.define("hero-card", Hero);
