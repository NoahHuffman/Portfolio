import Head from "next/head";
import emailjs from "emailjs/browser";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    console.log(e.target);

    emailjs
      .sendForm(
        "service_5vjh2u5",
        "template_675dcth",
        e.target,
        "kS0oKGl9mBpeBbOEx"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  }

  return (
    <div>
      <Head>
        <title>Noah H. | Contact</title>
      </Head>

      <div className="forum">
        <form className="form" onSubmit={sendEmail} method="post">
          <h1 className="contactText">Contact me!</h1>
          <input
            name="nameID"
            id="nameID"
            type="text"
            placeholder="Name"
            required
          ></input>
          <input
            name="emailID"
            id="emailID"
            type="text"
            placeholder="Email"
            required
          ></input>
          <input
            name="messageID"
            id="messageID"
            className="msg"
            type="text"
            placeholder="Message"
            required
          ></input>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
