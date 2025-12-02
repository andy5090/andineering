import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Footer from "~/common/components/footer";
import type { Route } from "./+types/agent-run";
import db from "~/lib/db";
import { agents } from "../schema";
import { eq } from "drizzle-orm";
import { Form, redirect, useNavigation } from "react-router";
import { Bot, Loader2 } from "lucide-react";
import { auth } from "~/lib/auth/server";
import axios from "axios";

export const loader = async ({ params, request }: Route.LoaderArgs) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.user.id) {
    return redirect("/agents");
  }

  const agentId = parseInt(params.id || "");
  if (!agentId || isNaN(agentId)) {
    return redirect("/agents");
  }

  const agent = await db.query.agents.findFirst({
    where: eq(agents.id, agentId),
  });

  if (!agent) {
    return redirect("/agents");
  }

  return { agent };
};

export const action = async ({ params, request }: Route.ActionArgs) => {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session?.user.id) {
    return redirect("/agents");
  }

  const agentId = parseInt(params.id || "");
  if (!agentId || isNaN(agentId)) {
    return redirect("/agents");
  }

  const agent = await db.query.agents.findFirst({
    where: eq(agents.id, agentId),
  });

  if (!agent) {
    return redirect("/agents");
  }

  const formData = await request.formData();
  const prompt = formData.get("prompt") as string;

  if (!prompt || prompt.trim() === "") {
    return { error: "프롬프트를 입력해주세요." };
  }

  try {
    // Step 1: Create conversation and get conversation ID
    const conversationResponse = await axios.post(
      `${agent.endpoint}/conversations`
    );

    const conversationId = conversationResponse.data?.conversation_id;

    if (!conversationId) {
      throw new Error("Conversation ID를 받아오지 못했습니다.");
    }

    // Step 2: Send message to the conversation
    const messageResponse = await axios.post(
      `${agent.endpoint}/conversations/${conversationId}/message`,
      {
        question: prompt.trim(),
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const answer = messageResponse.data.answer ?? "";

    return { answer, prompt: prompt.trim(), conversationId };
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? error.message
          : "알 수 없는 오류가 발생했습니다.",
    };
  }
};

const AgentRun = ({ loaderData, actionData }: Route.ComponentProps) => {
  const { agent } = loaderData;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <Card className="mb-8 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-display">
                    {agent.name}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {agent.description}
                  </p>
                </div>
              </div>
            </CardHeader>
          </Card>

          {/* Prompt Input Form */}
          <Card className="mb-6 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>프롬프트 입력</CardTitle>
            </CardHeader>
            <CardContent>
              <Form method="post" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="prompt">프롬프트</Label>
                  <Input
                    id="prompt"
                    name="prompt"
                    placeholder="에이전트에게 전달할 프롬프트를 입력하세요..."
                    defaultValue={actionData?.prompt || ""}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      실행 중...
                    </>
                  ) : (
                    "실행"
                  )}
                </Button>
              </Form>
            </CardContent>
          </Card>

          {/* Error Display */}
          {actionData?.error && (
            <Card className="mb-6 border-destructive bg-destructive/10">
              <CardContent className="pt-6">
                <p className="text-destructive">{actionData.error}</p>
              </CardContent>
            </Card>
          )}

          {/* Results Display */}
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>실행 결과</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Label htmlFor="results">결과</Label>
                <Textarea
                  id="results"
                  readOnly
                  value={actionData?.answer || ""}
                  placeholder="실행 결과가 여기에 표시됩니다..."
                  className="min-h-[400px] font-mono text-sm"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AgentRun;
