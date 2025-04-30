import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/securerights.png"
          title="IP Protection System"
          description="AI-powered system detecting Disney's intellectual property on YouTube in real-time using YOLOv5, TensorFlow, and OpenCV with advanced video and audio analysis."
          technologies={["YOLOv5", "TensorFlow", "OpenCV", "Python"]}
          githubLink="https://github.com/sktigpta/Gdg-Solution-Challenge"
          demoLink="https://securerights.app"
        />
        <ProjectCard
          src="/Blockchain Certificates.png"
          title="Blockchain Certificate System"
          description="Decentralized app for issuing and validating certificates on Ethereum blockchain with Solidity smart contracts and QR code support for seamless certificate validation."
          technologies={["Solidity", "React.js", "Node.js", "IPFS"]}
          githubLink="https://github.com/saurav7557/Hackindia-Spark-4-2025-Tech-No-Logic"
          demoLink="https://certificate-frontend-three.vercel.app/"
        />
        <ProjectCard
          src="/Screenshot 2025-04-30 223824.png"
          title="RentBlee - Rental Platform"
          description="E-commerce rental platform allowing users to rent and vendors to list items with JWT authentication, responsive UI and backend inventory management."
          technologies={["React", "Node.js", "Express", "MongoDB"]}
          githubLink="https://github.com/saurav7557/rentblee_frontend"
        />
      </div>
    </div>
  );
};

export default Projects;