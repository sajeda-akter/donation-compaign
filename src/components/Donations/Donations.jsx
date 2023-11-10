import { useEffect } from "react";

const Donations = () => {
    useEffect(()=>{
        fetch('donations.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Donations;