// Header
class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div id="logo">
            <h1 role="heading" alt="home"><a href="/">Ming Yang</a></h1>
        </div>
        <div id="nav">
            <nav>
                <a href="../../about.html">about <span>→</span></a>
                <a href="../../works.html">works <span>→</span></a>
                <a href="../../research.html">research <span>→</span></a>
            </nav>
        </div>
      </header>
    `;
    }
  }
  
  customElements.define("header-component", Header);