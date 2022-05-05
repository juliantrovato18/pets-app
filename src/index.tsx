import React, {Suspense} from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "../src/pages/app";
import {AppRoutes} from "./router"
import {atom, RecoilRoot,} from 'recoil';







ReactDOM.render(
                <Suspense fallback={null}>
                <RecoilRoot>
                    <BrowserRouter>
                        <AppRoutes />
                    </BrowserRouter>
                </RecoilRoot>
                </Suspense>,
                 document.getElementById("root"));

