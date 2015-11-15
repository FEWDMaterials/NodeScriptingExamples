var $ = require('jquery');

function API( emitter, resultsClass ) {
	this.emitter = emitter;
	this.urlBase = 'https://api.reddit.com/';

	this.$results = $( resultsClass );

}

API.prototype.search = function search( query ) {
	$.get(this.urlBase + '/search', {
		q: query
	}).then(function( data ) {
		console.log( data );
		var results = [];

		if ( data.data && data.data.children ) {
			results = data.data.children;
		}

		this.$results.empty();

		results.forEach(function(result){
			result = result.data;

			var $div = $('<div/>');
			var $a = $('<a/>');

			$a.attr('href', 'http://www.reddit.com' + result.permalink );
			$a.text(result.title);
			$a.attr('target', '_blank');
			$a.addClass('results__anch')

			$div.append( $a );

			this.$results.append( $div );

		}.bind(this));
			
		this.emitter.emit('pageSet')
	}.bind(this))
}

module.exports = {
	init: function( emitter, resultsClass ) {
		return new API( emitter, resultsClass );
	}
}