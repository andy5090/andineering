import { drizzle } from "drizzle-orm/postgres-js";
import * as userSchema from "~/features/users/schema";
import * as organizationSchema from "~/features/organizations/schema";
import * as agentSchema from "~/features/agents/schema";
import * as inquirySchema from "~/features/inquiries/schema";
import postgres from "postgres";

const client = postgres(process.env.DATABASE_URL!, { prepare: false });

const db = drizzle({
  client,
  schema: {
    ...userSchema,
    ...organizationSchema,
    ...agentSchema,
    ...inquirySchema,
  },
});

export default db;
