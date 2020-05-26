import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import Processing from './Components/Processing'
import {
    Button
} from 'reactstrap';

import bg from '../../assets/utils/images/banners/howitworks-banner.png'
import processing1 from '../../assets/utils/images/processing1.png'
import processing2 from '../../assets/utils/images/processing2.png'
import processing3 from '../../assets/utils/images/processing3.png'
import processing4 from '../../assets/utils/images/processing4.png'

class HowItWroks extends Component {
    render () {
        return (
            <Fragment>
                <Banner></Banner>
                <CustomContainer style={{backgroundColor: '#CFCFCF'}}>
                    <div className="maincontent d-flex justify-content-center">
                        <HowTo>
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h4>How It Works</h4>
                                <Divider style={{backgroundColor: '#cfcfcf'}}></Divider>
                                <div style={{width: '85%', margin: '10px'}}>
                                    Are you a Producer, a singer, a writer, or an instrument player that have always wanted to work with a certain Professional in the Music Industry? The Linkup Africa brings your dreams to life. Sign up, submit your work and get a video response from your favorite Professional in the Music Business.
                                </div>
                            </div>
                        </HowTo>
                    </div>
                </CustomContainer>
                <CustomContainer style={{backgroundColor: '#B4B4B4'}}>
                    <div className="maincontent d-flex justify-content-center">
                        <div className="d-flex flex-column justify-content-center align-items-center p-4">
                            <h4>The Process</h4>
                            <div className="row mt-4" >
                                <div className="col-md-6 col-lg-3">
                                    <Processing
                                        image={processing1}
                                        description='1. "sign up" and tell us a little about yourself. You can also sign up via Facebook or Gmail in one easy step. You must be at least 18 to register.'
                                    >
                                    </Processing>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <Processing
                                        image={processing2}
                                        description='2. Now that you are signedup, sign into your private account. Then, simply upload a profile pic, add a quick bio, and fill out other sections at your leisure. Your profile is private - so only the Pro you submit to will see your info.'
                                    >
                                    </Processing>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <Processing
                                        image={processing3}
                                        description='3. Click the "Search" button in the top menu. Search for professionals or opportunities and/or use the search filters to narrow down what you are looking for. We have hundreds of professionals looking to connect with you every day.'
                                    >
                                    </Processing>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <Processing
                                        image={processing4}
                                        description='4. Submit materials (all types) to a professional using LinkUP credits. Credits are purchased in your account. You will receive a video response directly from the pro. Easily request a return of your credits if no responses in 30 days.'
                                    >
                                    </Processing>
                                </div>                    
                            </div>
                        </div>
                    </div>
                </CustomContainer>
                <CustomContainer style={{backgroundColor: '#CFCFCF'}}>
                    <div className="d-flex justify-content-center align-items-center p-5">
                        <div style={{width: '400px'}} className="d-flex flex-column justify-content-center">
                            <div className="p-3" style={{fontSize: 20}}>We can't wait to hear from you! Sign up today and let us help you find what you're looking for.</div>
                            <Divider style={{backgroundColor: '#707070'}}></Divider>
                            <Button className="btn-pill btn-shadow mx-2 mt-4" color="success"> SIGN UP </Button>
                        </div>
                        
                    </div>

                </CustomContainer>
            </Fragment>
        )
    }
}

export default HowItWroks

const Banner = styled.div`
    width: 100%;
    height: 347px;
    background: url(${bg});
`
const CustomContainer = styled.div`
    width: 100%;
    padding: 10px;
`
const HowTo = styled.div`
    width: 780px;
    margin: 30px;
    padding: 20px;
    background-color: #EBEBEB;
    border-radius: 10px;
`
const Divider = styled.div`
    height: 2px;
    // width: 90%;
    margin: 10px;
`
