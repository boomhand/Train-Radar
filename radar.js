/* Initialisation de la carte */
function init() {
	// création de la map 
		map = L.map('map').setView([46.452997,2.545166], 9);
		L.tileLayer('http://{s}.tile.cloudmade.com/381c828eb3fc42fc86baad938ccd8f2d/997/256/{z}/{x}/{y}.png', {
		    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		    maxZoom: 18
		}).addTo(map);
}

/* Appel à la fonction init */
$(function() {
	init();
	});