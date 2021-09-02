import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
//This is a cleaner way to import multiple objects from a folder
//instead of importing one object at a time from a file
//just make sure to have an index.js
import { Navbar, Sidebar, Footer } from './components'
import { Home, Products, SingleProduct, About, Cart, Error, PrivateRoute, CheckoutPage } from './pages'

function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/cart'>
          <Cart></Cart>
        </Route>
        <Route exact path='/products'>
          <Products></Products>
        </Route>
        <Route exact path='/products/:id' children={<SingleProduct />}>
        </Route>
        <Route exact path='/checkout' >
          <CheckoutPage></CheckoutPage>
        </Route>
        <Route path='*' >
          <Error></Error>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  )
}

export default App
