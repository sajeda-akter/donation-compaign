
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
import { getStoreDonation } from "../../utilities/LocalStorage";
import { Pie } from 'react-chartjs-2';

const Statistics = () => {
//     // const [totalDonation,setTotalDonations]=useState([])
//     const totalDonations=useLoaderData()
//   const total=(totalDonations.length);
  const donateTotal=((getStoreDonation().length)*100)/12;
  const donationFixed=parseFloat(donateTotal.toFixed(2));
  const totalDonation=100-donationFixed;

  console.log(donationFixed,totalDonation)
    const data={
        datasets:[{
            data:[totalDonation,donationFixed],
            backgroundColor:['#FF444A','#00C49F'],

        }],
        labels:['Total-Donation','Your-Donation'],
    }

    // const options = {
    //     plugins: {
    //       legend: {
    //         display: true,
    //         position: 'bottom',
          
    //       },
    //       tooltip: {
    //         enabled: true,
    //         callbacks: {
    //           label: (context) => {
    //             const labelIndex = context.dataIndex;
    //             const value = context.dataset.data[labelIndex];
    //             return `${value.toFixed(2)}%`;
    //           },
    //         },
    //       },
    //       datalabels: {
    //         color: '#fff',
    //         formatter: (value) => `${value.toFixed(2)}%`,
    //       },
    //     },
    //   }
    return (
       <div className='mt-32'>
         <div className='w-96 h-96 mx-auto '>
            <Pie data={data}></Pie>
           
        </div>
       </div>
    );
};

export default Statistics;