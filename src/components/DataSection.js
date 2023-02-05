import React, { useEffect } from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/DataSection.css';
import { Row,Col } from 'react-bootstrap';

function DataSection({props}) {
 
  const entryPoint = JSON.parse(localStorage.getItem("EntryPoint") || "[]");
  const exitPoint = JSON.parse(localStorage.getItem("ExitPoint") || "[]");
  const tones = JSON.parse(localStorage.getItem("Tones") || "[]");
  const forty = JSON.parse(localStorage.getItem("Forty") || "[]");
  const upto120 = JSON.parse(localStorage.getItem("upto120") || "[]");
  const upto250 = JSON.parse(localStorage.getItem("upto250") || "[]");
  const upto350 = JSON.parse(localStorage.getItem("upto350") || "[]");
  const upto450 = JSON.parse(localStorage.getItem("upto450") || "[]");
  const more450 = JSON.parse(localStorage.getItem("more450") || "[]");

  // console.log(users);
  return (
    <div>
        <h2 style={{display:'center',marginLeft: '600px',marginTop:'250px'}}>Data Section</h2>
      <div style={{paddingTop:'50px'}}>
        <Row>
          <Col>
          <div>
          { entryPoint.map((item) => (
              <div> 
                <ol key={item}>
                  Entry_Point: { item.ENTRY_POINT1 }
                  <br />
                  
              </ol>
          </div>
            ))}


        </div>
          </Col>
          <Col>
          <div>
          {exitPoint.map((item) => (
              <div> 
                <ol key={item}>
                  Exit_Point: { item.EXIT_POINT1 }
                  <br />
                  
              </ol>
          </div>
            ))}


        </div>
          </Col>
          <Col>
          <div>
          {tones ? tones.map((item) => (
              <div> 
                <ol key={item}>
                  Tones: { item.RoutePoint }
                  <br />
                  
              </ol>
          </div>
            )): <div>No record Found</div>}


        </div>
          </Col>
          <Col>
          <div>
          {forty ? forty.map((item) => (
              <div> 
                <ol key={item}>
                  Fourty: { item.fourty }
                  <br />
                  
              </ol>
          </div>
            )): <div></div>}
        </div>
          </Col>
          <Col>
          <div>
          {upto120 ? upto120.map((item) => (
              <div> 
                <ol key={item}>
                  One Hundred Twenty: { item.onehundredtwenty }
                  <br />
                  
              </ol>
          </div>
            )): <div></div>}
        </div>
          </Col>
          <Col>
          <div>
          {upto250 ? upto250.map((item) => (
              <div> 
                <ol key={item}>
                  Two Hundred Fifty : { item.twohundredfifty }
                  <br />
                  
              </ol>
          </div>
            )): <div></div>}
        </div>
          </Col>
          <Col>
          <div>
          {upto350 ? upto350.map((item) => (
              <div> 
                <ol key={item}>
                  Three Hundred Fifty : { item.threeundredfifty }
                  <br />
                  
              </ol>
          </div>
            )): <div></div>}
        </div>
          </Col>
          <Col>
          <div>
          {upto450 ? upto450.map((item) => (
              <div> 
                <ol key={item}>
                  Four Hundred Fifty : { item.fourhundredfifty }
                  <br />
                  
              </ol>
          </div>
            )): <div></div>}
        </div>
          </Col>
          <Col>
          <div>
          {more450 ? more450.map((item) => (
              <div> 
                <ol key={item}>
                 More Four Hundred Fifty : { item.morefourhundredfifty }
                  <br />
                  
              </ol>
          </div>
            )): <div></div>}
        </div>
          </Col>
        </Row>
        
      </div>
      
    </div>
  )
}

export default DataSection

