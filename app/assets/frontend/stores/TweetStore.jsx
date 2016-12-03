import AppDispatcher from '../dispatcher';
import ActionTypes from '../constants';
import { EventEmitter } from 'events';

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
	getAll() {
		return _tweets;
	}
	emitChange() {
		this.emit("CHANGE");
	}
	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	}
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
	switch (action.actionType) {
		case ActionTypes.RECEIVED_TWEETS:
			_tweets = action.rawTweets;
			TweetStore.emitChange();
			break;
		case ActionTypes.RECEIVED_ONE_TWEET:
			_tweets.unshift(action.rawTweet);
			TweetStore.emitChange();
		default:

	}
});

export default TweetStore;
