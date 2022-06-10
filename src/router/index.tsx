import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "pages/Home/Home-page";
import { Layout } from "components/Layout/layout";
import { SigninPage } from "pages/Signin-page";
import { SigninForm } from "components/SignInForm/SigninForm";
import { PassPage } from "pages/Ingresar-pass";
import { ReportPet } from "pages/Report-Pet-Page/index";
import {MisDatos} from "pages/Mis-datos/index";
import {ReportedPetsPage} from "pages/my-reported-pets/index";





function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/signin/:email" element={<PassPage />} />
                <Route path="/pass" element={<PassPage />} />
                <Route path="/info/:email" element={<MisDatos />} />
                <Route path="/mypets" element={<ReportedPetsPage />} />
                <Route path="/report" element={<ReportPet />} />
            </Route>
        </Routes>
    );
}

export { AppRoutes };
