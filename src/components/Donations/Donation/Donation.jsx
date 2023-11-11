/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Donation = ({ donation }) => {
  const { id, img, title, category, text_color,bg,card_backgroundColor } = donation;

  return (
    <Link to={`/donation/${id}`}>
      <div className={`card w-80 shadow-xl`} style={{background: card_backgroundColor}}>
        <figure>
          <img src={img} alt={category} className="w-80 h-48" />
        </figure>
        <div className="card-body">
          <p className="card-title text-[17px]  w-32 p-2 rounded-md text-center" style={{color:text_color,background:bg}}>{category}</p>
          <p style={{ color:text_color }} className="text-xl font-bold">{title}</p>
         
        </div>
      </div>
    </Link>
  );
};

export default Donation;
