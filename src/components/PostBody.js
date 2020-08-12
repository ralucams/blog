import React from 'react';

export class PostBody extends React.Component {

    // the body of a post

    render() {
        return (
            <div className="posts-card__body">
               <p className="posts-card__body-content">{this.props.text}</p>
            </div>
        )
    }
}




