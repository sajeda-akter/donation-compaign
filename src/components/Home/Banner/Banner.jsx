import { useEffect, useState } from "react";


const Banner = () => {
    const [donations,setDonations]=useState([])
  

    const handleToSearch=(e)=>{
     
        e.preventDefault()
        const fieldValue=e.target.searchCategory.value

    //     const searchText=(input)=>{
    //         fetch(`donations.json/category?search=${input}`)
    //         .then(res=>res.json())
    //         .then(data=>console.log(data))
    //     }
    //     searchText(fieldValue)
    // //     for(const donation of donationSearch){

    // //         const findCategory=donation.category.includes(fieldValue)
    // //         if(findCategory===true){
    // //             setDonationSearch(findCategory)
    // //         }
    // // }

    }

    return (
        <div className="hero min-h-screen mt-2" style={{backgroundImage: 'url(https://media.istockphoto.com/id/1498170916/photo/a-couple-is-taking-a-bag-of-food-at-the-food-and-clothes-bank.webp?b=1&s=170667a&w=0&k=20&c=9P0Mwd1h7-lLJEROWQS12zNc_HSAxCxK_k0euLl1_yE=)'}}>
        <div className="hero-overlay bg-opacity-60"></div>
        
        <div className="w-3/4 ml-80">
            <h1 className="text-white font-bold text-5xl ">I Grow By Helping People In Need</h1>
        </div>
        <form className="mt-52 flex  rounded" onSubmit={handleToSearch}>
            <input type="text" className="outline-0 p-2 w-72 rounded-l" name="searchCategory" placeholder="Search here..." required />
            <button  className="text-white bg-red-600 p-3 rounded-r">Search</button>
        </form>
      </div>
    );
};

export default Banner;