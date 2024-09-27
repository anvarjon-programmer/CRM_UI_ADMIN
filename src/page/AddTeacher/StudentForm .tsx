import React, { useState } from 'react';
import axios from 'axios';
import { httpClient } from '../../utils/reques';

const StudentForm = () => {
  // const [formData, setFormData] = useState({


  //   name: '',
  //   surname: '',
  //   phoneNumber: '',
  //   password: '',
  //   birthday:'',
  //   subject: '',
  //   starterModule: ''
  // });

  // const handleChange = (e) => {


  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   });
  // };

  // const handleSubmit = async (e) => {


  //   e.preventDefault();
    
  //   try {
  //      await httpClient.post('/admin/add-student', formData);
  //   } catch (error) {
  //     console.error('Error adding student:', error);
  //   }
  // };

  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');;
  const [password,setPassword] = useState('');
  const [birthday,setBirthday] = useState('');
  const [subject,setSubject] = useState('');
  const [starterModule,setStarterModule] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const token = window.location.search;
    
    const newData = {
      name,
      surname,
      phoneNumber,
      password,
      birthday,
      subject,
      starterModule
    };
  
    try {
      await axios.post('http://164.90.187.178:8080/swagger-ui/index.html#/teacher-controller/createLesson', newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Student added successfully!');
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };
  


  return (
    <div className="max-w-[800px] mx-auto bg-white shadow-md rounded-lg p-6 mt-12">
      <h1 className="text-2xl font-bold mb-4">Teacher Information</h1>
      <form onSubmit={handleSubmit} className='md:flex items-center justify-between'>
        <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            value={name}
            onChange={e =>setName(e.target.value)}
            placeholder="Enter name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="surname">Surname</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="surname"
            value={surname}
            onChange={e => setSurname(e.target.value)}
            placeholder="Enter surname"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="phoneNumber">Phone Number</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="phoneNumber"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            placeholder="Enter phone number"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>
        </div>



        <div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">birthday</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="string"
            name="birthday"
            value={birthday}
            onChange={e => setBirthday(e.target.value)}
            placeholder="Enter burthday"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">Subject</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="subject"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder="Enter subject"
          />
        </div>

        <div className="mb-7">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="subject">starterModule</label>
          <input
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="number"
            name="starterModule"
            value={starterModule}
            onChange={e => setStarterModule(e.target.value)}
            placeholder="Enter starterModule"
          />
        </div>
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

export default StudentForm;
