import { appRouter } from "~/trpc-router";
import { createCallerFactory, createTRPCContext } from "~/lib/trpc/trpc";
import type { Route } from "../../common/pages/+types/landing";
import Footer from "../components/footer";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Lock } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { Form, useOutletContext } from "react-router";
import { useEffect, useRef } from "react";
import { signIn } from "~/lib/auth/client";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Kagentic Solution" },
    {
      name: "description",
      content:
        "Transform your business with Agentic AI. Move beyond digital transformation to intelligent automation that works for you.",
    },
  ];
}

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string().min(10),
});

export const action = async ({ request }: Route.ActionArgs) => {
  const formData = await request.formData();

  const validatedFields = formSchema.safeParse(Object.fromEntries(formData));

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors };
  }

  const { name, email, message } = validatedFields.data;

  const context = await createTRPCContext({ headers: request.headers });
  const createCaller = createCallerFactory(appRouter);
  const caller = createCaller(context);

  await caller.inquiries.submitInquiry({
    name,
    email,
    message,
  });

  return { success: true };
};

export default function Landing({
  // loaderData,
  actionData,
}: Route.ComponentProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const { isLoggedIn } = useOutletContext<{ isLoggedIn: boolean }>();

  useEffect(() => {
    if (actionData?.success && formRef.current) {
      formRef.current.reset();
    }
  }, [actionData?.success]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
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
            <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 py-16">
              {/* Left Column: Text Content */}
              <div className="flex-1 space-y-8 text-center lg:text-left animate-fade-in-up">
                {/* Main headline */}
                <div>
                  <TextAnimate
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight"
                    animation="blurInUp"
                    by="character"
                    once
                  >
                    DX를 넘어 AX를
                  </TextAnimate>
                  <TextAnimate
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight"
                    animation="blurInUp"
                    by="character"
                    once
                  >
                    준비중이신가요?
                  </TextAnimate>
                  <TextAnimate
                    segmentClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight bg-clip-text bg-linear-135 from-sky-500 to-purple-600 text-transparent"
                    animation="blurInUp"
                    by="character"
                    once
                  >
                    에이전틱 AI
                  </TextAnimate>
                  <TextAnimate
                    segmentClassName="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight"
                    animation="blurInUp"
                    by="character"
                    once
                  >
                    도입을 도와드립니다!
                  </TextAnimate>
                </div>

                {/* Subheadline */}
                <div className="space-y-4 px-6 md:px-0">
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed break-keep">
                    Digital Transformation을 넘어 AI Transformation을
                    준비중이신가요?
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-medium break-keep">
                    AX의 핵심에는 Agentic AI가 있습니다.
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed break-keep">
                    Agentic AI는 기존 LLM 활용의 한계를 넘어 복잡한 워크플로우를
                    자동화하는 기술입니다.
                    <br className="hidden lg:block" />
                    Andineering은 Agentic AI를 도입하는 데 필요한 모든 것을
                    제공합니다.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Button size="lg" className="min-w-[200px] bg-gradient-primary">
                    에이전틱 AI 알아보기
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Right Column: Inquiry Form */}
              <div className="flex-1 w-full max-w-xl md:max-w-none">
                <div className="relative py-8 px-6 sm:px-10 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-lg">
                  {!isLoggedIn && (
                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background/60 backdrop-blur-md rounded-2xl">
                      <div className="p-6 text-center space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Lock className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">
                          로그인이 필요한 서비스입니다
                        </h3>
                        <p className="text-muted-foreground max-w-xs mx-auto">
                          문의를 남기시려면 로그인이 필요합니다.
                        </p>
                        <Button onClick={() => signIn()} size="lg">
                          로그인하고 문의하기
                        </Button>
                      </div>
                    </div>
                  )}
                  <Form
                    ref={formRef}
                    className={`space-y-6 ${!isLoggedIn ? "opacity-50 pointer-events-none" : ""}`}
                    method="post"
                  >
                    <div className="space-y-2 text-center lg:text-left">
                      <h3 className="text-2xl font-semibold">
                        문의하기
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        궁금한 점이 있으시면 언제든 문의해주세요.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <Input name="name" type="text" placeholder="이름" className="bg-background/50" />
                      <Input name="email" type="email" placeholder="이메일" className="bg-background/50" />
                      <Textarea className="min-h-[150px] bg-background/50" name="message" placeholder="문의내용을 자세히 적어주세요" />
                    </div>
                    <Button className="w-full" size="lg" type="submit" disabled={!isLoggedIn}>
                      문의 등록하기
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                100+
              </div>
              <div className="text-sm text-muted-foreground">
                Ready-to-use agents
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                FDE like Expert support
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">
                50+
              </div>
              <div className="text-sm text-muted-foreground">
                Easy integration
              </div>
            </div>
          </div> */}

        </section >
        {/* <Services />
        <Features />
        <CTA /> */}
      </main >
      <Footer />
    </div >
  );
}
