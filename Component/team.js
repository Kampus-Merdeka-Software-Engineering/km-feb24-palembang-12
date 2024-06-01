const teamTemplate = document.createElement("template");
teamTemplate.innerHTML = `

    <style>
    .team-item{
        display: flex;
        flex-direction: column;
        min-width: 280px;
        min-height: 350px;
        border-radius: 12px;
        overflow: hidden;
        background-color: #FEFEFE;
        
      }
    .img-wrapper {
        width: 100%;
        height: 300px;
        background: url("../assets/images/team/team.png") no-repeat center center;
        background-size: cover;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: inherit;

        & .img-circle{
          background-color: #fff;
          width: 230px;
          height: 230px;
          position: absolute;
          border-radius: 50%;
          overflow: hidden;
          & img{
            width: 100%;
            height: 100%;
          }
        }
    }
    .team-content{
        display: flex;
        flex-direction: column;
        text-align: center;
        padding: 10px;
        font-weight: 700;
    }
    </style>

    <div class="team-item">
        <div class="img-wrapper">
            <div class="img-circle">
                <img alt="team profile" />
            </div>
        </div>
            <div class="team-content">
                <span><slot name="name" />Default name</span>
                <span><slot name="role" />Default role</span>
            </div>
    </div>
`;

class Team extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(teamTemplate.content.cloneNode(true));

    shadowRoot.querySelector("img").src = this.getAttribute("image");


  }
}

window.customElements.define("team-card", Team);
