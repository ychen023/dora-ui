import React from 'react';
import {Button, Card} from 'react-bootstrap';

export default function DoraList(props) {
    let cardList = props.darayaki.map((singleData, index) => {
      return <DoraCard infoDisplay={singleData} key={index} />;
    })
  
    return (
      <div className="row justify-content-center">
        {cardList}
      </div>
    );
  }


function DoraCard(props) {
  let dora = props.infoDisplay;

  return (
      <Card className="column col-8 col-md-4 col-xl-3 mx-2">
        <img className="card-img" variant="top" src="img/cardImg.png" />
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
