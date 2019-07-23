import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import {Link} from 'react-router-dom';
class StreamDelete extends React.Component { 
    componentDidMount() {
	this.props.fetchStream(this.props.match.params.id);
    }

    renderContent() {
	if (!this.props.stream) {
	    return 'sure?'
	} else {
	    return `Sure about ${this.props.stream.title}`
	}
    }
	    
    renderActions() {
	const { id } = this.props.match.params;
	return(
		<React.Fragment>
		<button className="ui button negative" onClick={() => this.props.deleteStream(id)}>Delete</button>
    		<Link to="/" className="ui button">Cancel</Link>
		</React.Fragment>
	)};
    render() {
	return <Modal title="delete stream" content={this.renderContent()}
		actions={this.renderActions()} onDismiss={() => history.push('/')}/>
		};
}

const mapStateToProps = (state, props) => {
    console.log(state.streams[props.match.params.id]);
    return {stream: state.streams[props.match.params.id]}
}

export default connect(mapStateToProps, {fetchStream, deleteStream}) (StreamDelete);
