import { IoLocationOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";

export default function TopBar() {
  return (
    <div className="bg-gray-100 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <span>
              <IoLocationOutline />
            </span>
            <span className=" ml-2 text-[18px]">Find Store</span>
          </div>
          <span className="hidden md:inline">|</span>
          <div className="flex items-center space-x-1">
            <span>
              <CiMail />
            </span>
            <span>admin@trynow.com</span>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 mt-2 md:mt-0">
          <select defaultValue="English" className="select w-[100px]">
            <option>English</option>
            <option>Bangla</option>
          </select>

          <span className="hidden md:inline">|</span>
          <select defaultValue="USD" className="select">
            <option>USD</option>
            <option>TAKA</option>
          </select>
        </div>
      </div>
    </div>
  );
}
