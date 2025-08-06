import React from "react";
import LinkedIn from "../assets/LinkedIn.png";
import GitHub from "../assets/GitHub.png";

const Links = ({ LinkedinLink, GithubLink }) => {
  return (
    <div className="flex gap-4 mt-4">
      {" "}
      <a href={LinkedinLink} target="_blank">
        <img src={LinkedIn} alt="linkedin" className="w-10 h-10 rounded-lg" />
      </a>
      <a href={GithubLink} target="_blank">
        <img src={GitHub} alt="github" className="w-9 h-9 rounded-lg" />
      </a>
    </div>
  );
};

export default Links;
