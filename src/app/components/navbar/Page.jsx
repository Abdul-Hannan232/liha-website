// 'use client'
// import { useState } from 'react';
// import Link from 'next/link';

// const Navbar = () => {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//     const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     const toggleProfileMenu = () => {
//         setIsProfileMenuOpen(!isProfileMenuOpen);
//     };
//     return (
//         <>
//         <div className='flex flex-col w-100 min-h-40 bg-orange-100'>
//         <nav className="fixed top-0 left-0 right-0 z-40 ">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
//                 <div className="relative flex justify-between items-center md:justify-end sm:justify-between lg:justify-between h-16">
//                     {/* Logo */}
//                         <div className="flex items-center justify-self-start">
//                             <img className="w-[131px]  p-2" src='./logo.svg' alt="Logo" />
//                         </div>


//                     {/* Search */}

//                     <div class="relative hidden md:block grow">
//         <div class="absolute inset-y-0 end-0 flex items-center pr-3 pointer-events-none">
//             <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
//             </svg>
//         </div>
//         <input
//                                 type="text"
//                                 placeholder="Search"
//                                 className="w-full h-[52px] px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 flex-grow"
//                             />    </div>

//                     {/* Mobile Menu */}
//                     <div className="flex lg:hidden">
//                         <button onClick={toggleMobileMenu} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                             <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                             <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Profile Dropdown */}
//                     <div className="relative hidden lg:block ml-2">
//                         <button
//                             onClick={toggleProfileMenu}
//                             type="button"
//                             className="relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                             id="user-menu-button"
//                             aria-expanded={isProfileMenuOpen}
//                             aria-haspopup="true"
//                         >
//                             <span className="sr-only">Open user menu</span>
//                             <img
//                                 className="h-10 w-10 rounded-full"
//                                 // src={user?.imagePath}
//                                 // alt={user?.firstName}
//                             />
//                         </button>
//                         {/* Profile dropdown menu */}
//                         {isProfileMenuOpen && (
//                             <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
//                                 <Link href="/profile" passHref>
//                                     <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Your Profile</div>
//                                 </Link>
//                                 {/* {user?.isAdmin &&
//                                     <Link href="/admin" passHref>
//                                          className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Dashboard</div>
//                                     </Link>
//                                 } */}
//                                 <button  className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Sign out</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
//                 <div className="px-2 pt-2 pb-3 space-y-1">
//                     <Link href="/" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</div>
//                     </Link>
//                     <Link href="/products" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Shop</div>
//                     </Link>
//                     <Link href="" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Categories</div>
//                     </Link>
//                     <Link href="/about" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">About</div>
//                     </Link>
//                 </div>
//                 {/* Profile Dropdown */}
//                 <div className="relative lg:hidden ">
//                     <button
//                         onClick={toggleProfileMenu}
//                         type="button"
//                         className="relative w-full  flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                         id="user-menu-button"
//                         aria-expanded={isProfileMenuOpen}
//                         aria-haspopup="true"
//                     >
//                         <img
//                             className="h-8 w-8 rounded-full"
//                             // src={user?.imagePath}
//                             // alt={user?.firstName}
//                         />
//                         <h3 className=' text-white m-3'>Profile</h3>
//                     </button>
//                     {/* Profile dropdown menu */}
//                     {isProfileMenuOpen && (
//                         <div className="absolute right-0 left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
//                             <Link href="/profile" passHref>
//                                 <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Your Profile</div>
//                             </Link>
//                             <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Sign out</button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>




//         <nav className="sticky top-10 left-0 right-0 z-40 ">
//             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
//                 <div className="relative flex justify-between items-center md:justify-end sm:justify-between lg:justify-between h-16">
//                     {/* Tabs */}
//                     <div className="hidden lg:block lg-w-100">
//                         <div className="ml-10 flex items-baseline space-x-4">
//                             <Link href="/" passHref>
//                                 <div className=" px-3 py-2 rounded-md text-sm font-medium">Home</div>
//                             </Link>
//                             <Link href="/products" passHref>
//                                 <div className=" px-3 py-2 rounded-md text-sm font-medium">Shop</div>
//                             </Link>
//                             <Link href="/categories" passHref>
//                                 <div className=" px-3 py-2 rounded-md text-sm font-medium">Categories</div>
//                             </Link>
//                             <Link href="/about" passHref>
//                                 <div className=" px-3 py-2 rounded-md text-sm font-medium">About</div>
//                             </Link>
//                         </div>
//                     </div>


//                     {/* Mobile Menu */}
//                     <div className="flex lg:hidden">
//                         <button onClick={toggleMobileMenu} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                             <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                             </svg>
//                             <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                             </svg>
//                         </button>
//                     </div>

//                     {/* Profile Dropdown */}
//                     <div className="relative hidden lg:block ml-2">
//                         <button
//                             onClick={toggleProfileMenu}
//                             type="button"
//                             className="relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                             id="user-menu-button"
//                             aria-expanded={isProfileMenuOpen}
//                             aria-haspopup="true"
//                         >
//                             <span className="sr-only">Open user menu</span>
//                             <img
//                                 className="h-10 w-10 rounded-full"
//                                 // src={user?.imagePath}
//                                 // alt={user?.firstName}
//                             />
//                         </button>
//                         {/* Profile dropdown menu */}
//                         {isProfileMenuOpen && (
//                             <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
//                                 <Link href="/profile" passHref>
//                                     <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Your Profile</div>
//                                 </Link>
//                                 {/* {user?.isAdmin &&
//                                     <Link href="/admin" passHref>
//                                          className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Dashboard</div>
//                                     </Link>
//                                 } */}
//                                 <button  className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Sign out</button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
//                 <div className="px-2 pt-2 pb-3 space-y-1">
//                     <Link href="/" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</div>
//                     </Link>
//                     <Link href="/products" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Shop</div>
//                     </Link>
//                     <Link href="" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Categories</div>
//                     </Link>
//                     <Link href="/about" passHref>
//                         <div className="text-white block px-3 py-2 rounded-md text-base font-medium">About</div>
//                     </Link>
//                 </div>
//                 {/* Profile Dropdown */}
//                 <div className="relative lg:hidden ">
//                     <button
//                         onClick={toggleProfileMenu}
//                         type="button"
//                         className="relative w-full  flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                         id="user-menu-button"
//                         aria-expanded={isProfileMenuOpen}
//                         aria-haspopup="true"
//                     >
//                         <img
//                             className="h-8 w-8 rounded-full"
//                             // src={user?.imagePath}
//                             // alt={user?.firstName}
//                         />
//                         <h3 className=' text-white m-3'>Profile</h3>
//                     </button>
//                     {/* Profile dropdown menu */}
//                     {isProfileMenuOpen && (
//                         <div className="absolute right-0 left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
//                             <Link href="/profile" passHref>
//                                 <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Your Profile</div>
//                             </Link>
//                             <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Sign out</button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </nav>
//         </div>
//         </>
//     );
// };

// export default Navbar;


'use client'


import { useState } from 'react';
import Link from 'next/link';
import { tabs } from '../../data/navTab';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(true);
    };
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleProfileMenu = () => {
        setIsProfileMenuOpen(!isProfileMenuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  ">
                <div className="relative flex justify-between items-center md:justify-end sm:justify-between lg:justify-between ">
                    {/* Logo */}
                    <div className="flex items-center justify-self-start">
                        <img className="  w-[138px]  p-2" src='./logo.svg' alt="Logo" />
                    </div>

                    {/* Tabs */}
                    <div className="hidden lg:block">

                        <div className="ml-10 flex items-baseline space-x-4">
                            {tabs.map((tab, index) => (
                                <div
                                    id="dropdownHoverButton"
                                    className={` relative  text-center inline-flex items-center py-4 
                                ${isDropdownOpen ? 'text-green-500  border-b-2 border-green-400' : ''}`}
                                    type="button"
                                    onMouseEnter={() => setIsDropdownOpen(true)}
                                    onMouseLeave={() => setIsDropdownOpen(false)}
                                    key={index} >
                                    {tab.name}
                                    <svg
                                        className={`w-2.5 h-2.5 ms-3 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >

                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 4 4 4-4"
                                        />
                                    </svg>

                                    {
                                        tab.subTabs && tabs?.subTabs?.map((subTab, index) => (
                                            <>
                                                {/* hover Dropdown menu */}
                                                <div
                                                    key={index}
                                                    id="dropdownHover"
                                                    className={` absolute top-16 px-2 py-4 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                                                >
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                                        <li>
                                                            <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                                {subTab}
                                                            </Link>
                                                        </li>

                                                        {/* <li>
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                     Dashboard
                 </a>
             </li>
             <li>
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                     Settings
                 </a>
             </li>
             <li>
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                     Earnings
                 </a>
             </li>
             <li>
                 <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                     Sign out
                 </a>
             </li> */}
                                                    </ul>
                                                </div>
                                            </>
                                        ))

                                    }

                                </div>
                            ))}






                            {/* <Link href="/products" passHref>
                                <div className=" px-3 py-2 rounded-md text-sm font-medium">Shop</div>
                            </Link>
                            <Link href="/categories" passHref>
                                <div className=" px-3 py-2 rounded-md text-sm font-medium">Categories</div>
                            </Link>
                            <Link href="/about" passHref>
                                <div className=" px-3 py-2 rounded-md text-sm font-medium">About</div>
                            </Link> */}
                        </div>
                    </div>


                    {/* Mobile Menu */}
                    <div className="flex lg:hidden">
                        <button onClick={toggleMobileMenu} type="button" className="bg-white inline-flex items-center justify-center p-2 rounded-md text-black hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <svg className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Profile Dropdown */}
                    <div className="relative hidden lg:block ml-2">
                        <button
                            onClick={toggleProfileMenu}
                            type="button"
                            className="relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            id="user-menu-button"
                            aria-expanded={isProfileMenuOpen}
                            aria-haspopup="true"
                        >
                            <span className="sr-only">Open user menu</span>

                        </button>

                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {/* <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} lg:hidden pb-4`}>
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <Link href="/" passHref>
                        <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Home</div>
                    </Link>
                    <Link href="/products" passHref>
                        <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Shop</div>
                    </Link>
                    <Link href="" passHref>
                        <div className="text-white block px-3 py-2 rounded-md text-base font-medium">Categories</div>
                    </Link>
                    <Link href="/about" passHref>
                        <div className="text-white block px-3 py-2 rounded-md text-base font-medium">About</div>
                    </Link>
                </div> */}
            {/* Profile Dropdown */}
            {/* <div className="relative lg:hidden ">
                    <button
                        onClick={toggleProfileMenu}
                        type="button"
                        className="relative w-full  flex items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        id="user-menu-button"
                        aria-expanded={isProfileMenuOpen}
                        aria-haspopup="true"
                    >
                       
                        <h3 className=' text-white m-3'>Profile</h3>
                    </button> */}
            {/* Profile dropdown menu */}
            {/* {isProfileMenuOpen && (
                        <div className="absolute right-0 left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                            <Link href="/profile" passHref>
                                <div className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1">Your Profile</div>
                            </Link>
                            <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" onClick={handleLogout}>Sign out</button>
                        </div>
                    )} */}
            {/* </div> */}
            {/* </div> */}
        </nav>
    );
};

export default Navbar;
