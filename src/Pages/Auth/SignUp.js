import React, { Component } from 'react'
import styled from 'styled-components'
import bg from '../../assets/utils/images/laptop.png'

class SignUp extends React.Component {

    render () {
        return (            
            <Container>
                {/* <Widget></Widget> */}
                
            </Container>           
        )
    }
}

export default SignUp

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: row;
    background: url(${bg});
`
const Widget = styled.div`
    flex: 1;
`



