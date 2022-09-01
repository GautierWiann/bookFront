import React, { useState } from 'react';
import '../myMoviz.css';
import {
  Button,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Badge,
  ButtonGroup,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faStar, faVideo } from '@fortawesome/free-solid-svg-icons'

function Movie(props) {

  const [like, setLike] = useState(false);
  const [isRatingMovie, setIsRatingMovie] = useState(false);
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(props.globalRating)
  var nbrevote = props.globalCountRating
  var nbTotalNote = props.globalRating * props.globalCountRating

  if (isRatingMovie) {
    nbrevote += 1
    nbTotalNote += rating
   
  }

  var avgTotal = nbTotalNote / nbrevote


  var tabGlobalRating = []
  for (var i = 0; i < 5; i++) {
    var color = {}
    if (i < avgTotal) {
      color = { color: '#f1c40f' }
    }

    tabGlobalRating.push(<FontAwesomeIcon style={color} icon={faStar} />)
  }




  
  var countClick = () => {
    setCount(count + 1);
  }

  var mytotalRating = []
  for (var i = 0; i < 5; i++) {
    var color = {}
    let countstars = i + 1
    if (i < rating) {
      color = { color: '#f1c40f', cursor: 'pointer' }
    }
    else {
      color = { color: 'black', cursor: 'pointer' }
    }

    mytotalRating.push(<FontAwesomeIcon style={color} icon={faStar} onClick={() => { setRating(countstars); setIsRatingMovie(true) }} />)
  }

  

  var colorlike;
  if (props.coeur != true ) {
    colorlike = { color: "black", cursor: 'pointer' }
    
  } else {
    
    colorlike = { color: "#e74c3c", cursor: 'pointer' }
  }

  var movieSelected = (name, img) =>{
    if (props.coeur === false) {
      props.handleClickParent({name, img})
    } else {
      props.handleClickDeleteParent({name, img})
    };
  }


  return (
    <Col xs="12" lg="6" xl="4">
      <Card className="cardMovie">
        <CardImg top src={props.movieImg} alt={props.movieName} style={{width:'22rem'}} className="cardmoviePic"/>
        <CardBody>
          <CardTitle className='movieTitle'>{props.movieName} {like}<FontAwesomeIcon style={colorlike} icon={faHeart} onClick={() => { movieSelected (props.movieName, props.movieImg)}} /></CardTitle>
          <CardText className='moviedesc'>{props.movieDesc}</CardText>
          <p>Nombre de vues  <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faVideo} onClick={() => countClick()} /> <Badge color="secondary">{count}</Badge></p>
          <p>Moyenne
            {tabGlobalRating}
            ({nbrevote})
          </p>
          <p id="starsuser">
            {mytotalRating}

          </p>


        </CardBody>
      </Card>
    </Col>


  );
}

export default Movie;
