import { Badge, Card as BsCard } from "react-bootstrap";

import { IAccommodation } from "@/interfaces/accommodation";

interface Props {
  accommodation: IAccommodation;
}

const Card = ({ accommodation }: Props) => {
  return (
    <BsCard>
      <BsCard.Header>
        <BsCard.Title className="text-truncate">
          {accommodation.title}
        </BsCard.Title>
      </BsCard.Header>
      <BsCard.Body>
        <BsCard.Title
          as={"h4"}
          className="mb-4 d-flex justify-content-between align-items-center"
        >
          <span className="text-muted">{accommodation.advertiser}</span>
          <Badge bg="success">
            <span className="fa fa-euro-sign me-2"></span>
            {accommodation.price}
          </Badge>
        </BsCard.Title>

        <BsCard.Title
          as={"h6"}
          className="d-flex justify-content-between align-items-center flex-wrap-reverse"
        >
          <Badge bg="primary">
            <span className="fa fa-maximize me-2"></span>
            {`${accommodation.meters} m`}
            <sup>2</sup>
          </Badge>
          <Badge bg="success">
            {`Precio m`}<sup>2</sup>
            <span className="fa fa-euro-sign mx-2"></span>
            {accommodation.meter_per_price}
          </Badge>
          <Badge bg="info" className="text-capitalize">
            <span
              className={`fa ${
                accommodation.type === "piso" ? "fa-building" : "fa-chalet"
              } me-2`}
            ></span>
            {accommodation.type}
          </Badge>
        </BsCard.Title>
      </BsCard.Body>
      <BsCard.Footer className="text-end">
        <small>
          <span className="fa fa-calendar me-2"></span>
          {accommodation.register_at ?? "---"}
        </small>
      </BsCard.Footer>
    </BsCard>
  );
};

export default Card;
