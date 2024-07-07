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
    threejs, dannyverse,
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
        title: "UX/UI Designer",
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
        title: "Software Developer",
        company_name: "Zip Code Wilmington",
        icon: meta,
        iconBg: "#ffffff",
        date: "Feb 2024 – Present",
        points: [
            "Worked collaboratively on an Agile team of 4, to develop a Twitter clone application, utilizing JHipster, Spring Boot, MySQL, Java, JavaScript, TypeScript, HTML/CSS; personally responsible for developing the Frontend and voice recognition feature using 3rd party APIs",
            "Led the development of an exotic sports car rental application, integrating my automotive industry knowledge with advanced programming skills. Utilized technologies include Java, JavaScript, TypeScript, HTML/CSS, React, Spring Boot, JHipster, Bootstrap, Tailwind CSS and MySQL",
            "Collaborated with a developers to create a voice recognition dictionary app that allowed users to effortlessly search for word definitions and examples using their voice, integrating advanced speech-to-text technology with a user-friendly React interface and a robust Java/Spring Boot backend. This project highlighted our ability to create accessible, innovative solutions within an Agile framework",
            "Completed over 1000 hours of software development projects",
        ],
    },
    {
        title: "Assistant Manager, Service Advisor",
        company_name: "Union Park Honda",
        icon: shopify,
        iconBg: "#ffffff",
        date: "Jun 2022 – Dec 2023",
        points: [
            "Supervised a team of 10+ technicians, providing guidance and support to ensure excellent customer service and efficient workflow within the service department. Conducted team meetings to communicate goals, objectives, and updates on operations, fostering a collaborative and informed work environment",
            "Utilized X-time, a Cox Automotive Service Management Software to schedule appointments, track service history, and manage customer communications ",
            "Resolved escalated customer issues promptly, demonstrating strong problem-solving skills and maintaining a high level of customer satisfaction",
            "Supported daily operations to ensure efficient workflow and exceptional customer service 150 repair orders per month/ per day – consistently recognized as #1 Assistant Manager Service Advisor",
        ],
    },
    {
        title: "Service Advisor",
        company_name: "Nelson’s Auto Repair, Action Discount Tire",
        icon: tesla,
        iconBg: "#ffffff",
        date: "Mar 2019 – Jan 2020",
        points: [
            "Provided personalized service to customers, addressing inquiries and explaining repair recommendations",
            "Utilized strong problem-solving skills to diagnose vehicle issues and recommend appropriate solutions",
            "Collaborated with technicians to ensure accurate and timely completion of repairs, maintaining customer satisfaction",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Service Advisor",
        company_name: "Pep Boys",
        icon: starbucks,
        iconBg: "#ffffff",
        date: "Aug 2016 - Mar 2018",
        points: [
            "Interacted with customers to assess vehicle issues, providing expert advice and recommendations for repairs and maintenance, utilized strong organizational skills to effectively manage service appointments, and communicated effectively with technicians to ensure prompt and accurate completion of work",
            "Collaborated with the service manager to assess departmental performance metrics and devised effective strategies for enhancement",
            "Cultivated strong customer relationships by clearly explaining estimates and meticulously documenting issues and data within the management system",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make the Twitter clone website as beautiful as our product, but Danny proved me wrong.",
        name: "Asan Ahmadli ",
        designation: "Quality Assurance Specialist",
        company: "JPMorgan Chase & Co",
        image: "https://media.licdn.com/dms/image/C4D03AQHy2ne7mCcELw/profile-displayphoto-shrink_800_800/0/1623101271346?e=1721865600&v=beta&t=QbUzVAVHoKlniihYfiADT8asJi-auLp3yNwTDEzw3Rg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their UX/UI like Danny does.",
        name: "Abukar Abukar ",
        designation: "Member",
        company: "Norwegian Refugee Council",
        image: "https://media.licdn.com/dms/image/D4E35AQFm303gByasXg/profile-framedphoto-shrink_800_800/0/1715953663212?e=1717257600&v=beta&t=SdKt5St6jQJsMWU_4iv_MVMr-S-6rb-d7-yRXL1aIFY",
    },
    {
        testimonial:
            "After Danny optimized our WilmFilm website, our traffic increased by 50%. We can't thank him enough!",
        name: "Conrad Bruton",
        designation: "Small Business Consultant",
        company: "Bank of America",
        image: "https://media.licdn.com/dms/image/D4E03AQHPBvNTEbrtBg/profile-displayphoto-shrink_800_800/0/1712247585233?e=1721865600&v=beta&t=kC5wK-Sc9B5Je0JbGaweQnMTHOXsZ6h8FnMHEwWx1yM",
    },
];

const projects = [
    {
        name: "Dannyverse: A Web 3.0 Blockchain Application",
        description:
            "Developed Dannyverse, a secure and intuitive platform featuring seamless MetaMask integration for Ethereum transactions and smart contract interactions.\n" +
            " ✨www.dannyverse.tech✨",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Solidity",
                color: "green-text-gradient",
            },
            {
                name: "React.js",
                color: "pink-text-gradient",
            },
            {
                name: "Web3.js",
                color: "pink-text-gradient",
            },
        ],
        image: dannyverse,
        source_code_link: "https://github.com/dannycao1997/Web3.0BlockchainApp",
    },
    {
        name: "Echo: A Twitter Clone with Voice Recognition",
        description:
            "Collaborated in a team to create Echo, a Twitter clone featuring voice recognition for enhanced user interaction and accessibility. Ensured a responsive design with real-time updates and robust social media functionalities, significantly improving user retention and satisfaction.\n" +
        "✨www.github.com/dannycao1997/Twitter-Clone✨",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "Springboot",
                color: "green-text-gradient",
            },
            {
                name: "Jhipster",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/dannycao1997/Twitter-Clone",
    },
    {
        name: "A Turo Clone: Premium Car Rental Platform",
        description:
            "Engineered a platform for renting exotic and Japanese Domestic Market vehicles, catering to high-performance sports car enthusiasts. Delivered a seamless user experience with an efficient booking process, leading to increased user engagement and loyalty.\n" +
            "✨www.github.com/dannycao1997/TuroClone✨",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "Spring Boot",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/dannycao1997/TuroClone",
    },
    {
        name: "Advanced Dictionary Application",
        description:
            "Created a robust dictionary app offering users comprehensive word definitions, pronunciations, and usage examples. \n" +
        "✨github.com/dannycao1997/DictionaryApp✨",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "JavaScript",
                color: "green-text-gradient",
            },
            {
                name: "TypeScript",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/dannycao1997/DictionaryApp",
    },
];

export { services, technologies, experiences, testimonials, projects };