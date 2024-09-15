import { useState, useEffect } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { MdLightMode } from "react-icons/md";
import { useTheme } from "../../../Theme/ThemeContext";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { GrLanguage } from "react-icons/gr";

function Navbar() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>(
    localStorage.getItem("language") || "English"
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    localStorage.setItem("language", language); // Persist language in localStorage
    setIsDropdownOpen(false);
    // Close the dropdown after selection
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
    }
  }, []);

  return (
    <>
      <div className="py-[25px] w-full bg-white dark:bg-[#1F2937]">
        <div className="flex justify-between items-center max-w-[340px] px-2 mx-auto sm:max-w-[600px] md:max-w-[720px] lg:max-w-[990px] xl:max-w-[1200px] 2xl:max-w-[1400px]">
          <div>
            <HiOutlineMenuAlt1 className="cursor-pointer text-black dark:text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px]" />
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="cursor-pointer text-black dark:text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px] flex items-center space-x-2"
              >
                <GrLanguage className="cursor-pointer text-black dark:text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />

                {/* <span className="text-black dark:text-white">
                  {selectedLanguage}
                </span> */}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-[-120px] mt-4 w-48 bg-white dark:bg-gray-800 border rounded-lg shadow-lg z-10">
                  <ul>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg dark:text-white cursor-pointer"
                      onClick={() => handleLanguageChange("English")}
                    >
                      English
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg dark:text-white cursor-pointer"
                      onClick={() => handleLanguageChange("French")}
                    >
                      French
                    </li>
                    <li
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 hover:rounded-lg dark:text-white cursor-pointer"
                      onClick={() => handleLanguageChange("Spanish")}
                    >
                      Spanish
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <FaCartShopping className="cursor-pointer text-black dark:text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />
            <VscAccount className="cursor-pointer text-black dark:text-white w-[30px] h-[30px] md:w-[40px] md:h-[40px]" />

            {isDarkMode ? (
              <MdLightMode
                onClick={toggleTheme}
                className="cursor-pointer text-black dark:text-white w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
              />
            ) : (
              <MdOutlineDarkMode
                onClick={toggleTheme}
                className="cursor-pointer text-black dark:text-white w-[35px] h-[35px] md:w-[50px] md:h-[50px]"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
