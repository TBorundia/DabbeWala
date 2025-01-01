import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Mail className="h-5 w-5 text-orange-500 mr-3" />
        <span>support@dabbewala.com</span>
      </div>
      <div className="flex items-center">
        <Phone className="h-5 w-5 text-orange-500 mr-3" />
        <span>+91 123 456 7890</span>
      </div>
      <div className="flex items-center">
        <MapPin className="h-5 w-5 text-orange-500 mr-3" />
        <span>123 Main Street, Bangalore, India</span>
      </div>
    </div>
  );
}