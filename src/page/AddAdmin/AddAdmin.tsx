import React, { useState } from 'react';
import axios from 'axios';
import { httpClient } from '../../utils/reques';

const Adminforms = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    password: '',
    // birthday:'',
    // subject: '',
    // starterModule: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
       await httpClient.post('http://164.90.187.178:8080/api/v1/admin/add-student', formData);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6 mt-[60px]">
      <h1 className="text-2xl font-bold mb-4">Teacher Information</h1>
      <form onSubmit={handleSubmit} >
        <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="surname">Surname</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Enter surname"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneNumber">Phone Number</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </div>
        </div>
        <div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 bg-[#0340F0]"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default Adminforms;
