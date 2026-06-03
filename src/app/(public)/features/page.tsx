import React from "react";

export default function FeaturesPage() {
  const features = [
    {
      title: "Secure Authentication",
      description:
        "Create an account and securely log in to access your personal contacts.",
    },
    {
      title: "Add Contacts",
      description:
        "Store important contact information including names, email addresses, and phone numbers.",
    },
    {
      title: "Edit Contacts",
      description:
        "Keep your contact information up to date by modifying details whenever needed.",
    },
    {
      title: "Delete Contacts",
      description:
        "Remove outdated or unnecessary contacts with a single click.",
    },
    {
      title: "Search Contacts",
      description:
        "Quickly find contacts using powerful search and filtering capabilities.",
    },
    {
      title: "Personal Contact Management",
      description:
        "Each user has access only to their own contacts, ensuring privacy and organization.",
    },
    {
      title: "Responsive Design",
      description:
        "Access and manage your contacts seamlessly on desktop, tablet, and mobile devices.",
    },
    {
      title: "Fast & User-Friendly",
      description:
        "Enjoy a clean interface designed to make contact management simple and efficient.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Features
        </h1>
        <p className="text-lg text-gray-600">
          Everything you need to organize and manage your contacts effectively.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-3">
              {feature.title}
            </h2>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}