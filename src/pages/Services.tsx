import React from 'react';
import { ServiceCard } from '../components/services/ServiceCard';

export function Services() {
  const services = [
    {
      title: "Monthly Subscription",
      description: "Get fresh, home-cooked meals delivered daily with our monthly subscription plans.",
      price: "Starting from ₹2000/month",
      features: ["Daily delivery", "Menu customization", "Weekend delivery optional"]
    },
    {
      title: "Weekly Plan",
      description: "Perfect for those who want to try our service or need shorter commitments.",
      price: "Starting from ₹600/week",
      features: ["5 days service", "Menu rotation", "Flexible timing"]
    },
    {
      title: "Corporate Tiffin",
      description: "Special plans for offices and corporate employees.",
      price: "Custom pricing",
      features: ["Bulk orders", "Special packaging", "On-time delivery"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
}