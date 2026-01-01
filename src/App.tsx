import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Feedback from './components/Feedback';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Tech from './components/Tech';
import Works from './components/Works';
import Certificates from './components/Certificates';
import type { Project, ApiProject, ApiExperience, ApiResponse } from './data/types';
import website from './assets/Default.jpg';

interface AppExperience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

const formatDateRange = (startDate: string, endDate: string): string => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short' 
    });
  };

  const formattedStart = formatDate(startDate);
  
  if (endDate.toLowerCase() === 'present' || !endDate) {
    return `${formattedStart} - Present`;
  }
  
  const formattedEnd = formatDate(endDate);
  return `${formattedStart} - ${formattedEnd}`;
};

function App() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<AppExperience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch projects
        const projectsResponse = await fetch(
          `${import.meta.env.VITE_RENDER_API}/api/projects/`
        );
        
        if (!projectsResponse.ok) {
          throw new Error('Failed to fetch projects');
        }

        const projectsData: ApiResponse<ApiProject[]> = await projectsResponse.json();
        
        if (projectsData.json.success) {
          setProjects(
            projectsData.json.data.map((item) => ({
              title: item.name,
              description: item.details,
              tags: item.skills,
              image: item.image_url || website,
              link: item.github_link || item.demo_link || "#",
            }))
          );
        }

        // Fetch experiences
        const experienceResponse = await fetch(
          `${import.meta.env.VITE_RENDER_API}/api/journey`
        );
        
        if (!experienceResponse.ok) {
          throw new Error('Failed to fetch experiences');
        }

        const experienceData: ApiResponse<ApiExperience[]> = await experienceResponse.json();
        
        if (experienceData.json.success) {
          setExperiences(
            experienceData.json.data.map((item) => ({
              title: item.title,
              company: item.company_name,
              period: formatDateRange(item.start_date, item.end_date),
              location: item.location,
              description: item.details,
              technologies: item.skills || []
            }))
          );
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <Tech />
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
          <Certificates />
          <Feedback />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    );
  }

  if (error) {
    return (
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-red-400 text-center">
              <p className="text-lg mb-2">Error loading data</p>
              <p className="text-sm text-gray-400">{error}</p>
            </div>
          </div>
          <Tech />
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="text-red-400 text-center">
              <p className="text-lg mb-2">Error loading data</p>
              <p className="text-sm text-gray-400">{error}</p>
            </div>
          </div>
          <Certificates />
          <Feedback />
          <div className='relative z-0'>
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    );
  }

  return (
    <>
      <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
        </div>
        <About />
        <Experience experiences={experiences} />
        <Tech />
        <Works projects={projects} />
        <Certificates />
        <Feedback />
        <div className='relative z-0'>
          <Contact />
        </div>

      </div>
      </BrowserRouter>
    </>
  )
}

export default App;

