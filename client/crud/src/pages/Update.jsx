// src/components/UserForm.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
const Update = () => {

const {id} = useParams()

  const [formData, setFormData] = useState({
    name: '',
    fathername: '',
    email: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(()=>{
  axios.get(`http://localhost:4000/api/getone/${id}`)
  .then((response)=>{
   setFormData(response.data)
  })
 .catch((error)=>{
    console.log(error)
 })
  },[id])

  const handleSubmit = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/update/${id}` , formData)
    .then((response)=>{
        setFormData(response.data)
    })
    .catch(error=>console.log(error))
    setFormData({ name: '', fathername: '', email: '', phone: '' });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white bg-opacity-50 backdrop-blur-md rounded-lg shadow-md p-6"
    >
      <h2 className="text-2xl font-bold mb-4">User Information</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="fathername">
          Father Name
        </label>
        <input
          type="text"
          id="fathername"
          name="fathername"
          value={formData.fathername}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white font-bold py-2 px-4 rounded hover:bg-green-600"
      >
        Update
      </button>
    </form>
  );
};

export default Update;
