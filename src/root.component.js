import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
export default function Root(props) {


    const mystyleUL = {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      backgroundColor: '#0390fc'
    };
    const mystyleULSub = {
      listStyleType: 'none',
      margin: '0',
      padding: '0',
      overflow: 'hidden',
      backgroundColor: '#d8dce3'
    };
    const mystyleLI = {
      display: 'inline',
      float : 'left'
    };
    const mystyleA = {
      display: 'block',
      color: 'white',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontFamily: 'Arial, Helvetica, sans-serif'
    };
    const mystyleASub = {
      display: 'block',
      color: 'black',
      textAlign: 'center',
      padding: '14px 16px',
      textDecoration: 'none',
      fontFamily: 'Arial, Helvetica, sans-serif'
    };

  return <section style={{margin :'0 0 0 0'}}>
  <BrowserRouter>
  <ul style={mystyleUL}> 
  <li style={mystyleLI}><a style={mystyleA} href="localhost:8002/hrc-mf-collections.js">Collections</a></li>
  <li style={mystyleLI}><a style={mystyleA} href="http://localhost:9010/">Deductions</a></li>
  </ul>
  <ul style={mystyleULSub}> 
  <li style={mystyleLI}><a style={mystyleASub} href="localhost:8002/hrc-mf-collections.js">Worklist</a></li>
  </ul>
  </BrowserRouter>
</section>;
}
