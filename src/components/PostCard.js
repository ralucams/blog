import React from 'react';
import {PostHeader} from './PostHeader';
import {PostBody} from './PostBody';

export class PostCard extends React.Component {

    // card containing post header and content
    render() {
        return ( 
            <article className="posts-card">
                <PostHeader title={this.props.details.title}/>
                <PostBody text={this.props.details.text}/>
            </article>
        )
    }
}


