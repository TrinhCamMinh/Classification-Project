import { useParams } from 'react-router-dom';

export const BlogDetail = () => {
    const { id } = useParams();
    const newsData = JSON.parse(sessionStorage.getItem('news'));

    const blog = newsData.find((item) => {
        return item.article_id === id;
    });

    return (
        <>
            {!blog && <h2 className='text-error font-bold text-center text-2xl'>Not Found Blog Detail</h2>}
            <h2 className='text-center text-2xl font-bold text-white'>{blog.title}</h2>
            <div className='px-36 py-10 w-full'>
                <div className='avatar w-full'>
                    <div className='w-80 rounded mx-auto'>
                        <img src={blog.image_url} alt={blog.title} />
                    </div>
                </div>

                <p>{blog.content}</p>
            </div>
        </>
    );
};
