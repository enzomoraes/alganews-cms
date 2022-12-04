import { RootState } from '../store';

export default function selectPostsFetching(state: RootState): boolean {
  return state.post.fetching;
}
