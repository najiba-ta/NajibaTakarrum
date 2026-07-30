export const portfolioData = {
  personal: {
    name: "Najiba Takarrum",
    title: "MERN Stack & Full-Stack Web Developer",
    designations: ["Full Stack Developer", "MERN Stack Specialist", "Frontend Engineer", "React Developer"],
    bio: "Passionate MERN Stack Developer with 6 months of hands-on experience building dynamic web applications. Started my web development journey with Programming Hero and dedicated to crafting high-performance, beautiful full-stack web solutions.",
    avatar: "/assets/avatar.png",
    resumeUrl: "#download-resume",
    socials: {
      github: "https://github.com/najiba-ta",
      linkedin: "https://linkedin.com/in/najiba-webdev",
      instagram: "https://instagram.com/naju_is_here",
      facebook: "https://facebook.com/najibatakarrum"
    },
    contact: {
      email: "shahidnajiba@gmail.com",
      phone: "01997182130",
      whatsapp: "01997182130",
      location: "Brahmanbaria, Bangladesh"
    }
  },
  about: {
    journey: "My web development journey officially kicked off with Programming Hero, where I fell in love with coding and full-stack development. Over the past 6 months of intense hands-on experience, I have developed real-world web applications using JavaScript, React.js, Express.js, Node.js, and MongoDB.",
    workPreference: "I enjoy building full-stack MERN applications, creating clean REST APIs, writing modular React components, and delivering smooth responsive UI/UX experiences that users love.",
    hobbies: ["Exploring Web Technologies", "UI/UX Design Tinkering", "Painting & Crafts", "Badminton & Sports"]
  },
  skills: [
    {
      category: "Frontend Development",
      items: [
        { name: "React.js", level: 92, icon: "Code2" },
        { name: "JavaScript (ES6+)", level: 90, icon: "FileCode" },
        { name: "HTML5 & CSS3", level: 95, icon: "Layout" },
        { name: "Tailwind CSS & DaisyUI", level: 90, icon: "Palette" },
        { name: "React Router & Context API", level: 88, icon: "Layers" }
      ]
    },
    {
      category: "Backend Development",
      items: [
        { name: "Node.js", level: 85, icon: "Server" },
        { name: "Express.js", level: 88, icon: "Cpu" },
        { name: "MongoDB & Mongoose", level: 86, icon: "Database" },
        { name: "Firebase Authentication", level: 90, icon: "ShieldCheck" }
      ]
    },
    {
      category: "Tools & Workflow",
      items: [
        { name: "Git & GitHub", level: 90, icon: "GitBranch" },
        { name: "VS Code & Chrome DevTools", level: 94, icon: "Terminal" },
        { name: "Postman & Vercel", level: 88, icon: "Send" },
        { name: "Netlify & Surge", level: 86, icon: "Globe" }
      ]
    }
  ],
  experiences: [
    {
      role: "MERN Stack Developer (6 Months Experience)",
      company: "Codeonix Islamabad, Pakistan",
      period: "6 Months Experience",
      description: "Working on full-stack web applications, architecting responsive frontend interfaces with React, integrating backend Node/Express REST APIs, Firebase authentication, and database state management."
    }
  ],
  projects: [
    {
      id: "lifeflow",
      title: "LifeFlow - Life Saving Blood Donation Portal",
      shortDescription: "A life-saving blood donation community web application connecting emergency blood seekers directly with registered voluntary donors.",
      image: "/assets/lifeflow.png",
      stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS"],
      liveLink: "https://life-flow-two.vercel.app/",
      githubLink: "https://github.com/najiba-ta/Life-Flow",
      detailedDescription: "LifeFlow connects emergency medical blood seekers directly with nearby voluntary donors. Features include urgent blood request postings, donor directory searches by location and blood group, request status management, and donor profile registration.",
      challenges: [
        "Building location and blood-group filtering algorithms for immediate emergency searches.",
        "Designing clear visual urgency badges for emergency blood requests.",
        "Ensuring fast load times on low-bandwidth mobile networks during emergencies."
      ],
      futurePlans: [
        "Integrate SMS emergency alert broadcast integration.",
        "Add interactive map radius donor search using Google Maps API.",
        "Implement automated donation eligibility calendar reminders."
      ]
    },
    {
      id: "worldcupx",
      title: "WorldCupX - FIFA Tournament Portal",
      shortDescription: "A feature-rich FIFA tournament portal featuring match schedules, team statistics, live standings, and fan updates.",
      image: "/assets/worldcupx.png",
      stack: ["React.js", "React Router", "Tailwind CSS", "Express.js", "MongoDB"],
      liveLink: "https://world-cup-x-client.vercel.app",
      githubLink: "https://github.com/najiba-ta/worldcupx-client",
      detailedDescription: "WorldCupX client provides football fans with an intuitive dashboard to follow tournament matches, inspect team standings, filter upcoming fixtures, and participate in fan polls during major football tournament events.",
      challenges: [
        "Designing real-time interactive match scorecards with seamless layout updates.",
        "Handling complex JSON filtering for groups, match stages, and team stats.",
        "Ensuring mobile-first responsiveness across high-density scoreboard displays."
      ],
      futurePlans: [
        "Integrate live match notification pushes.",
        "Add interactive bracket prediction games for tournament fans.",
        "Support multi-language commentary updates."
      ]
    },
    {
      id: "wisperia",
      title: "Wisperia - Creative Realm Platform",
      shortDescription: "An immersive digital platform built for interactive community engagement, media exploration, and user content sharing.",
      image: "/assets/wisperia.png",
      stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Firebase"],
      liveLink: "https://wisperia-client.vercel.app",
      githubLink: "https://github.com/najiba-ta/wisperia-client",
      detailedDescription: "Wisperia is a modern web application crafted with React and MERN technologies. It empowers users to explore creative content, interact with community streams, manage custom profiles, and experience seamless client-side navigation with real-time feedback.",
      challenges: [
        "Implementing responsive dynamic media grid layouts with smooth transitions.",
        "Securing client routes with Firebase Authentication and persistent session state.",
        "Optimizing data fetching pipelines from MongoDB backend APIs."
      ],
      futurePlans: [
        "Add real-time chat and notification feeds using Socket.io.",
        "Implement AI-assisted content recommendations.",
        "Introduce multi-theme customization options for user portals."
      ]
    }
  ]
};
