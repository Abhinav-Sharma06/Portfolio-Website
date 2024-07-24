import Studynotion from '../assets/studynotion.jpg';
import TaskScheduler from '../assets/taskscheduler.png';
import MagicalArena from '../assets/magicalArena.jpeg';
import Ecomzy from '../assets/ecomzy.png';
import Netflix from '../assets/netflix.png';
import Portfolio from '../assets/portfolio.png';
import Password from '../assets/Password.png';
import Weather from '../assets/weather.png';

export const projectData = [
    {
        id:1,
        image: Studynotion,
        title:'Studynotion',
        desc:'An E-Learning platform where students buy courses and teachers sell them.Studynotion offers personalized learning experiences, interactive course content, progress tracking, discussion forums, quizzes, ratings, reviews.',
    
        link:'https://studynotion-abhinav.vercel.app/',
        
        techStack:['React.js','Axios','Redux','Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Nodemailer','Razorpay API'],
    },

    {
        id:2,
        image:TaskScheduler,
        title:'Deadline Driven Task Scheduler',
        desc:'A web application for scheduling tasks with deadlines. It uses a Min-Heap data structure to manage and sort tasks efficiently by their deadlines, with features for adding, sorting, and managing tasks.',
    
        link:'https://deadline-driven-task-scheduler-project-frontend.vercel.app/',
        
        techStack:['React.js','Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Nodemailer', 'Min-Heap', 'Heapify algorithms'],
    },

    {
        id:3,
        image: MagicalArena,
        title:'Magical Arena',
        desc:'Magical Arena is a console-based multiplayer game where mythical characters battle using dice rolls. Developed with Node.js, it provides real-time updates and scalability for a seamless player experience. ',
    
        link:'https://github.com/Abhinav-Sharma06/Magical-Arena',
        
        techStack:['JavaScript','Node.js',' Express', 'MongoDB', 'Git', 'Chai', 'Mocha'],
    },
    {
        id:4,
        image: Ecomzy,
        title:'Ecomzy',
        desc:'Ecomzy is an e-commerce site for fashion products featuring authentication, product listings, and a payment gateway. It uses Redux for state management and local storage for user preferences and cart persistence, ensuring a seamless and personalized shopping experience.',
    
        link:'https://ecomzy-abhinav.vercel.app/',
        
        techStack:['JavaScript','React.js', 'Redux', 'Tailwind CSS', 'Git',' Razorpay API'],
    },

    {
        id:5,
        image: Netflix,
        title:'Netflix StreamBot',
        desc:`Netflix StreamBot, built with React.js, HTML, CSS, and JavaScript, mimics Netflix's interface with a responsive design. It features a chatbot integrated with AWS and Kommunicate.io for personalized recommendations and enhanced support.`,
    
        link:'https://github.com/Abhinav-Sharma06/NetFlix-Clone',
        
        techStack:['HTML','CSS','Responsive Design','JavaScript','AWS S3',' AWS Lambda',' Kommunicate.io'],
    },

    {
        id:6,
        image: Portfolio,
        title:'Portfolio Website',
        desc:'This portfolio website, built with React.js, JavaScript, and Tailwind CSS, offers a responsive design showcasing my skills, experience, projects, and coding profiles. Git is used for version control, reflecting my professional journey and expertise. ',
        
    
        link:'https://portfolio-abhinav.vercel.app/',
        
        techStack:['JavaScript','Responsive Design',' React.js', 'Tailwind CSS', 'Git'],
    },
    {
        id:7,
        image: Weather,
        title:'Weather App',
        desc:'A weather app that fetches real-time weather data based on user location. It uses the Weather API to display weather information, including temperature, humidity, and wind speed, with a responsive design for seamless user experience. ',

        link:'https://github.com/Abhinav-Sharma06/Weather-App',
        techStack:['HTML5','CSS','JavaScript','Weather API' , 'GeoLocation API'],
    },
    {
      id:8,
      image: Password,
      title:'Password Generator',
      desc:'A password generator web application that allows users to create secure passwords with custom length and character types. It uses JavaScript to generate random passwords based on user preferences. It has a responsive design and is deployed on GitHub Pages.',

      link:'https://abhinav-sharma06.github.io/Password-Generator/',
      techStack:['HTML5','CSS','Responsive Design','JavaScript','Github Pages'],
    }
]