import { Col, Container, Row } from "react-bootstrap";

import {
  AccommodationFilter,
  AccommodationList,
} from "@/components/Accommodations";

const Home = () => {
  return (
    <Container className="mt-2">
      <Row>
        <Col md={8}>
          <AccommodationFilter />
        </Col>
        <Col md={4}>
          <AccommodationList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
