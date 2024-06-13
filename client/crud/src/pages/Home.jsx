import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

const Home = () => {

const [users , setUsers] = useState([])

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/get");
      setUsers(response.data.user);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, []);

const deleteUser = async(userId)=>{
          await axios.delete(`http://localhost:4000/api/delete/${userId}`)
          .then((response)=>{
            setUsers((prev)=>prev.filter((user)=>user._id!== userId))
          })
          .catch((error)=>{
          console.log(error)
          })
}

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white bg-opacity-50 backdrop-blur-md rounded-md shadow-md">
        <thead>
          <tr className="w-full bg-gray-800 bg-opacity-50">
            <th className="px-4 py-2 text-left text-white">Name</th>
            <th className="px-4 py-2 text-left text-white">Father Name</th>
            <th className="px-4 py-2 text-left text-white">Email</th>
            <th className="px-4 py-2 text-left text-white">Phone Number</th>
            <th className="px-4 py-2 text-left text-white">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) =>{ 
            return (
            <tr key={index} className="border-b">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.fathername}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">
                <Link to = {`/update/`+user._id}><button
                  
                  className="bg-black text-white px-2 py-1 rounded mr-2 hover:bg-green-500"
                >
                  Update
                </button></Link>
                <button
                  onClick={()=>deleteUser(user._id)}
                  className="bg-black text-white px-2 py-1 rounded hover:bg-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          )})}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
