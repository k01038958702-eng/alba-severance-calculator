export const metadata = {
  title: "이용약관 | 알바 퇴직금 계산기",
  description: "알바 퇴직금 계산기 서비스의 이용조건과 주의사항을 안내합니다.",
};

export default function TermsPage() {
  return (
    <main className="policyPage">
      <header className="policyHeader">
        <a href="/">← 계산기로 돌아가기</a>
      </header>

      <article className="policyContent">
        <h1>이용약관</h1>
        <p className="policyUpdated">시행일: 2026년 8월 9일</p>

        <section>
          <h2>제1조 목적</h2>
          <p>
            이 약관은 알바 퇴직금 계산기에서 제공하는 퇴직금 예상 계산
            서비스의 이용조건과 이용자 및 운영자의 권리·의무를 정하는 것을
            목적으로 합니다.
          </p>
        </section>

        <section>
          <h2>제2조 서비스 내용</h2>
          <p>
            본 서비스는 이용자가 입력한 근무기간, 근로시간 및 임금 정보를
            바탕으로 예상 퇴직금과 기본 지급 요건을 안내합니다. 별도의
            회원가입이나 로그인 없이 무료로 이용할 수 있습니다.
          </p>
        </section>

        <section>
          <h2>제3조 계산 결과 및 책임 제한</h2>
          <p>
            계산 결과는 이용자가 입력한 정보를 기준으로 산출한 참고용 예상
            금액입니다. 실제 퇴직금 지급 여부와 금액은 근로관계, 임금 구성,
            평균임금 산정기간, 관계 법령 및 개별 사정에 따라 달라질 수
            있습니다. 본 서비스는 법률·노무 상담이나 행정기관의 공식 판단을
            대신하지 않습니다.
          </p>
        </section>

        <section>
          <h2>제4조 이용자의 의무</h2>
          <ul>
            <li>이용자는 정확한 계산을 위해 사실에 맞는 정보를 입력해야 합니다.</li>
            <li>서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
            <li>서비스를 불법적이거나 부당한 목적으로 이용해서는 안 됩니다.</li>
          </ul>
        </section>

        <section>
          <h2>제5조 서비스의 변경 및 중단</h2>
          <p>
            운영자는 계산 기준의 보완, 기능 개선, 점검 또는 불가피한 사유가
            있는 경우 서비스의 전부 또는 일부를 변경하거나 일시적으로 중단할
            수 있습니다.
          </p>
        </section>

        <section>
          <h2>제6조 개인정보 보호</h2>
          <p>
            계산기에 입력한 정보는 별도 서버로 전송하거나 저장하지 않습니다.
            개인정보 처리에 관한 자세한 내용은 개인정보처리방침에서 확인할 수
            있습니다.
          </p>
        </section>

        <section>
          <h2>제7조 약관의 변경</h2>
          <p>
            서비스 내용이나 운영 정책이 변경되는 경우 이 약관을 개정할 수
            있으며, 변경된 약관과 시행일은 이 페이지에 게시합니다.
          </p>
        </section>

        <section>
          <h2>제8조 문의</h2>
          <p>
            서비스 이용과 관련된 문의, 오류 신고 및 개선 의견은 문의하기 페이지
            또는{" "}
            <a href="mailto:richchoicontact@gmail.com">
              richchoicontact@gmail.com
            </a>
            으로 접수할 수 있습니다.
          </p>
        </section>
      </article>
    </main>
  );
}
