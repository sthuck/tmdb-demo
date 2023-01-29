import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { api } from "../../api";
import { useSoryBy } from "../../hooks/useSoryBy";
import { Loader } from "../../components/Loader/";
import { MovieGrid as MovieGridBase } from "../../components/MovieGrid";
import { PaginiationControls } from "./PaginiationControls/PaginiationControls";
import { usePagination } from "./use-paginiation";

const MARVEL_FILMS_ID = "420";
const DC_FILMS_ID = "128064";

export const MovieView: React.FC = () => {
  const { currentPage, onNextPage, onPrevPage, resetPage } = usePagination();
  const soryBy = useSoryBy();

  useEffect(() => {
    resetPage();
  }, [soryBy, resetPage]);

  const { data, isLoading } = useQuery(
    ["movies", currentPage, soryBy],
    ({ signal }) =>
      api.discoverMovie(
        {
          with_companies: `${MARVEL_FILMS_ID}|${DC_FILMS_ID}`,
          page: currentPage.page,
          sort_by: soryBy,
        },
        signal
      ),
    { staleTime: 1000 * 60 }
  );

  const totalPages = data?.total_pages || 0;

  return (
    <div className="flex flex-col">
      <Loader isLoading={isLoading}>
        <div className="flex flex-col">
          <MovieGridBase data={data?.results || []} />
          <PaginiationControls
            currentPage={currentPage.page}
            onClickNext={onNextPage}
            onClickPrevious={onPrevPage}
            totalPages={totalPages}
          />
        </div>
      </Loader>
    </div>
  );
};
