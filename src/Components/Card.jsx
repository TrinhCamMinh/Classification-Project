import { Link } from 'react-router-dom';
export const Card = ({ id, image, title, description, category, date }) => {
    return (
        <Link
            to={`/blog/${id}`}
            className='card h-64 lg:card-side p-8 hover:bg-base-200 transition-colors cursor-pointer'
        >
            <figure className='object-cover w-96'>
                <img loading='lazy' src={image} alt={title} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <p className='text-xs opacity-60 truncate'>{description}</p>
                <div className='badge badge-lg badge-secondary'>{category}</div>
                <div className='badge badge-accent'>{date}</div>
            </div>
        </Link>
    );
};
