import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
       <Navbar/>
       <News pageSize={5} country="in" category="health"/>
       </> 
    )
  }
}
