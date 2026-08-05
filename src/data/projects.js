import eventhub from "../assets/images/eventhub.png";
import rentride from "../assets/images/rentride.png";
import ecommerce from "../assets/images/ecommerce.png";
import auth from "../assets/images/auth.png";

const projects = [
  {
    id: 1,
    title: "EventHub",
    image: eventhub,
    description: "Modern event booking platform built using React and Node.js.",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/shivam1234tiwari/EventHub-Project",
    demo: "https://eventhub.vercel.app",
  },
  {
    id: 2,
    title: "Rent-a-Ride",
    image: rentride,
    description: "Vehicle rental management system with authentication and booking.",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/shivam1234tiwari/Rent-a-Ride",
    demo: "https://rent-a-ride1.vercel.app", // Added https:// here
  },
  {
    id: 3,
    title: "Authentication System",
    image: auth,
    description: "JWT Authentication with Login, Register and Authorization.",
    tech: ["Node", "Express", "MongoDB", "JWT"],
    github: "https://github.com/shivam1234tiwari/Auth-Project",
    demo: "", // Set empty if no live demo is available
  },
  {
    id: 4,
    title: "Ecommerce",
    image: ecommerce,
    description: "Full Stack Ecommerce Application with Admin Dashboard.",
    tech: ["React", "Node", "MongoDB"],
    github: "https://github.com/shivam1234tiwari/E-Commerce.git",
    demo: "", // Set empty if no live demo is available
  },
];

export default projects;