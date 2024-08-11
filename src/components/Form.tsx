import React,{useEffect, useState} from 'react'
type formInput = {
    name: string,
    email: string,
    phone: string,
    address: string
}
type userDetails ={
    name: string,
    email: string,
    phone: string,
    address: string
}[]
export default function Form() {
    const [user , setUser] = useState<formInput>({} as formInput)
    const [userData , setUserData] = useState<userDetails>([] as userDetails)
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = event.target;
        console.log(name, value)
        setUser((pre)=>{
            return {...pre, [name]: value}
        })
    }
    const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>)=>{
        const ini = {
            name: "",
            email: "",
            phone: "",
            address: ""
        }
        event.preventDefault()
        userData.push(user)
        setUserData([...userData])
        setUser(ini)
        console.log('final=>',user, userData)
    }
  return (
    <div>
        <h1>User Form</h1>
        {userData.map((item)=>(<li key={item.name}>{item.email}</li>))}
        <form>
            <label>Name</label>
            <input type='text' name="name" id="name" value={user.name} onChange={handleChange}/>
            <br/>
            <label>Email</label>
            <input type='text' name="email" id="email" value={user.email} onChange={handleChange}/>
            <br/>
            <label>Phone</label>
            <input type='text' name="phone" id="phone" value={user.phone} onChange={handleChange}/>
            <br/>
            <label>Address</label>
            <input type='text' name="address" id="address" value={user.address} onChange={handleChange}/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
  )
}
