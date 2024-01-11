export {ProfileScreen};
import { ProfileTopBar } from "./topbar.js";

class ProfileScreen {
    constructor(parent) {
        this.parent = parent;
        this.render();
    }

    render() {
        let top_bar = new ProfileTopBar(this.parent);
    }
}