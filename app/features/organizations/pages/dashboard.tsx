import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Copy,
  Key,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle2,
} from "lucide-react";
import Footer from "~/common/components/footer";
import type { Route } from "./+types/dashboard";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "~/common/components/ui/dialog";
import db from "~/lib/db";
import { apiKeys, organizations, orgsToUsers } from "../schema";
import { eq } from "drizzle-orm";
import { auth } from "~/lib/auth/server";
import { Form, redirect } from "react-router";
import z from "zod";
import InputPair from "~/common/components/input-pair";
import { randomUUID } from "crypto";

export const loader = async ({ request }) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.user.id) {
    return redirect("/");
  }

  const orgsToUsersData = await db
    .select()
    .from(orgsToUsers)
    .where(eq(orgsToUsers.userId, session?.user.id ?? ""));

  if (orgsToUsersData.length === 0) {
    return { organization: null };
  }

  const organization = await db
    .select()
    .from(organizations)
    .where(eq(organizations.id, orgsToUsersData[0].organizationId!))
    .limit(1)
    .then(([organization]) => organization ?? null);

  const apiKeysData = await db
    .select()
    .from(apiKeys)
    .where(eq(apiKeys.organization_id, organization?.id!));

  return { organization, apiKeys: apiKeysData };
};

const formSchema = z.object({
  name: z.string("Name is required").min(1).max(255),
  description: z.string().optional(),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.user.id) {
    return redirect("/");
  }

  const formData = await request.formData();
  const { success, error, data } = formSchema.safeParse(
    Object.fromEntries(formData)
  );

  if (!success) {
    return { fieldErrors: error.flatten().fieldErrors };
  }

  const { name, description } = data;

  const [organization] = await db
    .insert(organizations)
    .values({
      name,
      description: description ?? "",
    })
    .returning();

  await Promise.all([
    db.insert(orgsToUsers).values({
      organizationId: organization.id,
      userId: session.user.id,
    }),
    db.insert(apiKeys).values({
      name: "default",
      organization_id: organization.id,
      api_key: `kg_${organization.id}_${randomUUID()}`,
    }),
  ]);

  return {
    success: true,
  };
};

const Dashboard = ({ loaderData, actionData }: Route.ComponentProps) => {
  const { organization } = loaderData;

  const [openOrgDetailsDialog, setOpenOrgDetailsDialog] =
    useState(!organization);

  useEffect(() => {
    if (actionData?.success) {
      setOpenOrgDetailsDialog(false);
    }
  }, [actionData]);

  const [apiKeys, setApiKeys] = useState([
    {
      id: "1",
      name: "Production API",
      key: "kg_prod_••••••••••••3a8f",
      created: "2025-01-15",
      calls: 15420,
    },
    {
      id: "2",
      name: "Development API",
      key: "kg_dev_••••••••••••7b2c",
      created: "2025-01-20",
      calls: 8934,
    },
  ]);
  const [showNewKeyDialog, setShowNewKeyDialog] = useState(false);
  const [newKeyName, setNewKeyName] = useState("");

  const usageStats = [
    {
      label: "Total API Calls",
      value: "24,354",
      change: "+12.5%",
      icon: Activity,
    },
    {
      label: "Active Keys",
      value: apiKeys.length.toString(),
      change: "stable",
      icon: Key,
    },
    {
      label: "Avg Response Time",
      value: "142ms",
      change: "-8.2%",
      icon: Clock,
    },
    {
      label: "Success Rate",
      value: "99.8%",
      change: "+0.3%",
      icon: CheckCircle2,
    },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // toast({
    //   title: "Copied to clipboard",
    //   description: "API key has been copied to your clipboard.",
    // });
  };

  const generateApiKey = () => {
    if (!newKeyName.trim()) {
      //   toast({
      //     title: "Error",
      //     description: "Please enter a name for your API key.",
      //     variant: "destructive",
      //   });
      return;
    }

    const newKey = {
      id: Date.now().toString(),
      name: newKeyName,
      key: `kg_${newKeyName.toLowerCase().replace(/\s+/g, "_")}_${Math.random().toString(36).substring(2, 15)}`,
      created: new Date().toISOString().split("T")[0],
      calls: 0,
    };

    setApiKeys([...apiKeys, newKey]);
    setNewKeyName("");
    setShowNewKeyDialog(false);

    // toast({
    //   title: "API Key Generated",
    //   description: "Your new API key has been created successfully.",
    // });
  };

  return (
    <div className="min-h-screen bg-background">
      <Dialog open={openOrgDetailsDialog}>
        <DialogContent>
          <DialogTitle>Organization Details</DialogTitle>
          <Form className="space-y-4" method="post">
            <InputPair
              name="name"
              label="Org Name"
              description="The name of the organization"
              required
              defaultValue={organization?.name}
            />
            {actionData && "fieldErrors" in actionData && (
              <p className="text-red-500">
                {actionData.fieldErrors?.name?.join(", ")}
              </p>
            )}
            <InputPair
              name="description"
              label="Description"
              description="The description of the organization"
              textArea
              defaultValue={organization?.description}
            />
            <Button type="submit">Save</Button>
          </Form>
        </DialogContent>
      </Dialog>
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {loaderData.organization?.name}
            </h1>
            <p className="text-lg text-muted-foreground">
              {loaderData.organization?.description}
            </p>
          </div>

          {/* API Keys Management */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">API Keys</h2>
              <Button onClick={() => setShowNewKeyDialog(!showNewKeyDialog)}>
                <Key className="mr-2 h-4 w-4" />
                Generate New Key
              </Button>
            </div>

            <div className="space-y-4">
              {loaderData.apiKeys?.map((apiKey) => (
                <div
                  key={apiKey.api_key}
                  className="p-4 bg-muted/10 rounded-lg border border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 text-left">
                        {apiKey.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <code className="text-sm bg-muted px-2 py-1 rounded font-mono">
                          {apiKey.api_key}
                        </code>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(apiKey.api_key)}
                          className="h-8 w-8 p-0"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>
                          Created: {apiKey.created_at.toLocaleDateString()}
                        </span>
                        {/* <span>•</span> */}
                        {/* <span>{apiKey.calls.toLocaleString()} calls</span> */}
                      </div>
                    </div>
                    {apiKey.name !== "default" && (
                      <Button variant="outline" size="sm">
                        Revoke
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Dialog open={showNewKeyDialog} onOpenChange={setShowNewKeyDialog}>
            <DialogContent>
              <DialogTitle>Add API Key</DialogTitle>
              <Form className="space-y-4" method="post">
                <InputPair
                  name="name"
                  label="Name"
                  description="The name of the API key"
                  required
                />
                <Button type="submit">Add</Button>
              </Form>
            </DialogContent>
          </Dialog>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {usageStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span
                      className={`text-sm font-medium ${stat.change.startsWith("+") ? "text-green-500" : stat.change.startsWith("-") ? "text-red-500" : "text-muted-foreground"}`}
                    >
                      {stat.change}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Usage Chart Placeholder */}
          <Card className="p-6 mb-12 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">API Usage Overview</h2>
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="h-64 flex items-center justify-center bg-muted/20 rounded-lg border border-border">
              <div className="text-center">
                <Activity className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Usage chart visualization
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  API calls tracked in real-time
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
