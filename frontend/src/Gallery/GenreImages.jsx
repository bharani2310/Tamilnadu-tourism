import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../utils/config'; 
import './gallery.css'; // Import CSS file for styling

const GenreImages = () => {
    const { genre } = useParams();
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/gallery?genre=${genre}`);
                if (!response.ok) {
                    throw new Error('No data available');
                }
                const responseData = await response.json();
                const { data } = responseData;
                setImages(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        
        fetchImages();
    }, [genre]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="container">
            <h2>Images from {genre}</h2>
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-md-3 mb-2" key={index}>
                        <Link to={`/gallery/${genre}`} className="card">
                            <div className="card-body">
                                <img src={image.photo} alt={image.title} className="card-img-top hover-effect" />
                                <div className="title-container">
                                    <h4 className="card-title">{image.title}</h4>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreImages;
