import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Footer.module.css'; // Import the CSS module

const Footer = ({ lan }) => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('');

  const handleSendEmail = (e) => {
    e.preventDefault();

    if (email.trim() === '' || message.trim() === '') {
      setModalMessage(
        lan === "العربية"
          ? 'Please fill in both email and message fields.'
          : 'يرجى ملء كل من البريد الإلكتروني وحقل الرسالة.'
      );
      setModalType('error');
      setIsModalOpen(true);
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm(
        'service_tla7d7p',
        'template_5w6aehg',
        form.current,
        'jm56_ibSKRykP9dsR'
      )
      .then(
        () => {
          setIsSending(false);
          setModalMessage(
            lan === "العربية" ? 'Message sent successfully.' : 'تم إرسال الرسالة بنجاح.'
          );
          setModalType('success');
          setIsModalOpen(true);
          form.current.reset();
          setMessage('');
          setEmail('');
        },
        () => {
          setIsSending(false);
          setModalMessage(
            lan === "العربية"
              ? 'Failed to send message. Please try again.'
              : 'فشل في إرسال الرسالة. يرجى المحاولة مرة أخرى.'
          );
          setModalType('error');
          setIsModalOpen(true);
        }
      );
  };

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Contact form */}
          <div className={styles.contactSection}>
            <h4>{lan === "العربية" ? "Contact Us" : "اتصل بنا"}</h4>
            <form ref={form} onSubmit={handleSendEmail} className={styles.contactForm}>
              <input
                type="email"
                name="user_email"
                placeholder={lan === "العربية" ? "Your Email" : "بريدك الإلكتروني"}
                className={styles.inputField}
                value={email}
                style={{ textAlign: lan === "العربية" ? "left" : "right" }}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                id="message"
                name="message"
                rows="3"
                style={{ textAlign: lan === "العربية" ? "left" : "right" }}
                placeholder={lan === "العربية" ? "Your Message" : "رسالتك"}
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
           
              />
              <button type="submit" className={styles.submitButton} disabled={isSending}>
                {isSending
                  ? lan === "العربية"
                    ? 'Sending...'
                    : 'يتم الإرسال...'
                  : lan === "العربية"
                    ? 'Send'
                    : 'إرسال'}
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className={styles.linksSection} style={{ textAlign: lan === "العربية" ? "left" : "right" }}>
            <h4>{lan === "العربية" ? "Quick Links" : "روابط سريعة"}</h4>
            <ul className={styles.footerLinks} style={{ textAlign: lan === "العربية" ? "left" : "right" }}>
              <li><a href="#about">{lan === "العربية" ? "About Us" : "معلومات عنا"}</a></li>
              <li><a href="#products">{lan === "العربية" ? "Products" : "المنتجات"}</a></li>
              <li><a href="#docs">{lan === "العربية" ? "Docs" : "المستندات"}</a></li>
              <li><a href="/owner">{lan === "العربية" ? "Owner Space" : "مساحة المالك"}</a></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className={styles.infoSection} style={{ textAlign: lan === "العربية" ? "left" : "right" }}>
            <p>{lan === "العربية" ? "Phone: +123-456-7890" : "الهاتف: +123-456-7890"}</p>
            <p>{lan === "العربية" ? "Email: info@chickenfarm.com" : "info@chickenfarm.com :البريد الإلكتروني"}</p>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p>&copy; 2024 Agribits. {lan === "العربية" ? "All rights reserved." : "جميع الحقوق محفوظة."}</p>
        </div>
      </footer>

      {/* Modal for sending status */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h4>
              {modalType === 'success'
                ? lan === "العربية" ? 'Success' : 'تم الارسال'
                : lan === "العربية" ? 'Error' : 'خطأ'}
            </h4>
            <p>{modalMessage}</p>
            <button className={styles.closeModalButton} onClick={() => setIsModalOpen(false)}>
              {lan === "العربية" ? 'Close' : 'إغلاق'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
