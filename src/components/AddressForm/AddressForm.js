import React, { Component } from "react";  
import { Form, Input } from "semantic-ui-react";

export default class AddressForm extends Component {
    state = {};


    render() {
        return (
            <Form.Group grouped>

                <Form.Field 
                    label="Street Address"
                    control="input"
                    type="text"
                    name="address"
                    max={100}
                    value={this.props.address}
                    onChange={this.props.hanleAddressInput}
                />
                <Form.Field
                    label="City"
                    control="input"
                    type="text"
                    name="city"
                    max={50}
                    value={this.props.city}
                    onChange={this.props.hanleAddressInput}
                />
                <Form.Field
                    label="State"
                    control="input"
                    type="text"
                    name="state"
                    max={50}
                    value={this.props.state}
                    onChange={this.props.hanleAddressInput}
                />
            </Form.Group>
        );
    }
}