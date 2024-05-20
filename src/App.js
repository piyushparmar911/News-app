import React, { Component} from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize = 8;
  constructor(props) {
    super(props);
    this.state = {
      mode: 'light',
      mode1: 'white',
      modeText: 'light mode',
      alert: null,
    };
  }
  toggleMode = () => {
    if (this.state.mode === 'light') {
      this.setState({
        mode1: 'black',
        mode: 'dark',
        modeText: 'dark mode'
      });
      document.body.style.backgroundColor = 'lightgrey';
    } else {
      this.setState({
        mode: 'light',
        mode1: 'white',
        modeText: 'light mode'
      });
      document.body.style.backgroundColor = 'white';
    }
  };  

  state =({
    completed: 0,
  })

  ProgressBar = (completed) => {
    this.setState({completed: completed});
  }
    
  render() {
    return (
      <div className="" style={{background: this.state.mode1}} > 
        <Router>
      
      <ProgressBar
      completed={this.state.completed}
      height={"2px"}
      bgColor="red"
      borderRadius="0px"
      labelSize="0px"
    />
          <Navbar  mode={this.state.mode}  toggleMode={this.toggleMode} modeText={this.state.modeText}/>
          

          <Routes>
            <Route   exact path="/general"  element={<News ProgressBar={this.ProgressBar}  key="general" heading="General" pageSize={this.pageSize} country="in" category="general" mode={this.state.mode} />}></Route>
            <Route   exact path="/business" element={<News  ProgressBar={this.ProgressBar} key="business" heading="Business" pageSize={this.pageSize} country="in" category="business" />} mode={this.state.mode} ></Route>
            <Route   exact path="/entertainment"  element={<News ProgressBar={this.ProgressBar} key="entertainment" heading="Entertainment" pageSize={this.pageSize} country="in" category="entertainment"mode={this.state.mode}  />}></Route>
            <Route   exact path="/health"  element={<News ProgressBar={this.ProgressBar} key="health" heading="Health" pageSize={this.pageSize} country="in" category="health" mode={this.state.mode} />}></Route>
            <Route   exact path="/science"  element={<News ProgressBar={this.ProgressBar} key="science" heading="Science" pageSize={this.pageSize} country="in" category="science" mode={this.state.mode} />}></Route>
            <Route   exact path="/sports"  element={<News ProgressBar={this.ProgressBar} key="sports"  heading="Sports" pageSize={this.pageSize} country="in" category="sports" mode={this.state.mode} />}></Route>
            <Route   exact path="/technology"  element={<News ProgressBar={this.ProgressBar} key="technology" heading="Technology" pageSize={this.pageSize} country="in" category="technology" mode={this.state.mode} />}></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
