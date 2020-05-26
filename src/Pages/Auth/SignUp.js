import React, { Component } from 'react'
import styled from 'styled-components'
import {
    Button,
    InputGroup, 
    InputGroupAddon
} from 'reactstrap';
import background from '../../assets/utils/images/laptop.png'
import { IoLogoFacebook, IoLogoGoogle } from "react-icons/io";
import { Input, CustomInput, FormGroup } from 'reactstrap';
import DatePicker from 'react-datepicker';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

class SignUp extends React.Component {

    render () {
        return (            
            <Container>                
                <Widget>
                    <TitleContainer>
                        <h5 className="col-4 xs-12 text-center" >Log in</h5>
                        <Title>
                            <div className="col-4 xs-12 boder-bottom" >Join</div>
                        </Title>                        
                        <h5 className="col-4 xs-12 text-center">Subscribe</h5>
                    </TitleContainer>
                    <div className="mt-3 justify-content-center" style={{borderWidth: 1}}>
                        <Button className="btn-pill btn-shadow " onClick={this.showAdd} style={{backgroundColor:'#3B5998', width: 150}}>
                            <IoLogoFacebook color="white" fontSize="1.5rem" style={{paddingRight: 1}}/>
                            Facebook
                        </Button>
                        <Button className="btn-pill btn-shadow ml-5" onClick={this.showAdd} style={{backgroundColor:'#D73D32', width: 150}}>
                            <IoLogoGoogle color="white" fontSize="1.5rem"/>
                            Google
                        </Button>
                    </div>                    
                    <Input  name="text" id="username"  placeholder="Username" style={{width: '90%', height: 53, marginTop:30}}/>
                    <Input  type="password" name="passowrd" id="password"  placeholder="Password" style={{width: '90%', height: 53, marginTop: 11}}/>
                    <Input  type="password" name="confirmPassword" id="confirmPassword"  placeholder="Re-Type Password" style={{width: '90%', height: 53, marginTop: 11}}/>
                    <Input  name="email" id="email"  placeholder="Email" style={{width: '90%', height: 53, marginTop:11}}/>
                    
                    <FormGroup className="d-flex justify-content-left " style={{width:'90%', marginTop: 11, marginLeft:20}}>
                        <label>Gender</label>
                        <CustomInput type="radio" name="gender" id="maleRadio" label="Male" className="ml-3"/>
                        <CustomInput type="radio" name="gender" id="femaleRadio" label="Female" className="ml-3"/>
                    </FormGroup>  
                    <div style={{width: '90%', marginLeft: 20}} className="d-flex">
                        <label>Birthday</label>
                        
                        <DatePicker placeholderText="Click to select a date" className="form-control ml-2" />
                        <InputGroupAddon addonType="prepend">
                                <div className="input-group-text">
                                    <FontAwesomeIcon icon={faCalendarAlt}/>
                                </div>
                        </InputGroupAddon>

                    </div>
                    <div style={{width:'60%', height: 100, backgroundColor:'gray', marginTop: 17 }} ></div>  
                    <Button className="mb-2 mr-2 btn-icon btn-pill" color="success" style={{width: '90%', marginTop: 11, height: 52}}> Join </Button>  
                    <label style={{marginTop: 25}}>By joining LinkUp Africa, you agree to our <label style={{color: '#0A88D3'}}>Terms of Service.</label></label>           
                </Widget>
                
            </Container>           
        )
    }
}

export default SignUp

const Container = styled.div`    
    width: 100%;
    height: 100vh;    
    background: url(${background});    
    display: flex;
    justify-content: center;
    align-items: center;   
`
const Widget = styled.div`   
    max-width: 464px;
    width: 100%;
    height: 100%;
    max-height: 700px;
    background-color: #FFFFFF 
    border-radius: 5px;  
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleContainer = styled.div`
    width: 90%;
    height: 30px;
    border-bottom: 1px solid grey;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 20px;
`
const Title = styled.div`
    text-align: center;
    font-size: 20px;
    font: Regular 20px/26px Roboto;
    color: #000000;
    font-weight: 600;
`


