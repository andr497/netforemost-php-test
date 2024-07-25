import { IPagination } from "@/interfaces/general";
import { paginationStore } from "@/stores/pagination";
import { useCallback, useMemo } from "react";
import { Pagination } from "react-bootstrap";
import { useRecoilState } from "recoil";

interface Props<T> extends Omit<IPagination<T>, "data"> {}

const ListPagination = <T,>({ links, total, last_page }: Props<T>) => {
  const [currentPage, setCurrentPage] = useRecoilState(paginationStore);

  const goToPage = useCallback(
    (page: number) => {
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const pages = useMemo(() => {
    return links.filter(
      (link) => !link.label.includes("Previous") && !link.label.includes("Next")
    );
  }, [links]);

  const prev = useCallback(() => {
    const prevPage = currentPage - 1;
    if (prevPage < 0) return;
    goToPage(prevPage);
  }, [currentPage, goToPage]);

  const next = useCallback(() => {
    const nextPage = currentPage + 1;
    if (nextPage > total) return;
    goToPage(nextPage);
  }, [currentPage, total, goToPage]);

  const isLastPage = useMemo(() => {
    return currentPage === last_page;
  }, [currentPage, last_page]);

  const isFirstPage = useMemo(() => {
    return currentPage === 1;
  }, [currentPage]);

  return (
    <Pagination size="sm">
      <Pagination.First
        disabled={isFirstPage}
        onClick={() => {
          goToPage(1);
        }}
      />
      <Pagination.Prev disabled={isFirstPage} onClick={prev} />
      {pages.map((page, key) => (
        <Pagination.Item
          key={`pagination-list-${key}`}
          active={page.active}
          onClick={() => {
            goToPage(parseInt(page.label));
          }}
        >
          {page.label}
        </Pagination.Item>
      ))}
      <Pagination.Next disabled={isLastPage} onClick={next} />
      <Pagination.Last
        disabled={isLastPage}
        onClick={() => {
          goToPage(last_page);
        }}
      />
    </Pagination>
  );
};

export default ListPagination;
