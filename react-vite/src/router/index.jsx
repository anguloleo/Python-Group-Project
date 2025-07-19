import { createBrowserRouter } from 'react-router-dom';
import LoginFormPage from '../components/LoginFormPage';
import SignupFormPage from '../components/SignupFormPage';
import Layout from './Layout';
import BoardList from '../components/BoardList/BoardList';
import ManageBoards from '../components/ManageBoards';
import ManagePinsInBoard from '../components/ManagePinsInBoard';
import ManageFavorites from '../components/ManageFavorites';
import ManagePins from '../components/ManagePins/ManagePins';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <h2>Something went wrong in routing!</h2>,
    children: [
      {
        path: "/",
        element: <h1>Welcome!</h1>,
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
        path: "pins/manage",
        element: <ManagePins />
      },
      {
        path: "boards",
        element: <BoardList />,
      },
      {
        path: "boards/manage",
        element: <ManageBoards />
      },
      {
        path: "boards/:boardId/manage-pins",
        element: <ManagePinsInBoard />
      },
      {
        path: "favorites/manage",
        element: <ManageFavorites />
      },

    ],
  },
]);