import { Link } from 'react-router-dom';
import { formattedDate } from '../utils/formatter';
export const Card = ({ id, image, title, description, category, date, url, author, keywords }) => {
    return (
        <Link to={url} className='card h-64 lg:card-side p-8 hover:bg-base-200 transition-colors cursor-pointer'>
            <figure className='object-cover w-96'>
                <img loading='lazy' src={image} alt={title} />
            </figure>
            <div className='card-body py-0'>
                <h2 className='card-title text-3xl font-bold'>{title}</h2>
                <p className='text-sm opacity-60 text-ellipsis font-bold mt-4'>{description}</p>
                <div className='flex flex-row gap-4 items-center mb-2'>
                    {/* Each Badge is the predicted result of each models return from Flask Server */}
                    <div className='badge badge-lg badge-primary'>👨‍💻 Logistic - {category}</div>
                    <div className='badge badge-lg badge-primary'>👨‍💻 SVM Linear Kernel - {category}</div>
                    <div className='badge badge-lg badge-primary'>👨‍💻 Sequential CNN - {category}</div>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <div className='badge badge-secondary'>🧑 {author}</div>
                    <div className='badge badge-neutral'>🔑 {keywords.split(',')[0]}</div>
                    <div className='badge badge-accent'>⌚ {formattedDate(date)}</div>
                    <div className='badge badge-info'>🆔 {id}</div>
                </div>
            </div>
        </Link>
    );
};
