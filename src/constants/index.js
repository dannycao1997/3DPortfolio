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
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "UX and UI Designer",
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
    {
        name: "Redux Toolkit",
        icon: redux,
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
        name: "MongoDB",
        icon: mongodb,
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
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Service Advisor",
        company_name: "Pep Boys",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Aug 2016 - Mar 2018",
        points: [
            "Interacted with customers to assess vehicle issues, providing expert advice and recommendations for repairs and maintenance, utilized strong organizational skills to effectively manage service appointments, and communicated effectively with technicians to ensure prompt and accurate completion of work",
            "Collaborated with the service manager to assess departmental performance metrics and devised effective strategies for enhancement",
            "Cultivated strong customer relationships by clearly explaining estimates and meticulously documenting issues and data within the management system",
        ],
    },
    {
        title: "Service Advisor",
        company_name: "Nelson’s Auto Repair, Action Discount Tire",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Mar 2019 – Jan 2020",
        points: [
            "Provided personalized service to customers, addressing inquiries and explaining repair recommendations",
            "Utilized strong problem-solving skills to diagnose vehicle issues and recommend appropriate solutions",
            "Collaborated with technicians to ensure accurate and timely completion of repairs, maintaining customer satisfaction",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Assistant Manager, Service Advisor",
        company_name: "Union Park Honda",
        icon: shopify,
        iconBg: "#383E56",
        date: "Jun 2022 – Dec 2023",
        points: [
            "Supervised a team of 10+ technicians, providing guidance and support to ensure excellent customer service and efficient workflow within the service department. Conducted team meetings to communicate goals, objectives, and updates on operations, fostering a collaborative and informed work environment",
            "Utilized X-time, a Cox Automotive Service Management Software to schedule appointments, track service history, and manage customer communications ",
            "Resolved escalated customer issues promptly, demonstrating strong problem-solving skills and maintaining a high level of customer satisfaction",
            "Supported daily operations to ensure efficient workflow and exceptional customer service 150 repair orders per month/ per day – consistently recognized as #1 Assistant Manager Service Advisor",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Zip Code Wilmington",
        icon: meta,
        iconBg: "#E6DEDD",
        date: "Feb 2024 – Present",
        points: [
            "Worked collaboratively on an Agile team of 4, to develop a Twitter clone application, utilizing JHipster, Spring Boot, MySQL, Java, JavaScript, TypeScript, HTML/CSS; personally responsible for developing the Frontend and voice recognition feature using 3rd party APIs",
            "Led the development of an exotic sports car rental application, integrating my automotive industry knowledge with advanced programming skills. Utilized technologies include Java, JavaScript, TypeScript, HTML/CSS, React, Spring Boot, JHipster, Bootstrap, Tailwind CSS and MySQL",
            "Collaborated with a developers to create a voice recognition dictionary app that allowed users to effortlessly search for word definitions and examples using their voice, integrating advanced speech-to-text technology with a user-friendly React interface and a robust Java/Spring Boot backend. This project highlighted our ability to create accessible, innovative solutions within an Agile framework",
            "Completed over 1000 hours of software development projects",
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
        name: "JDM Car Rental App",
        description:
            "Web-based platform that allows users to search and book the finest JDM and exotic sports cars rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
            {
                name: "java",
                color: "green-text-gradient",
            },
            {
                name: "html",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/dannycao1997/JDMCarRentalApp",
    },
    {
        name: "Echo - A Twitter Clone",
        description:
            "This application replicates the core functionalities of Twitter, providing a comprehensive platform for microblogging. Echo is crafted with a modern technology stack, featuring Spring Boot for the backend services and React for the frontend interactions, ensuring a responsive and user-friendly experience. It includes a voice recognition feature, allowing users to create posts hands-free.",
        tags: [
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "springboot",
                color: "green-text-gradient",
            },
            {
                name: "jhipster",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/dannycao1997/Twitter-Clone",
    },
    {
        name: "Dictionary App",
        description:
            "The main objective of the voice recognition dictionary app was to simplify the process of searching for word meanings and examples by allowing users to use their voice instead of typing.",
        tags: [
            {
                name: "mysql",
                color: "blue-text-gradient",
            },
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "typescript",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/dannycao1997/DictionaryApp",
    },
];

export { services, technologies, experiences, testimonials, projects };