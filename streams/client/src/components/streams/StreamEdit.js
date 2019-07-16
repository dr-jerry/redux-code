import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
// Field is a component, reduxForm is a function.

class StreamEdit extends React.Component {
    componentDidMount() {
	this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit = (formProps) => {
	this.props.editStream(this.props.match.params.id, formProps);
    }
    render() {
	console.log("blender render");
	return (<div><h3>Edit a stream</h3>
		<StreamForm initialValues={_.pick(this.props.stream, ['title', 'description'])} onSubmit={this.onSubmit} /></div>
	       );
    }
}
const mapStateToProps = (state, props) => {
    console.log(state.streams[props.match.params.id]);
    return {stream: state.streams[props.match.params.id]}
}


export default connect(mapStateToProps, {fetchStream, editStream})(StreamEdit);
