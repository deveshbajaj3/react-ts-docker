import React,{useState, useEffect, ReactNode} from "react"
type CounterProps = {
    children: ReactNode,
    performance:{
        year:number,
        grade:string
    }[],
    personName:{
        firstName:string,
        lastName:string,
    },
    count: number,
    name: string,
    email: string
}
export default function Counter(props:CounterProps) {
  return (<>
    {props.children}
    <div>Counter {props.count}</div>
    <div>FName {props.personName.firstName}</div>
    <div>Lname {props.personName.lastName}</div>
    <div>Performance {props.performance.map((item)=>(<li>{item.year} |  {item.grade}</li>))}</div>
    <div>Email {props.email}</div>
  </>
  )
}
