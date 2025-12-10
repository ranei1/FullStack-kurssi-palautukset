import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.kurssi}</h1>
  )
}
const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises} </p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p>
    </div>
  )
}
const Total = (props) => {
  const summa = props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises
  return (
    <p>Number of exercises {summa} </p>
  )
}


function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header kurssi={course.name} />
      {/*<Content part1_2={`${part1.name} ${part1.exercises}`} part2_2={`${part2.name} ${part2.exercises}`}
        part3_2={`${part3.name} ${part3.exercises}`} />*/}
      <Content
        parts={course.parts}
      />
      <Total parts={course.parts} />
    </div>
  )
}

export default App
