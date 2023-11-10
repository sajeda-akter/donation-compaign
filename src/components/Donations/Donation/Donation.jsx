import { Link } from "react-router-dom";

const Donation = ({donation}) => {
    const {id,img,title,category,text_color,card_backgroundColor}=donation
    // console.log(donation.text_color)

  
    return (
       <Link to={`/donation/${id}`}>
        <div  className="card w-80 bg-base-100 shadow-xl">
        <figure><img src={img} alt={category} className="w-80 h-48" /></figure>
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p className={`text-[${card_backgroundColor}]`}>{title}</p>
<p className="text-[#]">text</p>   
        </div>
      </div>
       </Link>
    );
};

export default Donation;