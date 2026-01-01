import { useEffect, useRef, useState } from "react"

import "../styles/Intro.css"

export default function Intro(){

    const [today, setToday] = useState(null)
    const day_num_mapping = {
        0 : "Sunday",
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
    }

    useEffect(()=>{
        const d = new Date()
        let day = d.getDay()

        setToday(day_num_mapping[day])


    }, [])

    const font_collection = [
        "Playfair Display",
        "Open Sans",
        "Lato",
        "Inter",
        "Poppins",
        "Raleway",
        "Ubuntu",
        "Source Sans 3",
        "Georgia",
        "Courier New",
        "Impact",
        "Comic Sans MS",
        "Futura",
        "Avenir",
        "Segoe UI",
        "Helvetica Neue",
        "Verdana",
        "Tahoma"
    ];



    let curr_font_idx = useRef(0)
    
    const [curr_font, setCurr_font ] = useState("Inter")

    useEffect(() => {
        let intervalId;

        document.fonts.ready.then(() => {
            const safeFonts = font_collection.filter(font =>
            document.fonts.check(`16px "${font}"`)
            );

            if (safeFonts.length === 0) {
            safeFonts.push("Inter");
            }

            intervalId = setInterval(() => {
            curr_font_idx.current =
                (curr_font_idx.current + 1) % safeFonts.length;

            setCurr_font(safeFonts[curr_font_idx.current]);
            }, 400);
        });

        return () => {
            if (intervalId) clearInterval(intervalId);
        };
        }, []);


    return (
        <section>
            <div className="intro_container">
                <a href="https://x.com/recursive_fool" >
                <div className="profile_img" >
                    <span className="profile_img_span">
                        <img src="./amit_pandey.jpg" alt="Amit Pandey profile photo" />
                    </span>
                </div>
                </a>
                <div className="intro_text">
                    <div className="intro_text_main">
                        <span className="intro_hi">Hi, I'm</span>
                        <span className="intro_name_container" >
                            <div className="intro_name" style={{fontFamily : `${curr_font}`}} >Amit Pandey</div>
                        </span>
                        
                        {/* this text will keep on changing the font */}
                    </div>
                    <div className="snap_effect">
                        <div className="">
                            How is your <span>{today}</span> going ?
                        </div>
                        
                    </div>
                   
                </div>

            </div>
        </section>
    )
}