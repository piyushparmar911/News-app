import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  const pageSize = 8;
  const [mode, setMode] = useState('light');
  const [mode1, setMode1] = useState('white');
  const [modeText, setModeText] = useState('light mode');
  const [completed, setCompleted] = useState(0);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setMode1('black');
      setModeText('dark mode');
      document.body.style.backgroundColor = 'lightgrey';
    } else {
      setMode('light');
      setMode1('white');
      setModeText('light mode');
      document.body.style.backgroundColor = 'white';
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = mode === 'light' ? 'white' : 'lightgrey';
  }, [mode]);

  const updateProgressBar = (completed) => {
    setCompleted(completed);
  };

  return (
    <div style={{ background: mode1 }}>
      <Router>
        <ProgressBar
          completed={completed}
          height="2px"
          bgColor="red"
          borderRadius="0px"
          labelSize="0px"
        />
        <Navbar mode={mode} toggleMode={toggleMode} modeText={modeText} />
        <Routes>
          <Route path="/general" element={<News ProgressBar={updateProgressBar} key="general" heading="General" pageSize={pageSize} country="in" category="general" mode={mode} />} />
          <Route path="/business" element={<News ProgressBar={updateProgressBar} key="business" heading="Business" pageSize={pageSize} country="in" category="business" mode={mode} />} />
          <Route path="/entertainment" element={<News ProgressBar={updateProgressBar} key="entertainment" heading="Entertainment" pageSize={pageSize} country="in" category="entertainment" mode={mode} />} />
          <Route path="/health" element={<News ProgressBar={updateProgressBar} key="health" heading="Health" pageSize={pageSize} country="in" category="health" mode={mode} />} />
          <Route path="/science" element={<News ProgressBar={updateProgressBar} key="science" heading="Science" pageSize={pageSize} country="in" category="science" mode={mode} />} />
          <Route path="/sports" element={<News ProgressBar={updateProgressBar} key="sports" heading="Sports" pageSize={pageSize} country="in" category="sports" mode={mode} />} />
          <Route path="/technology" element={<News ProgressBar={updateProgressBar} key="technology" heading="Technology" pageSize={pageSize} country="in" category="technology" mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
