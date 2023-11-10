import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Donations from "../Donations/Donations";
import DetailsPage from "../Donations/Donation/DetailsPage/DetailsPage";

export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/donation',
                element:<Donations/>
            },
            {
                path:'/donation/:id',
                loader:()=>fetch('../../../public/donations.json'),
                element:<DetailsPage/>
            }
        ]
    }
])