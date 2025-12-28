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
                        I like building things and figuring out how they actually work under the hood. Right now, I’m deep into machine learning,exploring the magic of teaching machines to think. I’m driven by projects that have a life outside the terminal and solve real problems for real people. When I’m not coding, I am mostly found scribbling under the roof of quora or medium,very active on X.
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


