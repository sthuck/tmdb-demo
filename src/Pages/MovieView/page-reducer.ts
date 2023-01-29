enum PageActionType {
  NextPage = "NextPage",
  PreviousPage = "PreviousPage",
  ResetPage = "ResetPage",
}

export interface PageAction {
  type: PageActionType;
}
export const PageAction = {
  nextPage: (): PageAction => ({ type: PageActionType.NextPage }),
  previousPage: (): PageAction => ({ type: PageActionType.PreviousPage }),
  resetPage: (): PageAction => ({ type: PageActionType.ResetPage }),
};

export type PageState = { page: number };

export const pageReducer = (state: PageState, action: PageAction) => {
  switch (action.type) {
    case PageActionType.NextPage:
      return { ...state, page: state.page + 1 };
    case PageActionType.PreviousPage:
      return { ...state, page: state.page - 1 };
    case PageActionType.ResetPage:
      return { ...state, page: 1 };
  }
};
