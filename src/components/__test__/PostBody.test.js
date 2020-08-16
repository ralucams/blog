import React from 'react';
import { render } from '@testing-library/react';
import { PostBody } from './../PostBody';

describe("Post Body", () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<PostBody />);
        expect(queryByTestId("post-body")).toBeTruthy();
    });
    it('renders the correct text', () => {

        const { getByText } = render(<PostBody text="test text"/>);
        const postTitle = getByText("test text");
        expect(postTitle).toBeInTheDocument();
    })
});


