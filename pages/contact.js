import emailjs from "@emailjs/browser";
import Head from "next/head";

const Contact = () => {
    



    return ( 
        
        <div>
        
            <Head>
                <title>Noah H. | Contact</title>
            </Head>
            
            <div className="forum">                
                <form className="form" action="/send-data-here" method="post">
                    <h1 className="contactText">Contact me!</h1>
                    <input id="nameID" type="text" placeholder="Name" required></input>
                    <input id="emailID" type="text" placeholder="Email" required></input>
                    <input id="messageID" className="msg" type="text" placeholder="Message" required></input>
                    <button type="submit" onClick="">Send Message</button>
                </form>
            </div>

        </div>
     );
}
 
export default Contact;