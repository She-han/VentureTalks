import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, 
  Calendar, 
  Award, 
  Target, 
  Play, 
  Code, 
  Mic, 
  Globe, 
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  GraduationCap,
  Lightbulb,
  MapPin,
  
  Heart
} from 'lucide-react';


import cs1 from "../assets/images/cs1.jpg";
import cs2 from "../assets/images/cs5.jpg";
import cs3 from "../assets/images/cs7.jpg";
import cs5 from "../assets/images/slasscom.webp";
import cs6 from "../assets/images/cfair.webp";
import cs7 from "../assets/images/cs8.jpg";

import rp1 from "../assets/malinda_pic.jpg";
import rp2 from "../assets/sanjeewa_pic.webp";
import rp3 from "../assets/shalin-1.jpg";
import rp4 from "../assets/dhanika.jpeg";
import rp5 from "../assets/hameed_pic.jpeg";



const TabContent = ({ activeTab }) => {
  // Guest profiles data
  const guestProfiles = [
    {
      id: 1,
      name: "Mr. Malinda Alahakoon",
      title: "Education & Tech Expert",
      specialization: "AI Integration & Content Creation",
      image: rp1,
      bio: "Over a decade of lecturing experience at prestigious universities with expertise in AI integration and digital content creation.",
      achievements: ["10+ Years Teaching", "AI Workshop Leader", "Digital Content Expert"],
      location: "Sri Lanka",
      status: "Confirmed"
    },
 {
    id: 2,
    name: "Dr. Sanjiva Weerawarana",
    title: "Founder & CEO of WSO2",
    specialization: "Open-Source Technology & Enterprise Solutions",
    image: rp2,
    bio: "Founder of WSO2, a globally respected open-source company that has placed Sri Lanka on the world map for enterprise technology. Ph.D. from Purdue University with expertise in bridging research, education, and entrepreneurship.",
    achievements: ["WSO2 Founder", "Ph.D. Purdue University", "Open-Source Advocate", "Global Tech Leader"],
    location: "Sri Lanka",
    status: "Invited"
  },
  {
    id: 3,
    name: "Mr. Shalin Balasuriya",
    title: "Co-Founder of Spa Ceylon",
    specialization: "Ayurveda & Global Brand Development",
    image: rp3,
    bio: "Co-founder of Spa Ceylon, taking Sri Lankan Ayurveda to over 33 countries. Visionary leader in natural wellness, elegant branding, and cultural storytelling with advocacy for workplace wellness.",
    achievements: ["33+ Countries Presence", "Ayurveda Global Ambassador", "Cultural Brand Builder", "Wellness Advocate"],
    location: "Sri Lanka",
    status: "Invited"
  },
  {
    id: 4,
    name: "Mr. Dhanika Perera",
    title: "Founder of Bhasha Lanka & Tech Innovator",
    specialization: "Local Language Technology & Digital Payments",
    image: rp4,
    bio: "Founder of Bhasha Lanka while still an undergraduate, creator of revolutionary platforms Helakuru and PayHere. Transformed Sinhala digital communication and advanced Sri Lanka's digital economy.",
    achievements: ["Helakuru Creator", "PayHere Founder", "Digital Innovation Pioneer", "Language Technology Expert"],
    location: "Sri Lanka",
    status: "Invited"
  },
  {
    id: 5,
    name: "Mr. Fouzul Hameed",
    title: "Chairman of Hameedia Group",
    specialization: "Fashion Industry & Social Responsibility",
    image: rp5,
    bio: "Transformed Hameedia Group from a family tailoring shop into an internationally recognized fashion powerhouse. Founded My Friend Foundation and 'English for All' program, uplifting thousands of underprivileged children.",
    achievements: ["Global Fashion Leader", "Envoy London Expansion", "My Friend Foundation", "Social Impact Champion"],
    location: "Sri Lanka",
    status: "Invited"
  }

  ];

  // Past events data
  const pastEvents = [
    {
      id: 1,
      title: "CS Paduna 2024",
      description: "Cultural flair showcasing creativity with the arts",
      image: cs1,
      category: "Cultural"
    },
    {
      id: 2,
      title: "Insurgex 1.0",
      description: "Intra university hackathon expanding horizons",
      image: cs3,
      category: "Hackathon"
    },
    {
      id: 3,
      title: "IT and BPM Career Fair",
      description: "Connecting students with industry opportunities",
      image: cs5,
      category: "Workshop"
    },

    {
      id: 5,
      title: "GDG Outreach Program",
      description: "Collaboration with Google Developers Group",
      image: cs2,
      category: "Outreach"
    },
    {
      id: 6,
      title: "Career Fair 2025",
      description: "Connecting students with industry opportunities",
      image: cs6,
      category: "Career"
    },
    {
      id: 7,
      title: "Road to RushCoder",
      description: "Preparation workshops for upcoming hackathon",
      image: cs7,
      category: "Workshop"
    }
  ];

  const stats = [
    { label: "Active Members", value: "450+", icon: Users, color: "text-blue-600" },
    { label: "Events Conducted", value: "25+", icon: Calendar, color: "text-orange-600" },
    { label: "Industry Partners", value: "15+", icon: Building, color: "text-purple-600" },
    { label: "Success Stories", value: "100+", icon: Award, color: "text-green-600" }
  ];

  const features = [
    {
      icon: Mic,
      title: "Professional Podcast Series",
      description: "High-quality recording and production with industry-standard equipment"
    },
    {
      icon: Globe,
      title: "Wide Distribution",
      description: "Content distributed across multiple social media platforms and streaming services"
    },
    {
      icon: Target,
      title: "Targeted Audience",
      description: "Reaching 450+ active community members and thousands of tech enthusiasts"
    },
    {
      icon: Star,
      title: "Quality Content",
      description: "Meticulously curated discussions focusing on tech insights and success stories"
    }
  ];

  switch (activeTab) {
    case "venturetalks":
      return (
        <div className="p-6 shadow-xl bg-gray-50 dark:bg-gray-800 md:p-10 rounded-3xl">
          {/* Project Overview */}
          <section className="mb-16">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-[#02235f] dark:text-[#FD4101] mb-6">What is VentureTalks?</h2>
              <div className="w-24 h-1 bg-[#FD4101] mx-auto rounded-full"></div>
            </div>
            
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#02235f]/5 to-[#FD4101]/5 dark:from-[#02235f]/20 dark:to-[#FD4101]/20 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-[#02235f] dark:text-[#FD4101] mb-4 flex items-center">
                    <Lightbulb className="w-6 h-6 mr-3 text-[#FD4101]" />
                    About VentureTalks
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
                    "VentureTalks" is a series of podcast programs, meticulously curated by the 
                    <strong> Computer Science Students' Community (CSSC)</strong> of the Department of Computer Science 
                    at the University of Ruhuna.
                  </p>
                </div>

                <div className="space-y-4 lg:space-y-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#FD4101] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#02235f] dark:text-[#FD4101] text-lg">First Initiative: VentureTalks - Shorts</h4>
                      <p className="text-gray-600 dark:text-gray-300">12 short videos covering tech insights, business perspectives, and success stories with increased publicity.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#02235f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#02235f] dark:text-[#FD4101] text-lg">Main Objective</h4>
                      <p className="text-gray-600 dark:text-gray-300">Host distinguished individuals from technology and computer science fields, focusing on their journeys to success and latest IT advancements.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#FD4101] to-[#02235f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Play className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#02235f] dark:text-[#FD4101] text-lg">Series Format</h4>
                      <p className="text-gray-600 dark:text-gray-300">10 episodes, each approximately one hour long, distributed across various social media platforms as complete episodes and short video snippets.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#02235f] rounded-2xl p-8 text-white">
                  <h3 className="mb-6 text-2xl font-medium">Our Mission</h3>
                  <p className="mb-6 text-lg font-medium leading-relaxed">
                    Our aspiration through this initiative is to enhance the reputation of our university 
                    and to foster the knowledge of IT enthusiasts about the industry.
                  </p>
                  <div className="flex items-center text-blue-100">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    <span>Building bridges between academia and industry</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index}
                      className="p-4 transition-all duration-300 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 rounded-xl hover:shadow-lg hover:scale-105"
                    >
                      <feature.icon className="w-8 h-8 text-[#FD4101] mb-3" />
                      <h4 className="font-semibold text-[#02235f] dark:text-[#FD4101] text-sm mb-2">{feature.title}</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Statistics */}
          <section className="grid grid-cols-2 gap-6 lg:mb-12 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 text-center transition-all duration-300 bg-white shadow-lg dark:bg-gray-700 rounded-2xl hover:shadow-xl hover:scale-105"
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <div className="text-3xl font-bold text-[#02235f] dark:text-[#FD4101] mb-2">{stat.value}</div>
                <div className="font-medium text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Organizing Committee
          <div className="mt-16">
            <div className="mb-6 text-2xl font-semibold text-[#02235f] dark:text-[#FD4101]">
              Organizing Committee
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2 rounded-xl">
              <div className="overflow-hidden rounded-xl">
                <img src={oc1} className="w-full h-auto" alt="Organizing Committee 1" />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img src={oc2} className="w-full h-auto" alt="Organizing Committee 2" />
              </div>
            </div>
          </div> */}
        </div>
      );

    case "cssc":
      return (
        <div className="p-6 shadow-xl bg-gray-50 dark:bg-gray-800 md:p-10 rounded-3xl">
          {/* Community Section */}
          <section className="mb-24">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-[#02235f] dark:text-[#FD4101] mb-6">Our Community</h2>
              <div className="w-24 h-1 bg-[#FD4101] mx-auto rounded-full"></div>
            </div>

            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#02235f]/10 to-[#FD4101]/10 dark:from-[#02235f]/20 dark:to-[#FD4101]/20 rounded-2xl p-6">
                  <h3 className="text-2xl font-bold text-[#02235f] dark:text-[#FD4101] mb-4">About CSSC</h3>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-200">
                    The <strong>Computer Science Students' Community</strong> of the University of Ruhuna is a newly established 
                    society under the Department of Computer Science. This is a collaborative community that enhances 
                    the opportunities, knowledge, and awareness of undergraduates in computer science and information technology.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#02235f] dark:text-[#FD4101]">What We Do</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FD4101] rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Tech talks and webinars by industry specialists</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#02235f] rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Seminars and hands-on training sessions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#FD4101] rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Hackathons and coding competitions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#02235f] rounded-full"></div>
                      <span className="text-gray-700 dark:text-gray-300">Professional and educational growth programs</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 lg:space-y-8">
                <div className="bg-[#02235f] rounded-2xl p-8 text-white text-center">
                  <Users className="w-16 h-16 mx-auto mb-4" />
                  <div className="mb-2 text-5xl font-bold">450+</div>
                  <div className="text-xl">Active Members</div>
                  <p className="mt-4 text-blue-100">
                    One of the most outstanding societies at the University of Ruhuna
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-700 border-2 border-[#02235f]/20 rounded-xl p-4 text-center">
                    <GraduationCap className="w-8 h-8 text-[#02235f] mx-auto mb-2" />
                    <div className="text-lg font-bold text-[#02235f] dark:text-[#FD4101]">Academic</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Excellence</div>
                  </div>
                  <div className="bg-white dark:bg-gray-700 border-2 border-[#FD4101]/20 rounded-xl p-4 text-center">
                    <Code className="w-8 h-8 text-[#FD4101] mx-auto mb-2" />
                    <div className="text-lg font-bold text-[#FD4101]">Technical</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Past Events Section */}
          <section className="mb-16 ">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-[#02235f] dark:text-[#FD4101] mb-4">Past Events</h2>
              <div className="w-24 h-1 bg-[#FD4101] mx-auto rounded-full"></div>
 
            </div>

            <div className="mb-8">
              <div className="bg-gradient-to-r from-[#02235f]/10 to-[#FD4101]/10 dark:from-[#02235f]/20 dark:to-[#FD4101]/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#02235f] dark:text-[#FD4101] mb-1">Hackthons</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-200">
                Our community is renowned for spearheading events like the <strong>Rush Coder</strong> - the intra university hackathon 
                and the latest <strong>Insurgex 1.0</strong> - the intra university hackathon, which expanded our horizons.
                </p>
                <h3 className="text-xl font-bold text-[#02235f] dark:text-[#FD4101] mb-1">Special Collaborations</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-200">
                  In collaboration with the <strong>Google Developers Group</strong>, we offered top-tier workshops. 
                  
                </p>
                <h3 className="text-xl font-bold text-[#02235f] dark:text-[#FD4101] mb-1">Cultural Events</h3>
                <p className="mb-4 text-gray-700 dark:text-gray-200">
                 Our cultural flair is showcased in <strong>"Padura,"</strong> an event blending creativity with the arts.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, index) => (
                <div 
                  key={event.id}
                  className="overflow-hidden transition-all duration-300 bg-white shadow-lg dark:bg-gray-700 rounded-2xl hover:shadow-xl hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="object-cover w-full h-48"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
                        event.category === 'Hackathon' ? 'bg-[#FD4101]' :
                        event.category === 'Workshop' ? 'bg-[#02235f]' :
                        event.category === 'Cultural' ? 'bg-purple-500' :
                        event.category === 'Competition' ? 'bg-green-500' :
                        event.category === 'Outreach' ? 'bg-blue-500' :
                        'bg-gray-500'
                      }`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#02235f] dark:text-[#FD4101] mb-3">{event.title}</h3>
                    <p className="leading-relaxed text-gray-600 dark:text-gray-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Photo Gallery 
          <div className="grid grid-cols-1 gap-4 mt-8 bg-gray-200 rounded-lg md:grid-cols-3 dark:bg-gray-800">
            <div className="grid grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cs1}
                  alt="CSSC Event 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cs2}
                  alt="CSSC Event 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="grid grid-rows-3 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cs3}
                  alt="CSSC Event 3"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cs4}
                  alt="CSSC Event 4"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cs7}
                  alt="CSSC Event 7"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            <div className="grid grid-rows-2 gap-4">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cs6}
                  alt="CSSC Event 6"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={cs5}
                  alt="CSSC Event 5"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>*/}
        </div>
      );

    case "profiles":
      return (
        <div className="p-6 mb-16 shadow-xl bg-gray-50 dark:bg-gray-800 md:p-10 rounded-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-[#02235f] dark:text-[#FD4101] mb-6">Guest Profiles</h2>
            <div className="w-24 h-1 bg-[#FD4101] mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Meet our distinguished guests who are shaping the future of technology and inspiring the next generation of innovators.
            </p>
          </div>



          {/* Guest Profiles Grid */}
          <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-3 rounded-3xl">
            {guestProfiles.map((guest, index) => (
              <div 
                key={guest.id}
                className="overflow-hidden transition-all duration-300 shadow-lg bg-gray-50 dark:bg-gray-700 rounded-2xl hover:shadow-xl hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Profile Header */}
                <div className="relative">
                  <div className="bg-[#02235f]  h-24"></div>
                  <div className="absolute -bottom-12 left-6">
                    <div className="relative">
                      <img 
                        src={guest.image} 
                        alt={guest.name}
                        className="object-cover w-24 h-24 border-4 border-white rounded-full shadow-lg"
                      />
                      <div className="absolute -bottom-1 -right-1">
                     
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full text-white ${
                      guest.status === 'Confirmed' ? 'bg-green-500' :
                      guest.status === 'Invited' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}>
                      {guest.status}
                    </span>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="p-6 pt-16">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#02235f] dark:text-[#FD4101] mb-1">{guest.name}</h3>
                    <p className="mb-2 text-lg font-medium text-gray-700 dark:text-gray-300">{guest.title}</p>
                    <p className="text-sm text-[#FD4101] font-medium">{guest.specialization}</p>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600 dark:text-gray-400">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{guest.location}</span>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {guest.bio}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#02235f] dark:text-[#FD4101] mb-2 flex items-center">
                
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {guest.achievements.map((achievement, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs bg-[#02235f]/10 text-[#02235f] dark:bg-[#FD4101]/20 dark:text-[#FD4101] rounded-md"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between">
                    <button className="flex items-center space-x-2 text-[#FD4101] hover:text-[#02235f] transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm font-medium">Follow</span>
                    </button>
                    <button className="px-4 py-2 bg-[#FD4101] text-white text-sm font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                      View Full Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action 
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#02235f] to-[#FD4101] rounded-2xl p-8 text-white">
              <h3 className="mb-4 text-2xl font-bold">Interested in Being a Guest?</h3>
              <p className="mb-6 text-lg opacity-90">
                Join our distinguished panel of experts and share your journey with the next generation of tech leaders.
              </p>
              <button className="px-8 py-3 bg-white text-[#02235f] font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Apply to be a Guest
              </button>
            </div>
          </div>*/}
        </div>
      );

    default:
      return null;
  }
};

const About = () => {
  const [activeTab, setActiveTab] = useState("venturetalks");

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      
      <div className="w-[81%] mx-auto my-16 ">
        {/* Tabs Navigation */}
        <div className="flex items-center justify-around mb-6 space-x-6">
          <button
            onClick={() => setActiveTab("venturetalks")}
            className={`text-xl font-semibold ${
              activeTab === "venturetalks"
                ? "text-blue-600 w-48 bg-white dark:bg-gray-800 rounded-3xl lg:rounded-full p-4  shadow-lg"
                : "text-gray-900 dark:text-gray-200 shadow-lg rounded-3xl lg:rounded-full"
            } hover:bg-clip-padding hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-3xl lg:hover:rounded-full p-4 w-48 transition-all duration-300`}
          >
            Venture Talks
          </button>
          <button
            onClick={() => setActiveTab("cssc")}
            className={`text-xl font-semibold ${
              activeTab === "cssc"
                ? "text-blue-600 w-48 bg-white   dark:bg-gray-800 rounded-3xl lg:rounded-full p-4 shadow-lg"
                : "text-gray-900 dark:text-gray-200 shadow-lg rounded-3xl lg:rounded-full"
            } hover:bg-clip-padding hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-3xl lg:hover:rounded-full p-4 w-48 transition-all duration-300`}
          >
            CSSC
          </button>
          <button
            onClick={() => setActiveTab("profiles")}
            className={`text-xl font-semibold ${
              activeTab === "profiles"
                ? "text-blue-600 w-48 bg-white dark:bg-gray-800 rounded-3xl lg:rounded-full p-4 shadow-lg"
                : "text-gray-900 dark:text-gray-200 shadow-lg rounded-3xl lg:rounded-full"
            } hover:bg-clip-padding hover:bg-gray-200 dark:hover:bg-gray-800 hover:rounded-3xl lg:hover:rounded-full p-4 w-48 transition-all duration-300`}
          >
            Guest Profiles
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
     
   

      <style jsx>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .grid > * {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .grid > *:nth-child(1) { animation-delay: 0.1s; }
        .grid > *:nth-child(2) { animation-delay: 0.2s; }
        .grid > *:nth-child(3) { animation-delay: 0.3s; }
        .grid > *:nth-child(4) { animation-delay: 0.4s; }
        .grid > *:nth-child(5) { animation-delay: 0.5s; }
        .grid > *:nth-child(6) { animation-delay: 0.6s; }
        .grid > *:nth-child(7) { animation-delay: 0.7s; }
      `}</style>
    </>
  );
};

export default About;