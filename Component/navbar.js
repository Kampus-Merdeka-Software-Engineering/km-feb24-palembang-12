class Navbar extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
        <section>
            <nav>
            <div class="navbarContainer">
                <div class="navbar">
                <div class="logo"><i class="fas fa-water"></i>NYC</div>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="buildingType.html">Building Type</a></li>
                    <li><a href="sales.html">Sales</a></li>
                    <li><a href="#team">Our Team</a></li>
                </ul>
                <button class="button">Contact Us</button>
                </div>
            </div>
            </nav>
        </section>
        `;
  }
}
window.customElements.define("nav-card", Navbar);
