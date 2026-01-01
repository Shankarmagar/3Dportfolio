// Shared types for API responses

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}

// API response types
export interface ApiProject {
  id: number;
  name: string;
  details: string;
  image_url: string;
  skills: string[];
  demo_link: string;
  github_link: string;
}

export interface ApiExperience {
  id: number;
  title: string;
  company_name: string;
  start_date: string;
  end_date: string;
  details: string;
  location: string;
  skills: string[];
}

export interface ApiResponse<T> {
  statusCode: number;
  json: {
    success: boolean;
    data: T;
  };
}

