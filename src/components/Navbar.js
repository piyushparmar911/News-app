import React, { Component } from 'react'; 
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
        <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode} sticky-top`}>
          <div className="container-fluid">
            <h2 className={`navbar-brand text-${this.props.mode1}`}>NewsApp</h2>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link>
                </li>
              </ul>
              <div className="form-check  form-switch">
                <input className="form-check-input " onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className={`form-check-label text-${this.props.mode === 'dark' ? 'light' : 'dark'}`} htmlFor="flexSwitchCheckDefault">
                  {this.props.modeText}
                </label>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
