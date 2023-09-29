// hooks.server.ts gets the session data from Supabase and then 
// this file passes the session to the client side.

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async (event) => {
  return {
    session: await event.locals.getSession(),
  };
};
