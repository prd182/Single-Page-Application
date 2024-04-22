import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Experience");
}

    async getHtml() {
        return `
        <h1>Experience</h1>`;
    }
}