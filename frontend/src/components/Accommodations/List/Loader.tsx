import { Col, Placeholder, Row } from "react-bootstrap";

interface Props {
  cardNumbers?: number;
}

const Loader = ({ cardNumbers = 5 }: Props) => {
  return (
    <Placeholder animation="glow">
      <Row className="g-2">
        <Placeholder animation="glow" as={Col}>
          <Placeholder size="lg" md={12} style={{ height: "30px" }} />
        </Placeholder>
        {Array(cardNumbers)
          .fill(0)
          .map((value, key) => (
            <Placeholder
              animation="glow"
              as={Col}
              md={12}
              key={`placeholder-${value}-${key}`}
            >
              <Placeholder size="lg" md={12} style={{ height: "300px" }} />
            </Placeholder>
          ))}
      </Row>
    </Placeholder>
  );
};

export default Loader;
