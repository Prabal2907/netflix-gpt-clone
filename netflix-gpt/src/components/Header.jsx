import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toggleSearch } from "../utils/GptSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user.userData);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = async () => {
    await axios.post(
      "http://localhost:5000/api/user/logout",
      {},
      { withCredentials: true },
    );
    dispatch(removeUser());
    navigate("/");
  };

  const handleGptSearchClick = () => {
    dispatch(toggleSearch());
  };

  return (
    <div className="absolute  w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black z-10">
      <img
        className="w-[120px]"
        src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460"
        alt="logo"
      />

      {user && (
        <div>
          <button
            className="p-1 text-sm font-bold text-white cursor-pointer rounded-md
            flex items-center gap-2 transition-colors duration-150 bg-slate-900 "
            onClick={handleGptSearchClick}
          >
            {showGptSearch?"Homepage":"🔎GPT-Search"}
          </button>
        </div>
      )}

      {user && (
        <Menu as="div" className="relative">
          <Menu.Button>
            <img
              className="w-10 h-10 rounded-full cursor-pointer hover:ring-2 hover:ring-white transition-all duration-200"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
              alt="profile"
            />
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-3 bg-zinc-900 border border-zinc-700 text-white rounded-lg shadow-xl w-52 overflow-hidden animate-[dropDown_0.2s_ease-out_forwards]">
            <div className="px-4 py-3 border-b border-zinc-700 flex items-center gap-3">
              <img
                className="w-8 h-8 rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="profile"
              />
              <div>
                <p className="text-xs text-zinc-400">Welcome back</p>
                <p className="text-sm font-semibold">{user.name}</p>
              </div>
            </div>

            <Menu.Item>
              {({ active }) => (
                <p
                  onClick={handleSignOut}
                  className={`px-4 py-2.5 text-sm
                    font-semibold cursor-pointer flex items-center gap-2 text-red-600 transition-colors duration-150 ${active ? "bg-emerald-900" : ""}`}
                >
                  🚪 Sign Out
                </p>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      )}
    </div>
  );
};

export default Header;
