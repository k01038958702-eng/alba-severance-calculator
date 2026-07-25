export const metadata = {
  title: "문의하기 | 알바 퇴직금 계산기",
  description: "알바 퇴직금 계산기 오류 및 개선 의견을 접수하는 페이지입니다.",
};

export default function ContactPage() {
  return (
    <main className="policyPage">
      <header className="policyHeader">
        <a href="/">← 계산기로 돌아가기</a>
      </header>
      <article className="policyContent">
        <h1>문의하기</h1>
        <p className="policyUpdated">
          계산 오류, 이용 불편 또는 개선 의견을 알려주세요.
        </p>

        <section>
          <h2>문의 전 확인사항</h2>
          <ul>
            <li>계산 결과는 입력값을 바탕으로 한 예상 금액입니다.</li>
            <li>개별 근로관계에 관한 법률 상담이나 퇴직금 지급 판정은 제공하지 않습니다.</li>
            <li>주민등록번호, 계좌번호, 전화번호 등 개인정보는 작성하지 마세요.</li>
          </ul>
        </section>

        <div className="contactBox">
          <h2>오류 및 개선 의견 접수</h2>
          <p>
            아래 공개 문의 게시판에서 새 문의를 작성할 수 있습니다. 문의 내용은
            공개될 수 있으므로 개인정보나 급여 명세서 원본을 올리지 마세요.
          </p>
          <a
            className="contactButton"
            href="https://github.com/k01038958702-eng/alba-severance-calculator/issues/new"
            target="_blank"
            rel="noreferrer"
          >
            문의 작성하기
          </a>
        </div>
      </article>
    </main>
  );
}
