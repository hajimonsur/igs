import React from 'react';
import { FaBookOpen, FaFlask, FaLaptop, FaChalkboardTeacher, FaFutbol, FaMosque } from 'react-icons/fa';

function Facilities() {
  return (
    <section className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="text-primary fw-bold mb-4">Our Facilities</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <Facility icon={<FaFlask />} title="Science Laboratories" />
          <Facility icon={<FaChalkboardTeacher />} title="Spacious Classrooms" />
          <Facility icon={<FaBookOpen />} title="Library" />
          <Facility icon={<FaFutbol />} title="Sport Facilities" />
          <Facility icon={<FaLaptop />} title="Computer Lab" />
          <Facility icon={<FaChalkboardTeacher />} title="Conducive Learning Environment" />
          <Facility icon={<FaBookOpen />} title="Standard Facilities" />
          <Facility icon={<FaMosque />} title="Moral & Religious Education" />
        </div>

        <p className="mt-4 text-muted fst-italic">
          We welcome students from all backgrounds while promoting strong academic and moral values.
        </p> 
      </div>
    </section>
  );
}

function Facility({ icon, title }) {
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-sm p-3">
        <div className="text-primary mb-3" style={{ fontSize: '2rem' }}>
          {icon}
        </div>
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
}

export default Facilities;
