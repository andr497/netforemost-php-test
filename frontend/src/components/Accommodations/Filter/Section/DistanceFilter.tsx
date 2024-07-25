import { Dispatch, SetStateAction } from "react";

import { Col, Collapse, FloatingLabel, Form, Row } from "react-bootstrap";
import { UseFormGetValues, UseFormRegister } from "react-hook-form";

import { IAccommodationFilterParams } from "@/interfaces/accommodation";

interface Props {
  register: UseFormRegister<IAccommodationFilterParams>;
  getValues: UseFormGetValues<IAccommodationFilterParams>;
  filter: boolean;
  setFilter: Dispatch<SetStateAction<boolean>>;
}

const DistanceFilter = ({ register, getValues, filter, setFilter }: Props) => {
  return (
    <Row className="mb-4">
      <Col>
        <hr />
      </Col>
      <Col md={12}>
        <Form.Check
          type="switch"
          id="custom-switch"
          {...register("filter_distance")}
          label="Filtrar por distancia"
          onChange={(e) => {
            setFilter(e.target.checked);
          }}
        />
      </Col>
      <Col md={12}>
        <Collapse in={filter}>
          <Row className="g-4">
            <Col mb={4}>
              <FloatingLabel controlId="lat" label="Latitud">
                <Form.Control
                  placeholder="Latitud"
                  type="number"
                  {...register("lat", {
                    validate: {
                      required: (value) => {
                        if (!value && getValues("filter_distance"))
                          return "Requerido si se activo el filtro de distancia";
                        return true;
                      },
                    },
                  })}
                />
              </FloatingLabel>
            </Col>
            <Col mb={4}>
              <FloatingLabel controlId="long" label="Longitud">
                <Form.Control
                  placeholder="Longitud"
                  type="number"
                  {...register("long", {
                    validate: {
                      required: (value) => {
                        if (!value && getValues("filter_distance"))
                          return "Requerido si se activo el filtro de distancia";
                        return true;
                      },
                    },
                  })}
                />
              </FloatingLabel>
            </Col>
            <Col mb={4}>
              <FloatingLabel controlId="distance_km" label="Distancia (KM)">
                <Form.Control
                  placeholder="Distancia (KM)"
                  type="number"
                  {...register("distance_km", {
                    validate: {
                      required: (value) => {
                        if (!value && getValues("filter_distance"))
                          return "Requerido si se activo el filtro de distancia";
                        return true;
                      },
                    },
                  })}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Collapse>
      </Col>
    </Row>
  );
};

export default DistanceFilter;
