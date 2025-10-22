import { Link, useLocation } from "react-router-dom";
import { IoBookOutline } from "react-icons/io5";
import pages from "../../utils";
import { useState, useEffect } from "react";

// import PropTypes from "prop-types";

const LayoutItem = ({ children }) => {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState("postview");

  useEffect(() => {
    // Set activeComponent based on the current pathname
    const currentPath = location.pathname.split("/")[1];
    const activeMenu = pages.find((menu) => menu.link.includes(currentPath));
    if (activeMenu) {
      setActiveComponent(activeMenu.page);
    }
  }, [location]);

  return (
    <>
      <section>
        <div className="flex border-b  border-gray-300  pt-1">
          <div className="flex items-center mr-8">
            <Link
              to={"/posts"}
              className="text-2xl font-bold flex items-center gap-2"
            >
              <IoBookOutline size={20} />
            </Link>
          </div>
          {pages?.map((menu, i) => (
            <div
              key={i}
              className={`max-w-max pb-4 mr-8 ${
                activeComponent === menu.page ? "border-b border-[#242424]" : ""
              }`}
            >
              <Link
                to={menu.link}
                onClick={() => setActiveComponent(menu.page)}
              >
                {menu.title}
              </Link>
            </div>
          ))}
        </div>
        <div className=" flex justify-between p-4">
          <div>
            <main>{activeComponent === "postview" && children}</main>
            <main>{activeComponent === "liked" && children}</main>
          </div>
          
        </div>
      </section>
    </>
  );
};

// LayoutItem.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default LayoutItem;
