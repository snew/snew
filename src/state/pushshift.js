import { provideState } from "freactal";

export const initialize = (effects, { location: { search }, match: { params } }) => effects.then()
  .then(effects.fetchPushshiftListing("/" + params[0] + search))
  .then(() => state => state)
  .catch(effects.handleError);

export default provideState({ effects: { initialize } });

