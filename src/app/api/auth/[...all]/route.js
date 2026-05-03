import { auth } from "@/lib/auth"; // path thik koro
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);
