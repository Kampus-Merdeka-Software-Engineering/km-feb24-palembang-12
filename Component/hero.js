class Hero extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <section id="hero">
        <div class="hero">
          <div class="hero-content">
            <h1>${this.getAttribute("name")}</h1>
            <h2>${this.getAttribute("title")}</h2>
            <p>${this.getAttribute("desc")}</p>
            <div class="contact">
              <button class="button">Contact Us</button>
            </div>
          </div>
          <div class="hero-image">
            <img src="assets/hero-logo.png" />
          </div>
        </div>
      </section>
        `;
  }
}

window.customElements.define("hero-card", Hero);
