import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className='flex flex-row items-center p-2'>
      <Image 
				src='https://cdn-icons-png.flaticon.com/512/1169/1169608.png'
				alt="Icono aplicacion"
				width={40}
				height={40}
			/>
      <nav>
				<ul className="flex flex-row items-center space-x-2 mx-4">
					<li>XD</li>
					<li>XD</li>
					<li>XD</li>
				</ul>
			</nav>
    </header>
  );
};
