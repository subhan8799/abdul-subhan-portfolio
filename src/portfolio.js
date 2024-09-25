/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abdul Subhan Portfolio",
  description:
    "Energetic Senior Front-End Developer with 3+ year of professional experience focusing on React-based applications.Proficient with JavaScript, TypeScript, and Git. Developed over 10 user-centered React applications.Looking forward to adding value through my passion and expertise.",
  og: {
    title: "Abdul Subhan Portfolio",
    type: "website",
    url: "https://abdulsubhan.com/",
  },
};

//Home Page
const greeting = {
  title: "Abdul Subhan",
  logo_name: "Abdul Subhan",
  subTitle:
    "Energetic Senior Front-End Developer with 3+ year of professional experience focusing on React-based applications.Proficient with JavaScript, TypeScript, and Git. Developed over 10 user-centered React applications.Looking forward to adding value through my passion and expertise.",
  resumeLink:
    "https://drive.google.com/file/d/1EwUuxEf4t8hgKAWPNxdhjxA4lfrhx3VE/view?usp=drivesdk",
  portfolio_repository: "https://github.com/subhan8799/abdul-subhan-portfolio",
  githubProfile: "https://github.com/subhan8799",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/subhan8799",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdul-subhan-b00b8623a/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/@miansubhan5345",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:mian8799@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100008053668413",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abdul_subhan_xx1/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Learning application backend in Node, Express",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/subhan8799",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@subhan8799",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "The Islamia Universty Of Bahwalpur",
      subtitle: "Bs Software Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Data Structure, Web Development, Algorithms, etc.",
        "⚡ Apart from this, I have done courses on Frontend Development, Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.iub.edu.pk/",
    },
    {
      title: "Universty Of Northampton",
      subtitle: "Msc Computing",
      logo_path: "UON-Logo.png",
      alt_name: "Indiana University Bloomington",
      duration: "2025 - Present",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
        "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
      ],
      website_link: "https://www.northampton.ac.uk/",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work And Experience",
  description:
    "I have worked with many evolving startups as React and Next.js Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Office Managment System",
          company: "Enigmatix pvt ltd.",
          company_url: "https://enigmatix.io/",
          logo_path: "enigmatix.png",
          duration: "June 2021 - Present",
          location: "Bahawalpur, PAK",
          description:
            "Designed and developed a system that provided real-time insights into employee attendance patterns, automating payroll processing and enhancing operational eciency. Integrated attendance tracking features with real-time data to facilitate reporting and improve workforce management.",
          color: "#000000",
        },
        {
          title: "Elevate Security",
          company: "Elevate security pvt ltd",
          company_url: "https://elevatesecurity.com/",
          logo_path: "elevate-security.png",
          duration: "June 2022 - Aug 2023",
          location: "San Francisco, CA",
          description:
            "Elevate Security is a developer of a security risk management platform that prevents account takeover and data loss.Led the successful implementation of a micro frontend architecture using React.js, facilitating modular development and deployment of the Elevate Security System.",
          color: "#0879bf",
        },
        {
          title: "Rent Around",
          company: "Rent Around pvt ltd",
          company_url: "https://app.rentarround.com/",
          logo_path: "fav-Icon.png",
          duration: "May 2024 - present",
          location: "Portugal Euorape",
          description:
            "RentAround is an eCommerce platform designed to cater to inuencers, buyers, and sellers with dedicated interfaces for each user type. The project uses modern web development technologies to create a seamless experience for all stakeholders.",
          color: "#9b1578",
        },
        {
          title: "Waterlogic",
          company: "Enigmatix Pvt. Ltd.",
          company_url: "https://www.waterlogic.com/en-gb/",
          logo_path: "Waterlogic.png",
          duration: "Nov 2021 - Dec 2022",
          location: "Australia",
          description:
            "The description refers to the development of a dynamic product catalog using React components, allowing users to explore a variety of dispenser models, along with their specications and piercing options. Essentially, it means you've built an interactive interface where users can browse through dierent types of dispensers, view detailed information about each model, and select or lter products based on dierent features like piercing options.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated-subhan.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, Microservices, and Web Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bihari Colony Block X, Statlite Town Bahawalpur",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/3VrAvDfVn719K83J8",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
