const navbarTemplate = document.createElement("template");
navbarTemplate.innerHTML = `
    <style>
    /* navbar section */
    section{
        margin-block: 50px;
    }
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 35px;
        background-color: var(--Primary, #dbe2ef);
        border-radius: 30px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
        
    .navbar .logo {
        font-family: Poppins, sans-serif;
        font-size: 40px;
        display: flex;
        align-items: center;
    }
        
    .navbar .logo i {
        font-family: Poppins, sans-serif;
        font-size: 28px;
        margin-right: 10px;
    }
        
    .navbar ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 10px 20px;
        border-radius: inherit;
        background-color: #fff;
    }
        
    .navbar ul li {
        padding: 8px 16px;
        border-radius: 18px;
        transition: background-color 0.3s;
        cursor: pointer;
    }
        
    .navbar ul li a {
        text-decoration: none;
        color: #333;
    }
        
    .navbar ul li:hover {
        background-color: #ddd;
    }
        
    .navbar ul li + li {
        margin-left: 10px;
    }
        
    .navbar .button {
        padding: 10px 20px;
        border-radius: 18px;
        border: none;
        background-color: #ddd;
        cursor: pointer;
        transition: background-color 0.3s;
    }
        
    .navbar .button:hover {
        background-color: #ccc;
    }
        
        /* end navbar section */
    
    </style>

    <section>
        <nav>
            <div class="navbarContainer">
                <div class="navbar">
                <div class="logo"><i class="fas fa-water"></i>NYC</div>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="location.html">Location</a></li>
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

class Navbar extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(navbarTemplate.content.cloneNode(true));
  }
}
window.customElements.define("nav-card", Navbar);
