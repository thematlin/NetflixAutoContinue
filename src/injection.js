var target = document.querySelector('#playerContainer');

var observer = new MutationObserver(function(mutations) {
	mutations.forEach(function(mutation) {
		var continueButton = mutation.target.getElementsByClassName('button continue-playing').item(0);

		if (continueButton) {
			continueButton.click();
		}
	});
});

var config = { childList: true, subtree: true };

observer.observe(target, config);