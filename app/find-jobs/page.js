"use client";
import Header from "../components/header";
import Footer from "../components/footer";
import {raleway} from "../styles/fonts";
import { useState, useEffect } from 'react';
//
async function getJobs(search) {
    try {
        const response = await fetch(
            `https://api.adzuna.com/v1/api/jobs/ca/search/1?app_id=${process.env.NEXT_PUBLIC_ADZUNA_APP_ID}&app_key=${process.env.NEXT_PUBLIC_ADZUNA_APP_KEY}&what=${search}`,
            {
              headers: {
                'Accept': 'application/json'
              }
            }
          );
            if(!response.ok){
                console.log(response.status);
            }
        const data = await response.json();

        return data.results || [];

    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};
   

export default function Page() {
    const [jobs, setJobs] = useState([]);
    const [search, setSearch] = useState('');

    const loadJobs = async (searchQuery) => {
        const jobs = await getJobs(searchQuery);
        setJobs(jobs); 
    };

    useEffect(() => {
        if (search) {
            loadJobs(search);
        }
    
      }, [search]);

      const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.target.elements.search.value;
        setSearch(searchQuery);
      };


      return (
        <div className={`flex flex-col min-h-screen bg-white ${raleway.className}`}>
      <Header />
      <main className='flex-grow flex flex-col items-center justify-center mt-12 mb-12'>
        <h1 className="text-6xl  text-gray-700 font-bold mb-4">Find Jobs</h1>
        <form onSubmit={handleSearch} className="mb-8 w-full max-w-3xl">
          <input
            type="text"
            name="search"
            placeholder="Enter job title or keywords"
            className="w-full px-4 py-2 border border-[#033941] rounded-full  text-gray-700 "
          />
          <button type="submit" className="mt-4 bg-[#033941] text-white px-4 py-2 rounded-full hover:bg-[#022b31]">
            Search
          </button>
        </form>
        <ul className="w-full max-w-3xl">
          {jobs.map(job => (
            <li key={job.id} className="mb-4 p-4 border rounded shadow">
              <a href={job.redirect_url} target="_blank"  className="text-[#033941] hover:underline">
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-gray-700">{job.company.display_name}</p>
                <p className="text-gray-500">{job.location.display_name}</p>
                <p className="text-gray-600 mt-2">{job.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </div>
        
      );
    }

  