/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiGrid {
    render() {
        return (h("div", { class: "container" },
            h("div", { class: "fullwidth" },
                h("slot", { name: "header" })),
            h("div", { class: "main" },
                h("slot", null)),
            h("div", { class: "sidebar" },
                h("slot", { name: "sidebar" })),
            h("div", { class: "fullwidth" },
                h("slot", { name: "footer" }))));
    }
    static get is() { return "mi-grid"; }
    static get style() { return ".container {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: 100px 1fr 50px;\n}\n\n.fullwidth {\n  grid-column-start: 1;\n  grid-column-end: 7;\n}\n\n.main {\n  grid-column-start: 1;\n  grid-column-end: 6;\n}"; }
}

export { MiGrid };
