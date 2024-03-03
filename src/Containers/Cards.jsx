import { Card } from '../Components/Card';
import { useEffect, useState } from 'react';

export const Cards = () => {
    const [article, setArticle] = useState([]);

    const handleFetchCNNArticles = async () => {
        const res = await fetch('http://127.0.0.1:5000');
        const json = await res.json();
        setArticle(json);
    };

    useEffect(() => {
        handleFetchCNNArticles();
    }, []);

    return (
        <div className='flex flex-col gap-8'>
            {article.map((item) => {
                return (
                    <Card
                        key={item.ID}
                        id={item.ID}
                        title={item.Headline}
                        description={item.Description}
                        image={item.Image}
                        category={item.Category} // Category default by CNN
                        date={item.Date_Published}
                        url={item.URL}
                        keywords={item.Keywords}
                        author={item.Author}
                        Seq_Predicted={item[Seq_Predicted]}
                        SVM_Linear_Predicted={item[SVM_Linear_Predicted]}
                        Logistic_Predicted={item[Logistic_Predicted]}
                    />
                );
            })}
        </div>
    );
};

export default Cards;
