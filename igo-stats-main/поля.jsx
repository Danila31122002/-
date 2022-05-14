import React, {useState} from 'react';
const UserInfo = ({ name, value, onChange }) => {
    const innerProps = getInnerProps({name, value, onChange})
    return <formblock>//возможно это ебучий див на самом делепзх
     <label>First Name</label>
     <input {...innerProps.forInput('firstName')} />
     <label>Last Name</label>
     <input {...innerProps.forInput('lastName')} />
     <label >Raiting</label>
     <input type="text" {...innerProps.forInput('Raiting')}/>
   </formblock>
 }
 const UserForm = ({
   name,
   value,
   onChange,
 }) => {
   const innerProps = getInnerProps({name, value, onChange})
   return <formblock>
     <userinfo {...innerProps.forInput('userInfo')} />
     <experience {...innerProps.forInput('position')} />
     <education {...innerProps.forInput('education')} />
   </formblock>
 }