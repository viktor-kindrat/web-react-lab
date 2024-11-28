import './Styles/App.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import Home from "../Home/Home.jsx";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage.jsx";
import Catalog from "../Catalog/Catalog.jsx";
import CartPage from "../CartPage/CartPage.jsx";
import Checkout from "../Checkout/Checkout.jsx";
import Success from "../Success/Success.jsx";


import {Navigate, Route, Routes} from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm.jsx";
import {useSelector} from "react-redux";


const ProtectedRoute = ({isAuthenticated, children}) => {
    return isAuthenticated ? children : <Navigate to="/login"/>;
};


function App() {
    let auth = useSelector(state => state.auth);
    let isAuthenticated = auth.isAuthenticated;

    return (
        <>
            <Header/>
            <Routes>
                <Route path="*" element={<NotFoundPage/>}/>
                <Route path="/login" element={<AuthForm/>}/>
                <Route path="/signup" element={<AuthForm/>}/>

                <Route path="/" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Home/>
                </ProtectedRoute>}/>
                <Route path="/catalog/*" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Catalog/>
                </ProtectedRoute>}/>
                <Route path="/cart/*" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                    <CartPage/>
                </ProtectedRoute>}/>
                <Route path="/checkout/*" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Checkout/>
                </ProtectedRoute>}/>
                <Route path="/success/" element={<ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Success/>
                </ProtectedRoute>}/>
            </Routes>
            <Footer/>
        </>
    )
}


export default App
