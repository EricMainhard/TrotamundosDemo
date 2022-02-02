import React from 'react';
import {Link} from 'react-router-dom';
import './notFound.css';

export default function NotFound() {
    return (
        <div className='notFound'>
            <h3>Sometimes we get lost in the travel...</h3>
            <Link className="link backLink" to={'/'}>Back to home</Link>
        </div>
    );
}
