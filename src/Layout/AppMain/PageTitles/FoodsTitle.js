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

export default class FoodsTitle extends Component {

    state = {
        foodImageUrl: '',
        visible: false,
        animation: 'zoom',
        selectedFood: {}
    }

    showAdd = () => {
        this.setState({
            visible: true,
        })
    }
    hideAdd = () => {
        this.setState({
            visible: false,
            productName: '',
            foodImageUrl: ''
        })
    }
    handleChangeFood = (type, e) => {
        const {selectedFood} = this.state
        selectedFood[type] = e.target.value

        this.setState({
            selectedFood: selectedFood
        })
    }
    handleChangeImage = (e) => {
        if (!e.target.files[0]) {
            return
        }
        const {selectedFood} = this.state
        selectedFood.image = e.target.files[0]
        this.setState({
            selectedFood: selectedFood,
            foodImageUrl:  URL.createObjectURL(e.target.files[0])
        })
    }
    handleAdd = () => {
        const {selectedFood, foodImageUrl} = this.state
        if (selectedFood.name === '' || foodImageUrl === '') {
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
            foodImageUrl: ''
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
                    <ModalHeader style={{color: '#000000'}}>Add Food</ModalHeader>
                    <ModalBody>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend" >
                                <InputGroupText style={{width: 90}} >Category</InputGroupText>
                            </InputGroupAddon>
                            <Input type="select" onChange={this.handleChangeFood.bind(this, 'category')} >
                                <option value="0">Burgers and Sandwiches</option>
                                <option value="1">Happy Meal</option>
                                <option value="2">Beverage</option>
                            </Input>
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{width: 90}}>Name</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" onChange={this.handleChangeFood.bind(this, 'name')}  />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{width: 90}}>Calory</InputGroupText>
                            </InputGroupAddon>
                            <Input type="number" onChange={this.handleChangeFood.bind(this, 'calory')}  />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText style={{width: 90}}>Price</InputGroupText>
                            </InputGroupAddon>
                            <Input type="number" onChange={this.handleChangeFood.bind(this, 'price')}  />
                        </InputGroup>
                        <InputGroup>
                            <CustomInput type="file" id="customFileBrowser" name="customFile"  onChange={this.handleChangeImage} />
                            { this.state.foodImageUrl !== '' && <Image src={this.state.foodImageUrl} alt="Food Image" />}
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
    height: 300px;
`
