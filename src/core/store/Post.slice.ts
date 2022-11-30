import {
  createAction,
  createAsyncThunk,
  createReducer,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';
import { Post, PostService } from 'enzomoraes-alganews-sdk';

interface PostSliceState {
  paginated?: Post.Paginated;
  counter: number;
  fetching: boolean;
}

const initialState: PostSliceState = {
  paginated: {
    page: 0,
    size: 0,
    totalElements: 0,
    totalPages: 1,
    content: [],
  },
  counter: 0,
  fetching: false,
};

export const fetchPosts = createAsyncThunk(
  'post/fetchPosts',
  async function (query: Post.Query) {
    const posts = await PostService.getAllPosts(query);
    return posts;
  }
);

export const increment = createAction('post/increment');

export const postReducer = createReducer(initialState, builder => {
  const pendingActions = isPending(fetchPosts);
  const fullfilledActions = isFulfilled(fetchPosts);
  const rejectedActions = isRejected(fetchPosts);
  builder
    .addCase(increment, state => {
      state.counter++;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.paginated = action.payload;
    })
    .addMatcher(pendingActions, state => {
      state.fetching = true;
    })
    .addMatcher(fullfilledActions, state => {
      state.fetching = false;
    })
    .addMatcher(rejectedActions, state => {
      state.fetching = false;
    });
});
