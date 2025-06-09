import Image from "next/image";
import {
  DollarSign,
  Zap,
  Leaf,
  Home,
  Briefcase,
  BatteryCharging,
  ArrowRight,
} from "lucide-react";
import ServiceCard from "./components/ServicePoint";
import FaqItem from "./components/FaqItems";
import BlogCard from "./components/BlogCard";
import CustomAccordion from "./components/CustomAccordion";

export default function Page() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Significant Cost Savings",
      description:
        "Reduce your electricity bills by up to 70% with solar power.",
    },
    {
      icon: Zap,
      title: "Energy Independence",
      description:
        "Break free from unpredictable utility rates and power outages.",
    },
    {
      icon: Leaf,
      title: "Eco-Friendly Solution",
      description: "Lower carbon emissions and promote a cleaner planet.",
    },
    {
      icon: Home,
      title: "Increased Property Value",
      description: "Homes with solar panels sell faster and at higher prices.",
    },
  ];

  const services = [
    {
      icon: Home,
      title: "Residential Solar",
      description:
        "Power your home with clean energy and save on utility costs.",
    },
    {
      icon: Briefcase,
      title: "Commercial Solar",
      description:
        "Optimize energy efficiency and reduce operational expenses.",
    },
    {
      icon: BatteryCharging,
      title: "Solar Battery Storage",
      description: "Store energy for uninterrupted power supply.",
    },
    {
      icon: Zap,
      title: "EV Charging Stations",
      description: "Smart solutions for electric vehicle owners.",
    },
  ];

  const faqs = [
    {
      question: "What makes Solvix different from other solar providers?",
      answer:
        "At Solvix, we deliver efficient solar technology, expert installation, and reliable support—making clean energy accessible and affordable for all.",
    },
    {
      question: "What types of solar solutions does Solvix offer?",
      answer:
        "We provide residential, commercial, off-grid, and battery storage solutions, as well as EV charging stations.",
    },
    {
      question: "How does the consultation process work?",
      answer:
        "We start with a free consultation to understand your energy needs, property, and budget goals.",
    },
    {
      question: "How much does a Solvix solar system cost?",
      answer:
        "Solar costs vary by system size, energy use, and location—but at Solvix, we're committed to making solar accessible and affordable for all.",
    },
  ];

  const blogPosts = [
    {
      category: "Solar Policies & Incentives",
      date: "February 12, 2025",
      title: "Government Incentives & Rebates for Solar Energy",
      image: "/wind-turbines.jpeg",
      alt: "Green plant with a miniature wind turbine and solar panel",
    },
    {
      category: "Cost Savings",
      date: "January 28, 2025",
      title: "How Solar Energy Can Save You Thousands",
      image: "/wind-turbines.jpeg",
      alt: "House made of dollar bills with solar panels",
    },
    {
      category: "Solar Industry Trends",
      date: "January 15, 2025",
      title: "Top 5 Reasons to Invest in Solar Panels in 2025",
      image: "/wind-turbines.jpeg",
      alt: "Plant growing in a jar with coins and a solar panel in the background",
    },
  ];

  return (
    <div>
      <section className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-6">
              <div className="bg-lime-50 inline-block py-2 px-4 rounded-full">
                <p className="text-lime-900 font-medium text-sm">
                  New Energy For Our System
                </p>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                <span className="text-lime-700">Clean</span> Renewable <br />
                Limitless <span className="text-lime-700">Energy</span>
              </h1>

              <p className="text-gray-600 text-lg">
                Switch to solar with Solvix and experience cost savings, energy
                independence, and a greener environment.
              </p>

              <button className="bg-lime-900 px-6 py-3 rounded-full text-white font-medium text-base hover:bg-lime-800 transition duration-300">
                Get Free Consultation
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 bg-lime-100 text-gray-600 p-6 rounded-lg mt-8">
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-lime-800">10k+</h2>
                <p className="text-sm">Solar Installations</p>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-lime-800">100k</h2>
                <p className="text-sm">Tons of CO2 Reduced</p>
              </div>
              <div className="text-center">
                <h2 className="text-3xl font-semibold text-lime-800">70%</h2>
                <p className="text-sm">Up to Savings</p>
              </div>
            </div>
          </div>

          <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
            <img
              src="https://media.wired.com/photos/63227cb600704d14b5ffb891/3:2/w_2400,h_1600,c_limit/windturbines_Science_GettyImages-1203659530.jpg"
              alt="Wind turbines generating clean energy"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-16 px-4 text-center">
        <p className="text-lime-500 text-sm font-semibold mb-2">// SERVICES</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
          Our Solar Solutions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      <section className="container mx-auto">
        <CustomAccordion items={faqs} />
      </section>

      <section className="bg-white py-16 px-4 container mx-auto text-center">
        <p className="text-lime-500 text-sm font-semibold mb-2">
          // TESTIMONIALS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 p-6 md:p-10 rounded-lg max-w-4xl mx-auto">
          <div
            className="relative rounded-lg overflow-hidden"
            style={{ minHeight: 300 }}
          >
            <Image
              src="/old_man.jpg"
              alt="A man with glasses smiling"
              fill
              className="object-cover"
            />
          </div>

          {/* Text content */}
          <div className="text-left flex flex-col justify-center space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">
              A Game-Changer For My Home!
            </h3>
            <p className="text-gray-700 text-lg">
              Switching to Solvix was one of the best decisions for my family.
              Our electricity bills have dropped by nearly 70%, and we feel
              great knowing we're contributing to a cleaner planet. The team was
              incredibly professional, and the installation process was
              seamless. Highly recommended!
            </p>
            <div>
              <p className="font-semibold text-lime-700">John Darell</p>
              <p className="text-gray-600 text-sm">Los Angeles, CA</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-lime-950 text-white py-16 px-6 md:px-20">
        <div className="container mx-auto grid gap-12 md:grid-cols-2 items-stretch">
          {/* Left: Text */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <p className="text-lime-400 uppercase text-sm font-semibold">
                // Our Work
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-4 mb-12">
                Switching To Solar
                <br />
                In 3 Easy Steps
              </h2>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="mb-8 md:mb-0 md:mr-6">
                <h3 className="text-lime-300 font-bold text-lg">
                  01 Consultation
                </h3>
                <p className="text-sm mt-2 text-lime-100">
                  Get a free energy audit and custom solar solution.
                </p>
              </div>

              <div className="mb-8 md:mb-0 md:mx-6">
                <h3 className="text-lime-300 font-bold text-lg">
                  02 Installation
                </h3>
                <p className="text-sm mt-2 text-lime-100">
                  Our expert team ensures a smooth and quick installation.
                </p>
              </div>

              <div className="md:ml-6">
                <h3 className="text-lime-300 font-bold text-lg">
                  03 Savings Begin
                </h3>
                <p className="text-sm mt-2 text-lime-100">
                  Enjoy reduced energy bills and sustainable living.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative col-span-2 w-full h-64 rounded-lg overflow-hidden">
              <Image
                src="/wind-turbines.jpeg"
                alt="Wind Turbines"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-32 rounded-lg overflow-hidden">
              <Image
                src="/wind-turbines.jpeg"
                alt="Solar Panels"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-32 rounded-lg overflow-hidden">
              <Image
                src="/wind-turbines.jpeg"
                alt="Green Energy"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 container mx-auto text-center">
        <p className="text-lime-500 text-sm font-semibold mb-2">// FAQ</p>
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12 text-gray-800">
          Frequently Asked Questions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 text-left">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4 container mx-auto text-center">
        <p className="text-lime-500 text-sm font-semibold mb-2">// BLOG</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
          Stay Informed With Expert Insights, Tips About Solar Energy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              alt={post.alt}
              category={post.category}
              date={post.date}
              title={post.title}
            />
          ))}
        </div>
      </section>

      <section className="bg-lime-50 py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-white text-lime-800 text-sm font-medium py-2 px-4 rounded-full inline-block mb-8">
            New Energy For Our System
          </div>
          <h2 className="text-6xl font-bold mb-6 text-lime-900">
            Get A Free Quote Today!
          </h2>
          <p className="text-gray-700 text-lg max-w-xl mx-auto mb-10">
            Interested in switching to solar? Let's work together to find the
            perfect solution for your home or business.
          </p>
          <button className="bg-emerald-900 text-white font-medium py-3 px-6 rounded-full inline-flex items-center space-x-2 hover:bg-emerald-800 transition">
            <span>Request a Free Quote</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
