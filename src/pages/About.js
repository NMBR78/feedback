import React, { Component } from "react";
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="ledt-tabs-examle" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Fraemworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first">
                                    <img src="https://img5.goodfon.com/original/800x480/0/85/anna-shuvalova-devushka-ryzhaia-plate-perednik-derevia-manda.jpg"></img>
                                    <p>Text</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img src="https://img5.goodfon.com/original/800x480/0/85/anna-shuvalova-devushka-ryzhaia-plate-perednik-derevia-manda.jpg"></img>
                                    <p>Text</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img src="https://img5.goodfon.com/original/800x480/0/85/anna-shuvalova-devushka-ryzhaia-plate-perednik-derevia-manda.jpg"></img>
                                    <p>Text</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img src="https://img5.goodfon.com/original/800x480/0/85/anna-shuvalova-devushka-ryzhaia-plate-perednik-derevia-manda.jpg"></img>
                                    <p>Text</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img src="https://img5.goodfon.com/original/800x480/0/85/anna-shuvalova-devushka-ryzhaia-plate-perednik-derevia-manda.jpg"></img>
                                    <p>Text</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

        )
    }
}