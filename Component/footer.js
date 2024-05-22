class Footer extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <footer class="footer-distributed">
      <div class="footer-left">
        <h3><span>NYC</span></h3>
  
        <p class="footer-links">
          <a href="index.html" class="link-1">Home</a>
  
          <a href="location.html">Location</a>
  
          <a href="buildingType.html">Building Type</a>

          <a href="sales.html">Sales</a>
  
          <a href="#">Our Team</a>
  
          <a href="#">Contact</a>
        </p>
  
        <p class="footer-company-name">Team 12 | Sec.Palembang © 2024</p>
      </div>
  
      <div class="footer-center">
        <div>
          <i class="bx bxs-map"></i>
          <p><span>221B Baker Street</span> Indonesia</p>
        </div>
  
        <div>
          <i class="bx bx-phone"></i>
          <p>+62 888 8888 8888</p>
        </div>
  
        <div>
          <i class="bx bxs-envelope-open"></i>
          <p><a href="mailto:support@company.com">support@ncyprop.com</a></p>
        </div>
      </div>
  
      <div class="footer-right">
        <p class="footer-company-about">
          <span>About Us</span>
          Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod
          convallis velit, eu auctor lacus vehicula sit amet.
        </p>
  
        <div class="footer-icons">
          <h4>Follow Us</h4>
          <a href="#"><i class="bx bxl-facebook-square"></i></a>
          <a href="#"><i class="bx bxl-twitter"></i></a>
          <a href="#"><i class="bx bxl-linkedin-square"></i></a>
          <a href="#"><i class="bx bxl-github"></i></a>
        </div>
      </div>
    </footer>
          `;
  }
}

window.customElements.define("footer-card", Footer);
