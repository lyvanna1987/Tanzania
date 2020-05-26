import React, { Component } from 'react'
import styled from 'styled-components'
import background from '../../assets/utils/images/laptop.png'

class SignUp extends React.Component {

    render () {
        return (            
            <Container>                
                <Widget>
                    <Title></Title>
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
    max-height: 600px;
    background-color: #FFFFFF 
    border-radius: 5px;    
    algin-items: center;
    display: flex;
`
const Title = styled.div`
    width: 90%;
    height: 30px;
    border-bottom: 1px solid grey;
`



