import exaltersChurchImg from '../assets/exalters-church.png';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string | any;
  category: 'Web Dev';
  //category: 'Web Dev' | 'AI' | 'SaaS' | 'Cloud';
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  details: {
    problem: string;
    solution: string;
    keyFeatures: string[];
    screenshots: (string | any)[];
  };
}

export const projects: Project[] = [
  {
    id: "exalters-church",
    title: "Exalters Church Website",
    description: "Modern, responsive church website ",
    thumbnail: exaltersChurchImg,
    category: "Web Dev",
    stack: ["HTML5", "CSS3", "JavaScript", "WordPress"],
    githubUrl: "https://github.com/joehanavarghese/exalters-church",
    liveUrl: "https://www.exalterschurch.com",
    details: {
      problem: "Need for a modern, accessible church website with comprehensive management features",
      solution: "Developed a full-featured church website with integrated management system",
      keyFeatures: [
        "User management system",
        "Event scheduling",
        "Donation management",
        "Responsive design",
        "Content management system"
      ],
      screenshots: [
        exaltersChurchImg,
        exaltersChurchImg
      ]
    }
  },
 /*
  {
    id: "1",
    title: "feat(cloud): Implement serverless analytics platform",
    description: "Real-time data processing platform built with serverless architecture",
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: "Cloud",
    stack: ["AWS Lambda", "React", "GraphQL", "TypeScript"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    details: {
      problem: "Scalability issues with traditional data processing systems",
      solution: "Implemented event-driven architecture using serverless functions",
      keyFeatures: [
        "Real-time data processing",
        "Automatic scaling",
        "Cost-effective architecture"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      ]
    }
  },
  {
    id: "2",
    title: "feat(ai): Neural network visualization tool",
    description: "Interactive tool for visualizing neural network architectures",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    category: "AI",
    stack: ["Python", "TensorFlow", "React", "D3.js"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    details: {
      problem: "Difficulty in understanding complex neural network architectures",
      solution: "Created an interactive visualization tool with real-time updates",
      keyFeatures: [
        "Layer-by-layer visualization",
        "Interactive node exploration",
        "Export capabilities"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        "https://images.unsplash.com/photo-1483058712412-4245e9b90334"
      ]
    }
  },
  {
    id: "3",
    title: "feat(saas): Enterprise resource planning system",
    description: "Cloud-based ERP solution for modern businesses",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: "SaaS",
    stack: ["Next.js", "PostgreSQL", "Docker", "Kubernetes"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    details: {
      problem: "Complex business processes requiring modern solution",
      solution: "Developed scalable, modular ERP system",
      keyFeatures: [
        "Resource management",
        "Automated workflows",
        "Real-time analytics"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
      ]
    }
  }
  */
];
