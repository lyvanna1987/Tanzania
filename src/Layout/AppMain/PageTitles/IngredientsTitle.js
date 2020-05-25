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

export default class IngredientsTitle extends Component {

    state = {
        ingredient: {
            name: '',
            image: null,
            calory: 0
        },
        imageUrl: '',
        visible: false,
        animation: 'zoom'
    }

    showAdd = () => {
        this.setState({
            visible: true,
        })
    }
    hideAdd = () => {
        this.setState({
            visible: false,
            imageUrl: '',
            ingredient: {
                name: '',
                calory: 0,
                image: null
            }
        })
    }
    handleChangeIngredient = (type, e) => {
        const {ingredient} = this.state
        ingredient[type] = e.target.value

        this.setState({
            ...this.state,
            ingredient: ingredient
        })
    }
    handleChangeImage = (e) => {
        const {ingredient} = this.state
        ingredient.image = e.target.files[0]

        this.setState({
            ingredient: ingredient,
            imageUrl:  URL.createObjectURL(e.target.files[0])
        })
    }
    handleCreate = () => {
        const {ingredient, imageUrl} = this.state
        if (ingredient.name === '' || imageUrl === '') {
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
        this.props.handleCreate({name: ingredient.name, calory: ingredient.calory, image: imageUrl})
        //////////////////////// For Backend
        // this.props.handleCreate({name: foodName, image: foodImage})

        this.setState({
            visible: false,
            imageUrl: '',
            ingredient: {
                name: '',
                calory: 0,
                image: null
            }
        })
    }

    render() {
        const {ingredient} = this.state

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
                    <ModalHeader style={{color: '#000000'}}>Add Ingredient</ModalHeader>
                    <ModalBody>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Name</InputGroupText>
                            </InputGroupAddon>
                            <Input type="text" onChange={this.handleChangeIngredient.bind(this, 'name')} value={ingredient.name} />
                        </InputGroup>
                        <InputGroup className="mb-2">
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>Calory</InputGroupText>
                            </InputGroupAddon>
                            <Input type="number" onChange={this.handleChangeIngredient.bind(this, 'calory')} value={ingredient.calory} />
                        </InputGroup>
                        <InputGroup>
                            <CustomInput type="file" id="customFileBrowser" name="customFile"  onChange={this.handleChangeImage} />
                            { this.state.imageUrl !== '' && <Image src={this.state.imageUrl} alt="Product Image" />}
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
