import React from 'react';
import { Link } from 'react-router-dom';
import Students from "./Students"
import Books from "./Books"


const Home = () => {
    return (
        <div id="navigation">
            <li><Link className="navigationLinks" to="/students" element={<Students/>}>Students</Link></li>
            <li><Link className="navigationLinks" to="/books" element={<Books/>}>Books</Link></li>
        </div>
    )

}

export default Home;