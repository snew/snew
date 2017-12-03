import { update, provideState } from "freactal";
import * as effects from "./effects/reddit";
export { default as listing } from "./listing";
export { default as pushshift } from "./pushshift";
export { default as subreddit } from "./subreddit";
export { default as modlog } from "./modlog";

const initialState = () =>
  ({
    subreddit: null,
    subredditData: {},
    style: {},
    useStyle: false,
    isLoading: false,
    isFetching: false,
    isFetchingSubreddit: false,
    listingSort: "hot",
    listings: []
  });
export const then = () => state => state;
export const setIsLoading = update((state, isLoading) => ({ ...state, isLoading }));
export const setIsFetching = update((state, isFetching) => ({ ...state, isFetching }));
export const setIsFetchingSubreddit = update((state, isFetchingSubreddit) => ({ ...state, isFetchingSubreddit }));
export const handleError = update((state, error) => console.error("error", error) || ({ ...state, error, isLoading: false }));

export const app = provideState({ initialState, effects: {
  ...effects, then, setIsLoading, setIsFetching, setIsFetchingSubreddit
} });
