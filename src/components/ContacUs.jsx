import "../styles/contactus.css"



function ContactUs(){
    return (
        <div className="contactus_container">
            <div className="contactus_title">
                <span>Contact</span>
            </div>
            <div className="contactus_sub_title">
                <span>Let's get in touch!</span>
            </div>

           <div className="contactus_desc">
            <span>
                If you have any inquiries, please feel free to reach out. You can contact me via Email at
                <br />
                <a
                href="mailto:ap7666088748@gmail.com"
                className="contactUs_email"
                >
                ap7666088748@gmail.com
                </a>
            </span>
            </div>


            
        </div>
    )
}


export default ContactUs