import React from "react";
import { BrowserRouter, Routes , Route } from "react-router-dom";

//Components
import PageHeader from "./components/Header/PageHeader";

//Pages
import Dashboard from "./pages/DashBoard/DashBoard";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

//Styles
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { Container } from './styles/AppStyle.ts';

const App = () => (
    <>
        <GlobalStyles/>
        <BrowserRouter>
            <PageHeader />
            <Container>
                <Routes>
                    <Route path="/" element={ <Dashboard/> } />
                    <Route path="/login" element={ <Login/> } />
                    <Route path="/register" element={ <Register/> } />
                </Routes>
            </Container>
        </BrowserRouter>
    </>
);

export default App;