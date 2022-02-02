import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='notFound'>
            <h3>Oopps...</h3>
            <Link to={'/'}/>
        </div>);
}
