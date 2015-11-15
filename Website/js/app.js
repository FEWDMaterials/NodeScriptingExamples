// pull in major libraries from NPM
// check packages.json
var $ = require('jquery');
var _ = require('underscore');

// this is an event emitter object
// it's job is to emit and list for custom events
// the idea here is that:
// when a module does something, it will emit an event
// saying it did something...
// ONLY this app.js is allowed to respond to those events
// this keeps our code super modular and easy to extend / reuse
var EventEmitter = require('event-emitter');
// let's create an instance of our event emtiter object
var AppEmitter = EventEmitter({});

// this object will handle the user interaction with
// the input field and tbe button click
var InputHandler = require('./InputHandler');
// this object will handle talking to the reddit API
var RedditAPI = require('./RedditAPI');


// let's just instantiate instances of our InputHandler
// and RedditAPI classes
var myRedditSearchForm = InputHandler.init(
	AppEmitter,
	'.search-form__input',
	'.search-form__submit'
);
var myRedditAPI = RedditAPI.init(
	AppEmitter,
	'.results'
);

// here is where we listen for specific events that were emitted
// like button was clicked or all the results from reddit have been added to DOM
// the idea here is that app.js -- since it has instances of the InputHandler and RedditAPI,
// can call functions on our classes

// ONLY app.js has the permissions to call .search on RedditAPI,
// inputhandle CANNOT do this since it would have to know about redditAPI
AppEmitter.on('buttonClicked', function( inputVal ) {
	myRedditSearchForm.clearField();
	myRedditAPI.search( inputVal );
});

AppEmitter.on('pageSet', function() {
	console.log('page set')
});


