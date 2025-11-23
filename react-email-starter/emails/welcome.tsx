import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface WelcomeEmailProps {
  username: string;
  buttonLink: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:5173";

export const WelcomeEmail = ({ username, buttonLink }: WelcomeEmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>Andineering에 가입하신것을 환영합니다!</Preview>
        <Body className="mx-auto my-auto px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded-lg border border-[#1e293b] bg-[#020817] p-[20px] text-white">
            <Heading className="mx-0 my-[30px] p-0 text-center font-normal text-[24px] text-white">
              <span className="font-bold text-3xl">
                Welcome to Andineering
              </span>
            </Heading>
            <Section className="mt-[16px] mb-[16px] text-center">
              <Text className="text-[16px] leading-[26px] text-[#e2e8f0]">
                안녕하세요 {username}님,
              </Text>
              <Text className="text-[16px] leading-[26px] text-[#e2e8f0]">
                에이전틱 AI가 무엇인지 궁금하신가요?
              </Text>
            </Section>
            <Section className="px-[20px] text-left">
              <Text className="text-[16px] font-bold leading-[24px] text-white">
                Agentic AI란?
              </Text>
              <Text className="text-[14px] leading-[24px] text-[#94a3b8]">
                Agentic AI는 단순한 텍스트 생성을 넘어, 스스로 계획을 수립하고 도구를 사용하여 복잡한 문제를 해결하는 AI 시스템입니다.
              </Text>

              <Text className="mt-[16px] text-[16px] font-bold leading-[24px] text-white">
                주요 패턴 (Patterns)
              </Text>
              <Text className="text-[14px] leading-[24px] text-[#94a3b8]">
                ReAct와 같은 기본 개념부터 Reflection, Tool Use, Multi-Agent, CWD 등 다양한 에이전틱 디자인 패턴을 활용하여, AI가 스스로 사고하고 검증하며 더 정확한 결과를 만들어냅니다.
              </Text>

              <Text className="mt-[16px] text-[16px] font-bold leading-[24px] text-white">
                멀티 에이전트 시스템 (MAS)
              </Text>
              <Text className="text-[14px] leading-[24px] text-[#94a3b8]">
                여러 에이전트가 협력하여 더 복잡하고 규모가 큰 작업을 수행합니다. 각 에이전트는 전문적인 역할을 맡아 유기적으로 상호작용합니다.
              </Text>

              <Text className="mt-[16px] text-[16px] font-bold leading-[24px] text-white">
                평가 (Eval)
              </Text>
              <Text className="text-[14px] leading-[24px] text-[#94a3b8]">
                LLM의 비결정론적인 특성을 제어하고 신뢰성을 확보하기 위해, 체계적인 평가(Eval) 시스템 구축이 필수적입니다.
              </Text>

              <Text className="mt-[16px] text-[16px] font-bold leading-[24px] text-white">
                비즈니스 가치
              </Text>
              <Text className="text-[14px] leading-[24px] text-[#94a3b8]">
                단순 반복 업무는 물론, 전문가의 판단이 필요한 복잡한 문제까지 스스로 해결합니다. 사람이 일일이 개입하지 않아도 비즈니스의 핵심 목표를 달성할 수 있도록 돕습니다.
              </Text>
            </Section>
            <Section className="mt-[32px] mb-[32px] text-center">
              <Button
                className="rounded bg-sky-500 px-5 py-3 text-center font-semibold text-lg text-white no-underline"
                href={buttonLink}
              >
                Andineering 바로가기
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WelcomeEmail.PreviewProps = {
  username: "Andy",
  buttonLink: `${baseUrl}/agentic`,
} as WelcomeEmailProps;

export default WelcomeEmail;
