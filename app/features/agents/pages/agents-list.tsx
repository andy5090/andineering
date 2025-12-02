import Footer from "~/common/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import db from "~/lib/db";
import { agents } from "../schema";

import { Link, useOutletContext } from "react-router";
import type { Route } from "./+types/agents-list";
import { useState } from "react";
import { LoginDialog } from "~/common/components/login-dialog";

export const loader = async () => {
  const agentsList = await db.select().from(agents);
  return { agents: agentsList };
};

const AgentsAPI = ({ loaderData }: Route.ComponentProps) => {
  const { agents: agentsList } = loaderData;
  const { isLoggedIn } = useOutletContext<{ isLoggedIn: boolean }>();

  const [loginDialogOpen, setLoginDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              멀티 에이전트 API 스위트
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text">
              사전 구축된 AI 에이전트
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              몇 분 안에 프로덕션 준비가 완료된 AI 에이전트를 배포하세요. 엄선된
              전문 에이전트 컬렉션에서 선택하거나 직접 구축하세요.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground">
                문서 보기
              </Button>
              <Button size="lg" variant="outline">
                데모 요청
              </Button>
            </div>
          </div>
        </section>

        {/* Agents Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          {!agentsList || agentsList.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">
                현재 사용 가능한 에이전트가 없습니다.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agentsList.map((agent, index) => (
                <Card
                  key={agent.id}
                  className="group hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                        <Bot className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {agent.credit_cost} 크레딧
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-display">
                      {agent.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {agent.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold mb-2 text-foreground">
                          작동 방식
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {agent.how_it_works}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-border flex items-center justify-between">
                        <span className="text-sm text-muted-foreground font-mono">
                          {agent.endpoint}
                        </span>
                        {isLoggedIn ? (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group-hover:text-primary"
                            asChild>
                            <Link to={`/agents/${agent.id}`}>지금 시도 →</Link>
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="group-hover:text-primary"
                            onClick={() => setLoginDialogOpen(true)}>
                            로그인 후 시도
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          <LoginDialog
            open={loginDialogOpen}
            onOpenChange={setLoginDialogOpen}
          />
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <Card className="bg-gradient-primary text-primary-foreground border-0 overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  맞춤형 에이전트가 필요하신가요?
                </h2>
                <p className="text-lg mb-8 text-primary-foreground/90">
                  저희 팀이 귀하의 고유한 비즈니스 요구사항에 맞춘 전문
                  에이전트를 구축해드립니다.
                </p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-background text-foreground hover:bg-background/90">
                  팀에 문의하기
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AgentsAPI;
