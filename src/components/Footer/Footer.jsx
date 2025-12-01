import { FaFacebookF, FaInstagram, FaTiktok, FaTelegramPlane } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdAndroid } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { MdOutlinePolicy } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import logo from '../../assets/img/image.png'
const Footer = () => {
  return (
    <footer className="bg-[#1f232b] text-white pt-16 mt-7 pb-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">

        {/* TEN11 App */}
        <div>
          <h2 className="text-lg font-semibold mb-4">TEN11 App</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <IoPhonePortraitOutline /> IOS App
            </li>
            <li className="flex items-center gap-2">
              <MdAndroid /> Android App
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
            <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
            <li className="flex items-center gap-2"><FaTiktok /> TikTok</li>
            <li className="flex items-center gap-2"><FaTelegramPlane /> Telegram</li>
          </ul>
        </div>

        {/* Customer Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Customer Services</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-center gap-2"><FaQuestionCircle /> Online exchange policy</li>
            <li className="flex items-center gap-2"><IoShieldCheckmarkSharp /> Privacy Policy</li>
            <li className="flex items-center gap-2"><MdOutlinePolicy /> FAQs & Guides</li>
            <li className="flex items-center gap-2"><FaQuestionCircle /> About Us</li>
            <li className="flex items-center gap-2"><IoStorefrontOutline /> Find a store</li>
          </ul>
        </div>

        {/* We Accept */}
        <div>
          <h2 className="text-lg font-semibold mb-4">We Accept</h2>
          <div className="flex items-center gap-3 mt-3">
            <img src={logo} className="" alt={logo} />
          
          </div>
         
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-400 mt-10 border-t border-gray-700 pt-4">
        Powered By TEN11 © 2025
      </div>
    </footer>
  );
};

export default Footer;
