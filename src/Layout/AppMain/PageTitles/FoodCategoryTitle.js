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

export default class FoodCategoryTitle extends Component {

    state = {
        foodName: '',
        foodImage: null,
        foodImageUrl: '',
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
            foodName: '',
            foodImageUrl: ''
        })
    }
    handleChangeName = (e) => {
        this.setState({
            foodName: e.target.value
        })
    }
    handleChangeImage = (e) => {
        if (!e.target.files[0]) {
            return
        }
        this.setState({
            foodImage: e.target.files[0],
            foodImageUrl:  URL.createObjectURL(e.target.files[0])
        })
    }
    handleCreate = () => {
        const {foodName, foodImageUrl, foodImage} = this.state
        if (foodName === '' || foodImageUrl === '') {
            toast("Please fill all fields.", {
                transition: Slide,
                closeButton: true,
                autoClose: 3000,
                position: 'bottom-center',
                type: 'warning'
            })
            return
        }
        ///////////////// For Front
        this.props.handleCreate({name: foodName, image: foodImageUrl})
        //////////////////////// For Backend
        // this.props.handleCreate({name: foodName, image: foodImage})

        this.setState({
            visible: false,
            foodName: '',
            foodImage: null,
            foodImageUrl: ''
        })
    }

    render() {
        return (
            <Fragment>
                <Button className="btn-pill btn-shadow mr-3" onClick={this.showAdd} color="info" >
                    <FontAwesomeIcon icon={faPlus}/> ADD
                </Button>
                <Rodal visible={this.state.visible}
                    onClose={this.hideAdd}
                    animation={this.state.animation}
                    showMask={false}
                >
                    <ModalHeader style={{color: '#000000'}}>Add Food</ModalHeader>
                    <ModalBody>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Name</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" onChange={this.handleChangeName} value={this.state.foodName} />
                        </InputGroup>
                        <InputGroup>
                            <CustomInput type="file" id="customFileBrowser" name="customFile" onChange={this.handleChangeImage} />
                            { this.state.foodImageUrl !== '' && <Image src={this.state.foodImageUrl} alt="Food Image" />}
                        </InputGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="link" onClick={this.hideAdd}>Cancel</Button>
                        <Button color="primary" onClick={this.handleCreate}>ADD</Button>
                    </ModalFooter>
                </Rodal>
            </Fragment>
        );
    }
}

const Image = styled.img`
    width: 100%;
    height: 300px;
`
