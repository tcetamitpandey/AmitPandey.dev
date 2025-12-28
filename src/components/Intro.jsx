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
        "Georgia",
        "Courier New",
        "Impact",
        "Comic Sans MS",
        "Open Sans",
        "Lato",
        "Inter",
        "Poppins",
        "Raleway",
        "Ubuntu",
        "Source Sans Pro",
        "Futura",
        "Avenir",
        "Segoe UI",
        "Helvetica Neue",
        "Verdana",
        "Tahoma" 
        ]


    let curr_font_idx = useRef(0)
    
    const [curr_font, setCurr_font ] = useState("Inter")

    useEffect(()=>{

        const fontChangeIterval = setInterval(()=>{
            curr_font_idx.current = (curr_font_idx.current + 1) % font_collection.length

            setCurr_font(font_collection[curr_font_idx.current])

        }, 400 )

        return ()=>{
            clearInterval(fontChangeIterval)
        }


    },[])

    return (
        <section>
            <div className="intro_container">
                <div className="profile_img" >
                    <span className="profile_img_span">
                        <img src="./amit_pandey.jpg" alt="" />
                    </span>
                </div>
                <div className="intro_text">
                    <div className="intro_text_main">
                        <span className="intro_hi">Hi, I'm</span>
                        <h1 className="intro_name" style={{fontFamily : `${curr_font}`}} >Amit Pandey</h1>
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