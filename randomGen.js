document.addEventListener("DOMContentLoaded", function(event){
	document.getElementById("generate-button").addEventListener("click", function(event){;
		var chars = "`!?$?%^&*()_-+={[}]:;@'~#|<,>.?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		var string_length = 15;
		var randomstring = '';
		for (var i=0; i<string_length; i++) {
			var rnum = Math.floor(Math.random() * chars.length);
			randomstring += chars.substring(rnum,rnum+1);
		}
		document.getElementById("output-container").textContent = randomstring;
		console.log(randomstring);
		event.preventDefault();
	});
});
