import { useEffect, useState } from "react";
import { getStoreDonation } from "../../utilities/LocalStorage";
import { useLoaderData } from "react-router-dom";

const AllDonationShow = () => {
    const donations=useLoaderData()
    const [donationlength,setDonationLength]=useState(4)
    const [displayDonations,setDisplayDonations]=useState([])

    useEffect(()=>{
        const getAllDonation=getStoreDonation();
        const saveDonations=[]
        for(const id of getAllDonation){
            const donation=donations.find(donation=>donation.id === id)
            saveDonations.push(donation)
        }
        setDisplayDonations(saveDonations)

      
   
    },[donations])
    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-3xl text-center my-12 font-bold">Show All Donations</h1>
          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-4">
            {
                displayDonations.slice(0,donationlength).map(donation=>
                    <div key={donation.id} className="card w-11/12 card-side  flex-col lg:flex-row" style={{background: donation.card_backgroundColor}}>
  <figure><img src={donation.img} alt="Movie" className="lg:h-60 lg:w-72 w-80 mt-4 lg:mt-0 rounded"/></figure>
  <div className="card-body">
  <p className="card-title text-[17px]  w-32 p-2 rounded-md text-center" style={{color:donation.text_color,background:donation.bg}}>{donation.category}</p>
    <h2 className="card-title font-bold">{donation.title}</h2>
                    <p className="text-2xl font-bold" style={{color:donation.text_color}}>${donation.price.toFixed(2)}</p>
    <div className="card-actions justify-start">
      <button className="btn text-white" style={{background:donation.text_color}}>View Details</button>
    </div>
  </div>
</div>
                    )
            }
          </div>
          <div className={donationlength === displayDonations.length && "hidden"}>
          <button className="btn btn-secondary w-52 my-6 absolute left-2/4" onClick={()=>setDonationLength(displayDonations.length)}>See All</button>

          </div>
        </div>
    );
};

export default AllDonationShow;