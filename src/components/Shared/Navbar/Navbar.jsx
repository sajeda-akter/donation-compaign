import {  NavLink } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  const menuItems=<>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/showDonationDetails'>Donation</NavLink></li>
  <li><NavLink to='/statistics'>Statistics</NavLink></li>


  </>
    return (
        <div className="flex justify-around  p-4 bg-slate-200 sticky top-0 z-50 ">
         <div className="flex justify-between item-center gap-3">
          <img src={'https://www.pngall.com/wp-content/uploads/11/Donate-Button-PNG-Image.png'} className="w-12 h-12" alt="" />
         <div>
      <h1 className="text-2xl font-bold text-red-500 uppercase">Donation</h1>
          <p className="tracking-widest ">Campaign</p>
          </div>
         </div>
          <nav className="flex space-x-6">

          {menuItems}
          </nav>
        {/* <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            {menuItems}
          </ul>
        </div> */}
        
      </div>
    );
};

export default Navbar;