import { Col, Container, Row, Nav, Tab } from "react-bootstrap"


export default function Projects() {

    const projects = [
        {
            title: 'FlightApp Backend',
            description: '',
            imgUrl: '',
        },
        {
            title: 'Flight App',
            description: '',
            imgUrl: '',
        },
        {
            title: 'NestQuest',
            description: '',
            imgUrl: '',
        },
        {
            title: 'Movie App',
            description: '',
            imgUrl: '',
        },
        {
            title: 'Pokedex',
            description: '',
            imgUrl: '',
        },
        {
            title: 'CookBook',
            description: '',
            imgUrl: '',
        }
    ]
  return (
    <section className="project" id='project'>
        <Container>
            <Row>
                <Col>
                <h2>Projects</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis accusamus adipisci porro enim eos delectus quia impedit ullam sit asperiores, suscipit earum libero iure! Eveniet porro esse dolorem error deserunt?</p>
                <Tab.Container id='project-tabs' defaultActiveKey='first'>
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey='first'>
                            <Row>
                                {projects.map((project, index)=> {
                                    return (
                                        <p>{project.title}</p>
                                    )
                                })}
                            </Row>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}
