import { useCallback, useReducer } from "react";
import { PageAction, pageReducer } from "./page-reducer";

export const usePagination = () => {
  const [currentPage, dispatch] = useReducer(pageReducer, { page: 1 });

  const onNextPage = useCallback(
    () => dispatch(PageAction.nextPage()),
    [dispatch]
  );
  const onPrevPage = useCallback(
    () => dispatch(PageAction.previousPage()),
    [dispatch]
  );

  const resetPage = useCallback(
    () => dispatch(PageAction.resetPage()),
    [dispatch]
  );

  return { currentPage, onNextPage, onPrevPage, resetPage };
};
