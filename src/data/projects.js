import eventhub from "../assets/images/eventhub.png";
import rentride from "../assets/images/rentride.png";
import ecommerce from "../assets/images/ecommerce.png";
import auth from "../assets/images/auth.png";
import titanfit from "../assets/images/titanfit-gym.png";
import pulsemonitor from "../assets/images/pulseMonitor.png";

const projects = [
  {
    id: 1,
    title: "EventHub",
    image: eventhub,
    description:
      "Event management and booking platform built with React and Node.js.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github:
      "https://github.com/shivam1234tiwari/EventHub-Project",
    demo: "https://eventhub-nine-ruddy.vercel.app/",
  },
  {
    id: 2,
    title: "Rent-a-Ride",
    image: rentride,
    description:
      "Vehicle rental platform with user authentication and booking management.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github:
      "https://github.com/shivam1234tiwari/Rent-a-Ride",
    demo: "https://rent-a-ride1.vercel.app/",
  },
  {
    id: 3,
    title: "Authentication System",
    image: auth,
    description:
      "Authentication system featuring registration, login, JWT-based authentication, and protected routes.",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github:
      "https://github.com/shivam1234tiwari/Auth-Project",
    demo: "https://auth-project-inwh.onrender.com/",
  },
  {
    id: 4,
    title: "E-commerce",
    image: ecommerce,
    description:
      "Full-stack e-commerce application with product management and an admin dashboard.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github:
      "https://github.com/shivam1234tiwari/E-Commerce",
    demo: "",
  },
  {
    id: 5,
    title: "TitanFit Gym",
    image: titanfit,
    description:
      "Gym and fitness web application built with the MERN stack.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github:
      "https://github.com/shivam1234tiwari/titanfit-gym",
    demo: "https://titanfit-gym.vercel.app/",
  },
  {
    id: 6,
    title: "PulseMonitor",
    image: pulsemonitor,
    description:
      "API monitoring and incident management platform featuring automated health checks, response-time tracking, monitoring history, and a real-time dashboard.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    github:
      "https://github.com/shivam1234tiwari/api-monitoring-platform",
    demo: "https://api-monitoring-management.vercel.app/",
  },
];

export default projects;
