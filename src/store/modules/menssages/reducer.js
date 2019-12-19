import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  onlydataloading: true,
  onlydata: null,
};

export default function messageData(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@menssage/REQUEST_ALL_MESSAGE':
      return produce(state, draft => {
        draft.loading = true;
      });
    case '@menssage/REQUEST_SUCCESS':
      return produce(state, draft => {
        draft.data = action.payload;
        draft.loading = false;
      });
    case '@menssage/REQUEST_ONLY_MESSAGE':
      return produce(state, draft => {
        draft.onlydataloading = true;
      });
    case '@menssage/REQUEST_ONLY_SUCCESS':
      return produce(state, draft => {
        draft.onlydata = action.payload;
        draft.onlydataloading = false;
      });
    case '@menssage/DELETE_ONLY_MESSAGE':
      return produce(state, draft => {
        draft.onlydataloading = true;
      });

    default:
      return state;
  }
}
