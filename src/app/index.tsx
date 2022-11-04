import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import info from '../core/utils/info';
import EditorProfileView from './views/EditorProfile.view';
import EditorsListView from './views/EditorsList.view';
import Home from './views/Home.view';
import NotFound404 from './views/NotFound404.view';
import PostCreateView from './views/PostCreate.view';

export default function App() {
  useEffect(() => {
    window.onunhandledrejection = function (error) {
      console.log(error);
      info({
        title: error.reason.response?.data.title || 'Erro',
        description: error.reason.response?.data.detail || error.reason.message,
      });
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/editores' element={<EditorsListView />} />
        <Route path='/editores/:id' element={<EditorProfileView />} />
        <Route path='/posts/criar' element={<PostCreateView />} />
        <Route path='*' element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
