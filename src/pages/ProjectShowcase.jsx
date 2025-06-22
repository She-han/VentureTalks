import React, { useState, useEffect } from 'react';
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
  Lightbulb
} from 'lucide-react';

const ProjectShowcase = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const pastEvents = [
    {
      id: 1,
      title: "CS Paduna 2024",
      description: "Cultural flair showcasing creativity with the arts",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      category: "Cultural"
    },
    {
      id: 2,
      title: "Insurgex 1.0",
      description: "Intra university hackathon expanding horizons",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      category: "Hackathon"
    },
    {
      id: 3,
      title: "RushCoder",
      description: "Intra university hackathon for coding enthusiasts",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      category: "Competition"
    },
    {
      id: 4,
      title: "RURush Convoke 2.0",
      description: "Advanced programming and development workshop",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop",
      category: "Workshop"
    },
    {
      id: 5,
      title: "GDG Outreach Program",
      description: "Collaboration with Google Developers Group",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      category: "Outreach"
    },
    {
      id: 6,
      title: "Career Fair 2024",
      description: "Connecting students with industry opportunities",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      category: "Career"
    },
    {
      id: 7,
      title: "Road to Insurgex",
      description: "Preparation workshops for upcoming hackathon",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="bg-[#02235f] shadow-xl">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-6">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-4 bg-white rounded-full shadow-lg">
                <span className="text-3xl font-bold text-[#02235f]">CSSC</span>
              </div>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-6xl">
                VentureTalks
              </h1>
              <p className="mb-2 text-xl text-blue-100 md:text-2xl">
                Computer Science Students' Community
              </p>
              <p className="text-lg text-blue-200">
                Department of Computer Science • University of Ruhuna
              </p>
            </div>
            <div className="max-w-3xl p-6 mx-auto bg-white/10 backdrop-blur-sm rounded-2xl">
              <p className="text-lg leading-relaxed text-white">
                "Where innovation thrives, collaboration and technology meet..."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white shadow-md">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="flex space-x-8 overflow-x-auto">
            {['overview', 'community', 'events'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 border-b-2 font-semibold capitalize transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab
                    ? 'border-[#FD4101] text-[#FD4101]'
                    : 'border-transparent text-gray-600 hover:text-[#02235f]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="px-4 py-12 mx-auto max-w-7xl">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-16 animate-fade-in">
            {/* Project Overview */}
            <section className="p-8 bg-white shadow-xl rounded-3xl md:p-12">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-[#02235f] mb-6">Project Overview</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FD4101] to-[#02235f] mx-auto rounded-full"></div>
              </div>
              
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#02235f]/5 to-[#FD4101]/5 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-[#02235f] mb-4 flex items-center">
                      <Lightbulb className="w-6 h-6 mr-3 text-[#FD4101]" />
                      About VentureTalks
                    </h3>
                    <p className="text-lg leading-relaxed text-gray-700">
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
                        <h4 className="font-semibold text-[#02235f] text-lg">First Initiative: VentureTalks - Shorts</h4>
                        <p className="text-gray-600">12 short videos covering tech insights, business perspectives, and success stories with increased publicity.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-[#02235f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#02235f] text-lg">Main Objective</h4>
                        <p className="text-gray-600">Host distinguished individuals from technology and computer science fields, focusing on their journeys to success and latest IT advancements.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-[#FD4101] to-[#02235f] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Play className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#02235f] text-lg">Series Format</h4>
                        <p className="text-gray-600">10 episodes, each approximately one hour long, distributed across various social media platforms as complete episodes and short video snippets.</p>
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
                        className="p-4 transition-all duration-300 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:scale-105"
                      >
                        <feature.icon className="w-8 h-8 text-[#FD4101] mb-3" />
                        <h4 className="font-semibold text-[#02235f] text-sm mb-2">{feature.title}</h4>
                        <p className="text-xs text-gray-600">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Statistics */}
            <section className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-6 text-center transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:scale-105"
                >
                  <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold text-[#02235f] mb-2">{stat.value}</div>
                  <div className="font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </section>
          </div>
        )}

        {/* Community Tab */}
        {activeTab === 'community' && (
          <div className="space-y-12 animate-fade-in">
            <section className="p-8 bg-white shadow-xl rounded-3xl md:p-12">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-[#02235f] mb-6">Our Community</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FD4101] to-[#02235f] mx-auto rounded-full"></div>
              </div>

              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-[#02235f]/10 to-[#FD4101]/10 rounded-2xl p-6">
                    <h3 className="text-2xl font-bold text-[#02235f] mb-4">About CSSC</h3>
                    <p className="leading-relaxed text-gray-700">
                      The <strong>Computer Science Students' Community</strong> of the University of Ruhuna is a newly established 
                      society under the Department of Computer Science. This is a collaborative community that enhances 
                      the opportunities, knowledge, and awareness of undergraduates in computer science and information technology.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#02235f]">What We Do</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#FD4101] rounded-full"></div>
                        <span className="text-gray-700">Tech talks and webinars by industry specialists</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#02235f] rounded-full"></div>
                        <span className="text-gray-700">Seminars and hands-on training sessions</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#FD4101] rounded-full"></div>
                        <span className="text-gray-700">Hackathons and coding competitions</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#02235f] rounded-full"></div>
                        <span className="text-gray-700">Professional and educational growth programs</span>
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
                    <div className="bg-white border-2 border-[#02235f]/20 rounded-xl p-4 text-center">
                      <GraduationCap className="w-8 h-8 text-[#02235f] mx-auto mb-2" />
                      <div className="text-lg font-bold text-[#02235f]">Academic</div>
                      <div className="text-sm text-gray-600">Excellence</div>
                    </div>
                    <div className="bg-white border-2 border-[#FD4101]/20 rounded-xl p-4 text-center">
                      <Code className="w-8 h-8 text-[#FD4101] mx-auto mb-2" />
                      <div className="text-lg font-bold text-[#FD4101]">Technical</div>
                      <div className="text-sm text-gray-600">Innovation</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="space-y-12 animate-fade-in">
            <section className="p-8 bg-white shadow-xl rounded-3xl md:p-12">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold text-[#02235f] mb-6">Past Events</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FD4101] to-[#02235f] mx-auto rounded-full"></div>
                <p className="mt-4 text-lg text-gray-600">
                  Our community is renowned for spearheading events like the <strong>Rush Coder</strong> - the intra university hackathon 
                  and the latest <strong>Insurgex 1.0</strong> - the intra university hackathon, which expanded our horizons.
                </p>
              </div>

              <div className="mb-8">
                <div className="bg-gradient-to-r from-[#02235f]/10 to-[#FD4101]/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-[#02235f] mb-3">Special Collaboration</h3>
                  <p className="text-gray-700">
                    In collaboration with the <strong>Google Developers Group</strong>, we offered top-tier workshops. 
                    Our cultural flair is showcased in <strong>"Padura,"</strong> an event blending creativity with the arts.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {pastEvents.map((event, index) => (
                  <div 
                    key={event.id}
                    className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl hover:scale-105"
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
                      <h3 className="text-xl font-bold text-[#02235f] mb-3">{event.title}</h3>
                      <p className="leading-relaxed text-gray-600">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>

      {/* Footer Call to Action */}
      <div className="bg-[#02235f] py-16">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Share Your Journey?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-blue-100">
            Join us in inspiring the next generation of tech enthusiasts and contribute to 
            the growth of Sri Lanka's technology ecosystem.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <div className="p-4 text-white bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-center space-x-2">
                <Mic className="w-5 h-5" />
                <span className="font-semibold">Professional Production</span>
              </div>
            </div>
            <div className="p-4 text-white bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Wide Reach</span>
              </div>
            </div>
            <div className="p-4 text-white bg-white/10 backdrop-blur-sm rounded-xl">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Quality Content</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
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
    </div>
  );
};

export default ProjectShowcase;