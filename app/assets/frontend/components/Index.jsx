import React from 'react';
import TweetBox from './TweetBox';
import TweetsList from './TweetsList';

import TweetActions from '../actions/TweetActions';
import TweetStore from '../stores/TweetStore';

TweetActions.getAllTweets();

let getAppState = () => {
	return { tweetsList: TweetStore.getAll() };
}

export default class Index extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tweetsList: [] };
		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		TweetStore.addChangeListener(this._onChange);
	}

	componentWillUnmount() {
		TweetStore.removeChangeListener(this._onChange);
	}

	_onChange() {
		this.setState(getAppState());
	}

	render() {
		return (
			<div className="container">
			<TweetBox />
			<TweetsList tweets={this.state.tweetsList} />
			</div>
		);
	}
}
