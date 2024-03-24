import React from 'react';
import { Link } from 'react-router-dom';
import galleryImages from './../Gallery/images'; // Assuming you have the galleryImages array
import './gallery.css';

const genres = ['Adventure', 'Art and Culture', 'Beaches','Crafts','Cuisine','Festivals','Forts','Hills','Lakes','Monuments',
                'Museum','Palaces','Pilgrim Centers','Places of Interest','Waterfalls','Wellness','Wild Life','Heritage Sites'];

const Gallery = () => {
    return (
        <div className="container">
            <div className="row">
                {genres.map((genre, index) => (
                    <div className="col-md-3 mb-3" key={index}>
                        <Link to={`/gallery/${genre}`} className="card">
                            <div className="card-body">
                                <img src={galleryImages[index]} alt={genre} className="card-img-top" />
                                <div className="title-container">
                                    <h4 className="card-title">{genre}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
