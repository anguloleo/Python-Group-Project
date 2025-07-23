import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import BoardList from '../components/BoardList/BoardList';
import BoardManage from '../components/BoardManage/BoardManage';
import BoardManagePins from '../components/BoardManagePins';
import FavoriteList from '../components/FavoriteList';
import PinManage from '../components/PinManage';
import PinList from '../components/PinList';
import PinDetail from '../components/PinDetail';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h2>Something went wrong in routing!</h2>,
    children: [
      {
        path: "/",
        element: <PinList />,
      },
      {
        path: "login",
        element: <LoginFormPage />,
      },
      {
        path: "signup",
        element: <SignupFormPage />,
      },
      {
        path: "pins",
        element: <PinList />,
      },
      {
        path: "pins/:pinId",
        element: <PinDetail />,
      },
      {
        path: "pins/manage",
        element: <PinManage />,
      },
      {
        path: "boards",
        element: <BoardList />,
      },
      {
        path: "boards/manage",
        element: <BoardManage />,
      },
      {
        path: "boards/:boardId/manage-pins",
        element: <BoardManagePins />
      },
      {
        path: "favorites",
        element: <FavoriteList />
      },

    ],
  },
]);