import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AndroidMenuWork from "./AndroidMenuWork";
import PortalDrawer from "./PortalDrawer";

export type NavbarWorkType = {
  className?: string;
};

const NavbarWork: FunctionComponent<NavbarWorkType> = ({ className = "" }) => {
  const navigate = useNavigate();
  const [isAndroidMenuWorkOpen, setAndroidMenuWorkOpen] = useState(false);

  const onHomeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBlogTextClick = useCallback(() => {
    navigate("/blog");
  }, [navigate]);

  const openAndroidMenuWork = useCallback(() => {
    setAndroidMenuWorkOpen(true);
  }, []);

  const closeAndroidMenuWork = useCallback(() => {
    setAndroidMenuWorkOpen(false);
  }, []);

  return (
    <>
      <div
        className={`self-stretch bg-white box-border h-14 overflow-hidden shrink-0 flex flex-row items-center justify-between py-[17px] px-[49px] text-center text-xl text-gray-100 font-sen border-[0.5px] border-solid border-gainsboro-100 ${className}`}
      >
        <b className="relative">Zeal</b>
        <div className="w-[313px] flex flex-row items-center justify-between text-lg text-black font-nunito sm:hidden MoTab:hidden">
          <div className="relative cursor-pointer" onClick={onHomeTextClick}>
            Home
          </div>
          <b className="relative text-dodgerblue">Work</b>
          <div className="relative cursor-pointer" onClick={onBlogTextClick}>
            Blog
          </div>
        </div>
        <img
          className="h-9 w-9 relative overflow-hidden shrink-0 hidden cursor-pointer MoTab:flex"
          alt=""
          src="/menu.svg"
          onClick={openAndroidMenuWork}
        />
      </div>
      {isAndroidMenuWorkOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Right"
          onOutsideClick={closeAndroidMenuWork}
        >
          <AndroidMenuWork onClose={closeAndroidMenuWork} />
        </PortalDrawer>
      )}
    </>
  );
};

export default NavbarWork;
