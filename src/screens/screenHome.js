import React, { useState, useEffect } from 'react';
import '../App.css';
import { Link, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Col,
  Row,
  Container,
  Collapse,
  Button,
  CardBody,
  Badge,
  CardText,
  CardFooter,
  CardTitle,
  CardImg,
  Card,
} from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDisplay, faMobileButton, faPenToSquare, faArrowsUpDownLeftRight } from '@fortawesome/free-solid-svg-icons'


import YoutubeEmbed from "../components/YoutubeEmbed";

export default function ScreenHome(props) {

  const [open, setOpen] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [tableau, setTableau] = useState('0')

  function clickContact() {
    setOpen(false)
    setOpen3(!open3)
  }

  function clickTechno() {
    setOpen(!open)
    setOpen3(false)
  }

 function projets ()  {
  if (tableau == 0) {
  return (
    <Row>
    <Col sm={{ size: 5 }} lg={{ size: 3, offset: 2 }}>
                    <Card className="cardPro" style={{ borderColor: "black", borderWidth: 3, boxShadow: "6px 6px 1px 1px #ff686b", marginLeft: "10%" }}>
                      <CardImg
                        alt="Card image cap"
                        src="https://res.cloudinary.com/dvgscvuar/image/upload/v1660741804/Screenshot_2022-08-17_at_15-09-11_React_App_tkn0w9.png"
                        style={{
                          height: "16rem",

                        }}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          <p > My Movies</p>
                          <div className='Cardbadges'>
                            <Row>
                              <Card className='badgeCard' pill >React</Card>
                              <Card className='badgeCard' pill>Node.js</Card>
                              <Card className='badgeCard' pill>Javascript</Card>
                              <Card className='badgeCard' pill>React Stap</Card>
                              <Card className='badgeCard' style={{ fontSize: "xs" }} pill>Mongodb</Card>
                              <Card className='badgeCard'>Api movies</Card>

                            </Row></div>
                        </CardTitle>
                        <CardText className='cardDesc'>
                          MyMoviz est une application qui propose une liste de films, avec les dernières sorties cinéma à jour, et qui vous permet de créer votre propre wishlist.
                        </CardText>
                      </CardBody><Link to={'/my-Moviz'} style={{cursor: 'pointer'}}><Button block outline color='danger' style={{BackgroundColor:"#ff9770", borderColor:'white' }} > Essayer</Button></Link>
                    </Card>
                  </Col>

                  <Col sm={{ size: 5 }} md={{ size: 3 }} xl={{ size: 3 }}>
                    <Card className="cardPro" style={{ borderColor: "black", borderWidth: 3, boxShadow: "6px 6px 1px 1px #ff9770" }}>
                      <CardImg
                        alt="Card image cap"
                        src="https://res.cloudinary.com/dvgscvuar/image/upload/v1660841909/Screenshot_2022-08-18_at_18-57-54_BikeShop_-_Shop_ali0gm.png"
                        style={{
                          height: "16rem"
                        }}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5" >
                          <p>Bikeshop</p>

                          <div className='Cardbadges'>
                            <Row>
                              <Card className='badgeCard' pill >React</Card>
                              <Card className='badgeCard' pill>Node.js</Card>
                              <Card className='badgeCard' pill>Javascript</Card>
                              <Card className='badgeCard' pill>React Stap</Card>
                              <Card className='badgeCard' style={{ fontSize: "xs" }} pill>Mongodb</Card>
                              <Card className='badgeCard'>Api movies</Card>

                            </Row>
                          </div>
                        </CardTitle>
                        <CardText className='cardDesc'>
                          Bikeshop est un site de vente de vélos. Il reprend les principes du commerce en ligne avec l'utilisation de stripe comme moyen de paiement
                        </CardText>
                      </CardBody>
                      <a href={'https://gautierwianni.vercel.app/bikeshop/product'} style={{cursor: 'pointer'}}><Button block outline color='danger' style={{BackgroundColor:"#ff9770", borderColor:'white' }} > Essayer</Button></a>
                    </Card>
                  </Col>


                  <Col sm={{ size: 5 }} md={{ size: 3 }} xl={{ size: 3 }}>
                    <Card className="cardPro" style={{ borderColor: "black", borderWidth: 3, boxShadow: "6px 6px 1px 1px #ffd670" }}>
                      <CardImg
                        alt="Card image cap"
                        src="https://res.cloudinary.com/dvgscvuar/image/upload/v1660841905/Screenshot_2022-08-18_at_18-56-33_React_App_plvr9s.png"
                        style={{
                          height: "16rem"
                        }}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          <p>Morning News</p>
                          <div className='Cardbadges'>
                            <Row>
                              <Card className='badgeCard' pill >React</Card>
                              <Card className='badgeCard' pill>Node.js</Card>
                              <Card className='badgeCard' pill>Javascript</Card>
                              <Card className='badgeCard' pill>React Stap</Card>
                              <Card className='badgeCard' style={{ fontSize: "xs" }} pill>Mongodb</Card>
                              <Card className='badgeCard'>Api movies</Card>

                            </Row></div>
                        </CardTitle>
                        <CardText className='cardDesc'>
                          Morning News est une application web qui permet d’afficher les news actualisées et de les mettre dans une wishlist pour les sauvegarder en base de données et les lire plus tard.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <img className="arrow" onClick={() => setTableau(1)} style={{ cursor: 'pointer' }} src='https://res.cloudinary.com/dvgscvuar/image/upload/v1660758149/PngItem_644849_evwnme.png' />
                  </Row>
  )
 } else if (tableau == 1) {
  return (
    <Row>
      <Col lg={{size:1}}></Col>

      <img className="arrow" onClick={() => setTableau(0)} style={{ cursor: 'pointer', rotate:'180deg' }} src='https://res.cloudinary.com/dvgscvuar/image/upload/v1660758149/PngItem_644849_evwnme.png' />
  
   <Col sm={{ size: 5 }} lg={{ size: 3 }}>
                    <Card className="cardPro" style={{ borderColor: "black", borderWidth: 3, boxShadow: "6px 6px 1px 1px #ff686b", marginLeft: "10%" }}>
                      <CardImg
                        alt="Card image cap"
                        src="https://res.cloudinary.com/dvgscvuar/image/upload/v1660741804/Screenshot_2022-08-17_at_15-09-11_React_App_tkn0w9.png"
                        style={{
                          height: "16rem",

                        }}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          <p > Blackboard</p>
                          <div className='Cardbadges'>
                            <Row>
                              <Card className='badgeCard' pill >React</Card>
                              <Card className='badgeCard' pill>Node.js</Card>
                              <Card className='badgeCard' pill>Javascript</Card>
                              <Card className='badgeCard' pill>React Stap</Card>
                              <Card className='badgeCard' style={{ fontSize: "xs" }} pill>Mongodb</Card>
                              <Card className='badgeCard'>Api movies</Card>

                            </Row></div>
                        </CardTitle>
                        <CardText className='cardDesc'>
                        Blackboard est un back-office de site e-commerce, c'est-à-dire un site “interne” pour administrer des commandes.

En termes de fonctionnalités, d'affiche des informations clients, un catalogue produit, des listes de commandes, une messagerie...
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>

                  <Col sm={{ size: 5 }} md={{ size: 3 }} xl={{ size: 3 }}>
                    <Card className="cardPro" style={{ borderColor: "black", borderWidth: 3, boxShadow: "6px 6px 1px 1px #ff9770" }}>
                      <CardImg
                        alt="Card image cap"
                        src="https://res.cloudinary.com/dvgscvuar/image/upload/v1660841909/Screenshot_2022-08-18_at_18-57-54_BikeShop_-_Shop_ali0gm.png"
                        style={{
                          height: "16rem"
                        }}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5" >
                          <p>Bikeshop</p>

                          <div className='Cardbadges'>
                            <Row>
                              <Card className='badgeCard' pill >React</Card>
                              <Card className='badgeCard' pill>Node.js</Card>
                              <Card className='badgeCard' pill>Javascript</Card>
                              <Card className='badgeCard' pill>React Stap</Card>
                              <Card className='badgeCard' style={{ fontSize: "xs" }} pill>Mongodb</Card>
                              <Card className='badgeCard'>Api movies</Card>

                            </Row>
                          </div>
                        </CardTitle>
                        <CardText className='cardDesc'>
                          Bikeshop est un site de vente de vélos. Il reprend les principes du commerce en ligne avec l'utilisation de stripe comme moyen de paiement
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>


                  <Col sm={{ size: 5 }} md={{ size: 3 }} xl={{ size: 3 }}>
                    <Card className="cardPro" style={{ borderColor: "black", borderWidth: 3, boxShadow: "6px 6px 1px 1px #ffd670" }}>
                      <CardImg
                        alt="Card image cap"
                        src="https://res.cloudinary.com/dvgscvuar/image/upload/v1660841905/Screenshot_2022-08-18_at_18-56-33_React_App_plvr9s.png"
                        style={{
                          height: "16rem"
                        }}
                        top
                        width="100%"
                      />
                      <CardBody>
                        <CardTitle tag="h5">
                          <p>Morning News</p>
                          <div className='Cardbadges'>
                            <Row>
                              <Card className='badgeCard' pill >React</Card>
                              <Card className='badgeCard' pill>Node.js</Card>
                              <Card className='badgeCard' pill>Javascript</Card>
                              <Card className='badgeCard' pill>React Stap</Card>
                              <Card className='badgeCard' style={{ fontSize: "xs" }} pill>Mongodb</Card>
                              <Card className='badgeCard'>Api movies</Card>

                            </Row></div>
                        </CardTitle>
                        <CardText className='cardDesc'>
                          Morning News est une application web qui permet d’afficher les news actualisées et de les mettre dans une wishlist pour les sauvegarder en base de données et les lire plus tard.
                        </CardText>
                      </CardBody>
                    </Card>
                  </Col>
                  <img className="arrow" onClick={() => setTableau(2)} style={{ cursor: 'pointer' }} src='https://res.cloudinary.com/dvgscvuar/image/upload/v1660758149/PngItem_644849_evwnme.png' />
                  </Row>
  )
 }
}
  return (
    <div className='body'>
      <Container className="accueil1" fluid >
        <Col sm={12}>

          <Row style={{ background: 'rgb(65,176,205)' , background: 'linear-gradient(343deg, rgba(65,176,205,1) 0%, rgba(17,121,148,1) 50%, rgba(15,76,92,1) 93%)' }} >

            <Col md={{ size: 7, offset: 1 }} xxl={{ size: 6, offset: 1 }} style={{ marginTop: '5%' }} >
              <h3 id="h3pres">Bonjour, je m'appelle Gautier Wianni</h3>
              <h5 id="h5pres">développeur web & mobile fullstack</h5>
              <p id="presentation">Après un Master en marketing à NEOMA business school et une première approche du code grâce à mes expériences professionnelles, notamment par le biais du SEO, j’ai décidé de suivre une formation de développeur fullstack en bootcamp à la Capsule. J'occupe aujourd'hui le poste de teatcher assistant dans cette établissement et me tiens à l'écoute de vos projets de développement web ou mobile freelances. </p>

              <Button className='bouttonAccueil' onClick={() => clickTechno()} outline color='red' style={{ marginLeft: "15%" }}><p className='bouttonAccueilP'>Technologies maîtrisées</p></Button>
              
              <Button className='bouttonAccueil' onClick={() => clickContact()} outline color='red'><p  className='bouttonAccueilP' >Contact</p></Button>
              <Row style={{ marginTop: "2%" }}>




                <Collapse isOpen={open}>
                  <Card style={{ marginBottom: "3%" }}>
                    <CardBody >

                      <img className='technologies' src='https://www.conseil-webmaster.com/images/javascript.png' />
                      <img className='technologies' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' />
                      <img className='technologies' src='https://www.datocms-assets.com/45470/1631110818-logo-react-js.png' />
                      <img className='technologies' src='https://www.datocms-assets.com/45470/1631026680-logo-react-native.png' />
                      <img className='technologies' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' />
                      <img className='technologies' src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' />
                      <img className='technologies' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1024px-Git-logo.svg.png' />
                      <img className='technologies' src='https://www.ideematic.com/wp-content/uploads/2018/02/jquery.png' />
                      <img className='technologies' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png' />
                      <img className='technologies' src='https://nativebase.io/img/nativebase-logo.png' />
                    </CardBody>
                  </Card>
                </Collapse>
                
                <Collapse isOpen={open3}>
                  <Row>
                    <Col sm={{ size: 2, offset: 1 }}>
                      <p style={{ color: "white" }} >wianni.gautier@gmail.com</p>
                    </Col>
                    <Col sm={{ size: 2, offset: 7 }}>
                      <p style={{ color: "white" }}>06 88 18 84 02</p>
                    </Col></Row>
                </Collapse>

              </Row>
            </Col>
            <Col md={{ size: 1 }} xxl={{ size: 1, offset: 2 }} id="colImg" >

              <img id="PP" src='https://res.cloudinary.com/dvgscvuar/image/upload/v1660658337/LA_CAPSULE_17-06-2022-430HD_bx12kh.jpg' />

            </Col>
          </Row>

          <div style={{ backgroundColor: "white" }} className="row">
            <div id="services">
              <Card id='cardServices'>

                <Col md={{}} xl={{ size: 7, offset: 5 }}> <h5 id='titleServices' style={{ marginTop: "3%", marginLeft: "73%" }}>Mon offre</h5></Col>
                <Row>
                  <Col xl={{ size: 3, offset: 1 }}><div id='gestion'><h6 className='titleServices' >Gestion de projets web</h6>
                  <Col>
                    <p className='textServices' > Site vitrine, e-commerce, outils internes</p>
                    
                    <FontAwesomeIcon icon={faDisplay } style={{ marginTop:"-14%"}} className='iconesGauche'/>
                </Col></div></Col>
                  <Col xl={{ size: 3, offset: 2 }}> <div id='développements'>
                    
                  
                  <h6 className='titleServices' >Développements spécifiques</h6>
                  <Col><p className='textServices'> Des outils adaptés à votre coeur de métier, applications & solutions personnalisées</p>            
                  <FontAwesomeIcon icon={faPenToSquare } style={{marginBottom:'10%', marginTop:'-10%'}} className='iconesDroite'/></Col>
                  </div></Col></Row>
<Row>

                  <Col xl={{ size: 3, offset: 1 }}> <div id='responsive'>
                    <Col>
                  <FontAwesomeIcon icon={faArrowsUpDownLeftRight } style={{ marginRight:'-38%', marginBottom:'-20%'}} className='iconesGauche'/>
                    <h6 className='titleServices' >Responsive design</h6></Col>
                    <p className='textServices'> Des outils adaptés à votre coeur de métier, applications & solutions personnalisées</p></div></Col>
                  <Col xl={{ size: 3, offset: 2 }}>
                    <div id='applications'>
                      <Col>
                      
                      <FontAwesomeIcon icon={faMobileButton }   className='iconesDroite'/>
                      <h6 className='titleServices' >Applications web & mobiles</h6></Col>
                      <p className='textServices'> Des solutions adaptées à vos besoins</p>
                    </div>
                  </Col>
                </Row>
              </Card>
            </div>
            <div id="feedupDiv">
              <Col sm={{ size: 10 }}>
                <Card id="rowFeedUp" >
                  <Row >

                    <h5 id='titleProjet' style={{ marginTop: "4%", marginLeft: "13%", marginBottom: "2%" }}>FeedUp </h5>
                    <div></div>
                    <Col md={{ size: 7, offset: 1 }} xxl={{ size: 4, offset: 2 }}>
                      <p id="presFeedUp" >Projet réalisé en deux semaines dans le cadre de ma formation à la capsule, FeedUp est une application mobile qui vous propose une sélection de recettes en fonctions de vos besoins nutritionnels. Elle vous permet également de commander les produits dont vous avez besoins auprès de producteurs locaux et vous fournit un suivi nutritionnel de vos repas. Je vous laisse découvrir sa présentation:</p>
                    </Col>
                    <Col md={{ size: 4 }} xxl={{ size: 6 }}>
                      <YoutubeEmbed embedId="XwYQqFRWQQI" />
                    </Col>
                  </Row>
                </Card>
              </Col>
            </div>
            <div className='row' style={{ width: "100%" }}>
              <Col sm={12}>
                <Row >
                  <div id='titleProjet' >
                    <p >Quelques projets réalisés:</p></div>
                </Row>
                  {projets()}
                </Col></div>
          </div>
        </Col>
      </Container>
    </div>
  )
}


