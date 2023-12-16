import { Outlet } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';

const DetailLayout = () => {
    return (
        <>
            <Navbar />

            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    );
};

export default DetailLayout;
