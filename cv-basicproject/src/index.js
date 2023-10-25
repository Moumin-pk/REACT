import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let obj ={
  name: 'MOUMIN AHMAD',
  skills: 'Web Design with HTML &amp; CSS',
  Education:{
    url: 'http://www.wiltonhighschool.org/pages/Wilton_High_School',
    Name: 'Wilton High School',
  },
  Interests:{
    i1: 'Drawing',
    i2: 'Photography',
    i3: 'Design',
    i4: 'Programming',
    i5: 'Computer Science',
  },
  Extracurriculars:{
    E1: 'Recycling Club',
    E2: 'Gardening Club',
    E3: 'Book Club',
  }
}
root.render(
  <React.StrictMode>
    <App {...obj}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

