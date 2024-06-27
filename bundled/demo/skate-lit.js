import Element, {html} from 'https://cdn.jsdelivr.net/npm/@skatejs/renderer-lit-html@0.2.2/+esm'

class ElementLit extends Element {
    static get props() {
        return {
            name: String
        };
    }

    render() {
        return html`
            Hello, ${this.name}!
        `;
    }
}

customElements.define('element-lit', ElementLit);
