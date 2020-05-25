import React, {Component, Fragment} from 'react';

import {
    Button, CustomInput,
    ModalBody, ModalFooter, ModalHeader,
    InputGroup, InputGroupText, Input, InputGroupAddon
} from 'reactstrap';

import styled from 'styled-components'
import {
    toast,
    Slide
} from 'react-toastify';

import Rodal from 'rodal';
import {
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class ComboMealTitle extends Component {

    state = {
        comboMealName: '',
        comboMealImage: null,
        comboMealImageUrl: '',
        visible: false,
        animation: 'zoom'
    }

    showAdd = () => {
        this.setState({
            visible: true
        })
    }
    hideAdd = () => {
        this.setState({
            visible: false,
            comboMealName: '',
            comboMealImageUrl: ''
        })
    }
    handleChangeName = (e) => {
        this.setState({
            comboMealName: e.target.value
        })
    }
    handleChangeImage = (e) => {
        this.setState({
            comboMealImage: e.target.files[0],
            comboMealImageUrl:  URL.createObjectURL(e.target.files[0])
        })
    }
    handleAdd = () => {
        const {comboMealName, comboMealImageUrl, comboMealImage} = this.state
        if (comboMealName === '' || comboMealImageUrl === '') {
            toast("Please fill all fields.", {
                transition: Slide,
                closeButton: true,
                autoClose: 3000,
                position: 'bottom-center',
                type: 'warning'
            })
            return
        }
        this.setState({
            visible: false,
            comboMealName: '',
            comboMealImageUrl: ''
        })
    }

    render() {
        return (
            <Fragment>
                <Button className="btn-pill btn-shadow mr-3" onClick={this.showAdd} color="info">
                    <FontAwesomeIcon icon={faPlus}/> ADD
                </Button>
                <Rodal visible={this.state.visible}
                    onClose={this.hideAdd}
                    animation={this.state.animation}
                    showMask={false}
                >
                    <ModalHeader style={{color: '#000000'}}>Add ComboMeal</ModalHeader>
                    <ModalBody>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Name</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" onChange={this.handleChangeName} value={this.state.comboMealName} />
                        </InputGroup>
                        <InputGroup>
                            <CustomInput type="file" id="customFileBrowser" name="customFile"  onChange={this.handleChangeImage} />
                            { this.state.comboMealImageUrl !== '' && <Image src={this.state.comboMealImageUrl} alt="ComboMeal Image" />}
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.hideAdd}>Cancel</Button>
                        <Button color="primary" onClick={this.handleAdd}>ADD</Button>
                    </ModalFooter>
                </Rodal>
            </Fragment>
        );
    }
}

const Image = styled.img`
    width: 100%;
    max-height: 300px;
`
