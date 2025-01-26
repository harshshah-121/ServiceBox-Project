import React, { useState } from 'react';
import './SelectService.css';

const SelectServicePage = () => {
  const [selectedService, setSelectedService] = useState(null); // State to store selected service details

  const services = [
    {
      id: 1,
      name: 'Furniture',
      description: [
        "Custom-designed furniture solutions for homes and offices.",
        "Creation of bespoke furniture like chairs, tables, cabinets, and wardrobes.",
        "Both modern and traditional designs to suit different styles.",
        "High-quality materials such as wood, metal, and glass.",
        "Ensuring durability, comfort, and aesthetic appeal."
      ],
    },
    {
      id: 2,
      name: 'Carpentry',
      description: [
        "Skilled craftsmanship with traditional and modern woodworking techniques.",
        "Custom-built cabinets, shelves, doors, and wood features.",
        "Expertise in creating staircases and intricate moldings.",
        "Bespoke woodwork for residential and commercial projects.",
        "Precision craftsmanship for a perfect fit in your space."
      ],
    },
    {
      id: 3,
      name: 'Plumbing',
      description: [
        "Plumbing services to ensure your water systems run smoothly.",
        "Repairing leaks, unblocking drains, and replacing old pipes.",
        "Installation of water heaters and plumbing systems.",
        "Comprehensive plumbing solutions for homes and businesses.",
        "Quick, efficient, and affordable services with a focus on quality."
      ],
    },
    {
      id: 4,
      name: 'Cleaning',
      description: [
        "Eco-friendly and professional cleaning services.",
        "Regular cleaning schedules and one-time deep cleaning services.",
        "Specialized home, office, and commercial cleaning.",
        "Thorough cleaning of floors, windows, and every corner of your space.",
        "Flexible scheduling to fit your needs."
      ],
    },
    {
      id: 5,
      name: 'Gardening',
      description: [
        "Landscaping and gardening services to enhance your outdoor spaces.",
        "Lawn care, plant trimming, and flower planting.",
        "Designing garden layouts to complement your property.",
        "Maintenance of trees, shrubs, and hedges.",
        "Eco-friendly gardening solutions that promote sustainability."
      ],
    },
    {
      id: 6,
      name: 'Electrical',
      description: [
        "Expert electrical services for homes and businesses.",
        "Installation of lighting, outlets, and wiring systems.",
        "Repair and troubleshooting of electrical faults.",
        "Upgrading electrical panels and circuit breakers.",
        "Ensuring safety and compliance with regulations."
      ],
    },
    {
      id: 7,
      name: 'Painting',
      description: [
        "Interior and exterior painting services for homes and offices.",
        "High-quality paints and finishes for a lasting result.",
        "Surface preparation, priming, and final touch-ups.",
        "Decorative and feature wall painting options.",
        "Affordable pricing and timely project completion."
      ],
    },
    {
      id: 8,
      name: 'Masonry',
      description: [
        "Masonry services for building and repair projects.",
        "Brick, stone, and concrete work for residential and commercial spaces.",
        "Retaining walls, patios, and walkways.",
        "Fireplaces, chimneys, and foundation repairs.",
        "Expert craftsmanship for a solid, durable finish."
      ],
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service); // Set the selected service when clicked
  };

  return (
    <div className="select-service-container">
      <h2>Our Services</h2>

      {/* List of services */}
      <div className="services-list">
        {services.map((service) => (
          <div
            key={service.id}
            className="service-item"
            onClick={() => handleServiceClick(service)} // Click on service to show details
          >
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>

      {/* Conditionally render the selected service's details */}
      {selectedService && (
        <div className="service-detail-container">
          <h2>{selectedService.name}</h2>
          <ul>
            {selectedService.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SelectServicePage;
