import { useState } from "react";
import { Link } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import {
  Leaf,
  Truck,
  Factory,
  Users,
  Phone,
  Mail,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import logo from "../public/logo.png";
import pellets from "../public/pellets.jpg";
import brie from "../public/brie.jpeg";
import haystack from "../public/haystack.webp";
import vision from "../public/colly.png";
import bg from "../public/bg.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        {isOpen ? (
          <Minus className="w-6 h-6 text-[#2a4901]" />
        ) : (
          <Plus className="w-6 h-6 text-[#2a4901]" />
        )}
      </button>
      {isOpen && (
        <div className="mt-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-[#2a4901] shadow-md z-50">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="Vikriti Logo" className="h-10" />
            </div>
            <div className="hidden md:flex space-x-8">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="text-white hover:text-[#fff] cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="products"
                smooth={true}
                duration={500}
                className="text-white hover:text-[#fff] cursor-pointer"
              >
                Products
              </Link>
              <Link
                to="faq"
                smooth={true}
                duration={500}
                className="text-white hover:text-[#fff] cursor-pointer"
              >
                FAQ
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-white hover:text-[#fff] cursor-pointer"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="home"
        className="text-white pt-24 py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Vikriti
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Solving for your biomass-related needs at your fingertips
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Creating India's first organised and digitally-enabled biomass
            supply chain solution
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#2a4901] mb-8 text-center">
              Our Mission
            </h2>
            <div className="bg-[#78886a] text-white rounded-lg shadow-lg p-8">
              <p className="text-lg leading-relaxed">
                India produces over 800 million tonnes of agricultural residue,
                out of which over 250 million tonnes is burnt or wasted. Vikriti
                aims to solve for this 250MMT wasted residue, and strives to put
                the entire 800+ MMT biomass to its best utilisation, while
                creating value for farmers, and help India achieve its social
                and environmental goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${vision})` }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-[#78886a] bg-opacity-80 text-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-[#2a4901] mb-8 text-center">
              Our Vision
            </h2>
            <p className="text-lg leading-relaxed">
              Vikriti envisions to ensure that each and every unit of biomass
              produced in India is put to its best utilisation and doesn't go
              wasted, while creating value for all stakeholders in this
              ecosystem.
            </p>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#2a4901] mb-12 text-center">
            Our Products
          </h2>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            className="max-w-4xl"
          >
            <SwiperSlide>
              <div className="bg-[#78886a] text-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={pellets}
                  alt="Biomass Pellets"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">Biomass Pellets</h3>
                <p className="text-gray-100 mb-4">
                  High-quality compressed biomass pellets
                </p>
                <p className="text-2xl font-bold">₹8,000/ton</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#78886a] text-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={brie}
                  alt="Briquettes"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">Briquettes</h3>
                <p className="text-gray-100 mb-4">
                  Compressed agricultural waste briquettes
                </p>
                <p className="text-2xl font-bold">₹7,500/ton</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#78886a] text-white p-8 rounded-lg shadow-lg text-center">
                <img
                  src={haystack}
                  alt="Raw Biomass"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-2">Raw Biomass</h3>
                <p className="text-gray-100 mb-4">
                  Unprocessed agricultural waste
                </p>
                <p className="text-2xl font-bold">₹5,000/ton</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-bold text-[#2a4901] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto text-[#2a4901] bg-[#F9FAFB] bg-opacity-80 rounded-lg shadow-lg p-8">
            <FAQItem
              question="How do I place an order?"
              answer="You can place an order through our website by filling out the inquiry form, specifying the type and quantity of biomass required. Our team will then contact you with the best options."
            />
            <FAQItem
              question="How do you ensure the quality of biomass?"
              answer="All our biomass products undergo strict quality checks, including moisture content, calorific value, and impurity tests, to ensure high standards. We integrate processes that allow you to procure from us all round the year!"
            />
            <FAQItem
              question="How is the biomass delivered?"
              answer="We partner with a reliable logistics network to ensure timely and efficient delivery to your location. Delivery timelines vary based on order size and distance."
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#78886a] text-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#2a4901] rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Sustainable Solutions
              </h3>
              <p>Converting agricultural waste into valuable resources</p>
            </div>

            <div className="bg-[#78886a] text-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#2a4901] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Efficient Supply Chain
              </h3>
              <p>Digitally-enabled logistics and distribution network</p>
            </div>

            <div className="bg-[#78886a] text-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#2a4901] rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rural Development</h3>
              <p>Supporting rural enterprises and FPOs</p>
            </div>

            <div className="bg-[#78886a] text-white p-6 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#2a4901] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Farmer Empowerment</h3>
              <p>Creating value for farmers through waste utilization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#2a4901] text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <img
                src={logo}
                alt="Vikriti Logo"
                className="h-12 mb-4"
              />
              <p className="text-sm">
                Leading the way in sustainable biomass solutions for a greener
                future.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="home"
                    smooth={true}
                    duration={500}
                    className="hover:text-gray-300 cursor-pointer"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="products"
                    smooth={true}
                    duration={500}
                    className="hover:text-gray-300 cursor-pointer"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="faq"
                    smooth={true}
                    duration={500}
                    className="hover:text-gray-300 cursor-pointer"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>contact@vikriti.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Bangalore, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2">
                <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 1:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8 text-center">
            <p>© 2025 Vikriti. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
