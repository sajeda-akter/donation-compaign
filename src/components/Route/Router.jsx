import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Donations from "../Donations/Donations";
import DetailsPage from "../Donations/Donation/DetailsPage/DetailsPage";
import AllDonationShow from "../AllDonation/AllDonationShow";
import Statistics from "../Statistics/Statistics";

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
            },
            {
                path:'/showDonationDetails',
                loader:()=>fetch('../../../public/donations.json'),
                element:<AllDonationShow/>
            },
            {
                path:'/statistics',
                element:<Statistics/>
            }
        ]
    }
])