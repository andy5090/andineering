import type { Route } from "../../common/pages/+types/agentic-ai";
import Footer from "../components/footer";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { ArrowRight, Brain, Zap, Target, TrendingUp, Shield, Clock, Users } from "lucide-react";
import { Link } from "react-router";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Agentic AI란? | Andineering" },
    {
      name: "description",
      content:
        "Agentic AI가 무엇인지, 왜 중요한지, 그리고 비즈니스 문제를 효과적으로 해결하는 방법을 알아보세요.",
    },
  ];
}

export default function AgenticAI({ }: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16">
          {/* Animated background */}
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "3s" }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
                <Brain className="w-10 h-10 text-primary" />
              </div>
              <TextAnimate
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight"
                animation="blurInUp"
                by="word"
                once
              >
                Agentic AI란 무엇인가?
              </TextAnimate>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Agentic AI는 단순한 질문-답변을 넘어서 복잡한 워크플로우를 자율적으로 계획하고 실행하는 차세대 인공지능입니다.
              </p>
            </div>
          </div>
        </section>

        {/* What is Agentic AI Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
                  Agentic AI의 정의
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  기존 AI와의 차이점을 명확히 이해하세요
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center">
                      <Zap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">기존 LLM</h3>
                  </div>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">×</span>
                      <span>단일 질문에 대한 답변만 제공</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">×</span>
                      <span>수동으로 여러 단계를 실행해야 함</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-destructive mt-1">×</span>
                      <span>복잡한 작업을 자동화하기 어려움</span>
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm ring-2 ring-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">Agentic AI</h3>
                  </div>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>목표를 달성하기 위한 계획을 스스로 수립</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>여러 도구와 시스템을 자율적으로 활용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>복잡한 워크플로우를 완전 자동화</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-2xl font-semibold mb-4">핵심 개념</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Agentic AI</strong>는 대규모 언어 모델(LLM)을 기반으로 하되, 
                    단순한 텍스트 생성에 그치지 않고 <strong className="text-foreground">자율적인 의사결정과 행동</strong>을 수행합니다. 
                    이는 AI 에이전트가 주어진 목표를 달성하기 위해 필요한 단계를 스스로 계획하고, 
                    다양한 도구와 API를 활용하며, 결과를 평가하고 필요시 계획을 수정하는 능력을 의미합니다.
                  </p>
                  <p>
                    예를 들어, "고객 문의를 분석하고 적절한 답변을 작성한 후 CRM 시스템에 업데이트하라"는 
                    복잡한 작업을 Agentic AI는 한 번의 지시로 완료할 수 있습니다. 
                    각 단계를 자동으로 실행하고, 중간 결과를 검증하며, 문제가 발생하면 대안을 찾아 실행합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Agentic AI Matters Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <TextAnimate
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
                  animation="blurInUp"
                  by="word"
                  once
                >
                  왜 지금 Agentic AI인가?
                </TextAnimate>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  비즈니스 환경의 변화와 기술적 성숙도가 만나는 시점
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-xl border border-border/50 bg-background">
                  <TrendingUp className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">기술적 성숙도</h3>
                  <p className="text-muted-foreground">
                    LLM의 성능 향상과 도구 사용 능력의 발전으로 실용적인 Agentic AI 구현이 가능해졌습니다.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border/50 bg-background">
                  <Clock className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">시간의 가치</h3>
                  <p className="text-muted-foreground">
                    반복적이고 복잡한 작업에 소요되는 시간을 절약하여 핵심 업무에 집중할 수 있습니다.
                  </p>
                </div>

                <div className="p-6 rounded-xl border border-border/50 bg-background">
                  <Target className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">경쟁 우위</h3>
                  <p className="text-muted-foreground">
                    빠르게 변화하는 시장에서 자동화와 지능화를 통해 경쟁력을 확보할 수 있습니다.
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl border border-border bg-card">
                <h3 className="text-2xl font-semibold mb-4">시장 동향</h3>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    전 세계 주요 기업들이 Agentic AI 도입을 가속화하고 있습니다. 
                    단순한 챗봇이나 문서 요약을 넘어서, <strong className="text-foreground">실제 비즈니스 프로세스를 자동화</strong>하는 
                    솔루션으로 Agentic AI가 주목받고 있습니다.
                  </p>
                  <p>
                    특히 고객 서비스, 데이터 분석, 콘텐츠 생성, 소프트웨어 개발 등 다양한 분야에서 
                    Agentic AI의 활용 사례가 급증하고 있으며, 이를 통해 생산성 향상과 비용 절감을 동시에 달성하는 
                    기업들이 늘어나고 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Solves Business Problems Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center space-y-4">
                <TextAnimate
                  className="text-3xl sm:text-4xl md:text-5xl font-display font-bold"
                  animation="blurInUp"
                  by="word"
                  once
                >
                  비즈니스 문제 해결
                </TextAnimate>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Agentic AI가 어떻게 당신의 비즈니스를 혁신하는지 알아보세요
                </p>
              </div>

              <div className="space-y-8">
                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">고객 서비스 자동화</h3>
                      <p className="text-muted-foreground mb-4">
                        고객 문의를 자동으로 분석하고, 적절한 답변을 생성하며, 필요한 경우 CRM 시스템을 업데이트합니다. 
                        24/7 일관된 서비스 품질을 제공하면서 인력 비용을 절감할 수 있습니다.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>고객 문의 자동 분류 및 우선순위 설정</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>맥락을 이해한 맞춤형 답변 생성</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>복잡한 케이스는 적절한 담당자에게 자동 할당</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Target className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">데이터 분석 및 인사이트 도출</h3>
                      <p className="text-muted-foreground mb-4">
                        다양한 데이터 소스를 자동으로 수집하고 분석하여, 비즈니스 인사이트를 도출하고 
                        실행 가능한 리포트를 생성합니다. 데이터 과학자 없이도 고급 분석이 가능합니다.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>다양한 데이터 소스 자동 통합</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>패턴 발견 및 트렌드 분석</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>의사결정을 위한 실행 가능한 권장사항 제시</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Zap className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">워크플로우 자동화</h3>
                      <p className="text-muted-foreground mb-4">
                        반복적인 업무 프로세스를 완전히 자동화하여, 직원들이 창의적이고 전략적인 업무에 
                        집중할 수 있도록 합니다. 오류를 줄이고 처리 속도를 크게 향상시킵니다.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>여러 시스템 간 데이터 동기화</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>문서 생성, 검토, 승인 프로세스 자동화</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>예외 상황 자동 감지 및 처리</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Shield className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">품질 관리 및 모니터링</h3>
                      <p className="text-muted-foreground mb-4">
                        시스템과 프로세스를 지속적으로 모니터링하고, 이상 징후를 조기에 발견하여 
                        문제를 예방합니다. 품질 기준을 자동으로 검증하고 개선 사항을 제안합니다.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>실시간 모니터링 및 알림</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>품질 기준 자동 검증</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>예측적 유지보수 및 최적화 제안</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold">
                  Agentic AI로 비즈니스를 혁신하세요
                </h2>
                <p className="text-xl text-muted-foreground">
                  Andineering과 함께 Agentic AI 도입의 여정을 시작하세요
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="min-w-[200px] bg-gradient-primary" asChild>
                  <Link to="/">
                    문의하기
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="min-w-[200px]" asChild>
                  <Link to="/agents">에이전트 둘러보기</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

