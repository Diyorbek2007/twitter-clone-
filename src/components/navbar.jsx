import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { loggetIn, user } = useSelector(state => state.auth)
  console.log(loggetIn);
  return (
    <div className="bg-[#69c0fe] ">
      <div className="flex justify-between items-center py-6  max-w-[1440px] mx-auto px-5">
        <div className="flex items-center gap-[9px]">
          <Link to={"/"}>
            <h2 className="uppercase text-[20px] font-bold text-[#a114ff] mr-[30px]">
              Online Chat
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          {
            loggetIn ?
              <>
                <div className="flex items-center gap-2">
                  <img src={user.image} alt="" className="w-[50px] rounded-[50%]" />
                  <p className="font-semibold text-[#ff2bd5]">{user.username}</p>
                </div>
                <button className="px-3 py-2 text-[#e2e2e2] rounded-[10px] bg-red-400 hover:bg-red-600">logout</button>
              </>
              : <>
                <Link to={"/login"} className="font-semibold text-[#ff2bd5]">
                  Login
                </Link>
                <Link to={"/Register"} className="font-semibold text-[#882eff]">
                  Register
                </Link>
              </>
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
