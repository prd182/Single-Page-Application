import AbstractView from "./abstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Skills");
}

    async getHtml() {
        return `
        <h1>Skills</h1>`;
    }
}