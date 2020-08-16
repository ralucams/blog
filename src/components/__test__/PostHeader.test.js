import React from 'react';
import { render } from '@testing-library/react';
import { PostHeader } from './../PostHeader';

describe("Post Header", () => {
    it('renders correctly', () => {
        const { queryByTestId } = render(<PostHeader />);
        expect(queryByTestId("post-header")).toBeTruthy();
    });
    it('renders the correct title', () => {

        const { getByText } = render(<PostHeader title="test title"/>);
        const postTitle = getByText("test title");
        expect(postTitle).toBeInTheDocument();
    })
});


