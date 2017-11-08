import { provideState } from "freactal";
import queryString from "query-string";

export const initialize = (effects, {
  match: { params: { link_view, link_id, sort_type, subreddit } },
  location: { pathname, search }
}) => effects.then()
  .then(() => effects.setListingSortType(sort_type || "hot"))
  .then(() => effects.uncensoredListing({
    pathname, params: queryString.parse(search), subreddit, link_id, link_view
  }))
  .then(() => state => state)
  .catch(effects.handleError);

export default provideState({ effects: { initialize } });
