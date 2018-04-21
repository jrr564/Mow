import React from 'react';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

/**
 * Horizontal steppers are ideal when the contents of one step depend on an earlier step.
 * Avoid using long step names in horizontal steppers.
 *
 * Linear steppers require users to complete one step in order to move on to the next.
 */
class HorizontalLinearStepper extends React.Component {

    state = {
        finished: false,
        stepIndex: 0
    };

    handleNext = () => {
        const {stepIndex} = this.state;
        this.setState({
            stepIndex: stepIndex + 1,
            finished: stepIndex >= 2
        });
    };

    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({
                stepIndex: stepIndex - 1
            });
        }
    };

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'UpKeep offers services for household cleaning and lawn care.';
            case 1:
                return 'What is an ad group anyways?';
            case 2:
                return 'This is the bit I really care about!';
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }

    render() {
        const {finished, stepIndex} = this.state;
        const contentStyle = {
            margin: '0 16px'
        };

        return (
            <div
                style={{
                width: '100%',
                maxWidth: 700,
                margin: 'auto'
            }}>
                <Stepper activeStep={stepIndex}>
                    <Step>
                        <StepLabel>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Create an ad group</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Create an ad</StepLabel>
                    </Step>
                </Stepper>
                <div style={contentStyle}>
                    {finished
                        ? (
                            <p>
                                <a
                                    href="#"
                                    onClick={(event) => {
                                    event.preventDefault();
                                    this.setState({stepIndex: 0, finished: false});
                                }}>
                                    Click here
                                </a>
                                to reset the example.
                            </p>
                        )
                        : (
                            <div>
                                <p>{this.getStepContent(stepIndex)}</p>
                                <div
                                    style={{
                                    marginTop: 12
                                }}>
                                    <FlatButton
                                        label="Back"
                                        disabled={stepIndex === 0}
                                        onClick={this.handlePrev}
                                        style={{
                                        marginRight: 12
                                    }}/>
                                    <RaisedButton
                                        label={stepIndex === 2
                                        ? 'Finish'
                                        : 'Next'}
                                        primary={true}
                                        onClick={this.handleNext}/>
                                </div>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}

export default HorizontalLinearStepper;