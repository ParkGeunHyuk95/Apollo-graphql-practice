import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';
import TestVariable from './pages/TestVariable';
import MutationTest from './pages/MutationTest';

function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/test' element={<TestVariable />} />
                    <Route path='/todo' element={<MutationTest />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
