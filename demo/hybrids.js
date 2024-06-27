import {html, define} from "https://cdn.jsdelivr.net/npm/hybrids@9.0.0/+esm";

function increaseCount(host) {
    host.count += 1;
}

export default define({
    tag: "simple-counter",
    count: 0,
    render: ({count}) => html`
        <button onclick="${increaseCount}">Count: ${count}</button>
    `,
});