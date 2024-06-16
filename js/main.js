document.addEventListener("DOMContentLoaded", () => {
	loadTemplate("headerContainer", "templates/header.html");
});

async function loadTemplate(containerId, templateUrl) {
	try {
		const res = await fetch(templateUrl);
		if (!res.ok) {
			throw new Error("Network response was not ok " + res.statusText);
		}

		const template = await res.text();
		document.getElementById(containerId).innerHTML = template;
	} catch (e) {
		console.error("There has been a problem with your fetch operation:", e);
	}
}
