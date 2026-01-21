import { ResumeData, SectionConfig } from '@/types/portfolio';

export const portfolioData: ResumeData = {
  "personalInfo": {
    "name": "Aman Kumar",
    "title": "Software Engineer",
    "email": "amanmedhir7@gmail.com",
    "phone": "8607222001",
    "linkedin": "",
    "github": "",
    "location": "Haryana, India",
    "summary": "Software Engineer with a background in Computer Engineering from NIT Kurukshetra and experience in API development and database design. Skilled in languages such as C/C++, Python, and SQL, with a strong foundation in algorithms, data structures, and DBMS. Proven problem solver with a track record of competing in national hackathons and leading technical events."
  },
  "experience": [
    {
      "title": "Software Engineer",
      "company": "MAQ SOFTWARE",
      "dates": "September 2025 – present",
      "description": "Responsible for Backend API Development, designing relational database schemas, and implementing secure authentication.",
      "highlights": [
        "Designed and optimized API endpoints for secure, efficient data exchange.",
        "Improved performance and reliability through API development.",
        "Implemented secure authentication and authorization methods for application endpoints."
      ]
    }
  ],
  "education": [
    {
      "degree": "B.Tech in Computer Engineering",
      "institution": "National Institute of Technology Kurukshetra",
      "years": "Dec 2021 – June 2025",
      "gpa": "7.5/10"
    },
    {
      "degree": "Senior Secondary (10+2)",
      "institution": "Arya Senior Secondary School, Gharaunda",
      "years": "Apr 2019 – Mar 2020",
      "gpa": "95.8%"
    }
  ],
  "skills": {
    "frontend": [],
    "backend": [],
    "devops": [],
    "additional": []
  },
  "projects": [
    {
      "name": "Medicinal Plant Identification using Deep Learning",
      "description": "Built a CNN-based classifier for 60 plant species, developed a Flask web app for real-time image upload and prediction.",
      "technologies": [
        "CNN",
        "OpenCV",
        "Flask"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "LLM and HLM-Powered Dockerfile Generator",
      "description": "Created a CLI tool leveraging LLaMA 3 and Gemini to auto-generate Dockerfiles using prompt engineering.",
      "technologies": [
        "Docker",
        "LLaMA 3",
        "Gemini"
      ],
      "link": "",
      "github": ""
    },
    {
      "name": "Delhi Metro Map Simulator in C++",
      "description": "Developed a graph-based C++ application implementing Dijkstra’s algorithm to compute shortest travel distances.",
      "technologies": [
        "C++",
        "Graph Algorithms"
      ],
      "link": "",
      "github": ""
    }
  ]
};

export const sectionConfig: SectionConfig = {
  "hero": "falling-snow",
  "about": "split",
  "experience": "timeline",
  "projects": "grid",
  "skills": "tags",
  "skillsDisplay": "separate",
  "contact": "simple",
  "colorPalette": "slate"
};
