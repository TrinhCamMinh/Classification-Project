import { Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { BlogDetail } from './Pages/BlogDetail';
import DetailLayout from './Layouts/DetailLayout';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/blog' element={<DetailLayout />}>
                <Route path=':id' element={<BlogDetail />} />
            </Route>
        </Routes>
    );
};

export default App;
