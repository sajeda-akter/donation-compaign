import { useLoaderData,  useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToDonation } from "../../../../utilities/LocalStorage";
const DetailsPage = () => {
  const donations = useLoaderData();
//   const navigate=useNavigate()
  const { id } = useParams();
  const idInt = parseInt(id);
  const donation = donations.find((donate) => donate.id === idInt);

  const handleDonate = () => {
    addToDonation(idInt)
      toast("You have Successfully donate");
    // navigate('/showDonationDetails')
  };
  return (
    <div className="bg-[#F6FFDE] p-12">
      <div className="my-4">
        <img
          className="relative w-10/12 mx-auto rounded shadow-xl bg-indigo-200"
          src={donation.img}
          alt={donation.category}
        />
        <div className=" bg-black h-24 rounded  opacity-50 w-10/12 mx-auto -mt-24  "></div>
        <button
          onClick={handleDonate}
          className="text-xl absolute -bottom-40 left-52  text-white  p-2 rounded-md"
          style={{background:donation.text_color}}
        >
          Donate ${donation.price}
        </button>
        <div className="ml-28 ">
          <h2 className="text-2xl font-bold my-12">{donation.title}</h2>
          <p className="text-xl text-slate-500">{donation.description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default DetailsPage;
