import React from 'react'

// function ListNames() {
// const name = ['Bruce', 'Diana', 'Clark']
// /return (
// *simple method of rendering list from an array
// <div>
//       <h2>{name[0]}</h2>
//       <h2>{name[1]}</h2>
//       <h2>{name[2]}</h2>
// </div>

// * rendering array elemanr in list using map method
// <div>
// {
// functionName.map('name' => <span>{name}</span>)
// name.map(list => <h2>{list}</h2>)
// }
// {/* </div> */}


// )
//}

// !  Simple format for rendering list of names
// function ListNames() {
//     const name = ['Bruce', 'Diana', 'Clark']
//     const className = name.map(names => <h2>{names}</h2>)
//     return (
//         <div>{className}</div>
//     )
// }

function ListNames() {
    const person = [
        {
            id: 1,
            name: 'Sid',
            age: '19',
            skill: 'react'
        },
        {
            id: 2,
            name: 'Mayce',
            age: '18',
            skill: 'angular'
        },
        {
            id: 3,
            name: 'Bruce',
            age: '21',
            skill: 'Java'
        },
        {
            id: 4,
            name: 'Tony',
            age: '17',
            skill: 'C++'
        },
    ]
    const personName = person.map(person => <h2> I'm {person.name}, and I'm {person.age} years old. My skill is {person.skill}.</h2>)
    return (
        <div>{personName}</div>
    )
}

export default ListNames