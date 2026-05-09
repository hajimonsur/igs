import React from 'react';

function Contact() {
  return (
    <section className="py-5 bg-primary text-white" id="contact">
      <div className="container">
        <h2 className="text-center text-uppercase mb-4 display-5 fw-bold">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8 col-12">
            <div className="">
              <h4 className="text-center mb-3 fw-semibold text-light">Get in Touch</h4>
              <p className="text-center text-light mb-4 fs-5">
                We'd love to hear from you! Reach out to us anytime.
              </p>

              <div className="d-flex flex-column align-items-center gap-4">
                <div className="text-center">
                  <p className="mb-1 fw-bold">Address:</p>
                  <a
                    href="https://www.google.com/maps?q=5+Afric+Road,+Abule+Nla,+Iponri,+Lagos"
                    className="text-white text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    5 Afric Road, Abule Nla, Iponri, Lagos
                  </a>
                </div>

                <div className="text-center">
                  <p className="mb-1 fw-bold">Email:</p>
                  <a
                    href="mailto:info@IponriGrammarSchool.edu.ng"
                    className="text-white text-decoration-none"
                  >
                    info@IponriGrammarSchool.edu.ng
                  </a>
                </div>

                <div className="text-center">
                  <p className="mb-1 fw-bold">Phone:</p>
                  <a
                    href="tel:+2348035835934"
                    className="text-white text-decoration-none"
                  >
                    +234 803 583 5934
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
