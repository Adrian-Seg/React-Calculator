import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ImportedButton from '../btn/Button';
import ImportedDisplay from '../display/Display';


class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: "",
            num2: "",
            sum: "",
            operation: "",
            numSet: false,
        };
    }
    SetNum = (newValue) => {
        this.state.numSet !== true ? this.setState({ num1: this.state.num1 += newValue }) : this.setState({ num2: this.state.num2 += newValue });
    }
    ResetCalc = () => {
        this.setState({ num1: "", num2: "", sum: "", operation: "", numSet: false });
    }
    setOperation = (newOperation) => {
        this.setState({ numSet: true });
        this.setState({ operation: newOperation });
        // If statement to check if numSet is already true(basically if this function has already been triggered), to reset with the exception of the previous sum as num1
        this.state.numSet === true ? this.setState({ num1: this.state.sum, num2: "", sum: "", operation: newOperation, numSet: true }) : console.log("hehe");
    }
    QuickMath = () => {
        switch (this.state.operation) {
            // If numset = true, then get the total and make num1 for each operator. then clear num2 and reset numSet state
            case "+":
                // if (numSet) {
                //     this.setState({ })
                // }
                this.setState({ sum: parseInt(this.state.num1) + parseInt(this.state.num2) });
                break;
            case "-":
                this.setState({ sum: parseInt(this.state.num1) - parseInt(this.state.num2) });
                break;
            case "/":
                this.setState({ sum: parseInt(this.state.num1) / parseInt(this.state.num2) });
                break;
            case "*":
                this.setState({ sum: parseInt(this.state.num1) * parseInt(this.state.num2) });
                break;
            case "=":
                this.setState({ sum: parseInt(this.state.num1) * parseInt(this.state.num2), num1: parseInt(this.state.num1) * parseInt(this.state.num2), num2: "", sum: null, operation: "", numSet: false });
                break;
            default:
                break;
        }
    }
    render() {
        return (
            <div className="calcBG">
                <Container className="pt-5">
                    <Row>
                        <Col xs={12} className="calcScreenBG d-flex justify-content-center">
                            <ImportedDisplay message={this.state.num1} />
                            <ImportedDisplay message={this.state.operation} />
                            <ImportedDisplay message={this.state.num2} />
                            {
                                this.state.sum !== "" ? <ImportedDisplay message="=" /> : null
                            }
                            <ImportedDisplay message={this.state.sum} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton className="numButtonDrip" onClick={this.SetNum} increment={1} />
                            <ImportedButton className="numButtonDrip" onClick={this.SetNum} increment={2} />
                            <ImportedButton className="numButtonDrip" onClick={this.SetNum} increment={3} />
                            <ImportedButton onClick={this.setOperation} increment={"+"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton className="numButtonDrip" onClick={this.SetNum} increment={4} />
                            <ImportedButton className="numButtonDrip" onClick={this.SetNum} increment={5} />
                            <ImportedButton className="numButtonDrip" onClick={this.SetNum} increment={6} />
                            <ImportedButton onClick={this.setOperation} increment={"-"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton onClick={this.SetNum} increment={7} />
                            <ImportedButton onClick={this.SetNum} increment={8} />
                            <ImportedButton onClick={this.SetNum} increment={9} />
                            <ImportedButton onClick={this.setOperation} increment={"/"} />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <ImportedButton onClick={this.ResetCalc} increment={"C"} />
                            <ImportedButton onClick={this.SetNum} increment={0} />
                            <ImportedButton onClick={this.QuickMath} increment={"="} />
                            <ImportedButton onClick={this.setOperation} increment={"*"} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default CalcButton;