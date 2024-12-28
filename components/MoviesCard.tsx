import React from 'react';

const MoviesCard = ({ movie }: { movie: any }) => { 
    const { 
        title, 
        description, 
        posterUrl, 
        slug, 
        releaseDate, 
        trailerLink 
    } = movie;

    return (
        <div className="movie-card bg-white shadow-md rounded-lg overflow-hidden">
            <img 
                src={posterUrl} 
                alt={`${title} poster`} 
                className="w-full h-64 object-cover" 
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                    Released on: {new Date(releaseDate).toLocaleDateString()}
                </p>
                <p className="text-gray-800 text-sm mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <a 
                        href={`/movies/${slug}`} 
                        className="text-blue-500 hover:underline"
                    >
                        View Details
                    </a>
                    {trailerLink && (
                        <a 
                            href={trailerLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Watch Trailer
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MoviesCard;
