import React from 'react';

export class PostHeader extends React.Component {

    // header of a post
    render() {
        const { title } = this.props;
        return (
            <header className="posts-card__header" data-testid="post-header">
                <h2 className="posts-card__title">{title}</h2>
            </header>
        )
    }
}