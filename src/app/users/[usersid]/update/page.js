"use client"
import { useEffect, useState } from 'react'

function page({ params }) {
       let id = params.usersid;
       const [name, setName] = useState("");
       const [age, setAge] = useState("");
       const [email, setEmail] = useState("");
       useEffect(() => {
              getUserDetails()
       },[]);

       const getUserDetails = async () => {
              let data = await fetch(`http://localhost:3000/api/users/${id}`);
              data = await data.json();
              setName(data.result.name);
              setAge(data.result.age);
              setEmail(data.result.email);
       }
       const updateUser = async ()=>{
              let respone = await fetch(`http://localhost:3000/api/users/${id}`,
              {
                     method: "PUT",
                     body: JSON.stringify({ name, age, email })
              }
       );
       respone = await respone.json();
       if(respone.success){
              alert("user is updated ");
       }
       else{
         alert("error");
       }
       }
       return (
              <div>
                     <h1>Update user </h1>
                     <input type='text' value={name} placeholder='entre name' onChange={(e) => setName(e.target.value)} />
                     <input type='text' value={age} placeholder='entre age' onChange={(e) => setAge(e.target.value)} />
                     <input type='text' value={email} placeholder='entre email' onChange={(e) => setEmail(e.target.value)} />
                     <button  onClick={updateUser} >update user</button>
              </div>
       )
}

export default page
