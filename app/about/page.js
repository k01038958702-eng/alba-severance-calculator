export const metadata = {
  title: "사이트 소개 | 알바 퇴직금 계산기",
  description:
    "알바 퇴직금 계산기의 제공 목적, 주요 기능 및 이용 시 참고사항을 안내합니다.",
};

export default function AboutPage() {
  return (
    <main className="policyPage">
      <header className="policyHeader">
        <a href="/">← 계산기로 돌아가기</a>
      </header>

      <article className="policyContent">
        <h1>사이트 소개</h1>
        <p className="policyUpdated">
          알바 퇴직금을 쉽고 빠르게 예상할 수 있도록 만든 무료 계산기입니다.
        </p>

        <section>
          <h2>서비스 소개</h2>
          <p>
            알바 퇴직금 계산기는 아르바이트·파트타임 근로자가 입사일,
            퇴사일, 주 평균 근로시간과 최근 3개월 임금을 입력하여 예상
            퇴직금을 간편하게 확인할 수 있도록 제공하는 무료 서비스입니다.
          </p>
        </section>

        <section>
          <h2>주요 기능</h2>
          <ul>
            <li>계속근로기간과 주 평균 근로시간에 따른 기본 지급 요건 확인</li>
            <li>최근 3개월 임금과 상여금·연차수당을 반영한 예상 금액 계산</li>
            <li>평균임금과 통상임금을 비교한 계산 결과 안내</li>
            <li>회원가입과 로그인 없이 브라우저에서 즉시 계산</li>
          </ul>
        </section>

        <section>
          <h2>입력 정보 보호</h2>
          <p>
            계산기에 입력한 입사일, 퇴사일, 근로시간 및 임금 정보는 별도
            서버로 전송하거나 저장하지 않습니다. 계산은 이용자의 브라우저
            안에서만 처리됩니다.
          </p>
        </section>

        <section>
          <h2>계산 결과 안내</h2>
          <p>
            계산 결과는 입력값을 바탕으로 산출한 예상 금액이며 실제 지급액을
            확정하거나 법률적 판단을 제공하지 않습니다. 정확한 지급 여부와
            금액은 근로계약, 임금 구성, 근무 형태 및 관계 법령에 따라 달라질
            수 있습니다.
          </p>
        </section>

        <section>
          <h2>문의 및 의견</h2>
          <p>
            계산 오류나 이용 불편, 개선 의견은 문의하기 페이지를 통해
            알려주세요. 더 쉽고 정확하게 이용할 수 있는 계산기를 만들기 위해
            지속적으로 개선하겠습니다.
          </p>
        </section>
      </article>
    </main>
  );
}
