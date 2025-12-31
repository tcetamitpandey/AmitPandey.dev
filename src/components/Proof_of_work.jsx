
import "../styles/proof_of_work.css"
import { RiGithubLine } from "react-icons/ri";
import { VscGlobe } from "react-icons/vsc";

const project_collection = [
        {
            proj_img: "./project_img/creative_agency.png",
            proj_title: "CreativePulse – Digital Agency Website",
            proj_stack: ["React", "JavaScript", "HTML5", "CSS3", "Vercel"],
            proj_desc:
            "A modern and responsive digital agency website showcasing services, portfolios, and client engagement with smooth UI interactions.",
            proj_github: "https://github.com/tcetamitpandey/creative-agency",
            proj_live: "https://creative-agency-ashy.vercel.app"
        },
        {
            proj_img: "./project_img/health_agency.png",
            proj_title: "InsureWell – Health Insurance Portal",
            proj_stack: ["React", "JavaScript", "HTML5", "CSS3", "Vercel"],
            proj_desc:
            "A user-friendly health insurance platform designed to explore policies, compare plans, and generate insurance leads efficiently.",
            proj_github: "https://github.com/tcetamitpandey/rahul-pandey-hdfc-ergo",
            proj_live: "https://rahul-pandey-hdfc-ergo.vercel.app/"
        },
        {
            proj_img: "./project_img/TrackMyPrep.png",
            proj_title: "TrackMyPrep – Smart Study Planner",
            proj_stack: ["React", "Node.js", "REST APIs", "OpenAI API"],
            proj_desc:
            "A productivity-focused preparation tracker that helps users plan, monitor, and analyze study progress for exams and goals.",
            proj_github: "https://github.com/tcetamitpandey/TrackMyPrep",
            proj_live: ""
        },
        {
            proj_img: "./project_img/onebook.png",
            proj_title: "OneBook – Full-Stack E-Commerce Platform",
            proj_stack: ["React", "Node.js", "Python", "MongoDB", "REST APIs"],
            proj_desc:
            "A full-stack e-commerce application for browsing, purchasing, and managing books with authentication and order workflows.",
            proj_github: "https://github.com/tcetamitpandey/onebook-fullstack-ecommerce",
            proj_live: ""
        },
        {
            proj_img: "./project_img/Indian_tourism.png",
            proj_title: "Explore India – Tourism Experience Portal",
            proj_stack: ["React", "JavaScript", "HTML5", "CSS3", "GitHub Pages"],
            proj_desc:
            "A tourism-focused web platform showcasing India’s destinations, culture, and travel experiences with an engaging UI.",
            proj_github: "https://github.com/tcetamitpandey/Tourism",
            proj_live: "https://tcetamitpandey.github.io/Tourism/"
        }
        ];


export default function Proof_of_work(){


    return (
        <>
        <div className="proof_of_work_container">
            <div className="proof_of_work_text_section">
                <div>
                    <span  className="pow_title" >Proof of work</span>
                </div>
                <div >
                    <span className="pow_sub_title" >Check Out My latest Work</span>
                </div>
                <p className="pow_desc" >Still learning still improving hope you like some of these </p>

            </div>

            <div className="proof_of_work_projects">
                { project_collection.map( (project, index)=>{
                    return (
                    <div key={index} className="project">
                        <div className="project_img">
                            <img src={project.proj_img} alt="" loading="lazy" />
                        </div>
                        <div className="project_text">
                            <div className="project_title" >{project.proj_title}</div>
                            <div className="tech_stack_used">
                                {project.proj_stack.map( (item,idx)=>{
                                    return(
                                    <div key={idx} className="tech_stack_item">{item}</div>
                                    )
                                } )}
                            </div>
                            <div className="project_desc">
                                {project.proj_desc}
                            </div>
                            <div className="project_btns">
                                <a target="_blank" href={project.proj_github}  >
                                    < RiGithubLine size={18} />
                                    <span>GitHub</span>
                                </a>

                                { project.proj_live && 
                                <a  target="_blank" className="website_container"   href={project.proj_live} >
                                    < VscGlobe className="website_icon" size={18} />
                                    <span> Website </span>
                                </a>
                                
                                }
                                
                            </div>
                        </div>
                    </div>
                    )
                } ) }

            </div>
        </div>
        </>
    )
}