import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import {
    Button
} from 'reactstrap';
import bg from '../../assets/utils/images/banners/landing.png'
import image1 from '../../assets/utils/images/image1.png'

class LandingPage extends Component {

    state = {
    }

    render() {
        return (
            <Fragment>
                <ImgMainBar>
                    <div className="maincontent he-100">
                        <div className="row he-100">
                            <div className="mx-auto my-auto mx-md-4">
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
                <HowWorksContent>
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
                </HowWorksContent>
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
const HowWorksContent = styled.div`
    width: 100%;
    background-color: #CFCFCF;
`
