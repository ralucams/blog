import React from 'react';
import { Link} from "react-router-dom";

//navigation menu based on categories/type

export class Nav extends React.Component {

    render() {
        return ( 
            <nav className="nav" data-testid="navbar">
                <ul className="nav-links">
                    <Link data-testid="home-link" to="/">
                        <li key="all">All</li>
                    </Link>
                    <Link to="/news" data-testid="news-link">
                        <li key="news">News</li>
                    </Link>
                    <Link to="/travel" data-testid="travel-link">
                        <li key="travel">Travel</li>
                    </Link>
                    <Link to="/development" data-testid="development-link">
                        <li key="development">Development</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}


