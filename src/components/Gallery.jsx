import React from "react";

function Gallery() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center text-primary mb-4">
          Our School in Pictures
        </h2>
        <div className="row g-3">
          {/* Image 1 */}
          <div className="col-md-4">
            <img
              src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
              alt="Classroom"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Image 2 */}
          <div className="col-md-4">
            <img
              src="graduating students.jpeg"
              alt="graduating Students"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Image 3 */}
          <div className="col-md-4">
            <img
              src="extracurricular.jpeg"
              alt="extracurricular activities"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Image 4 */}
          <div className="col-md-4">
            <img
              src="libary.jpeg"
              alt="Library"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Image 5 */}
          <div className="col-md-4">
            <img
              src="clinic.jpeg"
              alt="School Clinic"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Video */}
          <div className="col-md-4">
            <div
              className="position-relative"
              style={{ height: "250px", overflow: "hidden" }}
            >
              <video
                src="https://res.cloudinary.com/dtcjgwt8p/video/upload/v1747648436/igs_ict_s562b1.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{ width: "100%", height: "120%", objectFit: "cover" }}
                className="rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
