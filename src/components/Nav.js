import React from 'react';
import { Link} from "react-router-dom";

//navigation menu based on categories/type

export class Nav extends React.Component {

    render() {
        return ( 
            <nav className="nav">
                <ul className="nav-links">
                    <Link to="/">
                        <li key="all">All</li>
                    </Link>
                    <Link to="/news">
                        <li key="news">News</li>
                    </Link>
                    <Link to="/travel">
                        <li key="travel">Travel</li>
                    </Link>
                    <Link to="/development">
                        <li key="development">Development</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}


