import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
// import {app} from "./firebase"
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/account" element={<ProtectedRoute> <Account/></ProtectedRoute>  }></Route>
    </Routes>


    </AuthContextProvider>
  
    </>
  );
}

export default App;
