import EV from "../assets/projects/EV.png";
import Pacman from "../assets/projects/pacman.png";
import Sudoku from "../assets/projects/sudoku.png";

export const HERO_CONTENT = `I’m Aviv, a dedicated software developer who loves crafting digital experiences. Welcome to my portfolio!`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Software Automation Developer",
    company: "Intel Corporation",
    description: `Experienced in full software engineering lifecycle, from requirements to production, deployment and monitoring.
    implement and automate comprehensive test plans for a web application tool with multiple
microservices, involving the development of over 300+ E2E tests.`,
    technologies: ["AWS","Javascript", "Cypress.js", "Python"],
  },
];

export const PROJECTS = [
  {
    title: "FullStack EV Catalog",
    image: EV,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Postgres"],
  },
  {
    title: "Pacman-AI",
    image: Pacman,
    description:
      "Classic Pac-Man game, The game features an autonomously controlled Pac-Man, governed by a Finite State Machine (FSM) and employing a limited Depth-First Search (DFS) to navigate and make strategic decisions within the maze.",
    technologies: ["C++", "OpenGL"],
  },
  {
    title: "Sudoku Backtracking Solver Visualizer",
    image: Sudoku,
    description: "Backtracking Algorithm that visualize solving any sudoku!",
    technologies: ["Python", "PyGame"],
  },
];

export const CONTACT = {
  phoneNo: "054-333-4178 ",
  email: "avivdm7@gmail.com",
};
