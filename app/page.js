import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import {raleway} from "./styles/fonts";

export default function Home() {
  return (
    <div className={`flex flex-col min-h-screen ${raleway.className}`}>
    
      <Header />
      <main className='flex-grow flex flex-col items-center justify-center mt-12 mb-12'>
      <h1 className="text-6xl font-bold mb-4">Achilles Talent Solutions</h1>
      <p className='text-center text-lg mb-8 px-5 max-w-3xl'>
        Welcome to Achilles Talent Solutions. We are a recruitment agency that
        specializes in finding the right candidates for the right jobs. We
        believe that the right job can change a persons life, and we are
        committed to finding the right job for you.
      </p>
      <div className='shadow-xl'>
      <Image
          src="/images/building.jpg"
          alt='computer'
          width={900} 
          height={300} 
        />
        </div>
        <div className="flex space-x-4 mt-8">
          <button className="bg-[#033941] text-white px-8 py-4 rounded-full hover:bg-[#022b31] shadow-lg">
            Find Jobs
          </button>
          <button className="border border-[#033941] text-[#033941] px-8 py-4 rounded-full hover:bg-gray-100 shadow-lg">
            Contact Us
          </button>
        </div>

      </main>
      <Footer />
    </div>
  );
}
