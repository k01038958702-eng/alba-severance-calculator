"use client";

import { useMemo, useState } from "react";

const money = new Intl.NumberFormat("ko-KR", { maximumFractionDigits: 0 });

function daysBetween(start, end) {
  if (!start || !end) return 0;
  const a = new Date(`${start}T00:00:00`);
  const b = new Date(`${end}T00:00:00`);
  return Math.max(0, Math.floor((b - a) / 86400000) + 1);
}

function addDays(dateValue, amount) {
  const date = new Date(`${dateValue}T00:00:00`);
  date.setDate(date.getDate() + amount);
  return date;
}

function subtractMonths(date, months) {
  const result = new Date(date);
  const targetDay = result.getDate();
  result.setDate(1);
  result.setMonth(result.getMonth() - months);
  const lastDay = new Date(result.getFullYear(), result.getMonth() + 1, 0).getDate();
  result.setDate(Math.min(targetDay, lastDay));
  return result;
}

function dateDiff(start, end) {
  return Math.max(0, Math.round((end - start) / 86400000));
}

function parseNumber(value) {
  return Number(String(value).replace(/[^0-9.]/g, "")) || 0;
}

function formatInput(value) {
  const n = String(value).replace(/\D/g, "");
  return n ? Number(n).toLocaleString("ko-KR") : "";
}

export default function Home() {
  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState(today);
  const [weeklyHours, setWeeklyHours] = useState("20");
  const [wages, setWages] = useState(["", "", ""]);
  const [bonus, setBonus] = useState("");
  const [annualLeavePay, setAnnualLeavePay] = useState("");
  const [ordinaryDailyWage, setOrdinaryDailyWage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(() => {
    const serviceDays = daysBetween(startDate, endDate);
    const wageTotal = wages.reduce((sum, item) => sum + parseNumber(item), 0);
    const bonusShare = parseNumber(bonus) * (3 / 12);
    const annualLeaveShare = parseNumber(annualLeavePay) * (3 / 12);
    const retirementDate = endDate ? addDays(endDate, 1) : null;
    const averageStartDate = retirementDate ? subtractMonths(retirementDate, 3) : null;
    const averagePeriodDays = retirementDate && averageStartDate
      ? dateDiff(averageStartDate, retirementDate)
      : 0;
    const total = wageTotal + bonusShare + annualLeaveShare;
    const averageDailyWage = averagePeriodDays > 0 ? total / averagePeriodDays : 0;
    const appliedDailyWage = Math.max(averageDailyWage, parseNumber(ordinaryDailyWage));
    const severance = appliedDailyWage * 30 * (serviceDays / 365);
    const eligible = serviceDays >= 365 && parseNumber(weeklyHours) >= 15;
    return {
      serviceDays,
      wageTotal,
      bonusShare,
      annualLeaveShare,
      total,
      averageDailyWage,
      appliedDailyWage,
      averagePeriodDays,
      severance,
      eligible,
    };
  }, [startDate, endDate, weeklyHours, wages, bonus, annualLeavePay, ordinaryDailyWage]);

  const canCalculate = startDate && endDate && result.wageTotal > 0 && result.serviceDays > 0;

  function calculate(e) {
    e.preventDefault();
    setSubmitted(true);
    requestAnimationFrame(() => document.getElementById("result")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function reset() {
    setStartDate("");
    setEndDate(today);
    setWeeklyHours("20");
    setWages(["", "", ""]);
    setBonus("");
    setAnnualLeavePay("");
    setOrdinaryDailyWage("");
    setSubmitted(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" aria-label="알바 퇴직금 계산기 홈">
          <span className="brandMark">₩</span>
          <span>퇴직금<span className="brandLight">한번에</span></span>
        </a>
        <span className="privacy"><span className="lock">●</span> 입력 정보는 저장하지 않아요</span>
      </header>

      <section className="hero">
        <div className="eyebrow"><span>30초</span>면 충분해요</div>
        <h1>내 알바 퇴직금,<br /><em>얼마 받을 수 있을까?</em></h1>
        <p>로그인도, 회원가입도 필요 없어요.<br />근무 정보만 입력하면 바로 알려드릴게요.</p>
      </section>

      <section className="calculator" aria-label="퇴직금 계산기">
        <form onSubmit={calculate}>
          <div className="step">
            <div className="stepHead"><span className="stepNo">01</span><div><h2>얼마나 일했나요?</h2><p>근로계약서에 적힌 날짜를 확인해 주세요.</p></div></div>
            <div className="dateGrid">
              <label>입사일<input type="date" value={startDate} max={endDate || today} onChange={(e) => setStartDate(e.target.value)} required /></label>
              <span className="dash">—</span>
              <label>퇴사일<input type="date" value={endDate} min={startDate} onChange={(e) => setEndDate(e.target.value)} required /></label>
            </div>
            {result.serviceDays > 0 && <div className="miniResult">총 <strong>{money.format(result.serviceDays)}일</strong> 근무했어요</div>}
          </div>

          <div className="divider" />

          <div className="step">
            <div className="stepHead"><span className="stepNo">02</span><div><h2>일주일에 몇 시간 일했나요?</h2><p>4주 평균 소정근로시간을 입력해 주세요.</p></div></div>
            <label className="hoursInput"><input inputMode="decimal" value={weeklyHours} onChange={(e) => setWeeklyHours(e.target.value)} aria-label="주 평균 근로시간" /><span>시간 / 주</span></label>
            <div className={`rule ${parseNumber(weeklyHours) >= 15 ? "ok" : "warn"}`}>
              <span>{parseNumber(weeklyHours) >= 15 ? "✓" : "!"}</span>
              {parseNumber(weeklyHours) >= 15 ? "주 15시간 이상 근무 요건을 충족해요." : "주 15시간 미만이면 원칙적으로 퇴직금 대상이 아니에요."}
            </div>
          </div>

          <div className="divider" />

          <div className="step">
            <div className="stepHead"><span className="stepNo">03</span><div><h2>최근 3개월 급여를 알려주세요</h2><p>세전 금액으로, 수당을 포함해 입력해 주세요.</p></div></div>
            <div className="wageGrid">
              {wages.map((wage, i) => (
                <label key={i}><span>{3 - i}개월 전 급여</span><span className="moneyInput"><input inputMode="numeric" placeholder="0" value={wage} onChange={(e) => setWages(wages.map((v, j) => j === i ? formatInput(e.target.value) : v))} required /><b>원</b></span></label>
              ))}
            </div>
            <details>
              <summary>연간 상여금이 있다면 입력하기 <span>＋</span></summary>
              <label className="bonus"><span>연간 상여금</span><span className="moneyInput"><input inputMode="numeric" placeholder="0" value={bonus} onChange={(e) => setBonus(formatInput(e.target.value))} /><b>원</b></span></label>
              <label className="bonus"><span>직전 연도 미사용 연차수당</span><span className="moneyInput"><input inputMode="numeric" placeholder="0" value={annualLeavePay} onChange={(e) => setAnnualLeavePay(formatInput(e.target.value))} /><b>원</b></span></label>
              <label className="bonus"><span>1일 통상임금 (알고 있는 경우)</span><span className="moneyInput"><input inputMode="numeric" placeholder="0" value={ordinaryDailyWage} onChange={(e) => setOrdinaryDailyWage(formatInput(e.target.value))} /><b>원</b></span></label>
              <p className="detailHelp">상여금과 연차수당은 연간 지급액의 3/12을 반영해요. 통상임금이 평균임금보다 높으면 통상임금을 적용합니다.</p>
            </details>
          </div>

          <button className="calculateBtn" type="submit" disabled={!canCalculate}>내 퇴직금 계산하기 <span>→</span></button>
          <p className="noSave">별도 서버 전송 없이 이 화면에서만 계산돼요.</p>
        </form>
      </section>

      {submitted && (
        <section className="resultCard" id="result">
          <div className="resultLabel">예상 퇴직금</div>
          <div className="resultAmount"><strong>{money.format(Math.max(0, result.severance))}</strong>원</div>
          <div className={`eligibility ${result.eligible ? "eligible" : "ineligible"}`}>
            <span>{result.eligible ? "✓" : "!"}</span>
            <div><strong>{result.eligible ? "기본 지급 요건을 충족해요" : "기본 지급 요건을 충족하지 못했어요"}</strong><p>{result.eligible ? "1년 이상 계속 근로하고 주 15시간 이상 근무했어요." : "계속근로 1년 이상, 주 평균 15시간 이상인지 확인해 주세요."}</p></div>
          </div>
          <div className="formula">
            <div><span>평균임금(1일)</span><strong>{money.format(result.averageDailyWage)}원</strong></div>
            <div><span>적용한 1일 임금</span><strong>{money.format(result.appliedDailyWage)}원</strong></div>
            <div><span>평균임금 산정기간</span><strong>{money.format(result.averagePeriodDays)}일</strong></div>
            <div><span>계속근로기간</span><strong>{money.format(result.serviceDays)}일</strong></div>
            <p>1일 평균임금 × 30일 × (계속근로일수 ÷ 365일)</p>
          </div>
          <button className="resetBtn" type="button" onClick={reset}>다시 계산하기</button>
        </section>
      )}

      <section className="info">
        <div className="infoTitle"><span>알아두세요</span><h2>퇴직금, 이것만은 꼭 확인하세요</h2></div>
        <div className="infoGrid">
          <article><span>01</span><h3>1년 이상 근무</h3><p>같은 사업장에서 계속 근로한 기간이 1년 이상이어야 해요.</p></article>
          <article><span>02</span><h3>주 15시간 이상</h3><p>4주 평균으로 1주 소정근로시간이 15시간 이상이어야 해요.</p></article>
          <article><span>03</span><h3>퇴사 후 14일 이내</h3><p>특별한 합의가 없다면 퇴사일로부터 14일 안에 지급해야 해요.</p></article>
        </div>
      </section>

      <footer>
        <p><strong>퇴직금 한번에</strong>은 예상 금액을 확인하기 위한 간편 계산기입니다.</p>
        <p>실제 지급액은 근무 형태, 평균임금 산정 기간, 수당 등에 따라 달라질 수 있어요.</p>
        <p className="footerLinks"><a href="/privacy">개인정보처리방침</a></p>
        <p className="copyright">© 2026 퇴직금 한번에 · 입력 정보 저장 안 함</p>
      </footer>
    </main>
  );
}
