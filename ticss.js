class TICSS {
	constructor() {
		this.currentTheme = null;
		this.currentThemeID = null;
	}

	genID() {
		let id = "";
		let str = "abcdefghijklmnopqrstuvwxyz012345689"

		for (var i = 0; i < 16; i++) {
			id += str[Math.floor(Math.random() * str.length)];
		}

		return id;
	}

	loadTheme(path) {
		// Theme is already loaded
		if (path == this.currentTheme)
			return;

		// Check if a theme is already loaded
		if (this.currentTheme != null || this.currentThemeID != null) {
			// Remove old theme
			[...document.getElementsByTagName("link")].forEach((el) => {
				if (el.getAttribute("ticssid") == this.currentThemeID) {
					el.remove();
				}
			});
		}

		// Load new theme
		let ticssID = this.genID();
		let linkEl = document.createElement("link");
		linkEl.rel = "stylesheet";
		linkEl.href = path;
		linkEl.setAttribute("ticssid", ticssID);
		document.head.appendChild(linkEl);

		this.currentTheme = path;
		this.currentThemeID = ticssID;
	}
}
