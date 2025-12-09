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
      <p>{props.part1_2} </p>
      <p>{props.part2_2} </p>
      <p>{props.part3_2} </p>
    </div>
  )
}
const Total = (props) => {
  const summa = props.maara1 + props.maara2 + props.maara3
  return (
    <p>Number of exercises {summa} </p>
  )
}


function App() {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header kurssi={course} />
      {/*<Content part1_2={`${part1.name} ${part1.exercises}`} part2_2={`${part2.name} ${part2.exercises}`}
        part3_2={`${part3.name} ${part3.exercises}`} />*/}
      <Content
        part1_2={part1.name + " " + part1.exercises}
        part2_2={part2.name + " " + part2.exercises}
        part3_2={part3.name + " " + part3.exercises}
      />
      <Total maara1={part1.exercises} maara2={part2.exercises} maara3={part3.exercises} />
    </div>
  )
}

export default App
