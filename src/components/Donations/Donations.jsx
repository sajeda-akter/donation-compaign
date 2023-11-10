// import { useEffect, useState } from "react";
import Donation from "./Donation/Donation";

const Donations = ({donationSearch}) => {
    // const [donations,setDonations]=useState([])
    // useEffect(()=>{
    //     fetch('donations.json')
    //     .then(res=>res.json())
    //     .then(data=>setDonations(data))
    // },[])
    return (
        <div className="">
                    <div className="w-11/12 mx-auto grid grid-cols-4 justify-center items-center gap-y-6 gap-2 mt-24">
            {
                donationSearch.map(donation=>
                    <Donation key={donation.id} donation={donation}></Donation>
                    
                    )
            }
        </div>
        </div>
    );
};

export default Donations;