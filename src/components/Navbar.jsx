

import "../styles/navbar.css"
import { RiGithubLine } from "react-icons/ri";
import { LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { CgFileDocument } from "react-icons/cg";


export default function  Navbar(){
    return (
        <div className="navbar_container">
  <div className="navbar_anim">
    <div className="navbar_">
      <div></div>
      <span><RiGithubLine size={25} /></span>
      <span><LuLinkedin size={22} /></span>
      <span><RiTwitterXLine size={22} /></span>
      <span><CgFileDocument size={23} /></span>
      <div></div>
    </div>
  </div>
</div>

    )
}