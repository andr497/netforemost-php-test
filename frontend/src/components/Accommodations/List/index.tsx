import { Alert, Col, Row } from "react-bootstrap";

import useFetchSWR from "@/hooks/useFetchSWR";
import { getAccommodations } from "@/api/accommodations";

import Card from "./Card";
import Loader from "./Loader";
import ListPagination from "./Pagination";
import { useRecoilValue } from "recoil";
import { paginationStore } from "@/stores/pagination";
import { accommodationsFilterStore } from "@/stores/accommodationsFilters";

const initialData = {
  current_page: 1,
  data: [],
  first_page_url: "",
  from: 1,
  last_page: 1,
  last_page_url: "",
  links: [],
  path: "",
  per_page: 5,
  to: 1,
  total: 0,
};

const List = () => {
  const currentPage = useRecoilValue(paginationStore);
  const paramFilters = useRecoilValue(accommodationsFilterStore);
  const {
    data: { data, ...pagination },
    isLoading,
  } = useFetchSWR(
    { page: currentPage, ...paramFilters },
    getAccommodations,
    initialData
  );

  return (
    <>
      {isLoading && <Loader cardNumbers={5} />}
      {!isLoading && data && (
        <>
          <Row className="g-2">
            <Col
              md={12}
              className="d-flex justify-content-center align-items-center"
            >
              <ListPagination {...pagination} />
            </Col>
            {data.map((accommodation, key) => (
              <Col key={`card-col-${key}`} md={12}>
                <Card accommodation={accommodation} />
              </Col>
            ))}
            {data.length === 0 && (
              <Col md={12}>
                <Alert variant="danger">
                  No se encontraron alquileres con estos filtros.
                </Alert>
              </Col>
            )}
          </Row>
        </>
      )}
    </>
  );
};

export default List;
