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
  //redux,
  tailwind,
  nodejs,
  //mongodb,
  git,
  //figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  angular,
  java,
  asp,
  quadwave,
  opf,
  pixxcel,
  ppc,
  user,
  studentadmin,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "Angular Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Graphics Designer",
    icon: creator,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  ,
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "asp",
    icon: asp,
  },
  //  {
  //     name: "Redux Toolkit",
  //     icon: redux,
  //   }, 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Solution Developer",
    company_name: "Quadwave Consulting",
    icon: quadwave,
    iconBg: "#E6DEDD",
    date: "April 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using Angular and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Operant Pharmacy Federation",
    icon: opf,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - March 2022",
    points: [
      "Proficient in HTML, CSS, and JavaScript",
      "Experienced in WordPress development, including theme and plugin customization and maintenance.",
      "Familiar with web development frameworks like Bootstrap, jQuery, and React.",
      "Knowledgeable in web standards and best practices for accessibility, performance optimization, and security.",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "PIXCELL",
    icon: pixxcel,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - March 2021",
    points: [
      "Did Video Editing Works << Write more content here >>"
    ],
  },
  {
    title: "Social Media Manager",
    company_name: "Paras Polymer and chemicals",
    icon: ppc,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Jan 2021",
    points: [
      "Maintain All Social Media Hendale << Write more content here >>",

    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Xyz Abc",
    designation: "CPP",
    company: "Quadwave",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Xyz Abc",
    designation: "CPP!",
    company: "Quadwave",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Xyz Abc",
    designation: "CTO",
    company: "Operant Pharmacy Federation",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Users Management",
    description:
      "Developed a user management system using Angular, allowing administrators to create, edit, and delete user accounts, assign roles and permissions, and view user activity logs. Utilized Angular CLI, Reactive Forms, and Angular Material components for UI design, and interfaced with a RESTful API backend for data storage and retrieval. Implemented authentication and authorization using JSON Web Tokens (JWT) and NgRx store for state management",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "MySQL",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: user,
    source_code_link: "https://github.com/ravindrasirvi609/user-managment",
  },
  {
    name: "Student Admission Portal",
    description:
      "Created a student admin portal using Angular, enabling faculty members to manage student records, including personal information, academic records, attendance, and performance evaluations. Utilized Angular CLI, Reactive Forms, and Angular Material components for UI design, and interfaced with a RESTful API backend for data storage and retrieval. Implemented authentication and authorization using JSON Web Tokens (JWT).",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Rest APIs",
        color: "green-text-gradient",
      },
      {
        name: "ASP.NET Core",
        color: "pink-text-gradient",
      },
    ],
    image: studentadmin,
    source_code_link: "https://github.com/ravindrasirvi609/ASP.NetCoreCrud/tree/crudb",
  },
  {
    name: "Portfolio WebSite",
    description:
      "Developed a 3D portfolio website using React.js, Vite.js, and Three.js, showcasing my creative projects in an immersive and interactive manner. Utilized React Router for navigation and dynamic content rendering, Vite.js for speedy development and hot module reloading, and Three.js for 3D graphics and animations. Implemented responsive design and accessibility features to ensure optimal user experience across different devices and platforms.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Vite",
        color: "green-text-gradient",
      },
      {
        name: "Three",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/ravindrasirvi609/Portfolio",
  },
];

export { services, technologies, experiences, testimonials, projects };