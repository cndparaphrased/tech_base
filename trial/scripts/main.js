const app = {};


app.getLocation = () => {
	$('form').on('submit', function(e) {
		e.preventDefault();
		const location = $('.userInput').val().trim();
		console.log(location);
		$('.userInput').val('');
	});
};

app.init = function() {
	$.ajax({
		url: 'http://api.weatherunlocked.com/api/current/ca.L3T 5 X2?app_id=171a46a3&app_key=ab7e91f87add709c6ca0576d7db4d382',
		method: 'GET',
		dataType: 'json'
	}).then(function(res) {
		console.log(res);
	});
	app.getLocation();
};

$(function() {
	app.init();
});