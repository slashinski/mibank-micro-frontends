/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiTable {
    constructor() {
        this.selectedRow = 0;
        this.headings = [];
        this.data = [];
        this.selected = null;
    }
    selectRow(e) {
        this.selectedRow = e.currentTarget.rowIndex - 1;
        this.rowOnClick(e);
    }
    generateHeader() {
        const row = this.headings.map(item => h("th", null, item));
        return h("tr", null, row);
    }
    generateGrid() {
        const row = this.data.map((row, ri) => {
            const result = row.map((cell, ci) => {
                var selected;
                if (this.selected !== null)
                    selected =
                        this.selected.dataSetIndex === ri && this.selected.dataIndex === ci;
                return h("td", { class: selected == true ? "selected" : "" }, cell);
            });
            return (h("tr", { class: this.selectedRow == ri ? "" : "", onClick: e => this.selectRow(e) }, result));
        });
        return row;
    }
    render() {
        const header = this.generateHeader();
        const grid = this.generateGrid();
        return (h("table", null,
            h("slot", { name: "above" }),
            header,
            grid,
            h("slot", { name: "below" })));
    }
    static get is() { return "mi-table"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "data": {
            "type": "Any",
            "attr": "data"
        },
        "headings": {
            "type": "Any",
            "attr": "headings"
        },
        "ref": {
            "type": "Any",
            "attr": "ref"
        },
        "rowOnClick": {
            "type": "Any",
            "attr": "row-on-click"
        },
        "selected": {
            "type": "Any",
            "attr": "selected"
        },
        "selectedRow": {
            "state": true
        }
    }; }
    static get style() { return "table[data-mi-table] {\n  width: 100%;\n}\n\ntable[data-mi-table], th[data-mi-table], td[data-mi-table] {\n  border: 1px solid black;\n  border-collapse: collapse;\n}\n\nth[data-mi-table], td[data-mi-table] {\n  padding: 15px;\n}\n\ntable[data-mi-table]   tr[data-mi-table]:nth-child(even) {\n  background-color: #eee;\n}\ntable[data-mi-table]   tr[data-mi-table]:nth-child(odd) {\n  background-color: #fff;\n}\ntable[data-mi-table]   th[data-mi-table] {\n  color: white;\n  background-color: black;\n}\n\n.selected[data-mi-table] {\n  border: red 3px solid;\n}"; }
}

export { MiTable };
