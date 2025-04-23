import shubhYatra from "../assets/shubhYatra.png";
import taskTrack from "../assets/taskTrack.png";
import weather from "../assets/weather.png";
import github from "../assets/github.png";

const fullStack = {
    ShubhYatra: {
        info: "Shubh Yatra, the premier online travel platform designed to make your travel experiences seamless and memorable. Whether you're planning a weekend getaway or a long-term stay, Shubh Yatra offers a diverse range of accommodations tailored to suit your needs. With user-friendly search features, secure booking, and 24/7 customer support, your perfect trip is just a few clicks away. Discover new destinations, enjoy local hospitality, and embark on your next adventure with confidence through Shubh Yatra. Your journey starts here!",
        img: shubhYatra,
        deploy: "https://shubh-yatra-niqu.onrender.com/listings",
        githubRepo: "https://github.com/Tarun-Aggarwal/Shubh-Yatra"

    },
    TaskTrack: {
        info: "TaskTrack, a task management web app built to help users efficiently organize their daily activities. It provides an intuitive interface to add, view, and manage tasks, along with a calendar view for better planning. The backend is powered by Express and MongoDB, while EJS and Bootstrap are used for dynamic and responsive UI rendering.",
        img: taskTrack,
        githubRepo: "https://github.com/Tarun-Aggarwal/Task-Track"
    }
}

const reactProjects = {
    WeatherApp: {
        info: "A simple react based weather app that uses open Weather API and tells the weather information like temperature, atmospheric pressure, humidity etc. of any city, country and state.",
        img: weather
    },
    GithubApp: {
        info: "A simple web app that uses Github-API and displays details of different github users by taking the count of users from user as input.",
        img: github
    }
    
}

export {fullStack, reactProjects};