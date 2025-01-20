import type { PageServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: PagerServerLoad = () => {
  return redirect(303, "/roadmap");
}
