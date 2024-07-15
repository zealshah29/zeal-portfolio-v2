import { FunctionComponent, useCallback } from "react";
import NavbarWork from "../components/NavbarWork";
import GroupComponent2 from "../components/GroupComponent2";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Gdsc from "../components/Gdsc";

const Work: FunctionComponent = () => {
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

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start text-left text-mini text-blue font-nunito">
      <NavbarWork />
      <div className="self-stretch h-12 bg-white box-border flex flex-row items-center justify-between py-3.5 px-10 border-[0.5px] border-solid border-gainsboro-300 sm:flex">
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
      <div className="self-stretch overflow-y-auto flex flex-col items-center justify-start pt-[30px] px-5 pb-[100px] gap-[25px] text-center text-16xl text-dodgerblue font-nunito-sans lg:gap-[15px] md:gap-[8px] sm:gap-[12px] sm:pl-0 sm:pt-[30px] sm:pr-0 sm:box-border">
        <div className="self-stretch relative text-41xl tracking-[0.1em] leading-[40px] font-extrabold text-gray-100 lg:text-26xl md:text-21xl sm:text-11xl MoTab:text-21xl">
          WORK
        </div>
        <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[10px]">
          EXPERIENCE
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-10 px-[30px] gap-[20px]">
          <GroupComponent2 />
          <FrameComponent4 />
        </div>
        <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[10px]">
          PROJECTS
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center p-5 gap-[20px]">
          <GroupComponent3
            rectangle8="/rectangle-8@2x.png"
            portfolioWebsiteVersion2="Portfolio Website (version 2)"
            thisIsTheSecondVersionOfM="This is the second version of my portfolio website, showcasing my skills and projects. Developed using Locofy.ai for rapid design-to-code conversion, it features a modern and responsive layout. The site is deployed on GitHub, ensuring easy access and continuous updates."
            locofyai="Locofy.ai"
            figma="Figma"
          />
          <FrameComponent2
            rectangle8="/rectangle-81@2x.png"
            portfolioWebsiteVersion2="Smart Plant Monitoring System - IOT"
            thisIsTheSecondVersionOfM="The Smart Gardening System is an IoT solution for automating and optimizing garden care. Using the ESP8266 NodeMCU, various sensors, and the Blynk app, it remotely monitors soil moisture, temperature, and humidity, and controls irrigation automatically."
            embeddedC="Embedded C"
            blynkIOT="Blynk IOT"
            eSP8266="ESP8266"
          />
          <GroupComponent3
            rectangle8="/rectangle-82@2x.png"
            portfolioWebsiteVersion2="Personal Finance Management App"
            thisIsTheSecondVersionOfM="This application allowed users to manage their personal finances, group their income and expenses categorically, and
view the reports. I conceptualized this app, designed it on Figma and developed its database using SQLite."
            locofyai="SQLite"
            figma="Figma"
          />
          <FrameComponent2
            rectangle8="/rectangle-83@2x.png"
            portfolioWebsiteVersion2="Portfolio Website (version 1)"
            thisIsTheSecondVersionOfM="This is the first version of my portfolio website. It’s a static website designed on Figma and developed using HTML and CSS."
            embeddedC="HTML"
            blynkIOT="CSS"
            eSP8266="Figma"
          />
          <GroupComponent3
            rectangle8="/rectangle-84@2x.png"
            portfolioWebsiteVersion2="Cafe Management System - IOT"
            thisIsTheSecondVersionOfM="We designed an automated system to display a digital menu on an LCD monitor, allowing customers to place orders via keypad. The orders are displayed on a kitchen LCD screen. I learned keypad and LCD interfacing, and Bluetooth wireless communication."
            locofyai="Proteus"
            figma="Embedded C"
          />
          <FrameComponent1 />
        </div>
        <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[10px]">
          ACHIEVEMENTS
        </b>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-10 px-[30px] gap-[20px_50px] text-left text-11xl text-gray-100">
          <div className="rounded-10xs bg-white flex flex-col items-center justify-center py-[21px] px-5 gap-[40px] border-[0.5px] border-solid border-gray-200">
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
                Personalized Travel Itinerary Planner App in collaboration with
                OpenWeaver.
              </div>
            </div>
          </div>
          <div className="rounded-10xs bg-white flex flex-col items-center justify-center py-[21px] px-5 gap-[40px] border-[0.5px] border-solid border-gray-200">
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
                Video, in a team of 3, within 36 hours of Dotslash 5.0 Hackathon
                organized by ACM, SVNIT.
              </div>
            </div>
          </div>
        </div>
        <b className="self-stretch relative tracking-[0.02em] leading-[50px] lg:text-11xl md:text-6xl sm:text-xl sm:leading-[25px]">
          COLLEGE CLUBS AND LEADERSHIP
        </b>
        <div className="self-stretch flex flex-col items-start justify-center p-5 gap-[59px] sm:gap-[30px] sm:pt-0 sm:pb-0 sm:box-border">
          <Gdsc
            prop="1"
            headOfDesignAndCoreMember="Head of Design and Core Member | "
            may2022April2023="(May 2022 - April 2023)"
            googleDeveloperStudentsCl="Google Developer Students Club (GDSC), SVNIT Surat"
          />
          <Gdsc
            prop="2"
            headOfDesignAndCoreMember="Head | "
            may2022April2023="(May 2022 - April 2023)"
            googleDeveloperStudentsCl="CHRD Design Group"
          />
          <Gdsc
            prop="3"
            headOfDesignAndCoreMember="Executive | "
            may2022April2023="(May 2021 - April 2022)"
            googleDeveloperStudentsCl="Association for Computing Machinery (ACM), SVNIT Surat"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
