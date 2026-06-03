"use client";
import React from "react";

export const dynamic = "force-static";


export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        About Contact Management App
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Contact Management App is a simple and efficient solution for managing
        your personal and professional contacts in one place. It helps users
        organize, store, and access contact information quickly and securely.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to provide an easy-to-use platform that simplifies
            contact management, making it easier for individuals and teams to
            stay connected and organized.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Create and store contact information.</li>
            <li>Update contact details anytime.</li>
            <li>Delete contacts you no longer need.</li>
            <li>Search and organize contacts efficiently.</li>
            <li>Secure user authentication and authorization.</li>
            <li>Responsive design for desktop and mobile devices.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <p className="text-gray-600">
            Whether you're managing personal connections or professional
            networks, our application provides a clean and reliable experience
            that helps you focus on what matters most—staying connected.
          </p>
        </section>
      </div>
    </div>
  );
}