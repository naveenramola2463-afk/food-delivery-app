import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <div className="contact-page">
        <h1>Contact Us</h1>

        <p>📍 Delhi, India</p>

        <p>📞 +91 12345678</p>

        <p>✉ naveen@gmail.com</p>
      </div>

      <Footer />
    </>
  );
}

export default Contact;