import { motion } from "framer-motion";
import "./ContactScreen.css";
import Header from "../components/common/Header";
export default function ContactScreen() {
  return (
    <>
      <Header />
      <motion.div className="container">
        <div className="title">Contact</div>
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
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p className="contactP">
                637, Galagawahenawaththa, Kudagammana , Giriulla, Srilanka
              </p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+94703961965</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>Siriwardhanarumesh@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
