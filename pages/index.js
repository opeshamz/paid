import Head from "next/head";
import { Form, Row, Col, Container } from 'react-bootstrap';
import styles from "../styles/Navtab.module.css";
//import { useRouter } from "next/router";
import Header from "../components/Hader.js"
import { Tabs } from "../componentstabs/Tabs";
export default function Home({ query }) {
    return (
        <div>
            <Head>
              <title>PayMax - Get it Done</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Header />
            <div className="banner">
                <Tabs initialTab={query}>
                    <div label="airtime and Internet">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                     <Col> <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    <div label="pay bills">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    <div label="get paid" className="">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    <div label="transportation">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    <div label="picup and delivery">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    <div label="send/receive money">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    <div label="booking">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col> <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                     <Col> <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                    <div label="shop online">
                        <Container className={styles.containform} >
                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="First name" />
                                    </Col>
                                    <Col> <Form.Label>Password</Form.Label>
                                        <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}

Home.getInitialProps = ({ query }) => {
    return { query };
};