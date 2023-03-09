import { useEffect, useState } from 'react';

import bars from '../assets/bars.png';
import logo from '../assets/logo.png';

const Header = () => {
  const [menueOpened, setMenuOpened] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
    return window.removeEventListener('resize', () => {
      setWindowSize(window.innerWidth);
    });
  }, [windowSize]);

  return (
    <header className="flex justify-between items-center relative">
      <div className="w-60 h-12 md:w-52">
        <img src={logo} alt="The Fit Club" />
      </div>
      {menueOpened === false && windowSize <= 768 ? (
        <div
          onClick={() => setMenuOpened(true)}
          className="bg-slate-800 rounded-md mr-5 p-2 fixed right-2 z-50 "
        >
          <img src={bars} alt="menu-bar" className="w-6 h-6" />
        </div>
      ) : (
        <div className="flex flex-col px-12 rounded-md fixed right-10 top-10 text-black font-medium text-md bg-slate-300 text-center gap-6  z-50  md:flex-row md:bg-transparent md:text-white md:text-lg md:absolute md:top-0 md:right-0">
          <div
            onClick={() => setMenuOpened(false)}
            className="hover:text-orange-400 hover:cursor-pointer"
          >
            Home
          </div>
          <div
            onClick={() => setMenuOpened(false)}
            className="hover:text-orange-400 hover:cursor-pointer"
          >
            Programs
          </div>
          <div
            onClick={() => setMenuOpened(false)}
            className="hover:text-orange-400 hover:cursor-pointer"
          >
            Why us
          </div>
          <div
            onClick={() => setMenuOpened(false)}
            className="hover:text-orange-400 hover:cursor-pointer"
          >
            Plans
          </div>
          <div
            onClick={() => setMenuOpened(false)}
            className="hover:text-orange-400 hover:cursor-pointer"
          >
            Testimonials
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
