const footerTemplate = document.createElement("template");
footerTemplate.innerHTML = `
    <style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css');
    
    footer a:hover{
      text-decoration: underline !important;
    }
    .footer-distributed {
        background: var(--tertiary-color);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        width: 100%;
        text-align: left;
        font: bold 16px sans-serif;
        padding: 55px 50px;
      }
      
      .footer-distributed .footer-left,
      .footer-distributed .footer-center,
      .footer-distributed .footer-right {
        display: inline-block;
        vertical-align: top;
      }
      
      /* Footer left */
      
      .footer-distributed .footer-left {
        width: 40%;
      }
      .footer-distributed .footer-left h3 span {
        font-weight: bold;
      }
      
      /* The company logo */
      
      .footer-distributed h3 {
        color: #ffffff;
        font: normal 36px "Open Sans", cursive;
        margin: 0;
      }
      
      .footer-distributed h3 span {
        color: lightseagreen;
      }
      
      /* Footer links */
      
      .footer-distributed .footer-links {
        color: #ffffff;
        margin: 20px 0 12px;
        padding: 0;
      }
      
      .footer-distributed .footer-links a {
        display: inline-block;
        line-height: 1.8;
        font-weight: 400;
        text-decoration: none;
        color: inherit;
      }
      
      .footer-distributed .footer-company-name {
        color: #fff;
        font-size: 14px;
        font-weight: normal;
        margin: 0;
      }
      
      /* Footer Center */
      
      .footer-distributed .footer-center {
        width: 35%;
      }
      
      .footer-distributed .footer-center i {
        color: #ffffff;
        font-size: 25px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        text-align: center;
        line-height: 42px;
        margin: 10px 15px;
        vertical-align: middle;
      }
      
      .footer-distributed .footer-center i.fa-envelope {
        font-size: 17px;
        line-height: 38px;
      }
      
      .footer-distributed .footer-center p {
        display: inline-block;
        color: #ffffff;
        font-weight: 400;
        vertical-align: middle;
        margin: 0;
      }
      
      .footer-distributed .footer-center p span {
        display: block;
        font-weight: normal;
        font-size: 14px;
        line-height: 2;
      }
      
      .footer-distributed .footer-center p a {
        color: lightseagreen;
        text-decoration: none;
      }
      
      .footer-distributed .footer-links a:before {
        content: "|";
        font-weight: 300;
        font-size: 20px;
        left: 0;
        color: #fff;
        display: inline-block;
        padding-right: 5px;
      }
      
      .footer-distributed .footer-links .link-1:before {
        content: none;
      }
      
      /* Footer Right */
      
      .footer-distributed .footer-right {
        width: 20%;
      }
      
      .footer-distributed .footer-company-about {
        line-height: 20px;
        color: #92999f;
        font-size: 13px;
        font-weight: normal;
        margin: 0;
      }
      
      .footer-distributed .footer-company-about span {
        display: block;
        color: #ffffff;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      
      .footer-distributed .footer-icons {
        margin-top: 25px;
        color: #fff;
      }
      .footer-distributed .footer-icons h4 {
        margin-bottom: 15px;
      }
      
      .footer-distributed .footer-icons a {
        display: inline-block;
        width: 35px;
        height: 35px;
        cursor: pointer;
        border-radius: 50%;
        background: #112d4e;
        box-shadow: 5px 5px 10px #07121f, -5px -5px 10px #1b487d;
      
        font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 35px;
      
        margin-right: 3px;
        margin-bottom: 5px;
      }
      
      /* If you don't want the footer to be responsive, remove these media queries */
      
      @media (max-width: 880px) {
        .footer-distributed {
          font: bold 14px sans-serif;
        }
      
        .footer-distributed .footer-left,
        .footer-distributed .footer-center,
        .footer-distributed .footer-right {
          display: block;
          width: 100%;
          margin-bottom: 40px;
          text-align: center;
        }
      
        .footer-distributed .footer-center i {
          margin-left: 0;
        }
        .newsletter-container{
          margin: 0 auto;
        }
      }

      .newsletter-container {
          width: fit-content;
          display: flex;
          flex-direction: column;
          
          & h2{
            color: #fff;
          }
          & > *{
            margin-bottom: 10px;
          }
          
        }
        form {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          min-width: 220px;
          max-width: 380px;
          gap: 15px;
          
          & .form-input{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 10px;
            width: 100%
          }
          & .form-input input {
            flex: 1 1 100px;
            border: none;
            padding: 8px 2px;
            background: none;
            border-bottom: 3px solid rgba(255, 255, 255, .08);
            color: #fff;
            transition: all .3s ease-in-out;

            &:focus{
              outline: none;
              border-bottom: 3px solid #fff;
            }
            &::placeholder{
              color: #fff;
            }
            &:focus::placeholder{
              opacity: 0;
            }
            
          }
          & input[type="submit"] {
            background-color: rgba(255, 255, 255, .08);
            padding: 8px 12px;
            border: none;
            color: #fff;
            font-weight: bold;
            border-radius: 12px;
            transition: all .3s ease-in-out;

            &:hover{
              background-color: rgba(255, 255, 255, .15);
              cursor: pointer;
            }
          }
          & #message{
            display: none;
            color: white;
            font-weight: 400;
            font-size: 12px;
            
          }
        }
      
    </style>
    
    <footer class="footer-distributed">
        <div class="footer-left">
            <h3><span>NYC</span></h3>
            <div class="newsletter-container">
              <h2>Subscribe for More Content</h2>
              <form id="newsletterForm">
              <span id="message"></span>
                <div class="form-input">
                  <input type="text" id="news-name"
                  name="name"
                  placeholder="Name"
                  required 
                  />

                  <input type="email" id="news-email"
                  name="email"
                  placeholder="Email Adress"
                  required />
                </div>
                <input type="submit" id="newsletterBtn" value="Subscribe" />
              </form>
            </div>
            <p class="footer-links">
                <a href="index.html" class="link-1">Home</a>

                <a href="location.html">Location</a>

                <a href="buildingType.html">Building Type</a>

                <a href="sales.html">Sales</a>

                <a href="team.html">Our Team</a>

                <a href="contact.html">Contact</a>
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

class Footer extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(footerTemplate.content.cloneNode(true));

    const newsletterBtn = shadowRoot.getElementById("newsletterBtn");

    // load EmailJS CDN
    this.loadScript()
      .then(() => {
        // Initialize emailJS
        emailjs.init("A-RZ8qEPMIr1s64QE");
        // newsletter event listener
        newsletterBtn.addEventListener("click", (event) => {
          event.preventDefault();
          this.sendNewsletter(shadowRoot);
        });
      })
      .catch((error) => console.error("Failed to load EmailJS script:", error));
  }

  // function to crate JS script for EmailJS CDN
  loadScript() {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  // function to send newsletter email
  sendNewsletter(shadowRoot) {
    const username = shadowRoot.getElementById("news-name").value;
    const useremail = shadowRoot.getElementById("news-email").value;
    const message = shadowRoot.getElementById("message");

    let newsletter = {
      name: username,
      email: useremail,
    };

    emailjs.send("service_yjnqsai", "template_i2ifg2g", newsletter).then(
      () => {
        message.textContent = "Email sent successfully!";
        message.style.display = "block";

        setTimeout(() => {
          message.style.display = "none";
        }, 3000);

        shadowRoot.getElementById("news-name").value = "";
        shadowRoot.getElementById("news-email").value = "";
      },
      (error) => {
        console.error("Email sending failed:", error);
        alert("Failed to send email. Please try again.");
      }
    );
  }
}

window.customElements.define("footer-card", Footer);
