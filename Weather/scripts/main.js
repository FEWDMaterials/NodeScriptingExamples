var _ = require('underscore');
var $ = require('jquery');
var RedditAPI = require('./RedditAPI');

var compiled = _.template( $('#js-search-data').html() );

$('.js-search').on('keypress', function(e){
	if ( e.which !== 13 ) {
		return;
	}

	RedditAPI.search($(e.target).val()).then(function(data){
		var children = data.data.children;
		console.log( children );

		var titles = children.map(function(child){
			return compiled({
				title: child.data.title,
				url: RedditAPI.basePublicUrl + child.data.permalink
			});
		});

		console.log( titles );
		$('.js-results').empty().html( titles.join('\n') );
	});

	$( e.target ).val('');

});

