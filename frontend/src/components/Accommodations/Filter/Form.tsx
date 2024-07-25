import { useState } from "react";

import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import {
  Button,
  ButtonGroup,
  Col,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";

import { IAccommodationFilterParams } from "@/interfaces/accommodation";
import { accommodationsFilterStore } from "@/stores/accommodationsFilters";

import DistanceFilter from "./Section/DistanceFilter";

const defaultValues: IAccommodationFilterParams = {
  filter_distance: false,
};

const FormFilter = () => {
  const { register, getValues, handleSubmit, reset } =
    useForm<IAccommodationFilterParams>({
      defaultValues,
    });
  const setFilterAccommodations = useSetRecoilState(accommodationsFilterStore);
  const [filter, setFilter] = useState(getValues("filter_distance"));

  const onSubmit = (data: IAccommodationFilterParams) => {
    setFilterAccommodations(data);
  };

  const onReset = () => {
    setFilterAccommodations(defaultValues);
    setFilter(false);
    reset();
  };

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row className="mb-2">
        <Col>
          <h3>Filtrar</h3>
        </Col>
      </Row>
      <Row className="my-3 g-4 border">
        <Col md={12}>
          <FloatingLabel
            controlId="quantity_bedrooms"
            label="Cantidad de cuartos"
          >
            <Form.Control
              placeholder="Cantidad de cuartos"
              type="number"
              {...register("quantity_bedrooms", { min: 0 })}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="min_price" label="Precio mínimo">
            <Form.Control
              placeholder="Precio mínimo"
              type="number"
              {...register("min_price", { min: 0 })}
            />
          </FloatingLabel>
        </Col>
        <Col md={6}>
          <FloatingLabel controlId="max_price" label="Precio máximo">
            <Form.Control
              placeholder="Precio máximo"
              type="number"
              {...register("max_price", { min: 0 })}
            />
          </FloatingLabel>
        </Col>
        <Col md={12}>
          <DistanceFilter
            register={register}
            getValues={getValues}
            filter={filter}
            setFilter={setFilter}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ButtonGroup className="g-2 mb-2">
            <Button type="submit">
              <span className="fa fa-filter me-2"></span>
              Filtrar
            </Button>
            <Button variant="secondary" type="button" onClick={onReset}>
              <span className="fa fa-brush me-2"></span>
              Limpiar filtros
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default FormFilter;
