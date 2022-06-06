import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";

// Components
import PageHeader from "./components/Header/PageHeader";

// Utils
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// Pages
import Dashboard from "./pages/DashBoard/DashBoard";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

// Styles
import { GlobalStyles } from './styles/GlobalStyles';
import { Container } from './styles/AppStyle';

const App = () => (
    <>
        <GlobalStyles/>
        <BrowserRouter>
            <Container>
                <PageHeader />
                <Routes>
                    <Route path="/" element={ <Dashboard/> } />
                    <Route path="/login" element={ <Login/> } />
                    <Route path="/register" element={ <Register/> } />
                </Routes>
            </Container>
        </BrowserRouter>
        <ToastContainer/>
    </>
);

export default App;