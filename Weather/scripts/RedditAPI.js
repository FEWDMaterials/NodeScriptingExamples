var $ = require('jquery');

var baseUrl = 'https://api.reddit.com/';

var RedditAPI = {};

RedditAPI.basePublicUrl = 'http://www.reddit.com';

RedditAPI.search = function search( query ) {
	if ( typeof query !== "string" ) {
		return;
	}

	return $.ajax({
		url: baseUrl + 'search',
		data: {
			q: query
		}
	});
}

module.exports = RedditAPI;