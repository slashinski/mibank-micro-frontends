/*! Built with http://stenciljs.com */
const { h } = window.mibank;

class MiNavigation {
    constructor() {
        this.isNavOpen = false;
        this.navItems = [];
    }
    toggleNavigation() {
        if (!this.isNavOpen) {
            this.openNavigation();
        }
        else {
            this.closeNavigation();
        }
    }
    closeNavigation() {
        this.navigationEl.querySelector(".sidenav").classList.remove("open");
        this.isNavOpen = false;
    }
    openNavigation() {
        this.navigationEl.querySelector(".sidenav").classList.add("open");
        this.isNavOpen = true;
    }
    render() {
        return (h("div", null,
            h("div", { class: "menu", onClick: () => this.toggleNavigation() },
                h("i", { class: "im im-menu" })),
            h("div", { class: "sidenav" },
                h("div", { onClick: () => this.closeNavigation() },
                    h("i", { class: "im im-x-mark" })),
                this.navItems.map(item => (h("a", { href: item.link ? item.link : "#" }, item.label))))));
    }
    static get is() { return "mi-navigation"; }
    static get properties() { return {
        "closeNavigation": {
            "method": true
        },
        "isNavOpen": {
            "state": true
        },
        "navigationEl": {
            "elementRef": true
        },
        "navItems": {
            "type": "Any",
            "attr": "nav-items"
        },
        "openNavigation": {
            "method": true
        },
        "ref": {
            "type": "Any",
            "attr": "ref"
        },
        "toggleNavigation": {
            "method": true
        }
    }; }
    static get style() { return ".menu {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  top: 50px;\n  right: 50px;\n}\n\n.im-menu {\n  color: #818181;\n}\n\n.im-menu:hover {\n  color: #f1f1f1;\n}\n\n.im-x-mark {\n  color: #818181;\n}\n\n.im-x-mark:hover {\n  color: #f1f1f1;\n}\n\n.sidenav {\n  height: 100%;\n  width: 250px;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: -250px;\n  background-color: #111;\n  overflow-x: hidden;\n  padding-top: 60px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.sidenav div {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n\n.sidenav.open {\n  left: 0;\n}\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n.sidenav a:hover {\n  color: #f1f1f1;\n}\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px;\n}"; }
}

export { MiNavigation };
