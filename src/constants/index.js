import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  photoshop,
  illustrator,
  coreldraw,
  canva,
  infosys,
  tcs,
  flipkart,
  shreeSpaace,
  project1,
  project2,
  project3,
} from "../assets";

// Personal Information
export const personalInfo = {
  name: "MS Bhartiya",
  tagline: "I create stunning web experiences and captivating graphic designs",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
  {
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Brand Designer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Photoshop",
    icon: photoshop,
  },
  {
    name: "Illustrator",
    icon: illustrator,
  },
  {
    name: "CorelDraw",
    icon: coreldraw,
  },
  {
    name: "Canva",
    icon: canva,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#383E56",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining responsive websites using HTML, CSS, and JavaScript.",
      "Collaborating with local businesses to create online presence.",
      "Ensuring cross-browser compatibility and mobile responsiveness.",
    ],
  },
  {
    title: "React Developer",
    company_name: "Freelance",
    icon: web,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Dec 2022",
    points: [
      "Built dynamic single-page applications using React.js and Redux.",
      "Integrated RESTful APIs and optimized frontend performance.",
      "Collaborated with clients to define requirements and deliver tailored solutions.",
      "Implemented responsive designs ensuring compatibility across devices.",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company_name: "Shree Spaace Solution",
    icon: shreeSpaace,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Leading the development of complex web applications using the MERN stack.",
      "Architecting scalable and secure backend solutions.",
      "Mentoring junior developers and guiding best practices.",
      "Collaborating with cross-functional teams to deliver high-impact digital products.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
    name: "Priya Sharma",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like he does.",
    name: "Rahul Verma",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    testimonial:
      "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Vikram Singh",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mahi-8755652540",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mahi-8755652540",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mahi-8755652540",
  },
  {
    name: "HRMS Software",
    description:
      "A comprehensive Human Resource Management System with employee dashboard, attendance tracking, leave management, project management, and real-time analytics built with the MERN stack.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/mahi-8755652540",
  },
  {
    name: "Design Studio Website",
    description:
      "Professional website for a web design and graphic design company showcasing portfolio, services, and client testimonials. Features modern animations, responsive layout, and interactive service showcase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/mahi-8755652540",
  },
  {
    name: "Office Interior Portfolio",
    description:
      "Elegant portfolio website for an office interior design firm, featuring project galleries, 3D visualizations, before/after comparisons, and client case studies with smooth scrolling animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/mahi-8755652540",
  },
];

export { services, technologies, experiences, testimonials, projects };
