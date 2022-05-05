import React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from "pages/app";
import { PageDos } from "pages/page-2";
import { Layout } from "components/layout";
import { Item } from "pages/otro";
import { Search } from "pages/search";


function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<App />} />
                <Route path="/search/:query" element={<Search />} />
            </Route>
        </Routes>
    );
}

export { AppRoutes };
