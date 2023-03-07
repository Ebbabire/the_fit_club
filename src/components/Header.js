import logo from '../assets/logo.png';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="w-48">
        <img src={logo} alt="The Fit Club" />
      </div>
      <div className="flex gap-4 ">
        <div className=" text-white hover:text-orange-400">Home</div>
        <div className=" text-white hover:text-orange-400">Programs</div>
        <div className=" text-white hover:text-orange-400">Why us</div>
        <div className=" text-white hover:text-orange-400">Plans</div>
        <div className=" text-white hover:text-orange-400">Testimonials</div>
      </div>
    </div>
  );
};

export default Header;
