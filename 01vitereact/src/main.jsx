import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp (){
  return(
    <div>
      <h1>Chayan Samanta !</h1>
    </div>
  )
}

/*const reactElement = {
    type: 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    Children: 'Click me to visit google'
}*/

const anotherUser = 'chayan samanta'

const reactElement = React.createElement(
  'a',
  {href : 'https://google.com', target: '_blank'},
  'Click me to visit google ',
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blank'>visit google</a>
)

createRoot(document.getElementById('root')).render(
  /*<StrictMode>
    <App />
  </StrictMode>,*/
  // anotherElement
  reactElement
)
