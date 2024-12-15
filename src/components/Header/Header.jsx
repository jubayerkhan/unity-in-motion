import { NavLink } from "react-router-dom";
import logo from '/src/assets/image/logo.png'
import search from "/src/assets/image/search.jpg" 
import cart from "/src/assets/image/cart.png"
import notify from "/src/assets/image/notification.png"
import profile from "/src/assets/image/porfile.jpeg"


const Header = () => {

    const link = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/academy">Academy to Studio</NavLink></li>
        <li><NavLink to="/shop">Shop</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    {/* logo  */}
                    <a className="btn btn-ghost text-xl"><img className="w-40 ml-16" src={logo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end pr-40">
                    {/* search img  */}
                    <img className="w-10 mr-2" src={search} alt="search" />
                    {/* cart img  */}
                    <NavLink to="/cart"><img className="w-6 mr-2" src={cart} alt="search" /></NavLink>
                    {/* notification img */}
                    <img className="w-6 mr-4" src={notify} alt="search" />
                    <img className="rounded-full w-11" src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;