import { useEffect, useState } from "react";
import { getStoreDonation } from "../../utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";

const AllDonationShow = () => {
    const donations=useLoaderData()
    const [displayDonations,setDisplayDonations]=useState([])

    useEffect(()=>{
        const getAllDonation=getStoreDonation();
        const saveDonations=[]
        for(const id of getAllDonation){
            const donation=donations.find(donation=>donation.id === id)
            saveDonations.push(donation)
        }
        setDisplayDonations(saveDonations)

      
   
    },[])
    return (
        <div className="w-11/12 mx-auto">
            <h1>show</h1>
          <div className="grid grid-cols-2 justify-items-center items-center gap-4">
            {
                displayDonations.map(donation=>
                    <div key={donation.id} className="card w-11/12 card-side bg-base-100 shadow-xl">
  <figure><img src={donation.img} alt="Movie" className="w-52 h-52"/></figure>
  <div className="card-body">
    <p>{donation.category}</p>
    <h2 className="card-title font-bold">{donation.title}</h2>
                    <p className="text2xl font-bold">${donation.price.toFixed(2)}</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
                    )
            }
          </div>
        </div>
    );
};

export default AllDonationShow;