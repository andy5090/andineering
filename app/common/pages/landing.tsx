import { submitInquiry } from "~/features/inquiries/trpc";
import type { Route } from "../../common/pages/+types/landing";
import Footer from "../components/footer";
import z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { TextAnimate } from "@/components/ui/text-animate";
import { Form } from "react-router";
import { useEffect, useRef } from "react";

export function meta({}: Route.MetaArgs) {
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

  await submitInquiry({ name, email, message });

  return { success: true };
};

export default function Landing({
  // loaderData,
  actionData,
}: Route.ComponentProps) {
  const formRef = useRef<HTMLFormElement>(null);

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
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up py-16">
              {/* Main headline */}
              <div>
                <TextAnimate
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-tight"
                  animation="blurInUp"
                  by="character"
                  once
                >
                  DX를 넘어 AX를 준비중이신가요?
                </TextAnimate>
                <div className="flex justify-center items-center gap-2">
                  <TextAnimate
                    segmentClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight bg-clip-text bg-linear-135 from-sky-500 to-purple-600 text-transparent"
                    animation="blurInUp"
                    by="character"
                    once
                  >
                    에이전틱 AI
                  </TextAnimate>
                  <TextAnimate
                    segmentClassName="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-tight"
                    animation="blurInUp"
                    by="character"
                    once
                  >
                    도입을 도와드립니다!
                  </TextAnimate>
                </div>
                {/* <TextAnimate
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-tight"
                  animation="blurInUp"
                  by="character"
                  once
                >
                  고민하지말고 물어보세요!
                </TextAnimate> */}
              </div>

              {/* Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Digital Transformation을 넘어 AI Transformation을
                준비중이신가요?
              </p>
              <p className="text-lg sm:text-xl md:text-2xl max-w-4xl mx-auto">
                AX의 핵심에는 Agentic AI가 있습니다.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Agentic AI는 기존 LLM 활용의 한계를 넘어 복잡한 워크플로우를
                자동화하는 기술입니다.
                <br />
                Kagentic Solution은 Agentic AI를 도입하는 데 필요한 모든 것을
                제공합니다.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button size="lg" className="min-w-[200px] bg-gradient-primary">
                  에이전틱 AI 알아보기
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>

              {/* Inquiry Form */}
              <div className="max-w-3xl mx-auto">
                <Form ref={formRef} className="space-y-4" method="post">
                  <Input name="name" type="text" placeholder="Name" />
                  <Input name="email" type="email" placeholder="Email" />
                  <Textarea name="message" placeholder="Message" />
                  <Button type="submit">Ask anything</Button>
                </Form>
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
            </div>
          </div>
        </section>
        {/* <Services />
        <Features />
        <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}
