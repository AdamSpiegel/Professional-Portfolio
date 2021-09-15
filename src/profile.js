// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "Adam Spiegel",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me";
const about = {
  paragraph:
    "Full Stack Web Developer and a recent graduate (Sept 2, 2021) of the UConn Coding Bootcamp program.  Extensive experience in Program and Project Management. A proven team leader and collaborator with 9 years of managerial experience within the corporate health and wellness industry. Recently leveraged strong problem solving and analytical skills, with a strong emphasis on team collaboration (team project application development) through the UConn Full Stack Web Development program. Looking for an exciting new career in the tech field and to learn about the opportunities available. I have a strong desire to work for an employer that can offer a strong career path with inspiring goals to meet, along with a culture of team collaboration. Please connect with me, I would love to discuss my experience and story with you more!",
};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "React",
    // svg: '',
    faClass: "fab fa-react",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "GitHub",
    faClass: "fa fa-github",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Bootstrap",
    // svg: '',
    faClass: "fab fa-bootstrap",
  },
  {
    name: "Microsoft Office",
    // svg: '',
    faClass: "fab fa-microsoft",
  },
  {
    name: "Stack Overflow",
    // svg: '',
    faClass: "fab fa-stack-overflow",
  },
  {
    name: "Slack",
    // svg: '',
    faClass: "fa fa-slack",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Past Projects";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Cocktail & Recipe Generator - Group Project",
    skills: ["HTML, CSS, JS, jQuery"],
    url: "https://github.com/AdamSpiegel/Group-Project-1",
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Workout Tracker",
    skills: ["Mongoose, Express, Node, HTML. CSS"],
    url: "https://github.com/AdamSpiegel/Workout-Tracker",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Book Search Engine",
    skills: ["Mongoose, Express, React, Node, Apollo-Server, GraphQL, Bootstrap, Heroku"],
    url: "https://github.com/AdamSpiegel/Book-Search-Engine",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "Progressive Budget Tracker",
    skills: ["Mongoose, Express, Compression, Morgan, Lite-Server, PWA"],
    url: "https://github.com/AdamSpiegel/Progressive-Budget-Tracker",
  },
  {
    // Add image in './styles/images.css' in #project5
    id: "project5",
    name: "My Total Health - Group Project",
    skills: ["HTML, CSS, JS, NPM, Bcrypt, Chart.js, Sequelize, Express, Handlebars, mySQL"],
    url: "https://github.com/AdamSpiegel/My-Total-Health",
  },
  {
    // Add image in './styles/images.css' in #project6
    id: "project6",
    name: "Redux Store - Shop Shop",
    skills: ["React, Redux, Stripe, Bcrypt, Mongoose, Express, Node, Apollo-Server, GraphQL, JWT, Heroku"],
    url: "https://github.com/AdamSpiegel/Redux-Store",
  },
];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Let's Connect!";
const contact = {
  pitch:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae.",
  copyright: "Adam Spiegel",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  github: "https://github.com/AdamSpiegel",
  facebook: "https://www.facebook.com/adam.spiegel.522/",
  instagram: "https://www.instagram.com/aspieg23/",
  linkedin: "https://www.linkedin.com/in/adam-spiegel/",
  resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
