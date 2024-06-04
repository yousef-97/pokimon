import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { store } from './redux/stroe';
import Pokimons from './pages/Pokimons';
import PokimonDetails from './pages/PokimonDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Pokimons />,
  },
  {
    path: '/:id',
    element: <PokimonDetails />,
  },
]);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
