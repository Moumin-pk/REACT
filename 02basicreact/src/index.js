import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function MyApp(){
  return(
    <>
    <h1>Hello !</h1>
    <h2>MOUMIN AHMAD!</h2>
    </>
  )
}
const AnotherElem =(
  <a href='https://google.com' target='_blank'>visit google</a>
)

const reactElemnt = React.createElement(
'a', // tags
{href : 'https://www.google.com', target : '_blank'}, // Attribute
'Click me And Visit Google'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <App Name='HELLO | MOUMIN AHMAD⭐' />
);

