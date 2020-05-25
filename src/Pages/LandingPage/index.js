import React, { Component } from 'react'
import styled from 'styled-components'

import imgMainBar from '../../assets/utils/images/banners/landing.png'

class LandingPage extends Component {

    state = {
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <ImgMainBar src={imgMainBar}></ImgMainBar>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default LandingPage

const ImgMainBar = styled.img`
    height: fit-content;
    // width: 100%;
`
