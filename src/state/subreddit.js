import { provideState } from "freactal";

export const initialize = (effects, { match: { params: { subreddit } } }) => effects.then()
  .then(() => effects.setSubreddit(subreddit))
  .then(() => effects.restoreComments())
  .then(() => state => state)
  .catch(effects.handleError);

export default provideState({ effects: { initialize } });
