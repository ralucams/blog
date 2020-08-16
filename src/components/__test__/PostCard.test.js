import React from 'react';
import { render } from '@testing-library/react';
import { PostCard } from './../PostCard';

describe("Post Card", () => {
    it('renders correctly', () => {
        const testData = {
            "id": "1",
            "category": "News",
            "title": "CNN Acquire BEME",
            "text": "CNN purchased Casey Neistat's Beme app for $25million.",
            "image": "https://source.unsplash.com/user/erondu/600x400"
        }
        const { queryByTestId } = render(<PostCard details={ testData }/>);
        expect(queryByTestId("post-body")).toBeTruthy();
        expect(queryByTestId("post-header")).toBeTruthy();

    });
});


