import { Link } from 'react-router-dom';
import { formattedDate } from '../utils/formatter';
export const Card = ({
    id,
    title,
    description,
    category,
    date,
    url,
    author,
    keywords,
    Seq_Predicted,
    SVM_Linear_Predicted,
    Logistic_Predicted,
    LSTM,
}) => {
    const DecodeLabel = (encodedLabel) => {
        switch (encodedLabel) {
            case 0:
                return 'Business';
            case 1:
                return 'Entertainment';
            case 2:
                return 'Health';
            case 3:
                return 'Politics';
            case 4:
                return 'Sport';
            default:
                break;
        }
    };

    return (
        <Link to={url} className='card h-64 lg:card-side p-8 hover:bg-base-200 transition-colors cursor-pointer'>
            <figure className='object-cover w-96'>
                <img
                    loading='lazy'
                    src={`https://img.freepik.com/free-vector/gradient-nc-cn-logo-template_23-2149247084.jpg?t=st=1709450222~exp=1709453822~hmac=981b3fc91307ed0e2f9c0fa67b54de726a43f0d5b81b0688e8b5338e386958dc&w=740`}
                    alt={title}
                />
            </figure>
            <div className='card-body py-0'>
                <h2 className='card-title text-3xl font-bold'>{title}</h2>
                <p className='text-sm opacity-60 text-ellipsis font-bold mt-4'>{description}</p>
                <div className='flex flex-row gap-4 items-center mb-2'>
                    {/* Each Badge is the predicted result of each models return from Flask Server */}
                    <div className='badge badge-lg badge-primary'>👨‍💻 Actual - {category}</div>
                    <div className='badge badge-lg badge-primary'>👨‍💻 Logistic - {DecodeLabel(Logistic_Predicted)}</div>
                    <div className='badge badge-lg badge-primary'>
                        👨‍💻 SVM Linear Kernel - {DecodeLabel(SVM_Linear_Predicted)}
                    </div>
                    <div className='badge badge-lg badge-primary'>👨‍💻 Sequential CNN - {DecodeLabel(Seq_Predicted)}</div>
                    <div className='badge badge-lg badge-primary'>👨‍💻 LSTM - {DecodeLabel(LSTM)}</div>
                </div>
                <div className='flex flex-row gap-4 items-center'>
                    <div className='badge badge-secondary'>🧑 {author}</div>
                    <div className='badge badge-neutral'>🔑 {keywords.split(',')[0]}</div>
                    <div className='badge badge-accent'>⌚ {formattedDate(date)}</div>
                    <div className='badge badge-info'>🆔 {id ?? 0}</div>
                </div>
            </div>
        </Link>
    );
};
