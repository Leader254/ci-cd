'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   alert('Message sent!');
  };

  return (
    <main>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input name="name" type="text" value={formData.name} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Email:
          <input name="email" type="email" value={formData.email} onChange={handleChange} required />
        </label>
        <br />

        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </label>
        <br />

        <button type="submit">Send</button>
      </form>
    </main>
  );
}
