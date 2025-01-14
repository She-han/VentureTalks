import React from "react";
import Navbar from "../vtcomponents/VTnavbar";
import { useState } from "react";
import { motion } from "framer-motion";

import oc1 from "../assets/images/Artboard 1.webp";
import oc2 from "../assets/images/Artboard 1-1.webp";
import cs1 from "../assets/images/cs1.jpg";
import cs2 from "../assets/images/cs5.jpg";
import cs3 from "../assets/images/cs7.jpg";
import cs4 from "../assets/images/cs4.jpg";
import cs5 from "../assets/images/cs6.jpg";
import cs6 from "../assets/images/cs2.jpg";
import cs7 from "../assets/images/cs8.jpg";

import Contact from "../vtcomponents/VTcontact";
import Footer from "../vtcomponents/VTfooter";
import Gototop from "../vtcomponents/Gototop";

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case "venturetalks":
      return (
        <div className="p-6 bg-gray-200 dark:bg-gray-800 md:p-10 rounded-xl">
          <div className="">
            <div className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
              Overview
            </div>
            <div className="text-base font-normal text-gray-900 dark:text-gray-200 justify-normal ">
              <p className="mb-4">
                “Venture Talks” is a series of podcast programs, meticulously
                curated by the Computer Science Students’ Community (CSSC) of
                the Department of Computer Science at the University of Ruhuna.
              </p>
              <p className="mb-4">
                Our objective is to host distinguished individuals from the
                technology and computer science sectors. The discourse will
                revolve around their journey to success in the industry,
                insights on how to thrive in this field, and the latest
                advancements in the IT sector.
              </p>
              <p className="mb-4">
                This series comprises 10 episodes, each with an approximate
                duration of one hour. The program will be disseminated across
                various social media platforms, both as complete episodes and as
                short video snippets.
              </p>
              <p className="mb-4">
                Our aspiration through this initiative is to enhance the
                reputation of our university and to foster the knowledge of IT
                enthusiasts about the industry.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mt-4 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
              Aims
            </div>
            <div className="text-base font-normal text-gray-900 dark:text-gray-200 justify-normal ">
              <p className="mb-4">
                To increase the university's visibility and reputation by
                showcasing technological trends and sharing industry
                professionals' stories, while enhancing audience knowledge.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <div className="mt-4 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
              Objectives
            </div>
            <div className="text-base font-normal text-gray-900 dark:text-gray-200">
              <ul className="pl-5 list-disc">
                <li className="mb-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Enhance Knowledge:
                  </span>{" "}
                  Discuss emerging technologies with experts.
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Share Stories:
                  </span>{" "}
                  Feature industry professionals sharing their career journeys
                  and insights.
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Strengthen Connections:
                  </span>{" "}
                  Highlight university-industry collaborations.
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Interactive Learning:
                  </span>{" "}
                  Offer a platform for students to expand their tech knowledge.
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Inspire Passion:
                  </span>{" "}
                  Motivate students to develop their interest in technology.
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Quality Content:
                  </span>{" "}
                  Ensure high-quality, engaging, and accessible podcast
                  episodes.
                </li>
                <li className="mb-2">
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Continuous Improvement:
                  </span>{" "}
                  Gather listener feedback for ongoing refinement.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <div className="mt-4 mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200">
              Benefits
            </div>
            <div className="text-base font-normal text-gray-900 dark:text-gray-200 justify-normal ">
              <ul className="pl-5 mb-4 space-y-4 list-disc ">
                <li>
                  This opportunity will enhance the computer science
                  department's reputation within the community.
                </li>
                <li>
                  Hearing experts' success stories and challenges inspires
                  determination and motivates us to confidently pursue our
                  goals.
                </li>
                <li>
                  Staying informed about IT trends and technologies will prepare
                  us for future career opportunities.
                </li>
                <li>
                  Podcasts illustrate the practical application of theoretical
                  concepts, making our learning more meaningful.
                </li>
                <li>
                  We can establish strong connections with industry experts,
                  fostering valuable relationships.
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <div className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-200 ">
              Organizing Committee
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 rounded-xl">
              <div className="overflow-hidden rounded-xl">
                <img src={oc1} className="" alt="oc"></img>
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={oc2} className="" alt="oc"></img>
              </div>
            </div>
          </div>
        </div>
      );
    case "cssc":
      return (
        <div className="p-6 bg-gray-200 dark:bg-gray-800 md:p-10 rounded-xl">
          <div className="mt-0">
            <div className="mb-4 text-2xl font-semibold text-gray-900 dark:text-gray-200 ">
              Computer Science Students' Community (CSSC)
            </div>
            <div className="text-base font-normal text-gray-900 dark:text-gray-200 justify-normal ">
              <p className="mb-4">
                The{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-200">
                  Computer Science Students’ Community (CSSC){" "}
                </span>
                of the University of Ruhuna is Sri Lanka's southernmost hub of
                tech enthusiasts, where innovation, collaboration, and
                technology converge. Established to inspire and empower
                students, CSSC is a vibrant platform that nurtures creativity,
                technical expertise, and a passion for problem-solving.
              </p>
              <p className="mb-8">
                Our community is known for organizing flagship events that
                challenge and engage aspiring tech leaders, including:
              </p>
              <ul className="mb-8 list-disc list-inside">
                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Rush Coder{" "}
                  </span>
                  : An exhilarating intra-university hackathon that sparks
                  innovation and showcases students' coding prowess.
                </li>
                <li>
                  <span className="font-semibold text-gray-900 dark:text-gray-200">
                    Insurgex 1.0{" "}
                  </span>
                  : A cutting-edge hackathon designed to push boundaries and
                  expand technological horizons.
                </li>
              </ul>
              <p className="mb-4">
                In partnership with global networks like the{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-200">
                  Google Developers Group
                </span>
                , CSSC delivers world-class workshops that equip members with
                the latest tools, trends, and techniques in the tech landscape.
              </p>
              <p className="mb-4">
                Beyond technology, CSSC embraces cultural expression through
                unique events like
                <span className="font-semibold text-gray-900 dark:text-gray-200">
                  {" "}
                  CS Padura
                </span>
                , which seamlessly blends creativity and the arts, celebrating
                the multifaceted talents of our members.
              </p>
              <p>
                At CSSC, we are more than a community—we are a movement driving
                the future of technology and fostering a spirit of camaraderie
                among computer science students. Join us as we innovate,
                collaborate, and inspire.
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <div class="grid grid-rows-2 gap-4">
              <div class="overflow-hidden rounded-lg ">
                <img
                  src={cs1}
                  alt="Square  1"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src={cs2}
                  alt="Square  2"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <div class="grid grid-rows-3 gap-4">
              <div class="overflow-hidden rounded-lg">
                <img
                  src={cs3}
                  alt="Landscape  1"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src={cs4}
                  alt="Landscape  2"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src={cs7}
                  alt="Landscape  3"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>

            <div class="grid grid-rows-2 gap-4">
              <div class="overflow-hidden rounded-lg">
                <img
                  src={cs6}
                  alt="Square  3"
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="overflow-hidden rounded-lg">
                <img
                  src={cs5}
                  alt="Square  4"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      );
    case "profiles":
      return (
        <div className="p-6 bg-gray-200 dark:bg-gray-800 md:p-10 rounded-xl">
          Welcome to profiles!
        </div>
      );
    default:
      return null;
  }
};

const About = () => {
  const [activeTab, setActiveTab] = useState("venturetalks"); // Default tab

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <Navbar />
      <div className="w-[81%] mx-auto my-16">
        {/* Tabs Navigation */}
        <div className="flex items-center justify-around mb-6 space-x-6">
          <button
            onClick={() => setActiveTab("venturetalks")}
            className={`text-xl font-semibold ${
              activeTab === "venturetalks"
                ? "text-blue-600 w-48 bg-gray-200 dark:bg-gray-800 rounded-full p-4  "
                : "text-gray-900 dark:text-gray-200"
            } hover:bg-clip-padding hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-full p-4 w-48`}
          >
            Venture Talks
          </button>
          <button
            onClick={() => setActiveTab("cssc")}
            className={`text-xl font-semibold ${
              activeTab === "cssc"
                ? "text-blue-600 w-48 bg-gray-200 dark:bg-gray-800 rounded-full p-4"
                : "text-gray-900 dark:text-gray-200"
            } hover:bg-clip-padding hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-full p-4 w-48`}
          >
            CSSC
          </button>
          <button
            onClick={() => setActiveTab("profiles")}
            className={`text-xl font-semibold ${
              activeTab === "profiles"
                ? "text-blue-600 w-48 bg-gray-200 dark:bg-gray-800 rounded-full p-4"
                : "text-gray-900 dark:text-gray-200"
            } hover:bg-clip-padding hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-full p-4 w-48`}
          >
            Guest profiles
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TabContent activeTab={activeTab} />
        </motion.div>
      </div>
      <Contact />
      <Footer />
      <Gototop />
    </>
  );
};

export default About;
