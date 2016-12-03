import TweetBox from './components/TweetBox';
import TweetsList from './components/TweetsList';

import TweetActions from './actions/TweetActions';
import TweetStore from './stores/TweetStore';

TweetActions.getAllTweets();

let getAppState = () => {
	return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
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

let documentReady = () => {
	let reactNode = document.getElementById('react');
	if(reactNode) {
		ReactDOM.render(<Main />, reactNode);
	}
};

$(documentReady);
