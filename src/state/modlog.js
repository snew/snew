import { provideState } from "freactal";
import queryString from "query-string";

export const initialize = (effects, {
  match: { params: { subreddit } },
  location: { search }
}) => effects.then()
  .then(() => effects.setListingSortType("modlog"))
  .then(() => effects.setIsLoading(true))
  .then(() => effects.setIsFetching(true))
  .then(() => effects.onFetchModLog(subreddit, queryString.parse(search)))
  .then(state => console.log("state", state) || state)
  .then(() => effects.setIsLoading(false))
  .then(() => effects.setIsFetching(false))
  .then(() => state => console.log("state", state) || state)
  .catch(effects.handleError);

export default provideState({ effects: { initialize } });
