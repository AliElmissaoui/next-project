"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import DeleteUser from "@/util/DeleteUser";


async function userslist() {
       let data = await fetch("http://localhost:3000/api/users");
       data = await data.json();
       return data;
}
export default async function page() {
       let users = await userslist();
       return (
              <div>
                     <h1>user name </h1>
                     {
                            users.map((item , index) => (
                            // eslint-disable-next-line react/jsx-key
                            <div key={index}>
                                 <Link href={`users/${item.id}`}>{item.name}</Link>
                                 <Link href={`users/${item.id}/update`}><span> edit </span></Link>
                                  <DeleteUser id = {item.id}/>
                            </div>


                            ))

                     }
              </div>
       )
}


