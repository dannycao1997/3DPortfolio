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
    fishingappdemo,
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
            "Completed 12 weeks of intensive software development training, mastering the fundamentals of Java and various frameworks, and accumulating over 1000 hours of hands-on experience.",
            "Engaged in full-stack training with a focus on Agile and Scrum methodologies, and test-driven development, ensuring a thorough understanding of modern development practices.",
            "Developed and deployed multiple full-stack projects, gaining in-depth experience with multiple object-oriented programming languages and frameworks, showcasing the ability to deliver robust and scalable applications.",
        ],
    },
    {
        title: "Assistant Service Manager",
        company_name: "Union Park Automotive Group",
        icon: shopify,
        iconBg: "#ffffff",
        date: "Jun 2022 – Dec 2023",
        points: [
            "Led a team of 10+ technicians, implementing Agile-inspired methodologies to optimize workflow, increasing efficiency by 20%",
            "Implemented and optimized Xtime software for appointment scheduling, service tracking, and customer communications, reducing scheduling errors by 30%.",
            "Diagnosed complex customer issues promptly, leveraging strong problem-solving abilities comparable to debugging and troubleshooting software problems, resulting in a 25% reduction in service-related complaints.",
        ],
    },
    {
        title: "Service Advisor",
        company_name: "Nelson’s Auto Repair",
        icon: tesla,
        iconBg: "#ffffff",
        date: "Mar 2019 – Jan 2020",
        points: [
            "Analyzed customer needs and provided expert recommendations for vehicle maintenance and repairs, resulting in a 10% increase in repeat business.",
            "Coordinated with technicians to ensure timely and accurate service delivery, achieving a 95% on-time service completion rate.",
            "Diagnosed complex vehicle issues using systematic problem-solving approaches, analogous to identifying and resolving software bugs.",
        ],
    },
    {
        title: "Service Advisor",
        company_name: "Pep Boys",
        icon: starbucks,
        iconBg: "#ffffff",
        date: "Aug 2016 - Mar 2018",
        points: [
            "Assessed vehicle issues and provided detailed estimates and repair recommendations, ensuring clear communication with customers, which improved customer satisfaction scores by 15%",
            "Managed service appointments and optimized workflows, reducing customer wait times by 20%.",
            "Maintained strong customer relationships through effective communication and documentation, paralleling client relations and documentation in software projects.",
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
        name: "Web3 Blockchain Application",
        description: `Built a decentralized Ethereum-based application with Solidity smart contracts and MetaMask integration for secure wallet connectivity. Designed the front end using React and Web3.js to handle blockchain interactions, ensuring secure wallet transactions. <a href="https://www.dannyverse.tech" target="_blank" rel="noopener noreferrer" class="custom-link">https://www.dannyverse.tech</a>`,
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "Three.js",
                color: "pink-text-gradient",
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
                color: "orange-text-gradient",
            },
        ],
        image: dannyverse,
        source_code_link: "https://github.com/dannycao1997/Web3.0BlockchainApp",
    },
    {
        name: "Twitter Clone",
        description: `Developed a Twitter-like application using JHipster for rapid backend development, with MySQL for database management. Integrated accessible features using voice recognition APIs, ensuring a smooth user experience across devices. <a href="https://github.com/dannycao1997/Twitter-Clone" target="_blank" rel="noopener noreferrer" class="custom-link">https://github.com/dannycao1997/Twitter-Clone</a>`,

        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "MySQL",
                color: "orange-text-gradient",
            },
            {
                name: "Java",
                color: "pink-text-gradient",
            },
            {
                name: "Spring Boot",
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
        name: "Car Rental Platform",
        description: `Developed a full-stack car rental platform, using Spring Boot for backend services and React for the frontend. Implemented secure, scalable RESTful APIs to manage vehicle listings and bookings, utilizing PostgreSQL for data storage. <a href="https://github.com/dannycao1997/TuroClone" target="_blank" rel="noopener noreferrer" class="custom-link">https://github.com/dannycao1997/TuroClone</a>`,
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
                name: "HTML",
                color: "orange-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
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
        description: `Created a dictionary app that offers users comprehensive word definitions, pronunciations, and usage examples, ensuring a seamless and intuitive user experience across various devices to significantly enhance accessibility and learning. <a href="https://github.com/dannycao1997/DictionaryApp" target="_blank" rel="noopener noreferrer" class="custom-link">https://github.com/dannycao1997/DictionaryApp</a>`,
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
                name: "HTML",
                color: "orange-text-gradient",
            },
            {
                name: "TypeScript",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/dannycao1997/DictionaryApp",
    },

    {
        name: "Fishing Logbook Web Application",
        description: `Created a web application for logging fishing activities, using Spring Boot for backend RESTful services and PostgreSQL for data storage. Implemented cloud-based deployment solutions to ensure high availability and scalability. <a href="https://github.com/dannycao1997/Dannys-Fishing-Logbook" target="_blank" rel="noopener noreferrer" class="custom-link">https://github.com/dannycao1997/Dannys-Fishing-Logbook</a>`,
        tags: [
            {
                name: "Spring Boot",
                color: "blue-text-gradient",
            },
            {
                name: "React",
                color: "green-text-gradient",
            },
            {
                name: "Java",
                color: "orange-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: fishingappdemo,
        source_code_link: "https://github.com/dannycao1997/Dannys-Fishing-Logbook",
    },


];


export { services, technologies, experiences, testimonials, projects };