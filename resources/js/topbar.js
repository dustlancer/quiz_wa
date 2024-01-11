export {TopBar};

function TopBar(parent) {
    this.parent = parent;

    this.render = () => {
        let header = document.createElement('div');
        header.className = 'header flex flex-row items-center justify-between w-screen font-bold text-white text-3xl p-5 border-b-2 border-indigo-500';
        let profile_btn = document.createElement('img');
        profile_btn.className = 'h-16 p-3 glassy';
        profile_btn.src = './resources/images/profile-icon.png';
        profile_btn.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent("change_route", {
                detail: {
                    route: "profile",
                }
            }));
        });

        let info_btn = document.createElement('img');
        info_btn.className = 'h-16 p-3 glassy';
        info_btn.src = './resources/images/info-icon.png';
        info_btn.addEventListener('click', () => {
            window.dispatchEvent(new CustomEvent("change_route", {
                detail: {
                    route: "about",
                }
            }));
        });

        header.append(profile_btn, info_btn);
        this.parent.append(header);
    }
}