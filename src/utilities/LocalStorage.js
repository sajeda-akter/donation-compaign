const getStoreDonation=()=>{
    const donationStore=localStorage.getItem('donation-lists')
    if(donationStore){
        return JSON.parse(donationStore)
    }
    return []
}


const addToDonation=(id)=>{
    const getDonation=getStoreDonation()
    const exits=getDonation.find(donationId=>donationId===id)
    if(!exits){

        getDonation.push(id);
        const saveToLS=localStorage.setItem('donation-lists',getDonation)
        JSON.stringify(saveToLS)
    }

}

export {addToDonation,getStoreDonation}