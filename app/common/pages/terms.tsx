import type { Route } from "../../common/pages/+types/terms";
import Footer from "../components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "이용약관 | Andineering" },
    {
      name: "description",
      content: "Andineering의 이용약관을 확인하세요.",
    },
  ];
}

export default function Terms({}: Route.ComponentProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16">
          {/* Animated background */}
          <div className="absolute inset-0 bg-linear-to-br from-background via-background to-card">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "3s" }}></div>
          </div>

          {/* Content */}
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-4 animate-fade-in-up">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight">
                이용약관
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground">
                최종 수정일: 2025년 12월 1일
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="prose prose-invert max-w-none">
                <div className="p-8 rounded-2xl border border-border bg-card space-y-8">
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">제1조 (목적)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      이 약관은 Andineering(이하 "회사")이 제공하는 Agentic AI
                      솔루션 서비스(이하 "서비스")의 이용과 관련하여 회사와
                      이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을
                      규정함을 목적으로 합니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">제2조 (정의)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        "서비스"란 회사가 제공하는 Agentic AI 솔루션 및 관련
                        제반 서비스를 의미합니다.
                      </li>
                      <li>
                        "이용자"란 이 약관에 따라 회사가 제공하는 서비스를 받는
                        회원 및 비회원을 말합니다.
                      </li>
                      <li>
                        "회원"이란 회사에 개인정보를 제공하여 회원등록을 한
                        자로서, 회사의 정보를 지속적으로 제공받으며, 회사가
                        제공하는 서비스를 계속적으로 이용할 수 있는 자를
                        말합니다.
                      </li>
                      <li>
                        "비회원"이란 회원에 가입하지 않고 회사가 제공하는
                        서비스를 이용하는 자를 말합니다.
                      </li>
                      <li>
                        "아이디(ID)"란 회원의 식별과 서비스 이용을 위하여 회원이
                        정하고 회사가 승인하는 문자와 숫자의 조합을 말합니다.
                      </li>
                      <li>
                        "비밀번호"란 회원이 부여받은 아이디와 일치된 회원임을
                        확인하고 회원의 권익을 보호하기 위하여 회원이 정한
                        문자와 숫자의 조합을 말합니다.
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제3조 (약관의 게시와 개정)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스
                      초기 화면에 게시합니다. 회사는 필요한 경우 관련 법령을
                      위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.
                      회사가 약관을 개정할 경우에는 적용일자 및 개정사유를
                      명시하여 현행약관과 함께 서비스의 초기화면에 그 적용일자
                      7일 이전부터 적용일자 전일까지 공지합니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">제4조 (회원가입)</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후
                      이 약관에 동의한다는 의사표시를 함으로서 회원가입을
                      신청합니다. 회사는 제1항과 같이 회원가입을 신청한 이용자
                      중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한
                        적이 있는 경우
                      </li>
                      <li>
                        등록 내용에 타인의 정보를 도용하거나 허위의 정보를
                        등록한 경우
                      </li>
                      <li>회사로부터 회원자격이 정지된 자인 경우</li>
                      <li>
                        기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이
                        있다고 판단되는 경우
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제5조 (서비스의 제공 및 변경)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 다음과 같은 서비스를 제공합니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>Agentic AI 에이전트 생성 및 관리 서비스</li>
                      <li>에이전트 워크플로우 자동화 서비스</li>
                      <li>고객 문의 관리 및 처리 서비스</li>
                      <li>
                        기타 회사가 추가 개발하거나 제휴계약 등을 통해 회원에게
                        제공하는 일체의 서비스
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 필요한 경우 서비스의 내용을 변경할 수 있으며,
                      변경된 내용은 회사가 운영하는 웹사이트에 공지합니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제6조 (서비스의 중단)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장,
                      통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을
                      일시적으로 중단할 수 있습니다. 회사는 제1항의 사유로
                      서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는
                      제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의
                      또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제7조 (회원의 의무)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회원은 다음 행위를 하여서는 안 됩니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>신청 또는 변경 시 허위내용의 등록</li>
                      <li>타인의 정보 도용</li>
                      <li>회사가 게시한 정보의 변경</li>
                      <li>
                        회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의
                        송신 또는 게시
                      </li>
                      <li>
                        회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해
                      </li>
                      <li>
                        회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는
                        행위
                      </li>
                      <li>
                        외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에
                        반하는 정보를 공개 또는 게시하는 행위
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제8조 (개인정보보호)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 이용자의 개인정보 보호를 위하여 노력합니다.
                      이용자의 개인정보 보호에 관해서는 관련법령 및 회사가
                      정하는 "개인정보처리방침"에 정한 바에 따릅니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제9조 (회사의 의무)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 법령과 이 약관이 금지하거나 공서양속에 반하는
                      행위를 하지 않으며, 계속적이고 안정적으로 서비스를
                      제공하기 위하여 노력합니다. 회사는 이용자가 안전하게
                      서비스를 이용할 수 있도록 개인정보(신용정보 포함) 보호를
                      위해 보안시스템을 구축하며 개인정보처리방침을 공시하고
                      준수합니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제10조 (손해배상)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한
                      손해가 발생하더라도 동 손해가 회사의 중대한 과실에 의한
                      경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제11조 (면책조항)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 천재지변 또는 이에 준하는 불가항력으로 인하여
                      서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
                      면제됩니다. 회사는 회원의 귀책사유로 인한 서비스 이용의
                      장애에 대하여는 책임을 지지 않습니다. 회사는 회원이
                      서비스를 이용하여 기대하는 수익을 상실한 것에 대하여
                      책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로
                      인한 손해에 관하여 책임을 지지 않습니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      제12조 (준거법 및 관할법원)
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      이 약관의 해석 및 회사와 회원 간의 분쟁에 대하여는
                      대한민국의 법을 적용하며, 본 분쟁으로 인하여 소송이 제기될
                      경우 소송은 회사의 본사 소재지를 관할하는 법원의 관할로
                      합니다.
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
