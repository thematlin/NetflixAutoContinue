if (window.MutationObserver) {
	chrome.webNavigation.onCompleted.addListener(function(e) {
		chrome.tabs.executeScript(e.tabId, { file: 'injection.js' });
	}, {
		url: [{pathContains: 'watch' },
	 	{hostSuffix: 'netflix.com'}]
	});
}



