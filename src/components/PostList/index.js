import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../actions';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                {this.props.text}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { text: state.text };
}

export default connect(
    mapStateToProps,
    {
        fetchPosts
    }
)(PostList);