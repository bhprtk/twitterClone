export default class Tweet extends React.Component {
	render() {
		return (
			<li className="collection-item avatar">
				<img className="circle" src={this.props.gravatar} />
				<span className="title">{this.props.name}</span>
				<time>{moment(this.props.created_at).fromNow()}</time>
				<p>{this.props.body}</p>
			</li>
		)
	}
}
