
import "./EnrollModal.css"; 

const EnrollModal = ({ onClose }) => {
  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Enroll Now</h2>
        <p>"Secure your child's future with quality education — enroll today! Admissions open for JSS1 to SS2!"</p>
        <button onClick={handleScrollToContact}>Enroll Now</button>
        <span className="modal-close" onClick={onClose}>&times;</span>
      </div>
    </div>
  );
};

export default EnrollModal;
