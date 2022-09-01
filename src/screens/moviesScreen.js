
import 'bootstrap/dist/css/bootstrap.min.css';
import '../myMoviz.css';
import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Row,
  Button,
  Nav,
  NavItem,
  NavLink,
  Popover,
  PopoverHeader,
  PopoverBody,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText

} from 'reactstrap';

import Movie from '../components/Movie'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function CurrentMovies(props) {


 
    const [movieRank, setMovieRank] = useState(0);
    const [open, setOpen] = useState(false)
  
  
  
  // ajout et enlever films de la wishlist 
    const [movieSelected, setMovieSelected] = useState([]);
    const [movieCount, setMovieCount] = useState(0);
    var movieParent = (newMovie) => {
      setMovieCount(movieCount + 1);
      setMovieSelected([...movieSelected, {name : newMovie.name, img: newMovie.img}])
    }
    var handleClickDeleteMovie = (movieDeleted) => {
      setMovieCount(movieCount - 1);
      console.log(movieDeleted)
      setMovieSelected( movieSelected.filter((e)=>(e.name !== movieDeleted.name)));
    }
    var deleteWish = (movieDeleted) => {
      setMovieCount(movieCount - 1);
      setMovieSelected( movieSelected.filter((e)=>(e.name !== movieDeleted)))
    }
  
  
    // connexion avec le backend
    
    const [moviesApi, setMoviesApi] = useState([]);
    useEffect(() => {
      async function loadData ()  {
        const rawResponse = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d10984763f2efdaf65b18c9ffabf8b5f&language=fr&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate');
        const response = await rawResponse.json()
        setMoviesApi(response.results)
        console.log(moviesApi)
      }
      loadData()
    }, []);
   
  
  
  // transsmission info au composant movie
  
    var moviesData = [ ]
    for (let i=0 ; i<moviesApi.length; i++) {
      moviesData.push(
      { name: moviesApi[i].original_title,
        desc: moviesApi[i].overview, 
        img: "https://image.tmdb.org/t/p/w500" + moviesApi[i].poster_path,
        note: moviesApi[i].vote_average,
        vote: moviesApi[i].vote_count, 
        countMovie: moviesApi[i].popularity
      })
      if (moviesApi[i].overview.length > 250) {
        moviesApi[i].overview = moviesApi[i].overview.substring(0, 250) + "..."
      }
    }
  
    var movieList = moviesData.map((movie, i) => {
      
      if (movieSelected.some((element) => element.name == movie.name)) {
      return (<Movie key={i} movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} globalRating={movie.note} globalCountRating={movie.vote} handleClickParent={movieParent} handleClickDeleteParent={handleClickDeleteMovie} coeur={true}/>)}
      else {
        return (<Movie key={i} movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} globalRating={movie.note} globalCountRating={movie.vote} handleClickParent={movieParent} handleClickDeleteParent={handleClickDeleteMovie} coeur={false}/>)}
      
    }
  )
  
  var movieSelectedList = movieSelected.map((movie) => {
    return (
    <ListGroupItem className='wishlistItem'  style={{  borderColor: "#148bc2", borderWidth:" 0.5rem", borderStyle: "double", textAlign: "justify" }}> 
      <ListGroupItemHeading ><img className="watchlistImg" src={movie.img}/></ListGroupItemHeading> 
      <ListGroupItemText>
        {movie.name} 
        <FontAwesomeIcon icon={faTrashCan} onClick={() => deleteWish(movie.name )} className="trashcan"/>
    </ListGroupItemText></ListGroupItem>)
  })

return (
    <div id="body">
    <Container>
<Nav className="headerbar">
    <span className="navbar-brand">
      <Link to={'/'} style={{cursor: 'pointer'}} ><img src="./logo.png" width="30" height="30" className="d-inline-block align-top logoh" alt="logo" /></Link>
    </span>
    <NavItem>
        <NavLink style={{ color: "#F7B538" }} >Last Releases</NavLink>
    </NavItem>
    <NavItem>
        <Button id="Popover1" className="buttonNav" style = {{ backgroundColor:'#FF2E00', fontSize: "30px", color:"#F7B538" }}>
            {movieCount} films
        </Button>
        <Popover placement="bottom" isOpen={open} target="Popover1" toggle={() => { setOpen(!open) }} className="popoverH" >
            <PopoverHeader className='wishlistHead' style={{backgroundColor : "#F7B538", fontSize: "3rem"}}>WatchList</PopoverHeader>
            <PopoverBody style={{ backgroundColor: "#F7B538" }}>
                <ListGroup>
                    {movieSelectedList}
                </ListGroup>

            </PopoverBody>
        </Popover>
    </NavItem>
</Nav>
<Row id="movieContainer">
          <h3 id="cardcontainerTitle"> Plongez-vous dans le monde du cinéma :</h3>
          <h4 id="cardcontainerSubtitle"> Varsity, le kitsch des 60's</h4>
          {movieList}
        </Row>
      </Container>
    </div>
  );
}


export default CurrentMovies;