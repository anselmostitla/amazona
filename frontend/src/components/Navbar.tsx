
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-black px-5 py-5 flex justify-between">
      <div className="text-orange-500 font-bold text-2xl">AMAZONA</div>
      <div className="text-white flex flex-row space-x-3">
        <Link to="/cart">Cart</Link>
        <Link to="/sign-in">Sign In</Link>
        
      </div>
    </div>
  )
}

export default Navbar
