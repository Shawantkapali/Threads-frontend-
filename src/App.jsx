import { Button } from "@chakra-ui/react";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import { Container } from "@chakra-ui/react";
import { Navigate, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import userAtom from "./atoms/userAtom";
import LogoutButton from "./pages/LogoutButton";
import { useRecoilValue } from "recoil";
import UpdateProfilePage from "./components/UpdateProfilePage";
import CreatePost from "./components/CreatePost";
import SearchBox from "./components/SearchBox";

function App() {
  const user = useRecoilValue(userAtom);
	console.log(user);
  return (
    <>
    <Container maxW='620px'>
    <SearchBox />
    <Header />
    <Routes>
    <Route path='/' element={user ? <HomePage /> : <Navigate to='/auth' />} />
    <Route path='/auth' element={!user ? <AuthPage /> : <Navigate to='/' />} />
    <Route path='/update' element={user ? <UpdateProfilePage /> : <Navigate to='/auth' />} />


      <Route path="/:username" element={<UserPage /> }/>
      <Route path="/:username/post/:pid" element={<PostPage />} />

    </Routes>

    {user && <LogoutButton />}
    {user && <CreatePost />}

    </Container>
    </>
  )
}

export default App
