import { RootState } from '../store';

export default function selectPostsCounter(state: RootState): number {
  return state.post.counter;
}
