import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import Search from './pages/Search';

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/search' element={<Search />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}