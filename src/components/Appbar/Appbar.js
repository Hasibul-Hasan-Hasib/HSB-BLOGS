import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem  } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { AiOutlineMenu } from "react-icons/ai";
import logo from '../../Assets/Images/logo.svg';
import curve from '../../Assets/Images/wave-haikei.svg';
import './Appbar.css'


const Appbar = () => {

    
    return (
        <div>
            <header class="text-gray-600 body-font">
                <img class="absolute w-full -z-10" src={curve} alt="" />
                <div class="z-10 container mx-auto py-10 px-3 flex flex-wrap items-center">
                    <Link to="/" class="flex items-center text-gray-900">
                        <img className='w-48 md:w-48 lg:w-56' src={logo} alt="" />
                    </Link>
                    <nav className="nav1 ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to="/home" class="mr-2 px-4 py-2 font-bold rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white hover:duration-500 focus:ring-2 focus:ring-indigo-400">Home</Link>
                        <Link to="/blogs" class="mx-2 px-4 py-2 font-bold rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white hover:duration-500 focus:ring-2 focus:ring-indigo-400">Blogs</Link>
                        <Link to="/projects" class="mx-2 px-4 py-2 font-bold rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white hover:duration-500 focus:ring-2 focus:ring-indigo-400">Projects</Link>
                        <Link to="/contact" class="mx-2 px-4 py-2 font-bold rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white hover:duration-500 focus:ring-2 focus:ring-indigo-400">Contact</Link>
                        <Link to="/about" class="ml-2 px-4 py-2 font-bold rounded-md text-indigo-600 hover:bg-indigo-600 hover:text-white hover:duration-500 focus:ring-2 focus:ring-indigo-400">About</Link>
                    </nav>
                    <nav className="nav2 ml-auto">
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <React.Fragment>
                                    <button variant="contained" {...bindTrigger(popupState)}>
                                        <AiOutlineMenu class="text-2xl text-indigo-600"/>
                                    </button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}><Link to="/home" class=" px-5 font-bold text-indigo-600 hover:duration-500 ">Home</Link></MenuItem>
                                        <MenuItem onClick={popupState.close}><Link to="/blogs" class="px-5 font-bold text-indigo-600 hover:duration-500 ">Blogs</Link></MenuItem>
                                        <MenuItem onClick={popupState.close}><Link to="/projects" class="px-5 font-bold text-indigo-600 hover:duration-500 ">Projects</Link></MenuItem>
                                        <MenuItem onClick={popupState.close}><Link to="/contact" class="px-5 font-bold text-indigo-600 hover:duration-500 ">Contact</Link></MenuItem>
                                        <MenuItem onClick={popupState.close}><Link to="/about" class="px-5 font-bold text-indigo-600 hover:duration-5000">About</Link></MenuItem>
                                    </Menu>
                                </React.Fragment>
                            )}
                        </PopupState>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Appbar;