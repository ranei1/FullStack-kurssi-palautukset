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
      <p>{props.part1} </p>
      <p>{props.part2} </p>
      <p>{props.part3} </p>
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header kurssi={course} />
      <Content part1={`${part1} ${exercises1}`} part2={`${part2} ${exercises2}`}
        part3={`${part3} ${exercises3}`} />
      <Total maara1={exercises1} maara2={exercises2} maara3={exercises3} />
    </div>
  )
}

export default App
