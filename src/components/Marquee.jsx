import "../styles/marquee.css"

import Marquee from "react-fast-marquee";


    const techStackRow1 = [
  { name: "Django", icon: "/tech_icon/dj.png" },
  { name: "Express", icon: "/tech_icon/express.png" },
  { name: "HTML5", icon: "/tech_icon/html.png" },
  { name: "JavaScript", icon: "/tech_icon/js.png" },
  { name: "Node.js", icon: "/tech_icon/node.png" },
  { name: "React", icon: "/tech_icon/react.png" },
];

    const techStackRow2 = [
  { name: "C++", icon: "/tech_icon/cpp.png" },
  { name: "Linux", icon: "/tech_icon/linux.png" },
  { name: "MongoDB", icon: "/tech_icon/mongoDb.png" },
  { name: "PostgreSQL", icon: "/tech_icon/psql.png" },
  { name: "Python", icon: "/tech_icon/py.png" },
  { name: "Selenium", icon: "/tech_icon/selenium.png" },
  { name: "Supabase", icon: "/tech_icon/supabase.png" },
];



function TechRow({ items }) {
  return (
    <div className="logo_collection">
      {items.map((tech) => (
        <div className="logo" key={tech.name}>
          <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" />
          <span>{tech.name}</span>
        </div>
      ))}
    </div>
  );
}


export default function Marqueee(){

    return (
        <section className="marquee_container">
        <h2 className="marquee_title">Tech Stack</h2>

        <Marquee speed={40} pauseOnHover>
            <TechRow items={techStackRow1} />
        </Marquee>

        <Marquee speed={38} direction="right" >
            <TechRow items={techStackRow2} />
        </Marquee>
        </section>
    )
}