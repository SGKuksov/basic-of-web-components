class UserCard extends HTMLElement {

    rendered = false

    render() { // (1)
        let date = new Date(this.getAttribute('datetime') || Date.now());

        const content = new Intl.DateTimeFormat("default", {
            year: this.getAttribute('year') || undefined,
            month: this.getAttribute('month') || undefined,
            day: this.getAttribute('day') || undefined,
            hour: this.getAttribute('hour') || undefined,
            minute: this.getAttribute('minute') || undefined,
            second: this.getAttribute('second') || undefined,
            timeZoneName: this.getAttribute('time-zone-name') || undefined,
        }).format(date);

        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
            <style> div { font-weight: bold; } </style> 
            <div>Имя:
                <slot name="username"></slot>
            </div>
            <div>Дата рождения:
                ${content}
            </div>
        `;
    }

    constructor() {
        super();
        // элемент создан
    }

    connectedCallback() { // (2)
        // браузер вызывает этот метод при добавлении элемента в документ
        // (может вызываться много раз, если элемент многократно добавляется/удаляется)

        if (!this.rendered) {
            this.render();
            this.rendered = true;
        }
    }

    disconnectedCallback() {
        // браузер вызывает этот метод при удалении элемента из документа
        // (может вызываться много раз, если элемент многократно добавляется/удаляется)
    }

    static get observedAttributes() { // (3)
        /* массив имён атрибутов для отслеживания их изменений */
        return ['datetime', 'year', 'month', 'day', 'hour', 'minute', 'second', 'time-zone-name'];
    }

    attributeChangedCallback(name, oldValue, newValue) { // (4)
        // вызывается при изменении одного из перечисленных выше атрибутов

        // todo
        // this.render();
    }

    adoptedCallback() {
        // вызывается, когда элемент перемещается в новый документ
        // (происходит в document.adoptNode, используется очень редко)
    }

}

customElements.define("user-card", UserCard);