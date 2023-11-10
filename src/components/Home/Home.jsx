import { useEffect, useState } from "react";
import Donations from "../Donations/Donations";
import Banner from "./Banner/Banner";

const Home = () => {
    const [donationSearch,setDonationSearch]=useState([])
    useEffect(()=>{
        fetch('donations.json')
        .then(res=>res.json())
        .then(data=>setDonationSearch(data))
    })
    return (
        <div>
         
        <Banner donationSearch={donationSearch} setDonationSearch={setDonationSearch}/>
        <Donations donationSearch={donationSearch} />
        </div>
    );
};

export default Home;