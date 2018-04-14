import React from "react";
import "./SignUpForm3Customer.css";
import { Button, Form, Dropdown, Segment, Container } from "semantic-ui-react";

const SignUpForm3Customer = () => (
  <div>
    <Container>
      <Segment>
        <Form>
          <h4 class="ui dividing header">Billing Information</h4>
          <div class="field">
            <label>Card Type</label>
            <div class="ui selection dropdown">
              <input type="hidden" name="card[type]" />
              <div class="default text">Type</div>
              <i class="dropdown icon" />
              <div class="menu">
                <div class="item" data-value="visa">
                  <i class="visa icon" />
                  Visa
                </div>
                <div class="item" data-value="amex">
                  <i class="amex icon" />
                  American Express
                </div>
                <div class="item" data-value="discover">
                  <i class="discover icon" />
                  Discover
                </div>
              </div>
            </div>
          </div>
          <div class="fields">
            <div class="seven wide field">
              <label>Card Number</label>
              <input
                type="text"
                name="card[number]"
                maxlength="16"
                placeholder="Card #"
              />
            </div>
            <div class="three wide field">
              <label>CVC</label>
              <input
                type="text"
                name="card[cvc]"
                maxlength="3"
                placeholder="CVC"
              />
            </div>
            <div class="six wide field">
              <label>Expiration</label>
              <div class="two fields">
                <div class="field">
                  <select
                    class="ui fluid search dropdown"
                    name="card[expire-month]"
                  >
                    <option value="">Month</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                  </select>
                </div>
                <div class="field">
                  <input
                    type="text"
                    name="card[expire-year]"
                    maxlength="4"
                    placeholder="Year"
                  />
                </div>
              </div>
            </div>
          </div>
          <Form.Field>
            <label>Credit Card Number</label>
            <input />
          </Form.Field>
          <Form.Field>
            <label>Security Code</label>
            <input maxLength="4" />
          </Form.Field>

          <Button inverted size="huge" type="submit">
            Submit
          </Button>
        </Form>
      </Segment>
    </Container>
  </div>
);

export default SignUpForm3Customer;
