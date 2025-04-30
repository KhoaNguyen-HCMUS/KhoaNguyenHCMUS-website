import bookstoreImage from '../assets/images/projects/bookstore.png';
import HyperFramesImage from '../assets/images/projects/hyperFrames.png';
import cs50DatabaseImage from '../assets/images/projects/diagram.png';
import foodOrderImage from '../assets/images/projects/foodOrderMobileApp.png';
export const experiences = [
  {
    company: 'HTcamera',
    role: 'Sale Associate',
    period: '11/2024 - 01/2025',
    responsibilities: [
      'Provided excellent customer service and product consultation',
      'Developed effective communication and sales techniques',
      'Demonstrated strong teamwork and responsibility',
    ],
  },
  {
    company: 'HyperFrames',
    role: 'Web Developer',
    period: '4/2025 - Present',
    responsibilities: [
      'Developed responsive web applications',
      'Implemented UI components',
      'Collaborated with team members',
    ],
  },
];

export const projects = [
  {
    title: 'Book Management System',
    description: 'A web application for managing books and users',
    image: bookstoreImage,
    github: 'https://github.com/KhoaNguyen-HCMUS/book-fair-2025',
  },
  {
    title: 'HyperFrames websites',
    description:
      'This website is used as a portfolio, for consulting, and for quoting the services of the production house.',
    image: HyperFramesImage,
    github: 'https://github.com/KhoaNguyen-HCMUS/hyperframes-website',
    demo: 'https://hyper-frames-website.vercel.app/',
  },
  {
    title: 'Book Management Database',
    description:
      'A SQL database system featuring optimized schemas, complex relationships, and efficient queries for managing library operations. Built with performance-focused design including indexes and views.',
    image: cs50DatabaseImage,
    github: 'https://github.com/KhoaNguyen-HCMUS/cs50-introduction-to-databases-project',
  },
  {
    title: 'Food Order Mobile App',
    description:
      'A mobile UI/UX design project featuring intuitive user flows for food ordering. Created with Figma, focusing on consistent design system and interactive prototyping.',
    image: foodOrderImage,
    demo: 'https://www.figma.com/proto/JRPUapxvl3cu1oTYCyxqYJ/Food-order-mobile-app?node-id=89-665&t=0Q5b42E5DxzUuBdP-1',
  },
];

export const awards = [
  {
    title: 'Academic Excellence Scholarship HCMUS',
    date: '2024',
    description:
      'Awarded by HCMUS for outstanding academic performance and maintaining a high GPA throughout the semester.',
  },
];

export const certificates = [
  {
    title: 'Coursera Data Structures',
    date: '2024',
    description:
      'Mastered fundamental data structures including arrays, linked lists, trees, and hash tables, with implementation in practical scenarios.',
    link: 'https://coursera.org/share/df19b2e703d63cede626ecc40e00c682',
  },
  {
    title: 'Coursera Algorithmic Toolbox',
    date: '2024',
    description:
      'Developed skills in algorithm design and analysis, covering sorting, searching, and optimization techniques for solving complex computational problems.',
    link: 'https://coursera.org/share/61c677a7d56752b1b58c3c1999668c75',
  },
  {
    title: 'HackerRank Frontend Developer (React) Certificate',
    date: '2025',
    description:
      'Demonstrated proficiency in React, including components, state management, hooks, and modern frontend development practices.',
    link: 'https://www.hackerrank.com/certificates/2d780a0bbde7',
  },
  {
    title: 'CS50 Introduction to Databases',
    date: '2025',
    description:
      'Comprehensive course covering database design, SQL, optimization, and best practices for building efficient database systems.',
    link: 'https://certificates.cs50.io/a9239cbf-66d6-47ca-9ce1-92b70f60fba6.pdf?size=letter',
  },
];
