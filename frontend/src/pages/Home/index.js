import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'
import React from 'react';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Accordion, Container } from 'react-bootstrap';

import img1 from '../../images/img1.svg';
import img2 from '../../images/img2.svg';
import star1 from '../../images/star.svg';
import star2 from '../../images/star2.svg';
import woman from '../../images/woman.svg';
import woman2 from '../../images/woman-FAQ.svg';
import ibm from '../../images/ibm.png';
import google from '../../images/google.svg';
import cisco from '../../images/cisco.svg';
import meta from '../../images/meta.svg';
import work from '../../images/work.svg';
import target from '../../images/target.svg';
import credit_card from '../../images/credit_card.svg';
import line from '../../images/line.svg';
import polygon from '../../images/polygon.svg';
import leftbackgroundimg from '../../images/leftimagesbackground.svg';
import rightbackgroundimg from '../../images/rightimagesbackground.svg';
import middlebackgroundimg from '../../images/middleimagesbackground.svg';
import Background from '../../images/background2.svg';
import { Link } from 'react-router-dom';
import Footer from "../../Components/Footer/Footer"; 

function Home () {

    return (
        <div className='background'>
            {/* navbar */}
            <nav className= "navbar navbar-expand-lg navbar-transparent header">
                <a className="navbar-brand codelord" href="/">
                    <span className="code code">Code</span> <span className="lord lord">Lord</span>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav select">
                        <li className="nav-item 1">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item 2">
                            <a className="nav-link" href="/">Categories</a>
                        </li>
                        <li className="nav-item 3">
                            <a className="nav-link" href="/">Contact us</a>
                        </li>
                        <li className="nav-item 4">
                            <a className="nav-link" href="/">About us</a>
                        </li>
                    </ul>
                </div>
                <div className="button button-distance">
                    <Link className="btn btn-login button-text poppins-font button-container" to="/login">Log in</Link>
                    <Link className="btn btn-signup button-text poppins-font button-container" to="/signup">Sign up</Link>
                </div>
            </nav>
            <Container className="Home">
                <Row className="HomeStart">
                    <Col className='Limit'>
                        <h2 className="Title title">
                            Code <span style={{ color: "#21B573" }}>Lord</span>
                            <br />
                            Code your dreams
                        </h2>
            
                        <div className="background-img1 background-img1">
                            <Image className="backroundimg1" src={leftbackgroundimg} alt="lung" />
                        </div>
                        <div className="left-img left-img">
                            <Image className="img1" src={img1} alt="a-man-using-laptop" />
                        </div>
                        <div className="background-img2 background-img2">
                            <Image className="backroundimg2" src={rightbackgroundimg} alt="linh" />
                        </div>
                        <div className="right-img right-img">
                            <Image className="img2" src={img2} alt="a-man-using-laptop-2" />
                        </div>
                        <div className="middlebackground background-img3">
                            <Image className="backgroundimg3" src={middlebackgroundimg} alt="qua" />
                        </div>
                    </Col>
                    <Col class="position-relative">
                        <div class="col-md-8 justify-content-center">
                            <div class="search">
                                <i class="fa fa-search"></i>
                                <input type="text" class="form-control" placeholder="What do you want to learn"/>
                                <button class="btn btn-primary">Learn</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="Categories">
                <Row className="box">
                    <Col className="group-number-banner">
                        <Row className="group-student">
                            <div className="overlap-group">
                                <div className="text-wrapper">100M+</div>
                                <div className="div">Students</div>
                            </div>
                        </Row>
                        <Row className="group-professional">
                            <div className="group">
                                <div className="text-wrapper-2">10K+</div>
                                <div className="text-wrapper-3">Professionals</div>
                            </div>
                        </Row>
                        <Row className="group-trustpilot">
                            <div className="overlap-2">
                                <Row className="overlap-3">
                                    <div className="text-wrapper-4">5.0</div>
                                    <div className="group-2">
                                        <div className="text-wrapper-5">View our 1,602 reviews</div>
                                        <div className="overlap-group-2">
                                        <Image className="artboard" src={star1} alt="Artboard" />
                                        </div>
                                    </div>
                                    <h4 className="texttrust">
                                            Trustpilot
                                    </h4>
                                </Row>
                                <Image className="star" src={star2} alt="Star" />
                            </div>
                        </Row>
                        <Row className="group-category">
                            <div className="overlap-4">
                                <div className="text-wrapper-6">15+</div>
                                <div className="text-wrapper-7">Category</div>
                            </div>
                        </Row>
                        <Row className="group-livecourses">
                            <div className="overlap-5">
                                <div className="text-wrapper-8">60K+</div>
                                <div className="text-wrapper-9">Live Courses</div>
                            </div>
                        </Row>
                    </Col>
                </Row>
                <Col className='instruction'>
                    <h3 className='explore'>
                        Explore Top Categories
                    </h3>
                    <h5 className='click'>
                        Click on the categories and explore all courses
                    </h5>
                </Col>
            </Container>
            <Container className='popular'>
                <Row className='popularcontain'>
                    <h2 className='populartitle'>
                        Popular Courses
                    </h2>
                </Row>
                <Row className='popularline1' style={{ gap: "30px" }}>
                    <Col className="cybersec">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Introduction to Cybersecurity Essentials</div>
                            <div className="div">25x Lesson</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Cyber Security</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={ibm} />
                            <p className="text">
                                <span className="span">Skills you&#39;ll gain:</span>
                                <span className="text-wrapper-3">
                                {" "}
                                Security Engineering, Network Security, Cyber Attacks, Cryptography ...
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Join</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
        
                    <Col className="datascience">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Data Science Fundamentals with Python and SQL</div>
                            <div className="div">16x Lesson</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Data Science</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={ibm} />
                            <p className="text">
                                <span className="span">Skills you&#39;ll gain:</span>
                                <span className="text-wrapper-3">
                                {" "}
                                Python Programming, SQL, Data Structures, Databases, Data Analysis, Data Management
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Join</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="aiml">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Machine Learning on Google Cloud</div>
                            <div className="div">10x Lesson</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">AI & ML</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={google} />
                            <p className="text">
                                <span className="span">Skills you&#39;ll gain:</span>
                                <span className="text-wrapper-3">
                                {" "}
                                        Machine Learning, Deep Learning, Python Programming, Cloud Computing
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Join</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='popularline2' style={{ gap: "30px" }}>
                    <Col className="cybersec">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Introduction to Front-End Development</div>
                            <div className="div">25x Lesson</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Front-End</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={meta} />
                            <p className="text">
                                <span className="span">Skills you&#39;ll gain:</span>
                                <span className="text-wrapper-3">
                                {" "}
                                HTML and CSS, Web Development
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Join</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
        
                    <Col className="datascience">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Networking</div>
                            <div className="div">16x Lesson</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Networking</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={cisco} />
                            <p className="text">
                                <span className="span">Skills you&#39;ll gain:</span>
                                <span className="text-wrapper-3">
                                {" "}
                                Windows Networking, Networking knowledge
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Join</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="aiml">
                        <div className="group-introduce">
                            <div className="overlap">
                            <div className="text-wrapper">Developing Back-End Apps with Node.js and Express</div>
                            <div className="div">38x Lesson</div>
                            <div className="group">
                                <div className="overlap-group">
                                <div className="text-wrapper-2">Back-end</div>
                                </div>
                            </div>
                            <Image className="rectangle" alt="Rectangle" src={meta} />
                            <p className="text">
                                <span className="span">Skills you&#39;ll gain:</span>
                                <span className="text-wrapper-3">
                                {" "}
                                Computer Programming, Web Development
                                </span>
                            </p>
                            <Button className="button-base">
                                <div className="text-2">Join</div>
                            </Button>
                            <Image className="line" alt="Line" src={line} />
                            <div className="polygon-wrapper">
                                <Image className="polygon" alt="Polygon" src={polygon} />
                            </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='popularbutton'>
                    <Button className="explore">
                        <div className='buttontext'>Explore all courses</div>
                    </Button>
                </Row>
            </Container>
            <Container className='how' >
                
                <Image className='background2' src={Background} alt='Background2' />
                
                <Row className='howcodelordworks'>                    
                    <p>
                        <div className='koho-font'>
                            <span className='How'>How </span>
                            <span className="code code">Code</span> 
                            <span className="lord lord">Lord</span>
                            <span className='works'> works</span>
                        </div>
                        <div classname ="poppins-font" style={{position: 'relative', left: 850, top: -50,fontSize : '28px', textAlign:'left'}}>
                            <span className="code code" >Code</span> 
                            <span className="lord lord" >Lord</span>
                            <span className='Quoting'> is an IT education website 
                            providing top-notch 
                            </span>
                            <span className='Quoting'>
                                <br/> 
                            courses and resources to boost your tech skills.
                            </span>
                        </div>
                    </p>
                </Row>    
                    
                <Col className='instruction'>                     
                    <Row className="boxsignup">
                        <div className="group-signup">
                            <div className="overlap-group">
                                <Link to="/signup">
                                <div className="overlap">
                                    <Image className="element-business" alt="Element business" src = {work}/>
                                </div>
                                <div className="text-wrapper">Sign Up</div>
                                <p className="sign-up-for-a-free">
                                    <span className="span">Sign up for a </span>
                                    <span className="text-wrapper-2">free account</span>
                                    <span className="span"> on </span>
                                    <span className="text-wrapper-2">Code </span>
                                    <span className="text-wrapper-3">Lord</span>
                                    <span className="text-wrapper-2">&nbsp;</span>
                                    <span className="span">to advance in IT and boost your career.</span>
                                </p>
                                </Link>
                            </div>
                        </div>
                    </Row>
                    <Row className="boxsignup">
                        <div className="group-career">
                            <div className="overlap-group">
                                <div className="overlap">
                                    <Image className="element-target" alt="Element target" src = {target}/>
                                </div>
                                <div className="text-wrapper">Select your Career path</div>
                                <p className="sign-up-for-a-free">
                                    <span className="span">Explore courses by profession: </span>
                                    <span className="text-wrapper-2">Front-end, Back-end, 
                                    Cybersecurity, Data Science and beyond. </span>
                                    
                                </p>
                            </div>
                        </div>
                    </Row>
                    <Row className="boxsignup">
                        <div className="group-payment">
                            <div className="overlap-group">
                                <div className="overlap">
                                    <Image className="element-credit-card" alt="Element creditcard" src = {credit_card}/>
                                </div>
                                <div className="text-wrapper">Select Payment</div>
                                <Image className="woman_with_lap" src={woman} alt="a-woman-using-laptop" style={{position: 'absolute', left: 800,top: -590}}/> 
                                <p className="sign-up-for-a-free">
                                    <span className="span">For paid courses, we accept payments via </span>
                                    <span className="text-wrapper-2">VISA</span>
                                    <span className="span"> or </span>
                                    <span className="text-wrapper-2">Paypal</span>
                                </p>
                            </div>
                        </div>
                    </Row>
                </Col>
                    
            </Container>
            <Container className='FAQ'>
                <Row>
                    <Col className='find-here' md={6} >
                        <p>
                            <div>
                             <span className='poppins-font F-title'>Frequently Asked Questions</span>
                            </div>
                            <div>
                                <span className='koho-font F-find'>Any Questions?</span>
                                <br/>
                                <span className='koho-font F-find'>Find here.</span>
                            </div>
                            <div>
                                <Link className="btn btn-login button-text poppins-font button-message" to="/">Send Message</Link>
                            </div>
                        </p>

                        <Image className="woman-FAQ" src={woman2} alt="a-woman-FAQ"/> 

                    </Col>

                    <Col className='questions' md={8}>
                        <div className='poppins-font'>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0" className='ques'>
                                    <Accordion.Header>
                                        <p>How can I find courses that suit my needs?</p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        CodeLord is an IT education website providing top-notch courses and resources to boost your tech skills.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1" className='ques'>
                                    <Accordion.Header>
                                        <p>
                                            How can I contact 
                                            <span className="code code"> Code</span> 
                                            <span className="lord lord">Lord </span> 
                                            if I have issues or questions?
                                        </p>             
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        CodeLord is an IT education website providing top-notch courses and resources to boost your tech skills.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2" className='ques'>
                                    <Accordion.Header>
                                        <p>
                                            Will I receive a 
                                            <span className="lord lord"> certificate </span> 
                                            upon course completion?
                                        </p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        CodeLord is an IT education website providing top-notch courses and resources to boost your tech skills.
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3" className='ques'>
                                    <Accordion.Header>
                                        <p>
                                            How can I 
                                            <span className='lord lord'> interact </span> 
                                            with instructors and fellow learners?
                                        </p>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        CodeLord is an IT education website providing top-notch courses and resources to boost your tech skills.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
      );
}

export default Home;