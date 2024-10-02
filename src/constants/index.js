import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    gdu,
    rewind,
    stickytanks,
    threejs,
    unity,
    love2d,
    cpp,
    csharp,
    python,
    java,
    blender,
    mysql,
    lua,
    godot,
    photo,
    pr,
    bootstrap
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
      title: "Game Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Multimedia Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Godot",
      icon: godot,
    },
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "LOVE2D",
      icon: love2d,
    },
    {
      name: "lua",
      icon: lua,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name:"C#",
      icon:csharp,
    },
    {
      name:"Java",
      icon: java
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
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
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
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
    {
      name: "Photoshop",
      icon: photo,
    },
    {
      name: "Premier Pro",
      icon: pr,
    },
  ];
  
  const experiences = [
    {
      title: "Technical Head",
      company_name: "GameDevUtopia PICT",
      icon: gdu,
      iconBg: "#383E56",
      date: "July 2024 - Present",
      points: [
        "Guided team members in the use of various Game Development tools and technologies.",
        "Organized workshops and seminars to enhance members’ skills in game design and programming.",
        "Coordinated and managed project timelines, ensuring milestones were met.",
      ],
    },
    
  ];
  
  const projects = [
    {
      name: "REWIND",
      description:
        "Simple Platformer Game Made in Love2D framework using LUA scripting language.",
      tags: [
        {
          name: "LUA",
          color: "blue-text-gradient",
        },
        {
          name: "LOVE2D",
          color: "green-text-gradient",
        }
      ],
      image: rewind,
      source_code_link: "https://github.com/kshitijaucharmal/GDU-Rewind.git",
      live_project_link:"https://sauravshinde007.itch.io/rewind",
    },
    {
      name: "Sticky Tanks",
      description:
        "A thrilling two-player tank game where strategy and quick thinking lead to victory. Game made in Unity 3D",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
      ],
      image: stickytanks,
      source_code_link: "https://github.com/kshitijaucharmal/StickyTanks",
      live_project_link:"https://sauravshinde007.itch.io/sticky-tanks",
    },
  ];
  
  export { services, technologies, experiences, projects};