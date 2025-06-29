
import Chai from "./chai.jsx"
import Hello from "./hello.jsx"

function App() {
  const name = 'chayan Samanta'
  //{name} : Evaluation expression --> if we want to edit we have to do it outside return not inside {name}

  return (
    <>
      <Chai />
      <h1>chai aur code</h1>
        <p>hello world i am {name}</p> 
      <Hello />
    </>
  )
}

export default App
