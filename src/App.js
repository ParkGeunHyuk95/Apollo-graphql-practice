import { useLazyQuery, useQuery } from '@apollo/client';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import TestVariable from './pages/TestVariable';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/test' element={<TestVariable />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
