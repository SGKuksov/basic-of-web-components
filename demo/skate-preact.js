import Element, {h} from 'https://cdn.jsdelivr.net/npm/@skatejs/renderer-preact@0.3.3/+esm';


class ElementPreact extends Element {
    static props = {
        name: String
    };

    name = 'World';

    render() {
        // return <span>Hello, {this.name}!</span>;
        return h('span', this.name)
    }
}

customElements.define('element-preact', ElementPreact);
