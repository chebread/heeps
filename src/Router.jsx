import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Home from 'pages/Home';
import Profile from 'pages/Profile';
import NotFoundPage from 'pages/NotFoundPage';
import ServiceUnavailable from 'pages/ServiceUnavailable';
import Login from 'pages/Login';
import Upload from 'pages/Upload';
import Heed from 'pages/heed';
import Search from 'pages/Search';
import Introduce from 'pages/Introduce';

const Router = ({ isLogged }) => {
  const unLoggedRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Introduce />} />
        <Route path="l" element={<Login />}></Route>
        <Route path="503" element={<ServiceUnavailable />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </>
    )
  );
  const loggedRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="u" element={<Upload />}></Route>
        <Route path="h" element={<Heed />}></Route>
        <Route path="s" element={<Search />}></Route>
        <Route path="@:userId" element={<Profile />}></Route>
        <Route path="503" element={<ServiceUnavailable />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </>
    )
  );
  return isLogged ? (
    <RouterProvider router={loggedRouter}></RouterProvider>
  ) : (
    <RouterProvider router={unLoggedRouter}></RouterProvider>
  );
};

export default Router;
