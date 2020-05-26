import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {
    Button, FormGroup, Label, Input
} from 'reactstrap';

import Department from './Components/Department'
import Carousel from './Components/Carousel'
import Pros from './Components/Pros'

import bg from '../../assets/utils/images/banners/landing.png'
import image1 from '../../assets/utils/images/image1.png'
import concert from '../../assets/utils/images/concert.svg'
import pen from '../../assets/utils/images/pen.svg'
import file from '../../assets/utils/images/file.svg'
import technology from '../../assets/utils/images/technology.svg'
import managers from '../../assets/utils/images/managers.svg'
import pro1 from '../../assets/utils/images/pro1.png'
import pro2 from '../../assets/utils/images/pro2.png'
import pro3 from '../../assets/utils/images/pro3.png'
import pro4 from '../../assets/utils/images/pro4.png'

class LandingPage extends Component {

    state = {
    }

    render() {
        return (
            <Fragment>
                <ImgMainBar>
                    <div className="maincontent he-100">
                        <div className="row he-100">
                            <div className="mx-auto my-auto mx-md-5">
                                <Title>FRESH</Title>
                                <Title>TALENT</Title>
                                <Title>TOP MUSIC</Title>
                                <Title>INDUSTRY</Title>
                                <Title>PROFESSIONALS</Title>
                                <Subscription1>Create your future with us</Subscription1>
                                <Button className="mr-3">FIND TALENT</Button>
                                <Button>GET HEARD</Button>
                            </div>
                        </div>
                    </div>
                </ImgMainBar>
                <HowWorksContainer>
                    <div className="maincontent he-100">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center justify-content-center">
                                <img src={image1} style={{width: '90%', height: '90%'}} />
                            </div>
                            <div className="col-md-6 d-flex flex-column align-items-center justify-content-center my-4">
                                <SubTitle>HOW IT WORKS</SubTitle>
                                <Subscription2>Submit your music to a music industry professional and receive guaranteed feedback on video, within 30 days.</Subscription2>
                                <Button>LEARN MORE</Button>
                            </div>
                        </div>
                    </div>
                </HowWorksContainer>
                <Container1 style={{backgroundColor: '#A1A1A1'}}>
                    <div className="maincontent">
                        <div className="row d-flex justify-content-around">
                            <Department 
                                image={concert} 
                                description="ARTISTS"> 
                            </Department>
                            <Department 
                                image={pen} 
                                description="PRODUCERS"> 
                            </Department>
                            <Department 
                                image={file} 
                                description="SONGWRITERS"> 
                            </Department>
                            <Department 
                                image={technology} 
                                description="CREATIVE DIRECTORS"> 
                            </Department>
                            <Department 
                                image={managers} 
                                description="CLIENT MANAGERS"> 
                            </Department>
                        </div>
                    </div>
                </Container1>
                <Container1 style={{backgroundColor: '#8B8B8B'}}>
                    <div className="maincontent px-5">
                        <div className="d-flex justify-content-center p-2">
                            <h5 style={{color: '#ffffff'}}>What's happening</h5>
                        </div>
                        <Carousel></Carousel>
                    </div>
                </Container1>
                <Container1 style={{backgroundColor: '#CFCFCF'}}>
                    <div className="maincontent px-5">
                        <div className="d-flex justify-content-center p-2">
                            <h3 style={{color: '#000000', textAlign: 'center'}}>SOME OF OUR PROS</h3>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <Pros 
                                    image={pro1} 
                                    description="Diamond Platnumz" >
                                </Pros>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <Pros 
                                    image={pro2} 
                                    description="Vanessa Mdee" >
                                </Pros>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <Pros 
                                    image={pro3} 
                                    description="Jim Lema" >
                                </Pros>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <Pros 
                                    image={pro4} 
                                    description="Mariah Carey" >
                                </Pros>
                            </div>
                        </div>
                    </div>
                </Container1>
                <Container1 style={{backgroundColor: '#EBEBEB'}} >
                    <div className="maincontent d-flex flex-wrap justify-content-center">
                        <span className="" style={{color: '#000000', fontSize: 20, textAlign: 'center'}}>
                            Ready to connect with the world's top music pros?
                        </span> &nbsp;&nbsp;
                        <span style={{color: '#FFB300', fontSize: 20, textAlign: 'center'}}>Click here to start!</span>
                    </div>
                </Container1>
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4" style={{backgroundColor: '#7E7D7D'}} >
                        <ContactContainer className="d-flex flex-column justify-content-center align-items-center">
                            <ContactTitle className="text-success">VISIT</ContactTitle>
                            <ContactTitle className="text-white mb-4">US</ContactTitle>
                            <span className="text-white">Monday - Friday 11:00 - 18:30</span>
                            <span className="text-white">Saturday 11:00 - 17:00</span>
                            <span className="text-white">Sunday 12:00 - 16:30</span>
                        </ContactContainer>
                    </div>
                    <div className="col-sm-12 col-md-6 col-lg-4"  style={{backgroundColor: '#070707'}}>
                        <ContactContainer className="d-flex flex-column justify-content-center align-items-center" >
                            <ContactTitle className="text-success">CONTACT</ContactTitle>
                            <ContactTitle className="text-white mb-4">US</ContactTitle>
                            <span className="text-white">Tel: 123-456-789</span>
                            <span className="text-white">Fax: 123-456-789</span>
                            <span className="text-white">Avenue Motel Fikin, Kinshasa</span>
                            <span className="text-white">Congo - Kinshasa</span>
                        </ContactContainer>
                    </div>
                    <div className="col-sm-12 col-lg-4" style={{backgroundColor: '#54DEAB'}}>
                        <ContactContainer className="d-flex flex-column justify-content-center align-items-center" >
                            <ContactTitle className="text-body">TELL</ContactTitle>
                            <ContactTitle className="text-white mb-4">US</ContactTitle>
                            <div className="row">
                                <div className="col-6">
                                    <FormGroup>
                                        <Input type="text" name="name" id="name" placeholder="Name"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="email" name="email" id="email" placeholder="Email"/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Input type="text" name="subject" id="subject" placeholder="Subject"/>
                                    </FormGroup>
                                </div>
                                <div className="col-6">
                                    <FormGroup>
                                        <Input type="textarea" name="text" id="exampleText" style={{height: 145}} placeholder="Messages"/>
                                    </FormGroup>
                                </div>
                            </div>
                        </ContactContainer>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LandingPage

const ImgMainBar = styled.div`
    width: 100%;
    height: 600px;
    background: url(${bg});
`
const Title = styled.h2`
    color: #000000;
    font-weight: 600;
`
const SubTitle = styled.p`
    color: #000000;
    font-weight: 800;
    font-size: 20px;
`
const Subscription1 = styled.p`
    color: #000000;
    font-size: 16px;
`
const Subscription2 = styled.p`
    color: #000000;
    width: 300px;
    text-align: center;
    font-size: 16px;
`
const HowWorksContainer = styled.div`
    width: 100%;
    background-color: #CFCFCF;
`
const Container1 = styled.div`
    width: 100%;
    padding: 10px;
`
const ContactContainer = styled.div`
    height: 400px;
`
const ContactTitle = styled.h1`
    letter-spacing: 5px;
    font-weight: 900;
`