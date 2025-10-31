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
    gdu,
    rewind,
    stickytanks,
    threejs,
    unity,
    love2d,
    cpp,
    csharp,
    python,
    blender,
    mysql,
    lua,
    godot,
    photo,
    pr,
    bootstrap,
    swampmaster,
    bugs,
    neon_fables,
    tictactoe,
    omni,
    midori,
    pisheti,
    healtrack,
    ncl,
    java,
    git,
    figma,
    docker,
    kubernetes,
    phaser,
    chromaglitch,
    bunty
  } from "../assets";
  
  export const navLinks = [
  {
    to: "/about-me",
    title: "About",
  },
  {
    to: "/my-work",
    title: "Work",
  },
  {
    to: "/blogs",
    title: "Blogs",
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
      title: "3D Artist",
      icon: backend,
    },
    {
      title: "Video Editor",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C++",
      icon: cpp,
    },
    {
      name:"C#",
      icon:csharp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
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
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Phaser JS",
      icon: phaser,
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
      name: "Docker",
      icon: docker,
    },
    {
      name: "Kubernetes",
      icon: kubernetes,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Blender",
      icon: blender,
    },
    {
      name: "Figma",
      icon: figma,
    },
    // {
    //   name: "Photoshop",
    //   icon: photo,
    // },
    // {
    //   name: "Premier Pro",
    //   icon: pr,
    // },
  ];
  
  const experiences = [
    {
      title: "Game Development Intern",
      company_name: "CSIR- National Chemical Laboratory",
      icon: ncl,
      iconBg: "#383E56",
      date: "Feb 2025 - May 2025",
      points: [
        "Developed an interactive periodic table card game in Unity, improving engagement for students by gamifying element-property learning.",
        "Conducted usability testing with 40+ students and iteratively refined game mechanics based on feedback.",
      ],
    },
    {
      title: "Technical Head",
      company_name: "GameDevUtopia PICT",
      icon: gdu,
      iconBg: "#383E56",
      date: "July 2024 - June 2025",
      points: [
        "Guided team members in the use of various Game Development tools and technologies.",
        "Organized workshops and seminars to enhance members’ skills in game design and programming.",
        "Coordinated and managed project timelines, ensuring milestones were met.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Tic-Tac-Toe",
      description:
        "A full-stack Tic-Tac-Toe game with real-time chat functionality, built using the StreamChat API.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "StreamChat API",
          color: "green-text-gradient",
        },
      ],
      image: tictactoe,
      source_code_link: "https://github.com/sauravshinde007/Tic-Tac-Toe",
      live_project_link:"",
    },
    {
      name: "PiSheti - Crop Disease Detector",
      description:
        "AI-powered system to detect diseases in Cashew, Cassava, Maize, and Tomato crops.",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "Tensorflow",
          color: "green-text-gradient",
        },
      ],
      image: pisheti,
      source_code_link: "https://github.com/sauravshinde007/Crop-Disease-Detection",
      live_project_link:"",
    },
    {
      name: "HealTrack",
      description:
        "A full-stack Clinic Appointment System",
      tags: [
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "JWT",
          color: "green-text-gradient",
        },
      ],
      image: healtrack,
      source_code_link: "https://github.com/sauravshinde007/HealTrack",
      live_project_link:"https://healtrack-frontend.onrender.com/",
    }
  ];

  const games = [
    {
      name: "OMNIDASH",
      description:
        "Definately not a ripoff of KARLSON",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
        
      ],
      image: omni,
      source_code_link: "https://github.com/sauravshinde007/OMNIDASH",
      live_project_link:"https://saurav-san007.itch.io/omnidash",
    },
    {
      name: "Chroma Glitch",
      description:
        "A rouge like top down shooter game like HADES",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "Unity",
          color: "green-text-gradient",
        },
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
        
      ],
      image: chromaglitch,
      source_code_link: "https://github.com/sauravshinde007/OMNIDASH",
      live_project_link:"https://saurav-san007.itch.io/omnidash",
    },
    {
      name: "Neon Fables",
      description:
        "A sidescroller detective game where you are trying to solve a mystery by talking and gathering clues.",
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
      image: neon_fables,
      source_code_link: "https://github.com/sauravshinde007/GameOff24",
      live_project_link:"https://sauravshinde007.itch.io/neon-fables",
    },
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
    {
      name: "Swamp Master",
      description:
        "A 2D platformer multiplayer game, where your only goal is to be the last one standing. Game made in Unity using Photon Library.",
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
      image: swampmaster,
      source_code_link: "https://github.com/sauravshinde007/PlayBrutal-GameJam.git",
      live_project_link:"https://sauravshinde007.itch.io/swamp-master",
    },
    {
      name: "BUGS",
      description:
        "A 2D platformer puzzle game, where your want to escape from your Windows 7 computer and delete the virus. Game is made in Defold Engine using LUA.",
      tags: [
        {
          name: "Defold",
          color: "blue-text-gradient",
        },
        {
          name: "LUA",
          color: "green-text-gradient",
        },
      ],
      image: bugs,
      source_code_link: "",
      live_project_link:"https://sauravshinde007.itch.io/bugs",
    },
    {
      name: "Bunty ki Duniya",
      description:
        "Bunty Ki Duniya is a relaxing, role-playing game steeped in Indian culture. You play as Bunty, a beloved member of his hostel community.",
      tags: [
        {
          name: "Defold",
          color: "blue-text-gradient",
        },
        {
          name: "LUA",
          color: "green-text-gradient",
        },
      ],
      image: bunty,
      source_code_link: "",
      live_project_link:"https://sauravshinde007.itch.io/bugs",
    },
    {
      name: "Midori's Astro Quest",
      description:
        "2D platformer exploration game made in Defold",
      tags: [
        {
          name: "Lua",
          color: "blue-text-gradient",
        },
        {
          name: "Defold",
          color: "green-text-gradient",
        }
        
      ],
      image: midori,
      source_code_link: "https://github.com/sauravshinde007/OMNIDASH",
      live_project_link:"https://saurav-san007.itch.io/omnidash",
    }
  ];

  const designs = [
    {
        name: "Sword",
        videoSrc: "/videos/sword.mp4",
    },
    {
        name: "Ball Animation",
        videoSrc: "/videos/ball_anim.mp4",
    },
    {
        name: "SpaceCraft",
        videoSrc: "/videos/space_craft.mp4",
    },
    {
        name: "Black Hole",
        videoSrc: "/videos/black-hole.mp4",
    },
    {
        name: "Volvo P1800",
        videoSrc: "/videos/volvo.mp4",
    },
    {
        name: "Kimi No Nawa",
        videoSrc: "/videos/your-name.mp4",
    },
    {
        name: "Night City",
        videoSrc: "/videos/night-city.mp4",
    },
    {
        name: "Pictorel Logo",
        videoSrc: "/videos/logo.mp4",
    },
    {
        name: "Fireworks",
        videoSrc: "/videos/diwali.mp4",
    },
    {
        name: "Porche 911",
        videoSrc: "/videos/porche911_UeFQN76q.mp4",
    }
  ];
  
  export { services, technologies, experiences, projects, games, designs};