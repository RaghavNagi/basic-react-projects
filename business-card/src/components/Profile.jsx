const Profile = ({ProfilePic}) => {
  return (
    <div>
        <img src={ProfilePic} alt="profile" className="w-52 h-52 rounded-full object-cover"/>
    </div>
  )
}

export default Profile