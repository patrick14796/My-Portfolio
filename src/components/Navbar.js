import React from 'react';
import {NavLink} from  "react-router-dom";
import {SocialIcon} from "react-social-icons";
import "./Navbar.css";

function Navbar() {
	return (
		//<header className="bg-black-600">
		<nav className="navbar">
				<div className="navbar-container">
					<NavLink to="/" 
							//className='nav-links'
							exact
							activeClassName="text-white"
							className="inflex-flex items-center py-6 px-3 mt-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
							>
						PATRICK LUGASSY
					</NavLink>

					<NavLink to="/about"
							className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
							//className='nav-links'
							activeClassName="text-red-100 bg-red-700">
						About Me!
					</NavLink>
					
					<NavLink to="/project"
							className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
							//className='nav-links'
							activeClassName="text-red-100 bg-red-700">
						Projects
					</NavLink>

					<NavLink to="/ContactMe" 
							className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
							//className='nav-links-mobile'
							activeClassName="text-red-100 bg-red-700">
						@ Contact-Me @
					</NavLink>
				</div>
				
				<div className="inline-flex= py-3 px-3 my-6">
					<SocialIcon url="https://www.linkedin.com/in/patrick-lugassy-7786871a7/"
								 className="mr-4" 
								 target="_blank" 
								 fgColor="#fff" 
								 style={ {height:35 , width:35} } 
								 />

					<SocialIcon url="https://www.facebook.com/patriklug" 
								 className="mr-4" 
								 target="_blank" 
								 fgColor="#fff" 
								 style={ {height:35 , width:35} }
								  />

					<SocialIcon url="https://github.com/patrick14796" 
								 className="mr-4" 
								 target="_blank" 
								 fgColor="#fff" 
								 style={ {height:35 , width:35} } 
								 />
				</div>
			</nav>
		//</header>
	)
}

export default Navbar
