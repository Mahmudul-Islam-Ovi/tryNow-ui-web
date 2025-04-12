import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import logo from "../../assets/img/logo2.png";
import PaymentLogo from "../../assets/img/paymentLogo.png";
import PaymentLogo2 from "../../assets/img/paymentLogo2.png";
import PaymentLogo3 from "../../assets/img/paymentLogo3.png";
import PaymentLogo4 from "../../assets/img/paymentLogo4.png";
import PaymentLogo5 from "../../assets/img/paymentLogo5.png";

const categories = [
  "Men’s Eyeglasses",
  "Women’s Eyeglasses",
  "Baby’s Eyeglasses",
  "Young Eyeglasses",
];
const adminLinks = ["About Us", "Contact Us", "Help & FAQ"];
const policies = ["Privacy policy", "Terms & conditions", "Legal Notices"];
const payments = [
  PaymentLogo,
  PaymentLogo2,
  PaymentLogo3,
  PaymentLogo4,
  PaymentLogo5,
];

export default function Footer() {
  return (
    <footer className="bg-black text-white text-sm py-10 px-4 md:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Contact */}
        <div>
          <img src={logo} alt="logo" srcset="" className="mb-2" />
          <div className="space-y-3 text-gray-300">
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt /> 30 Buttonwood St. Pataskala OH 43062
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> (+1)-613-333-0101
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> admin@trynow.com
            </p>
            <div className="flex gap-4 text-lg mt-3">
              <FaTwitter className="hover:text-white cursor-pointer" />
              <FaYoutube className="hover:text-white cursor-pointer" />
              <FaInstagram className="hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-white font-semibold mb-4">CATEGORIES</h3>
          <ul className="space-y-2 text-gray-400">
            {categories.map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Admin */}
        <div>
          <h3 className="text-white font-semibold mb-4">Admin</h3>
          <ul className="space-y-2 text-gray-400">
            {adminLinks.map((link, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-white font-semibold mb-4">Policies</h3>
          <ul className="space-y-2 text-gray-400">
            {policies.map((link, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {link}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t container mx-auto border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© 2020 Try Now Eyeglasses Shop</p>
        <div className="flex gap-2 mt-4 md:mt-0">
          {payments.map((pay, i) => (
            <img
              key={i}
              src={pay}
              alt="payment logo"
              className="h-6 w-auto bg-white rounded-sm p-1"
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
