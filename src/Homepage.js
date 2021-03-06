import React from 'react';
import {PostCard} from './components/PostCard';
import {AddCard} from './components/AddCard';
import axios from 'axios';

import uuid from 'react-uuid';

import './App.scss';

class Homepage extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: {},
            addModalShow: false,
            refresh: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // fetch the posts from the API
    componentDidMount() {
        axios.get("http://localhost:3000/posts")
        .then(res => {
          const result = res.data
          this.setState({ posts: result });
        })
    }

      // on submit update the posts list with API call and refresh the page
      handleSubmit(event) {
          const post = {
            id: uuid(),
            title: event.target.postTitle.value,
            text: event.target.postContent.value,
            category: event.target.postCategory.value
          }
          const newPost = JSON.stringify({...post })

        event.preventDefault();
        axios.post("http://localhost:3000/posts",  newPost
        , { headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
        .then(res => {
          console.log(res);
          window.location.reload()
        })
    }

    render() {
       
        // close the modal when on submit or when close button is clicked
        let addModalClose = () => this.setState({addModalShow: false})

        //filter the posts based on the post type (news, travel, development)
        const filteredPosts = (posts, category) => { return Object.keys(posts).filter( (key) => { return (this.state.posts[key].category === category)})}

        // view all of the posts
        if(this.props.type === "all") {
            return (
                <div data-testid="all-posts">    
                    <div className="posts-add">
                        <button variant="primary" onClick={ () => this.setState({addModalShow: true})}>Add post</button>
                    </div>
                    <div className="posts" id="posts">
                        {      
                            Object.keys(this.state.posts)
                            .map( ( key) => { return (
                            <div>
                                <PostCard key={key} index={key} details={this.state.posts[key]} />
                            </div>
                                )
                            })
                        }

                        <AddCard
                        show={this.state.addModalShow}
                        onHide={addModalClose}
                        handleSubmit={this.handleSubmit} />  
                    </div>
                </div>
            ) 
        } else {
            //view filtered posts
            return (
                <div data-testid="filtered-posts">   
                    <div className="posts-add">
                        <button variant="primary" onClick={ () => this.setState({addModalShow: true})}>Add post</button>
                    </div>                   
                    <div className="posts" id="posts">
                        {      
                            filteredPosts(this.state.posts, this.props.type)
                            .map( ( key) => { return (
                            <div>
                                <PostCard key={key} index={key} details={this.state.posts[key]} />
                            </div>
                                )
                            })
                        }    
                        <AddCard
                           show={this.state.addModalShow}
                           onHide={addModalClose} 
                           handleSubmit={this.handleSubmit}/>  
                    </div>
                </div>
            )
        } 
    }
}

export default Homepage;
