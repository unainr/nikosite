import React from 'react';

const PortfolioCard = ({ portfolio }: { portfolio: any }) => {
    const {
        name,
        description,
        portfolioimage,
        slug,
        portofoliolink
    } = portfolio;

    return (
        <div className="portfolio-card bg-white shadow-md rounded-lg overflow-hidden">
            <img
                src={portfolioimage[0].url}
                alt={`${name} preview`}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{name}</h2>
                <p className="text-gray-800 text-sm mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <a
                        href={`/portfolio/${slug.current}`}
                        className="text-blue-500 hover:underline"
                    >
                        View Details
                    </a>
                    {portofoliolink && (
                        <a
                            href={portofoliolink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-500 hover:underline"
                        >
                            Live Portfolio
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
