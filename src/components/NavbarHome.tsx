import { FunctionComponent, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import AndroidMenuHome from "./AndroidMenuHome";
import PortalDrawer from "./PortalDrawer";

export type NavbarHomeType = {
  className?: string;
};

const NavbarHome: FunctionComponent<NavbarHomeType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isAndroidMenuOpen, setAndroidMenuOpen] = useState(false);

  const onWorkClick = useCallback(() => {
    navigate("/work");
  }, [navigate]);

  const onBlogClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const openAndroidMenu = useCallback(() => {
    setAndroidMenuOpen(true);
  }, []);

  const closeAndroidMenu = useCallback(() => {
    setAndroidMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`self-stretch bg-white box-border h-14 overflow-hidden shrink-0 flex flex-row items-end justify-between py-[13px] px-[70px] text-center text-xl text-dimgray-300 font-sen border-[0.5px] border-solid border-gainsboro-100 ${className}`}
        id="homenav"
      >
        <b className="relative">Zeal</b>
        <nav className="m-0 w-[313px] flex flex-row items-center justify-between text-center text-lg text-black font-nunito sm:hidden MoTab:hidden">
          <b className="relative text-dodgerblue">Home</b>
          <Link
            className="cursor-pointer [text-decoration:none] relative text-[inherit]"
            to="/work"
            onClick={onWorkClick}
          >
            Work
          </Link>
          <Link
            className="cursor-pointer [text-decoration:none] relative text-[inherit]"
            to="/blog"
            onClick={onBlogClick}
          >
            Blog
          </Link>
        </nav>
        <nav
          className="m-0 h-9 w-9 relative overflow-hidden shrink-0 hidden cursor-pointer sm:flex MoTab:flex"
          onClick={openAndroidMenu}
        >
          <img
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
            alt=""
          />
          <img
            className="absolute h-3/6 w-9/12 top-[25%] right-[12.5%] bottom-[25%] left-[12.5%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </nav>
      </header>
      {isAndroidMenuOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeAndroidMenu}
        >
          <AndroidMenuHome onClose={closeAndroidMenu} />
        </PortalDrawer>
      )}
    </>
  );
};

export default NavbarHome;
