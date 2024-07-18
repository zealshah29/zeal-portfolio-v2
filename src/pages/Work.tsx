import { FunctionComponent, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AndroidMenuWork from "../components/AndroidMenuWork";
import PortalDrawer from "../components/PortalDrawer";
import Clubs from "../components/Clubs";

const Work: FunctionComponent = () => {
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

  const onRESUMETextClick = useCallback(() => {
    window.open(
      "https://drive.google.com/file/d/1QKfTg4IxINo5708_-KW1kGMgXLrsZtfZ/view?usp=sharing"
    );
  }, []);

  const onLinkedInIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/zeal-shah-60214b121/");
  }, []);

  const onGitHubIconClick = useCallback(() => {
    window.open("https://github.com/zealshah29");
  }, []);

  const onFrameContainerClick = useCallback(() => {
    window.open("https://github.com/zealshah29/zeal-portfolio-v2");
  }, []);

  const onFrameContainerClick1 = useCallback(() => {
    window.open("https://github.com/zealshah29/Smart-Plant-Monitoring-System");
  }, []);

  const onFrameContainerClick2 = useCallback(() => {
    window.open(
      "https://github.com/zealshah29/Personal-Finance-Management-App"
    );
  }, []);

  const onFrameContainerClick3 = useCallback(() => {
    window.open("https://github.com/zealshah29/portfolio-v1");
  }, []);

  const onFrameContainerClick4 = useCallback(() => {
    window.open("https://github.com/zealshah29/Cafe-Management-System");
  }, []);

  const onFrameContainerClick5 = useCallback(() => {
    window.open("https://github.com/zealshah29/Eduvibe-Frontend");
  }, []);

  const onFrameContainerClick6 = useCallback(() => {
    window.open("https://github.com/zealshah29/TripTrekker");
  }, []);

  const onFrameContainerClick7 = useCallback(() => {
    window.open("https://github.com/zealshah29/MHz-Dotslash-1");
  }, []);

  return (
    <>
      <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start text-center text-xl text-gray-100 font-sen">
        <div className="self-stretch bg-white box-border h-14 overflow-hidden shrink-0 flex flex-row items-center justify-between py-[17px] px-[49px] border-[0.5px] border-solid border-gainsboro-100">
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
        <div className="self-stretch h-[49px] bg-white box-border flex flex-row items-center justify-between py-3.5 px-10 text-left text-mini text-blue font-nunito border-[0.5px] border-solid border-gainsboro-300 sm:flex">
          <div className="w-[110px] relative h-[31px]">
            <div className="absolute top-[0px] left-[0px] bg-gainsboro-200 box-border w-[110px] h-[31px] border-[1px] border-solid border-blue" />
            <div
              className="absolute top-[5.5px] left-[21px] tracking-[0.1em] cursor-pointer"
              onClick={onRESUMETextClick}
            >
              RESUME
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[20px]">
            <img
              className="w-[25px] relative h-[25px] object-cover cursor-pointer"
              alt=""
              src="/linkedin@2x.png"
              onClick={onLinkedInIconClick}
            />
            <img
              className="w-[25px] relative h-[25px] object-cover cursor-pointer"
              alt=""
              src="/github@2x.png"
              onClick={onGitHubIconClick}
            />
          </div>
        </div>
        <div className="self-stretch overflow-y-auto flex flex-col items-center justify-start pt-[30px] px-5 pb-[100px] gap-[25px] text-16xl text-dodgerblue font-nunito-sans lg:gap-[15px] md:gap-[8px] sm:gap-[12px] sm:pl-0 sm:pt-[30px] sm:pr-0 sm:box-border">
          <div className="self-stretch relative text-41xl tracking-[0.1em] leading-[40px] font-extrabold text-gray-100 lg:text-26xl md:text-21xl sm:text-11xl MoTab:text-21xl">
            WORK
          </div>
          <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[10px]">
            EXPERIENCE
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-10 px-[30px] gap-[20px] text-left text-lg text-black font-nunito">
            <div className="flex-1 shadow-[0px_2px_25px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col items-start justify-center py-[30px] px-10 gap-[20px] border-[0.1px] border-solid border-gray-400 lg:w-[550px] md:w-[450px] sm:w-[300px]">
              <div className="self-stretch relative text-sm tracking-[0.1em] text-gray-500 flex items-center h-[52px] shrink-0 lg:text-smi md:text-2xs sm:text-3xs">
                May, 2023 - July, 2023
              </div>
              <b className="self-stretch relative text-5xl tracking-[0.1em] leading-[30px] font-nunito-sans lg:text-3xl md:text-xl sm:text-lg">{`Developer Intern | Barclays `}</b>
              <div className="self-stretch relative tracking-[0.1em] leading-[20px] lg:text-mini md:text-xs">
                Worked on OTC trade regulatory reporting platform solution
                within Markets Post Trade and developed a utility to identify
                and improve the performance of long-running database
                transactions, featuring configurable queries, email alerts, and
                user actions.
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[10px] text-center text-dodgerblue lg:gap-[10px] md:gap-[8px] sm:gap-[5px]">
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    JAVA 8
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Spring Boot
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    MS SQL
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Apache Maven
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 shadow-[0px_2px_25px_rgba(0,_0,_0,_0.05)] bg-white flex flex-col items-start justify-center py-[30px] px-10 gap-[20px] border-[0.1px] border-solid border-gray-400 lg:w-[550px] md:w-[450px] sm:w-[300px]">
              <div className="self-stretch relative text-sm tracking-[0.1em] text-gray-500 flex items-center h-[52px] shrink-0 lg:text-smi md:text-2xs sm:text-3xs">
                January, 2024 - May, 2024
              </div>
              <b className="self-stretch relative text-5xl tracking-[0.1em] leading-[30px] font-nunito-sans lg:text-3xl md:text-xl sm:text-lg">{`Research Intern | SVNIT, Surat `}</b>
              <div className="self-stretch relative tracking-[0.1em] leading-[20px] lg:text-mini md:text-xs">
                <span>{`I integrated a PULP_RISCV hardware accelerator with the PULPissimo system for computer vision applications on FPGA platform. The results were impressive, with the hardware accelerator achieving computation speeds `}</span>
                <b>467.8 times faster</b>
                <span> than the CPU.</span>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[10px] text-center text-dodgerblue lg:gap-[10px] md:gap-[8px] sm:gap-[5px]">
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    System Verilog
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">{`FPGA `}</div>
                </div>
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Pulpissimo
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Linux
                  </div>
                </div>
                <div className="rounded-lg bg-gray-700 flex flex-row items-center justify-center py-1.5 px-[15px] border-[1px] border-solid border-dodgerblue lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Open Source
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[10px]">
            PROJECTS
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[20px] text-left text-11xl text-white">
            <div
              className="rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] cursor-pointer"
              onClick={onFrameContainerClick}
            >
              <img
                className="self-stretch relative rounded max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
                alt=""
                src="/rectangle-8@2x.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[17px]">
                <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
                  Portfolio Website (version 2)
                </b>
                <div className="w-[665px] relative text-2xl tracking-[0.1em] font-nunito inline-block lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
                  This is the second version of my portfolio website, showcasing
                  my skills and projects. Developed using Locofy.ai for rapid
                  design-to-code conversion, it features a modern and responsive
                  layout. The site is deployed on GitHub, ensuring easy access
                  and continuous updates.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Locofy.ai
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Figma
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] cursor-pointer"
              onClick={onFrameContainerClick1}
            >
              <img
                className="self-stretch relative rounded max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
                alt=""
                src="/rectangle-81@2x.png"
              />
              <div className="w-[665px] flex flex-col items-start justify-start gap-[17px] MoTab:self-stretch MoTab:w-auto">
                <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
                  Smart Plant Monitoring System - IOT
                </b>
                <div className="w-[665px] relative text-2xl tracking-[0.1em] font-nunito inline-block lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
                  The Smart Gardening System is an IoT solution for automating
                  and optimizing garden care. Using the ESP8266 NodeMCU, various
                  sensors, and the Blynk app, it remotely monitors soil
                  moisture, temperature, and humidity, and controls irrigation
                  automatically.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Embedded C
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Blynk IOT
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    ESP8266
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] cursor-pointer"
              onClick={onFrameContainerClick2}
            >
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
                alt=""
                src="/rectangle-82@2x.png"
              />
              <div className="w-[665px] flex flex-col items-start justify-start gap-[17px] MoTab:self-stretch MoTab:w-auto">
                <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
                  Personal Finance Management App
                </b>
                <div className="w-[665px] relative text-2xl tracking-[0.1em] font-nunito inline-block lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
                  This application allowed users to manage their personal
                  finances, group their income and expenses categorically, and
                  view the reports. I conceptualized this app, designed it on
                  Figma and developed its database using SQLite.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    SQLite
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Figma
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] cursor-pointer"
              onClick={onFrameContainerClick3}
            >
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
                alt=""
                src="/rectangle-83@2x.png"
              />
              <div className="w-[665px] flex flex-col items-start justify-start gap-[17px] MoTab:self-stretch MoTab:w-auto">
                <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
                  Portfolio Website (version 1)
                </b>
                <div className="w-[665px] relative text-2xl tracking-[0.1em] font-nunito inline-block lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
                  This is the first version of my portfolio website. It’s a
                  static website designed on Figma and developed using HTML and
                  CSS.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    HTML
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    CSS
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Figma
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] cursor-pointer"
              onClick={onFrameContainerClick4}
            >
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
                alt=""
                src="/rectangle-84@2x.png"
              />
              <div className="w-[665px] flex flex-col items-start justify-start gap-[17px] MoTab:self-stretch MoTab:w-auto">
                <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
                  Cafe Management System - IOT
                </b>
                <div className="w-[665px] relative text-2xl tracking-[0.1em] font-nunito inline-block lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
                  Worked in a team of 7 to make an automated system that allows
                  customers in a cafe to place their orders via keypad. The
                  orders are displayed on a kitchen LCD screen. I learned keypad
                  and LCD interfacing, and Bluetooth wireless communication.
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Proteus
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Embedded C
                  </div>
                </div>
              </div>
            </div>
            <div
              className="rounded-xl bg-gray-100 flex flex-col items-center justify-center p-5 gap-[20px] cursor-pointer"
              onClick={onFrameContainerClick5}
            >
              <img
                className="self-stretch relative max-w-full overflow-hidden h-[213px] shrink-0 object-cover sm:self-stretch sm:w-auto sm:h-[100px] MoTab:self-stretch MoTab:w-auto MoTab:h-[100px]"
                alt=""
                src="/rectangle-85@2x.png"
              />
              <div className="w-[665px] flex flex-col items-start justify-start gap-[17px] MoTab:self-stretch MoTab:w-auto">
                <b className="self-stretch relative lg:text-8xl md:text-6xl sm:text-2xl">
                  EduVibe Website - UI UX Design
                </b>
                <div className="w-[665px] relative text-2xl tracking-[0.1em] inline-block font-nunito lg:text-lg md:text-base sm:text-xs MoTab:self-stretch MoTab:w-auto">
                  <span>{`Worked in a team of 7 on an educational website to aid students in self-study. It has 3 features - `}</span>
                  <b>Organize</b>
                  <span>{` the study materials, `}</span>
                  <b>Plan</b>
                  <span>{` the work, and enhance the `}</span>
                  <b>Focus</b>
                  <span>{`. `}</span>
                </div>
              </div>
              <div className="self-stretch flex flex-row flex-wrap items-center justify-start gap-[15px] text-center text-lg text-gray-100 font-nunito">
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    React
                  </div>
                </div>
                <div className="rounded-lg bg-whitesmoke flex flex-row items-center justify-center py-1.5 px-[15px] lg:pl-[15px] lg:box-border md:py-[5px] md:px-2.5 md:box-border sm:py-1 sm:px-2 sm:box-border">
                  <div className="relative tracking-[0.1em] font-medium lg:text-base md:text-base sm:text-xs MoTab:text-lg">
                    Figma
                  </div>
                </div>
              </div>
            </div>
          </div>
          <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[10px]">
            ACHIEVEMENTS
          </b>
          <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-10 px-[30px] gap-[20px_50px] text-left text-11xl text-gray-100">
            <div
              className="rounded-10xs bg-white flex flex-col items-center justify-center py-[21px] px-5 gap-[40px] cursor-pointer border-[0.5px] border-solid border-gray-200"
              onClick={onFrameContainerClick6}
            >
              <img
                className="w-[640px] relative rounded-10xs h-[448.9px] object-cover lg:w-[400px] lg:h-[300px] md:w-[360px] md:h-[270px] sm:w-[280px] sm:h-[210px]"
                alt=""
                src="/image-1@2x.png"
              />
              <div className="w-[601px] flex flex-col items-start justify-start p-[5px] box-border gap-[22px] lg:w-[400px] md:w-[350px] sm:w-[270px]">
                <b className="self-stretch relative lg:text-8xl md:text-5xl sm:text-2xl">
                  Makeathon - First Runner Up
                </b>
                <div className="self-stretch relative text-2xl tracking-[0.1em] font-nunito lg:text-lgi md:text-mini sm:text-xs">
                  1st Runner-up in a 48-hour makeathon creating a GPT-powered
                  Personalized Travel Itinerary Planner App in collaboration
                  with OpenWeaver.
                </div>
              </div>
            </div>
            <div
              className="rounded-10xs bg-white flex flex-col items-center justify-center py-[21px] px-5 gap-[40px] cursor-pointer border-[0.5px] border-solid border-gray-200"
              onClick={onFrameContainerClick7}
            >
              <img
                className="w-[640px] relative rounded-10xs h-[448.9px] object-cover lg:w-[400px] lg:h-[300px] md:w-[360px] md:h-[270px] sm:w-[280px] sm:h-[210px]"
                alt=""
                src="/image-11@2x.png"
              />
              <div className="w-[601px] flex flex-col items-start justify-start p-[5px] box-border gap-[22px] lg:w-[400px] md:w-[350px] sm:w-[270px]">
                <b className="self-stretch relative lg:text-8xl md:text-5xl sm:text-2xl">
                  Dotslash 5.0 Hackathon - Top 50 teams
                </b>
                <div className="self-stretch relative text-2xl tracking-[0.1em] font-nunito lg:text-lgi md:text-mini sm:text-xs">
                  Built a chrome extension to take notes while watching YouTube
                  Video, in a team of 3, within 36 hours of Dotslash 5.0
                  Hackathon organized by ACM, SVNIT.
                </div>
              </div>
            </div>
          </div>
          <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[25px]">
            COLLEGE CLUBS AND LEADERSHIP
          </b>
          <div className="self-stretch flex flex-col items-start justify-center p-5 gap-[59px] sm:gap-[30px] sm:pt-0 sm:pb-0 sm:box-border">
            <Clubs
              prop="1"
              headOfDesignAndCoreMember="Head of Design and Core Member | "
              may2022April2023="(May 2022 - April 2023)"
              googleDeveloperStudentsCl="Google Developer Students Club (GDSC), SVNIT Surat"
            />
            <Clubs
              prop="2"
              headOfDesignAndCoreMember="Head | "
              may2022April2023="(May 2022 - April 2023)"
              googleDeveloperStudentsCl="CHRD Design Group"
            />
            <Clubs
              prop="3"
              headOfDesignAndCoreMember="Executive | "
              may2022April2023="(May 2021 - April 2022)"
              googleDeveloperStudentsCl="Association for Computing Machinery (ACM), SVNIT Surat"
            />
          </div>
        </div>
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

export default Work;