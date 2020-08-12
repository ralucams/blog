import React from 'react';
import {Button, Form} from 'react-bootstrap';

// form for submitting a new post (un submit we are calling the method from the homepage component)

export class AddCardForm extends React.Component {
    render() {
        return (
        <Form onSubmit={this.props.handleSubmit}>
            <Form.Group controlId="postTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control name="postTitle" type="text" placeholder="Enter post title" />
            </Form.Group>
            <Form.Group controlId="postContent">
                <Form.Label>Content</Form.Label>
                <Form.Control name="postContent" type="text" placeholder="Enter post content" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Category</Form.Label>
                <Form.Control name="postCategory" as="select">
                    <option value="News">News</option>
                    <option value="Travel">Travel</option>
                    <option value="Development">Development</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>)
    }
}