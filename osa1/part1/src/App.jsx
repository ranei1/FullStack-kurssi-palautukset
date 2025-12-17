import { useState } from "react"

const Display = ({ counter }) => <div> {counter} </div>


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const App = () => {
  const [counter, setCounter] = useState(0)
  console.log('rendering with counter value', counter)

  const increaseByOne = () => {
    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }
  const decreazeByOne = () => {
    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }
  const setToZero = () => {
    console.log('resetting to zero, value before', counter)
    setCounter(0)

  }

  //console.log('rendering...', counter)//
  return (
    <div>
      <Display counter={counter} />
      <Button
        onClick={increaseByOne}
        text='Plus'
      />
      <Button
        onClick={setToZero}
        text='zero'
      />
      <Button
        onClick={decreazeByOne}
        text='minus'
      />
    </div>
  )
}

export default App
