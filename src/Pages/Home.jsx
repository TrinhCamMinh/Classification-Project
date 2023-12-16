import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { Cards } from '../Containers/Cards';

export const Home = () => {
    return (
        <>
            <Navbar />

            <main className='container mx-auto py-4'>
                <Cards />
            </main>

            <Footer />
        </>
    );
};
