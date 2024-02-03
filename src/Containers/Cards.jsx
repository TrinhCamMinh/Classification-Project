import useSWR from 'swr';
import { Card } from '../Components/Card';

const apikey = import.meta.env.VITE_NEWS_APIKEY;
const country = 'us,gb,vi,sg,se'; //* US, UK, VN, SINGAPORE, SWEDEN
const category = 'business,entertainment,education,health,technology';
const language = 'en';
const full_content = 1;
const image = 1;
const size = 5;

export const Cards = () => {
    const fetcher = (...args) => fetch(...args).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        `https://newsdata.io/api/1/news?apikey=${apikey}&country=${country}&category=${category}&language=${language}&full_content=${full_content}&image=${image}&size=${size}`,
        fetcher
    );

    if (error) return <div className='text-red-600'>Failed to load 😥</div>;
    if (isLoading) return <span className='loading loading-spinner text-secondary'></span>;
    if (!data) return <h2>API Calling Exceeded Limitation</h2>;

    //* Save data to session storage for Blog detail page
    sessionStorage.setItem('news', JSON.stringify(data.results));

    return (
        <div className='flex flex-col gap-8'>
            {data.results.map((item) => {
                return (
                    <Card
                        key={item.article_id}
                        id={item.article_id}
                        title={item.title}
                        description={item.description}
                        image={item.image_url}
                        category={item.category[0]} //* take only the first category
                        date={item.pubDate}
                    />
                );
            })}
        </div>
    );
};

export default Cards;
