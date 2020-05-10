import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../../actions';
import UserHeader from '../UserHeader';

class PostList extends Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id} style={{margin: '5px'}}>
                    <i className="big middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2 className="header">
                                {post.title}
                            </h2>
                            <p>
                                {post.body}
                            </p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(
    mapStateToProps,
    {
        fetchPostsAndUsers
    }
)(PostList);