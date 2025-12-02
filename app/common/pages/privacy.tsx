import type { Route } from "../../common/pages/+types/privacy";
import Footer from "../components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "개인정보처리방침 | Andineering" },
    {
      name: "description",
      content: "Andineering의 개인정보처리방침을 확인하세요.",
    },
  ];
}

export default function Privacy({}: Route.ComponentProps) {
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
                개인정보처리방침
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
                    <h2 className="text-2xl font-semibold">
                      1. 개인정보의 처리 목적
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Andineering(이하 "회사")은 다음의 목적을 위하여 개인정보를
                      처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                      용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는
                      개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한
                      조치를 이행할 예정입니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        서비스 제공 및 계약의 이행: 서비스 제공, 콘텐츠 제공,
                        맞춤 서비스 제공
                      </li>
                      <li>
                        회원 관리: 회원제 서비스 이용에 따른 본인확인, 개인
                        식별, 불량회원의 부정 이용 방지
                      </li>
                      <li>
                        고객 문의 및 불만 처리: 문의사항 응대, 고객 불만사항
                        처리
                      </li>
                      <li>
                        마케팅 및 광고 활용: 신규 서비스 개발 및 맞춤 서비스
                        제공, 이벤트 및 광고성 정보 제공
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      2. 개인정보의 처리 및 보유기간
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 법령에 따른 개인정보 보유·이용기간 또는
                      정보주체로부터 개인정보를 수집 시에 동의받은 개인정보
                      보유·이용기간 내에서 개인정보를 처리·보유합니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        회원 가입 및 관리: 회원 탈퇴 시까지 (단, 관계 법령
                        위반에 따른 수사·조사 등이 진행중인 경우에는 해당
                        수사·조사 종료 시까지)
                      </li>
                      <li>
                        고객 문의 및 불만 처리: 문의 접수 시부터 처리 완료 후
                        3년
                      </li>
                      <li>
                        마케팅 및 광고 활용: 회원 탈퇴 시까지 또는 동의 철회
                        시까지
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      3. 처리하는 개인정보의 항목
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 다음의 개인정보 항목을 처리하고 있습니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>필수항목: 이메일 주소, 이름, 서비스 이용 기록</li>
                      <li>선택항목: 프로필 정보, 연락처</li>
                      <li>
                        자동 수집 항목: IP 주소, 쿠키, 접속 로그, 기기 정보
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      4. 개인정보의 제3자 제공
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 정보주체의 개인정보를 제1조(개인정보의 처리
                      목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
                      법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에
                      해당하는 경우에만 개인정보를 제3자에게 제공합니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      5. 개인정보처리의 위탁
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 원활한 개인정보 업무처리를 위하여 다음과 같이
                      개인정보 처리업무를 위탁하고 있습니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        클라우드 서비스 제공: AWS, Vercel 등 (서비스 운영 및
                        데이터 저장)
                      </li>
                      <li>이메일 발송: Resend (이메일 발송 서비스)</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 위탁계약 체결 시 개인정보 보호법 제26조에 따라
                      위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적
                      보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상
                      등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가
                      개인정보를 안전하게 처리하는지를 감독하고 있습니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      6. 정보주체의 권리·의무 및 그 행사방법
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호
                      관련 권리를 행사할 수 있습니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>개인정보 처리정지 요구권</li>
                      <li>개인정보 열람요구권</li>
                      <li>개인정보 정정·삭제요구권</li>
                      <li>개인정보 처리정지 요구권</li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      권리 행사는 회사에 대해 서면, 전화, 전자우편 등을 통하여
                      하실 수 있으며 회사는 이에 대해 지체 없이 조치하겠습니다.
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      7. 개인정보의 파기
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 개인정보 보유기간의 경과, 처리목적 달성 등
                      개인정보가 불필요하게 되었을 때에는 지체없이 해당
                      개인정보를 파기합니다. 파기의 절차 및 방법은 다음과
                      같습니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        파기절차: 회사는 파기 사유가 발생한 개인정보를 선정하고,
                        회사의 개인정보 보호책임자의 승인을 받아 개인정보를
                        파기합니다.
                      </li>
                      <li>
                        파기방법: 전자적 파일 형태의 정보는 기록을 재생할 수
                        없는 기술적 방법을 사용하여 삭제합니다.
                      </li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      8. 개인정보 보호책임자
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
                      개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제
                      등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
                      있습니다.
                    </p>
                    <div className="p-4 rounded-lg bg-background/50 border border-border">
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">
                          개인정보 보호책임자
                        </strong>
                        <br />
                        이메일: privacy@andineering.com
                        <br />
                        문의: 서비스 내 문의하기 기능을 통해 연락주시기
                        바랍니다.
                      </p>
                    </div>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      9. 개인정보의 안전성 확보조치
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를
                      취하고 있습니다.
                    </p>
                    <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                      <li>
                        관리적 조치: 내부관리계획 수립·시행, 정기적 직원 교육 등
                      </li>
                      <li>
                        기술적 조치: 개인정보처리시스템 등의 접근권한 관리,
                        접근통제시스템 설치, 고유식별정보 등의 암호화,
                        보안프로그램 설치
                      </li>
                      <li>물리적 조치: 전산실, 자료보관실 등의 접근통제</li>
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                      10. 개인정보 처리방침 변경
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      이 개인정보처리방침은 2025년 1월 1일부터 적용되며, 법령 및
                      방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는
                      변경사항의 시행 7일 전부터 공지사항을 통하여 고지할
                      것입니다.
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
