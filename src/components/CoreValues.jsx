import React from "react";

function CoreValues() {
  return (
    <>
      {/* Core Values Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center text-primary mb-4">Our Core Values</h2>
          <div className="row text-center">
            <div className="col-md-3">
              <h5>Excellence</h5>
              <p>We inspire excellence in academics and character.</p>
            </div>
            <div className="col-md-3">
              <h5>Discipline</h5>
              <p>We uphold discipline as the foundation of success.</p>
            </div>
            <div className="col-md-3">
              <h5>Morals</h5>
              <p>
                We promote strong Islamic morals while welcoming students of all
                faiths.
              </p>
            </div>
            <div className="col-md-3">
              <h5>Innovation</h5>
              <p>We nurture creative minds ready to lead the future.</p>
            </div>
          </div>
          <div className="text-center mt-4">
            <small className="text-muted">
              Iponri Grammar School is a Muslim school that welcomes students
              from all religious backgrounds.
            </small>
          </div>
        </div>
      </section>

      {/* Achievements / Quick Stats Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center text-primary mb-4">Our Achievements</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h1>🏆</h1>
              <h5>98% WAEC Pass Rate</h5>
              <p>Consistent academic excellence year after year.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h1>🎓</h1>
              <h5>1000+ Alumni</h5>
              <p>Our graduates are thriving in top universities and careers.</p>
            </div>
            <div className="col-md-4 mb-4">
              <h1>💻</h1>
              <h5>ICT-Driven Learning</h5>
              <p>Modern tools and digital literacy at every level.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CoreValues;
