import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Members from "./pages/Members";
import Profile from "./pages/Profile";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Home/Footer";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PageNotFound from "./Components/PageNotFound";
import { useRecoilState } from 'recoil';
import { sessionAuth } from './atom/authAtom'
import { IKContext } from 'imagekitio-react';
import PostPage from "./pages/PostPage";

function App() {
  const publickey = process.env.REACT_APP_IMAGE_KIT_URL_PUBLIC_KEY
  const urlendpoint = process.env.REACT_APP_IMAGE_KIT_URL_ENDPOINT
  const [authsesstion, setAuthSession] = useRecoilState(sessionAuth);

  console.log("ROOT", authsesstion);
  return (
    <>
      <IKContext publicKey={publickey}
        urlEndpoint={urlendpoint}
      >
        <div className='font-jetbrains bg-light h-full min-h-screen' >
          <Navbar />
          <Routes>
            <Route path="/" element={<PostPage />} />
            <Route path="/about" element={<Home />} />
            <Route path="/members" element={<Members />} />
            <Route path="/members/undefined" element={<Home />} />
            <Route path="/members/:id" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/explore" element={<PostPage />} />
            <Route path="/*" element={<PageNotFound/>} />
          </Routes>
          <Footer />
        </div>
      </IKContext>
    </>
  );
}

export default App;
