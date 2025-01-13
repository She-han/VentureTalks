import React from "react";
import { motion } from "framer-motion";
import Navbar from "../vtcomponents/VTnavbar";
import Contact from "../vtcomponents/VTcontact";
import Footer from "../vtcomponents/VTfooter";
import Gototop from "../vtcomponents/Gototop";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import ti from "../assets/images/title.jpg";
import gl from "../assets/images/gold.jpg";
import si from "../assets/images/silver.jpg";
import br from "../assets/images/bronze.jpg";

const reasons = [
  {
    topic: "Enhanced Brand Visibility",
    description:
      "Your brand will be mentioned during each of our 10 podcast episodes for consistent exposure.",
  },
  {
    topic: "Advertisement Opportunities",
    description:
      "Your advertisements will be played during our episodes, reaching engaged listeners.",
  },
  {
    topic: "Social Media Promotion",
    description:
      "Your brand’s name and logo will be prominently displayed in all our social media posts related to the podcast series.",
  },
  {
    topic: "Extended Reach",
    description:
      "Our episodes and clips will be shared on platforms like YouTube and Facebook, increasing your brand’s visibility.",
  },
  {
    topic: "Association with Quality Content",
    description:
      "Your brand will be linked with high-quality content featuring technology and business experts.",
  },
  {
    topic: "Positive Brand Image",
    description:
      'Sponsoring "Venture Talks" positions your brand as a supporter of educational initiatives and innovation.',
  },
];

const sponsorshipOptions = [
  {
    tier: "Title Sponsorship",
    price: "(150,000 LKR)",
    benefits: [
      {
        title: "Exclusive Naming Rights:",
        description:
          "The event can be named after the title sponsor, e.g., 'Venture Talks with [Company Name].'",
      },
      {
        title: "Banner Display:",
        description:
          "The title sponsor can display a banner in the background of the program.",
      },
      {
        title: "Podcast Ads:",
        description:
          "Sponsor advertisements, up to 30 seconds, will be included at the beginning or middle of each podcast episode.",
      },
      {
        title: "Exclusive Interview Opportunity:",
        description:
          "A representative from the sponsor company will have the opportunity for an exclusive five-minute interview in two out of the ten episodes.",
      },
      {
        title: "Mentions:",
        description:
          "Sponsors will be mentioned during the closing of each episode.",
      },
      {
        title: "Prominent Logo Placement:",
        description:
          "The sponsor's logo will be featured prominently on all promotional materials, including flyers, banners, plaques for guests, social media posts, podcast videos, and thumbnail images.",
      },
      {
        title: "Dedicated Social Media Posts:",
        description:
          "Exclusive posts on CSSC's social media channels will promote the sponsor.",
      },
      {
        title: "Website Feature:",
        description:
          "Each podcast video will prominently feature the sponsor with a link to the sponsor’s website.",
      },
    ],
    options: [
      { episodes: "3 episodes", price: "45,000 LKR" },
      { episodes: "5 episodes", price: "75,000 LKR" },
      { episodes: "10 episodes", price: "150,000 LKR" },
    ],
    color: "",
  },
  {
    tier: "Gold Sponsorship",
    price: "(100,000 LKR)",
    benefits: [
      {
        title: "Podcast Ads:",
        description:
          "Sponsor advertisements, up to 30 seconds, will be included at the end of each podcast episode.",
      },
      {
        title: "Mentions:",
        description:
          "Sponsors will be mentioned during the closing of each episode.",
      },
      {
        title: "Website Feature:",
        description:
          "Each podcast video will prominently feature the sponsor with a link to the sponsor’s website.",
      },
      {
        title: "Prominent Logo Placement:",
        description:
          "The sponsor's logo will be featured prominently on all promotional materials, including flyers, banners, plaques for guests, social media posts, podcast videos, and thumbnail images.",
      },
      {
        title: "Dedicated Social Media Posts:",
        description:
          "Exclusive posts on CSSC's social media channels will promote the sponsor.",
      },
    ],
    options: [
      { episodes: "3 episodes", price: "30,000 LKR" },
      { episodes: "5 episodes", price: "50,000 LKR" },
      { episodes: "10 episodes", price: "100,000 LKR" },
    ],
    color: "",
  },
  {
    tier: "Silver Sponsorship",
    price: "(60,000 LKR)",
    benefits: [
      {
        title: "Mentions:",
        description:
          "Sponsors will be mentioned during the closing of each episode.",
      },
      {
        title: "Prominent Logo Placement:",
        description:
          "The sponsor's logo will be featured prominently on all promotional materials, including flyers, banners, plaques for guests, social media posts, podcast videos, and thumbnail images.",
      },
      {
        title: "Dedicated Social Media Posts:",
        description:
          "Exclusive posts on CSSC's social media channels will promote the sponsor.",
      },
    ],
    options: [
      { episodes: "3 episodes", price: "18,000 LKR" },
      { episodes: "5 episodes", price: "30,000 LKR" },
      { episodes: "10 episodes", price: "60,000 LKR" },
    ],
    color: "",
  },
  {
    tier: "Bronze Sponsorship",
    price: "(30,000 LKR)",
    benefits: [
      {
        title: "Mentions:",
        description:
          "Sponsors will be mentioned during the closing of each episode.",
      },
      {
        title: "Prominent Logo Placement:",
        description:
          "The sponsor's logo will be featured prominently on all promotional materials, including flyers, banners, plaques for guests, social media posts, podcast videos, and thumbnail images.",
      },
    ],
    options: [
      { episodes: "3 episodes", price: "9,000 LKR" },
      { episodes: "5 episodes", price: "15,000 LKR" },
      { episodes: "10 episodes", price: "30,000 LKR" },
    ],
    color: "",
  },
];

const Join = () => {
  return (
    <>
      <Navbar />

      <div className="max-w-[90%] md:max-w-[85%] mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="mb-4 text-5xl font-extrabold text-gray-900 dark:text-gray-100">
            Partnership Opportunities
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore our sponsorship tiers and be part of the Venture Talks
            journey.
          </p>
        </motion.div>

        <div className="max-w-[90%] md:max-w-[85%] mx-auto my-24">
          <h2 className="my-8 text-3xl font-extrabold text-gray-900 dark:text-gray-200">
            WHY PARTNER WITH US?
          </h2>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div key={index} className="flex space-x-4">
                <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                  {index + 1}.
                </span>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200">
                    {reason.topic}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <TextParallaxContent
          imgUrl={ti}
          subheading="150,000 LKR"
          heading="Title Sponsorship"
        >
          <ExampleContent1 />
        </TextParallaxContent>

        <TextParallaxContent
          imgUrl={gl}
          subheading="100,000 LKR"
          heading="Gold Sponsorship"
        >
          <ExampleContent2 />
        </TextParallaxContent>

        <TextParallaxContent
          imgUrl={si}
          subheading="60,000 LKR"
          heading="Silver Sponsorship"
        >
          <ExampleContent3 />
        </TextParallaxContent>

        <TextParallaxContent
          imgUrl={br}
          subheading="30,000 LKR"
          heading="Bronze Sponsorship"
        >
          <ExampleContent4 />
        </TextParallaxContent>
        <div className="p-4 mb-16 max-w-[90%] md:max-w-[85%] mx-auto">
          <h2 className="my-8 text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
            Sponsorship Benefits Summery
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full overflow-hidden text-left border border-collapse border-gray-300 rounded-lg table-auto dark:border-gray-500 ">
              <thead>
                <tr className="bg-indigo-500 ">
                  <th className="px-4 py-2 text-lg font-medium border border-gray-300 dark:border-gray-500 text-gray-950 dark:text-white">
                    Benefit
                  </th>
                  <th className="px-4 py-2 text-lg font-medium border border-gray-300 dark:border-gray-500 text-gray-950 dark:text-white">
                    Title Sponsorship
                  </th>
                  <th className="px-4 py-2 text-lg font-medium border border-gray-300 dark:border-gray-500 text-gray-950 dark:text-white">
                    Gold Sponsorship
                  </th>
                  <th className="px-4 py-2 text-lg font-medium border border-gray-300 dark:border-gray-500 text-gray-950 dark:text-white">
                    Silver Sponsorship
                  </th>
                  <th className="px-4 py-2 text-lg font-medium border border-gray-300 dark:border-gray-500 text-gray-950 dark:text-white">
                    Bronze Sponsorship
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr
                    key={index}
                    className={
                      index % 2 === 0
                        ? "bg-white dark:bg-gray-800"
                        : "bg-indigo-100 dark:bg-gray-700"
                    }
                  >
                    <td className="px-4 py-2 font-normal text-gray-900 border border-gray-300 dark:border-gray-500 dark:text-white">
                      {row.benefit}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-900 border border-gray-300 dark:border-gray-500 dark:text-white">
                      {row.title ? "✔" : ""}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-900 border border-gray-300 dark:border-gray-500 dark:text-white">
                      {row.gold ? "✔" : ""}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-900 border border-gray-300 dark:border-gray-500 dark:text-white">
                      {row.silver ? "✔" : ""}
                    </td>
                    <td className="px-4 py-2 text-center text-gray-900 border border-gray-300 dark:border-gray-500 dark:text-white">
                      {row.bronze ? "✔" : ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
      <Gototop />
    </>
  );
};

export default Join;

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[80vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Adjust `y` to stop sliding in the middle
  const y = useTransform(scrollYProgress, [0, 0, 1], [0, 0, 0]);
  const opacity = useTransform(scrollYProgress, [0.01, 0.5, 1], [0, 1, 1]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-white"
    >
      <p className="mb-4 text-4xl font-bold text-center md:text-7xl">
        {heading}
      </p>
      <p className="text-xl text-center md:mb-4 md:text-3xl">{subheading}</p>
    </motion.div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        overflow: "hidden",
        scale,
      }}
      ref={targetRef}
      className="sticky top-0 z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const ExampleContent1 = () => (
  <div className="grid gap-8 lg:grid-cols-1 max-w-[90%] md:max-w-[85%] mx-auto mb-16">
    {sponsorshipOptions.slice(0, 1).map((option, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`p-2  ${option.color}`}
      >
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-200">
          {option.tier}
        </h2>
        <p className="mb-6 text-xl font-semibold text-gray-700 dark:text-gray-300">
          {option.price}
        </p>
        <ul className="mb-6 space-y-4 list-disc dark:text-gray-200">
          {option.benefits.map((benefit, i) => (
            <li key={i}>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                {benefit.title}
              </span>{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {benefit.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-200">
            Sponsor Options:
          </h3>
          {option.options.map((opt, i) => (
            <p
              key={i}
              className="text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              {opt.episodes}:{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {opt.price}
              </span>
            </p>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const ExampleContent2 = () => (
  <div className="grid gap-8 lg:grid-cols-1  max-w-[90%] md:max-w-[85%] mx-auto mb-16">
    {sponsorshipOptions.slice(1, 2).map((option, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`p-2  ${option.color}`}
      >
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-200">
          {option.tier}
        </h2>
        <p className="mb-6 text-xl font-semibold text-gray-700 dark:text-gray-300">
          {option.price}
        </p>
        <ul className="mb-6 space-y-4 list-disc dark:text-gray-200">
          {option.benefits.map((benefit, i) => (
            <li key={i}>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                {benefit.title}
              </span>{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {benefit.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-200">
            Sponsor Options:
          </h3>
          {option.options.map((opt, i) => (
            <p
              key={i}
              className="text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              {opt.episodes}:{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {opt.price}
              </span>
            </p>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const ExampleContent3 = () => (
  <div className="grid gap-8 lg:grid-cols-1 max-w-[90%] md:max-w-[85%] mx-auto mb-16">
    {sponsorshipOptions.slice(2, 3).map((option, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`p-2  ${option.color}`}
      >
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-200">
          {option.tier}
        </h2>
        <p className="mb-6 text-xl font-semibold text-gray-700 dark:text-gray-300">
          {option.price}
        </p>
        <ul className="mb-6 space-y-4 list-disc dark:text-gray-200">
          {option.benefits.map((benefit, i) => (
            <li key={i}>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                {benefit.title}
              </span>{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {benefit.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-200">
            Sponsor Options:
          </h3>
          {option.options.map((opt, i) => (
            <p
              key={i}
              className="text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              {opt.episodes}:{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {opt.price}
              </span>
            </p>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const ExampleContent4 = () => (
  <div className="grid gap-8 lg:grid-cols-1 max-w-[90%] md:max-w-[85%] mx-auto mb-16">
    {sponsorshipOptions.slice(3, 4).map((option, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className={`p-2  ${option.color}`}
      >
        <h2 className="mb-2 text-3xl font-bold text-gray-900 dark:text-gray-200">
          {option.tier}
        </h2>
        <p className="mb-6 text-xl font-semibold text-gray-700 dark:text-gray-300">
          {option.price}
        </p>
        <ul className="mb-6 space-y-4 list-disc dark:text-gray-200">
          {option.benefits.map((benefit, i) => (
            <li key={i}>
              <span className="text-lg font-bold text-gray-900 dark:text-gray-200">
                {benefit.title}
              </span>{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {benefit.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-200">
            Sponsor Options:
          </h3>
          {option.options.map((opt, i) => (
            <p
              key={i}
              className="text-lg font-semibold text-gray-700 dark:text-gray-300"
            >
              {opt.episodes}:{" "}
              <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                {opt.price}
              </span>
            </p>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);

const data = [
  {
    benefit: "Banner Display",
    title: true,
    gold: false,
    silver: false,
    bronze: false,
  },
  {
    benefit: "Dedicated Social Media Posts",
    title: true,
    gold: true,
    silver: true,
    bronze: false,
  },
  {
    benefit: "Exclusive Interview Opportunity",
    title: true,
    gold: false,
    silver: false,
    bronze: false,
  },
  {
    benefit: "Exclusive Naming Rights",
    title: true,
    gold: false,
    silver: false,
    bronze: false,
  },
  { benefit: "Mentions", title: true, gold: true, silver: true, bronze: true },
  {
    benefit: "Podcast Ads",
    title: true,
    gold: true,
    silver: false,
    bronze: false,
  },
  {
    benefit: "Prominent Logo Placement",
    title: true,
    gold: true,
    silver: true,
    bronze: true,
  },
  {
    benefit: "Website Feature",
    title: true,
    gold: true,
    silver: false,
    bronze: false,
  },
];
