import "../styles/about.css"


export default function About(){


    const experience = [
        {
            _img : "./logo/ph_logo.webp",
            _name : "PeopleHum",
            _title : "Software Developer",
            start_date : "May 2024",
            end_date : " Present"

        },
        {
            _img : "./logo/quastech.jpeg",
            _name : "Quastech",
            _title : "Full Stack Trainer",
            start_date : "Oct 2023",
            end_date : " Mar 2024"

        },
    ]

    const education = [
        {
            _img : "./logo/TCET.webp",
            _name : "Thakur College of Engeering & Technology",
            _title : "Bachlor of Engineeering",
            start_date : "2019",
            end_date : " 2023"
        },
    ]


    return (
        <section className="section_container">
            <div className="_container"> 

                <div className="_title">About</div>
                <div className="about_content">
                    <p>
                        I’m a builder who turns ideas into reliable, production-ready systems. I work across backend development, data, automation, and infrastructure, with a strong focus on solving real business problems. I enjoy owning problems end-to-end, diving deep into failures, and continuously improving the systems I build. Outside of work, I write, teach, and share what I learn.
                    </p>
                    
                </div>

            </div>

            <div className="_container">
                <div className="_title">Experience</div>
                {experience.map( (item)=> (
                    <div className="item_container">
                        <div className="item_left">
                            <div className="item_img">
                                <img src={item._img} alt="" />
                            </div>
                            <div className="item_text_section">
                                <span>{item._name}</span>
                                <p>{item._title}</p>
                            </div>
                        </div>
                        <div className="item_right">
                            <p>{item.start_date}</p> 
                            <p>—</p> 
                            <p>{item.end_date}</p>
                        </div>
                    </div>
                ) ) }

            </div>

            <div className="_container">

                <div className="_title">Education</div>

                {education.map( (item)=> (
                    <div className="item_container">
                        <div className="item_left">
                            <div className="item_img">
                                <img src={item._img} alt="" />
                            </div>
                            <div className="item_text_section">
                                <span>{item._name}</span>
                                <p>{item._title}</p>
                            </div>
                        </div>
                        <div className="item_right">
                            <p>{item.start_date}</p>
                            <p>—</p> 
                            <p>{item.end_date}</p>
                        </div>
                    </div>
                ) ) }


            </div>

        </section>
    )
}


