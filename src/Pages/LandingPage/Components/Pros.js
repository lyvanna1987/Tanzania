import React, {Component} from 'react'
import styled from 'styled-components'

class Pros extends Component {
    render () {
        return (
            <div className="d-flex flex-column justify-content-center align-items-center m-2">
                <div className="we-100 m-2">
                    <Image src={this.props.image} />
                </div>
                <div>{ this.props.description }</div>
            </div>
        )
    }
}

export default Pros

const Image = styled.img`
    max-width: 250px;
    width: 100%;
    max-height: 250px;
    height: 100%;
`
