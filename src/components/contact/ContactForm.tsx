import React from 'react';

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Your name"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="email"
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Your email"
        />
      </div>
      <div>
        <label className="block text-gray-700 mb-2">Message</label>
        <textarea
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
          rows={4}
          placeholder="Your message"
        ></textarea>
      </div>
      <button className="w-full px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Send Message
      </button>
    </form>
  );
}