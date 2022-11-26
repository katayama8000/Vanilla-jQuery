class MyCounter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    get count() {
        return this.getAttribute('count');
    }

    set count(value) {
        this.setAttribute('count', value);
    }

    static get observedAttributes() {
        return ['count'];
    }

    attributeChangedCallback(prop, oldValue, newValue) {
        if (prop === 'count') this.render();
        let btn = this.shadowRoot.querySelector('#btn');
        btn.addEventListener('click', this.inc.bind(this));
    }

    inc() {
        this.count++;
    }

    connectedCallback() {
        this.render();
        let btn = this.shadowRoot.querySelector('#btn');
        btn.addEventListener('click', this.inc.bind(this));
    }

    render() {
        this.shadowRoot.innerHTML = `
           <h1>counter</h1>
           ${this.count}
           <button id="btn">Increment</button>
        `;
    }
}

customElements.define('my-counter', MyCounter);