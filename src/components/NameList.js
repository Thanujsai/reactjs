import React from 'react'
import Person from './Person'


function NameList() {
    const names = ["thanuj","sai","bunny"]
    const nameList = names.map((name) => <h2>{name}</h2>)
    const persons = [
        {
            id:1,
            name:'Thanuj',
            age:23,
            skill:'nothing'
        },
        {
            id:2,
            name:'Vamshi',
            age:27,
            skill:'something'
        },
        {
            id:3,
            name:'usha',
            age:50,
            skill:'everything'
        }
    ]
    const personList = persons.map(person => <Person person = {person}/>)
  return (
    <div>
        {
            personList
            //names.map((name) => <h2>{name}</h2>)
        }
    </div>
  )
}

export default NameList