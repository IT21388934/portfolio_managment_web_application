import { motion } from "framer-motion";
import "./ContactScreen.css";
import Header from "../components/common/Header";

import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import { userRequest } from "../../requestMethods";

import { successMessage, errorMessage } from "../toastMessage/toastMessage";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState("");

  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    const messageInfo = {
      name,
      email,
      phone,
      msg,
    };
    // console.log(messageInfo);
    try {
      const response = await userRequest.post("/messages/add", messageInfo);
      const { success, message, savedMessage } = response.data;
      console.log({
        success: success,
        message: message,
        savedMessage: savedMessage,
      });
      // console.log(response.data);
      // alert("Message Sent Successfully");
      if (success) {
        // alert(message);
        setName("");
        setEmail("");
        setPhone("");
        setMsg("");
        successMessage(message);
      } else {
        // alert(message);
        errorMessage(message);
      }
    } catch (error) {
      console.log(error);
      errorMessage(error.response.data.e);
    }
  };

  return (
    <>
      <Header />
      <motion.div className="container">
        {/* <div className="title">Contact</div> */}
        <div className="contactContainer">
          <motion.div
            className="titleSection"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="contact-info">
              <div className="title">Contact Us</div>
              <div style={{ height: "20px" }}></div>
              <div className="info-item">
                <FaLocationDot className="contactIcon" />
                <p className="contactP">
                  637, Galagawahenawaththa, Kudagammana , Giriulla, Srilanka
                </p>
              </div>
              <div className="info-item">
                <FaPhone className="contactIcon" />
                <p>+94703961965</p>
              </div>
              <div className="info-item">
                <MdEmail className="contactIcon" />
                <p>Siriwardhanarumesh@gmail.com</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="formSection2"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 2,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <form className="contact-form">
              <div className="title2">Send Your Message</div>
              <div style={{ height: "20px" }}></div>
              <input
                type="text"
                className="contact-form-text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                className="contact-form-text"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                className="contact-form-text"
                placeholder="Your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                className="contact-form-text"
                placeholder="Your message"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
              <input
                type="submit"
                className="btn"
                value="Send"
                onClick={(e) => handleMessageSubmit(e)}
              />
            </form>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
