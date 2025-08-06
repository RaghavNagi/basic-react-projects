import Profile from "./Profile";
import Info from "./Info";
import Links from "./Links";

const BusinessCard = ({Name,Role,Linkedin,Github,ProfileImg}) => {
  return (

      <div className="flex items-center bg-gradient-to-r from-[#2c3e50] via-[#4a627a] to-[#bdc3c7] p-8 rounded-xl shadow-lg gap-8">
        <Profile ProfilePic={ProfileImg}/>
        <div className="flex flex-col justify-center pl-5">
          <Info name={Name} role={Role} />
          <Links LinkedinLink={Linkedin} GithubLink={Github} />
      </div>
    </div>
  );
};

export default BusinessCard;
