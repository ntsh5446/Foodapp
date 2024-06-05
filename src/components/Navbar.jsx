// import React from "react";
// import { useDispatch } from "react-redux";
// import { setSearch } from "../redux/slices/SearchSlice";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   return (
//     <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
//       <div>
//         <h3 className="text-xl font-bold text-gray-600">
//           {new Date().toUTCString().slice(0, 16)}
//         </h3>
//         <h1 className="text-2xl font-bold ">Flavoro Foods</h1>
//       </div>
//       <div>
//         <input
//           type="search"
//           name="search"
//           id=""
//           placeholder="Search here"
//           autoComplete="off"
//           onChange={(e) => dispatch(setSearch(e.target.value))}
//           className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import { Button} from "@material-tailwind/react";


const Navbar = () => {
  const dispatch = useDispatch();
  
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div>
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold ">Flavoro Foods</h1>
      </div>
      <div className="flex space-x-4 mt-3 gap-5 justify-center items-center text-center">
        <Link to="/" className="nav-link px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white text-center">Home</Link>
        <Link to="/about" className="nav-link px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">About</Link>
        <Link to="/contact" className="nav-link px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white">Contact</Link>
      </div>
      <div className="flex justify-center items-center mt-3">
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]"
        />
      </div>
      <div className="flex justify-center items-center mt-3 gap-5">
         <Link to="/login"><Button>login</Button></Link> 
         <Link to="/signup"><Button>Sign up</Button></Link> 
      </div>
    </nav>
  );
};

export default Navbar;

