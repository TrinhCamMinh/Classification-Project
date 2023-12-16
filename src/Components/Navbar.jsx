import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <>
            <Link to={'/'} className='navbar bg-base-300'>
                <button className='btn btn-ghost text-xl uppercase'>
                    <div className='avatar'>
                        <div className='w-8 rounded'>
                            <img src={Logo} />
                        </div>
                    </div>
                    minhct
                </button>
            </Link>
        </>
    );
};
