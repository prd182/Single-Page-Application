import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Education");
}

    async getHtml() {
        return `
        <h1>Education</h1>`;
    }
}