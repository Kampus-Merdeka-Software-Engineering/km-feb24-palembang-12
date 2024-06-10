const roomTemplate = document.createElement("template");
roomTemplate.innerHTML = `
    <style>
    @import url('https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.4/css/boxicons.min.css');

        .card {
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.3s;
            border-radius: 10px;
            overflow: hidden;
            position: relative;
            background-color: #fff;
            width: 100%;
            height: 100%;
            background-color: white;
            transition: all .3s ease-in-out;
            aspect-ratio: 1/1;
            
            &:hover{
              transform: scale(1.05);
            }
        }
        
        img{
            width: 100%;
            height: 80%;
            border-radius: inherit;
        }
        .card .label-wrapper{
            display: flex;
            gap: 10px;
            position: absolute;
            top: 0;
            width: 100%;
            color: #000;
            padding: 12px;
            font-size: small;
        }
        .label{
            border-radius: 12px;
            padding: 6px 10px;
            font-weight: bold;
            background-color: var(--primary-color);
        }
        

        .card-content{
            position: absolute;
            width: 80%;
            padding: 16px;
            left: 50%;
            transform: translateX(-50%);
            bottom: 10%;
            background-color: #fff;
            border-radius: inherit;
            color: #000;
        }
        .card-content .title{
            margin: 0;
        }
        .card .info{
            margin-top: 10px;
            display: flex;
            justify-content: space-between;
        }
        .card .info .price{
            font-size: 1.1rem;
            font-weight: 700;
            color: #008000;
        }
        .card .info .card-info {
            display: flex;
            gap: 2px;
          
            & div {
              display: flex;
              align-items: center;
              gap: 5px;
              padding: 0 10px;
              height: 100%;
              border-right: 1px solid grey;
            }
            & div:last-of-type {
              border-right: none;
            }
          }
    </style>
    <div class="card">
        <img alt="property image"/>

        <div class="label-wrapper">
            <div class="label sale">FOR SALE</div>
            <div class="label featured">FEATURED</div>
        </div>

        <div class="card-content">
            <h4 class="title"><slot name="title" />Default Title</h4>
            <div>
                <i class="bx bx-map"></i>
                <span class="details"><slot name="details" />Default details</span>
            </div>
            <div class="info">
                <span class="price">$<slot name="price" />0</span>

                <div class="card-info">
                  <div>
                    <img src="assets/icon/room.svg" alt="" />
                    <slot name="room-total" />0
                  </div>
                  <div>
                    <img src="assets/icon/bathroom.svg" alt="" />
                    <slot name="bathroom-total" />0
                  </div>
                  <div>
                    <img src="assets/icon/sqrfeet.svg" alt="" />
                    <slot name="sqrfeet-total" />0
                  </div>
                </div>
                
            </div>
        </div>
    </div>
`;

class Room extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(roomTemplate.content.cloneNode(true));

    shadowRoot.querySelector("img").src = this.getAttribute("image");

    const saleLabel = shadowRoot.querySelector(".sale");
    const featuredLabel = shadowRoot.querySelector(".featured");

    if (!this.hasAttribute("sale")) {
      saleLabel.style.display = "none";
    }

    if (!this.hasAttribute("featured")) {
      featuredLabel.style.display = "none";
    }
  }
}

window.customElements.define("room-card", Room);
