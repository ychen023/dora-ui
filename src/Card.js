import React, { useState } from 'react';
import {Button, Card} from 'react-bootstrap';
export default function DoraList(props) {
  let cardList = props.darayaki.map((singleData) => {
    return (
      <DoraCard 
        infoDisplay={singleData} 
        key={singleData.id}
      />
    );
  })

    return (
      <div className="row justify-content-center">
        {cardList}
      </div>
    );
  }

function DoraCard(props) {
  let dora = props.infoDisplay;

  const handleHover = (e) => {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    document.documentElement.style.setProperty("--mouse-x", x);
    document.documentElement.style.setProperty("--mouse-y", y);
  }

  const handleUnshown = () => {
    let x = -5;
    let y = -5;
    document.documentElement.style.setProperty("--mouse-x", x);
    document.documentElement.style.setProperty("--mouse-y", y);
  }

  return (
      <Card className="column col-8 col-md-4 col-xl-3 mx-2" onMouseLeave={handleUnshown} onMouseOver={handleHover}>
        <img className="card-img" src="img/cardImg.png" alt='petpaw'/>
        <Card.Body>
          <h2 className="doraTitle">{dora.title}</h2>
          <Button className='button-label'> Button Label</Button>

          <div className='desc1'>
            <div className='desc'>
                {dora.desc1}
            </div>

            <div className='desc description'>
                Description
            </div>
          </div>

          <div className='desc2'>
            <div className='desc'>
                {dora.desc2}
            </div>

            <div className='desc description'>
                Description
            </div>
          </div>

        </Card.Body>
      </Card> 
  );
}

