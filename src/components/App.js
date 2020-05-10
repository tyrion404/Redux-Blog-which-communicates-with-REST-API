import React, { Component } from 'react';

import PostList from './PostList';
class App extends Component {
    render() {
        return (
            <div className="ui container" style={{margin: '20px'}}>
                <PostList />
            </div>
        );
    }
}

export default App;