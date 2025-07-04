import {
  js,
  next,
  node,
  java,
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
  docker,
  sws,
  sw2,
  siit,
  meta,
  starbucks,
  tesla,
  shopify,
  sushiro,
  movie,
  jobit,
  tripguide,
  threejs,
  ig,
  fb,
  linkedin
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "Next.js",
    icon: next,
  },
  {
    title: "Node.js",
    icon: node,
  },
  {
    title: "Java",
    icon: java,
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
    name: "Next JS",
    icon: next,
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
    name: "Java",
    icon: java,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Sarasas Witaed Saimai School",
    company_name: "GPA: 3.43",
    path: "Bilingual Program",
    icon: sws,
    iconBg: "#E6DEDD",
    date: "May 2019 - Feb 2021",
    points: [
      "Completed KUMON Math program 2021 Level A-O(Basic Arithmetic to Advanced Calculus) in 6 years.",
      "Ranked 86th out of 1388 in the Region in the 31st Mathematics Knowledge Test from SERM PANYA Co., Ltd.",
      "Received the 1st runner-up in the Mathematics Operation Activity, Mathayom 2.",
      "Received the 3rd runner-up In the mathematics quiz competition on the occasion of 'Mathematical Excellence'.",
    ],
  },
  {
    title: "Satriwitthaya 2 School",
    company_name: "GPA: 3.75",
    path: "Science-Mathematics and AI Program",
    icon: sw2,
    iconBg: "#fff",
    date: "May 2021 - Feb 2023",
    points: [
      "Winning the 1st round and Completing 2nd round of BOTNOI Chatbot Marahackathon 2022 held by Botnoi Group.",
      "Received the 2nd runner-up in The AI CiRA CORE robot control invention competition, Kamalasai AI Robotics and Technology Thailand Championship #6.",
      "Participation in the 3rd Kibo Robot Programming Challenge .",
      "Received a Gold medal in the Computer Programming Competition for Mathayom 4-6 in the Student Arts and Crafts Fair.",
    ],
  },
  {
    title: "Sirindhorn International Institute of Technology, Thammasat University",
    company_name: "GPA: 3.35",
    path: "Bachelor of Engineering in Digital Engineering",
    icon: siit,
    iconBg: "#fff",
    date: "Aug 2023 - Present",
    points: [
      "Participating in TU Hackathon 2024, Doing a start-up about Green-curry sauce Low-sodium.",
      "TOEIC Score: 775",
      "Working on a project...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kamin_Movies",
    description:
      "Modern movie browsing web application that allows users to discover trending and popular movies with a clean, responsive UI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "pink-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "blue-text-gradient",
      },
    ],
    image: movie,
    source_code_link: "https://github.com/KaminSirisu/Kamin_Movie.git",
    live_demo_link: "https://kamin-movies.netlify.app/"
  },
  {
    name: "Sushi Website",
    description:
      "Interactive sushi restaurant website that showcases authentic Japanese cuisine through immersive animations and seamless user experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "aos",
        color: "pink-text-gradient",
      },
    ],
    image: sushiro,
    source_code_link: "https://github.com/KaminSirisu/Sushiro.git",
    live_demo_link: "https://github.com/KaminSirisu/Sushiro.git",
  },
  /*
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
    source_code_link: "https://github.com/",
  },*/
];
const iconContacts = [
  {
    name: "Instagram",
    icon: ig,
    link: "https://www.instagram.com/g_uu_y"
  },
  {
    name: "Facebook",
    icon: fb,
    link: "https://www.facebook.com/kamin.sirisuwapong/"
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/kamin-sirisuwapong-594604277"
  }
]

export { services, technologies, experiences, testimonials, projects, iconContacts };