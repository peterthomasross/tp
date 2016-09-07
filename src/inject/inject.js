chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// ----------------------------------------------------------
		var issueTitle = document.querySelector('.js-issue-title');
		console.log (issueTitle);
		re=/id:([^\s]+)/;
		var check=issueTitle.innerHTML.match(re);
		console.log (check);
		if (check.length > 1) {
			var a = document.createElement('a');
			a.setAttribute('href', 'https://redriversoftware.tpondemand.com/entity/' + check[1])
			a.innerHTML = issueTitle.innerHTML;
			issueTitle.parentNode.replaceChild(a, issueTitle)
		}
	}
}, 1000);
});

// (id:)([^\s]+)
