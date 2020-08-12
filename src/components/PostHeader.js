import React from 'react';

export class PostHeader extends React.Component {

    // header of a post
    render() {
        const { title } = this.props;
        return (
            <header className="posts-card__header">
                <h4 className="posts-card__title">{title}</h4>
            </header>
        )
    }
}