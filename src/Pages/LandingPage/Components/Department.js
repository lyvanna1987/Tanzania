import React, {Component} from 'react'
import styled from 'styled-components'

class Department extends Component {
    render () {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center m-2">
                <div className="d-flex justify-content-center align-items-center m-2" 
                    style={{width: '106px', height: '106px', borderRadius: '50%', backgroundColor: "white"}}>
                    <Image src={this.props.image} />
                </div>
                <div>{ this.props.description }</div>
            </div>
        )
    }
}

export default Department

const Image = styled.img`
    width: 48px;
    height: 48px;
`
