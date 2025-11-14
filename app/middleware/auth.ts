import { eq } from "drizzle-orm";
import { redirect, RouterContextProvider } from "react-router";
import { userContext } from "~/context";
import db from "~/db";
import { user } from "~/features/users/schema";
import { auth } from "~/lib/auth";

function getLoadContext(originalContext, data) {
  const context = new RouterContextProvider();
  context.set(originalContext, data);
  return context;
}

export const authMiddleware = async ({ request }) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  const userId = session?.user.id;

  if (!userId) {
    throw redirect("/");
  }

  const userData = await db.select().from(user).where(eq(user.id, userId));

  return getLoadContext(userContext, userData);
};
