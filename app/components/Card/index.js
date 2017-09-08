import React, { PropTypes } from 'react';
import { Card as MdCard, CardTitle, CardText, CardActions } from 'material-ui/Card';

// import styled from 'styled-components';


function Card(props) {
  return (
    <MdCard>
      <CardTitle title={props.cardTitle}/>
      <CardText>
        {props.cardText}
      </CardText>
      <CardActions style={{width: '100%', textAlign: 'right'}}>
        {props.cardActions}
      </CardActions>
    </MdCard>
  );
}

Card.propTypes = {
  cardText: PropTypes.element,
  cardTitle: PropTypes.string.isRequired,
  cardActions: PropTypes.element,
};

export default Card;
