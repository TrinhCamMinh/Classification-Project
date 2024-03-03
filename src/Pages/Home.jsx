import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { Cards } from '../Containers/Cards';

export const Home = () => {
    return (
        <>
            <Navbar />

            <main className='container mx-auto py-4'>
                <div role='tablist' className='tabs tabs-lifted tabs-lg mb-4'>
                    <a href='/' role='tab' className='tab'>
                        Health
                    </a>
                    <a href='/' role='tab' className='tab tab-active text-primary font-bold italic'>
                        Business
                    </a>
                    <a href='/' role='tab' className='tab'>
                        Entertainment
                    </a>
                    <a href='/' role='tab' className='tab'>
                        Politics
                    </a>
                </div>

                <Cards />
            </main>

            <Footer />
        </>
    );
};
