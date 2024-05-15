import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Navbar />
          

          <Routes>
            <Route exact path="/general"  element={<News  key="general" heading="General" pageSize={5} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News  key="business" heading="Business" pageSize={5} country="in" category="business" />}></Route>
            <Route exact path="/entertainment"  element={<News key="entertainment" heading="Entertainment" pageSize={5} country="in" category="entertainment" />}></Route>
            <Route exact path="/health"  element={<News key="health" heading="Health" pageSize={5} country="in" category="health" />}></Route>
            <Route exact path="/science"  element={<News key="science" heading="Science" pageSize={5} country="in" category="science" />}></Route>
            <Route exact path="/sports"  element={<News key="sports"  heading="Sports" pageSize={5} country="in" category="sports" />}></Route>
            <Route exact path="/technology"  element={<News key="technology" heading="Technology" pageSize={5} country="in" category="technology" />}></Route>
          </Routes>
        </Router>
      </>
    );
  }
}
