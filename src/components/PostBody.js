import React from 'react';

export class PostBody extends React.Component {

    // the body of a post

    render() {
        return (
            <div className="posts-card__body" data-testid="post-body">
               <p className="posts-card__body-content">{this.props.text}</p>
            </div>
        )
    }
}




