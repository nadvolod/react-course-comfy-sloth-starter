import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import styled from 'styled-components'

// tag template literal ``
// this is a styled component from "styled-components": "^5.2.1"
const Button = styled.button`
  background: green;
  color: white;
`

const Container = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 8rem;
  }
`
//Same component, slightly different style, but it doesn't
//have issues in the DOM as each one gets a dynamic class
const Container2 = styled.div`
  background: red;
  color: white;
  .hero {
    font-size: 4rem;
  }
`

function App() {
  return (
    <div>
      <h4>comfy sloth starter</h4>
      <Button>click me</Button>
      <Container>
        <div>
          <h3>hello</h3>
        </div>
        <div className='hero'>new text</div>
      </Container>
      <Container2>
        <div>
          <h3>hello</h3>
        </div>
        <div className='hero'>new text</div>
      </Container2>
    </div>
  )
}

export default App
