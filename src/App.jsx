import React, { useState } from "react";
import PayslipForm from "./PayslipForm";
import PayslipResult from "./PayslipResult";
import PayslipResult2 from "./PayslipResult2";

function App() {
  const [salary, setSalary] = useState(null);

  const calculatePayslip = ({ days, hours, wage, overtimeHours, overtimePercent, holidayHours,nightPercent,nightDifferential,
    nightOverTime,
    nightDifferentialPercent,hoursLate }) => {   
      
     const lateHoursDeduction = hoursLate * wage 
    const baseSalary =  days * hours * wage ;

    //Overtime
    const ot = overtimeHours * wage;
//  overtimeHours * wage  +(overtimePercent*overtimeHours*10) 
    const overtimePay =   (overtimePercent * ot/100) + ot
    const holidayPay = holidayHours * wage * 30;
    //night
    // const normalNightRate = nightHours * wage;
    // const nightDifferentialRate  = nightDifferential * wage;  
    const nightDifferentialPercents = nightDifferential * wage+ (nightDifferentialPercent*nightDifferential*10);
    // const overtimeNightRate = nightOverTime * wage
    const nightDiffOtPercent = nightPercent + nightDifferentialPercent
    const overtimeNightRatePercent = nightOverTime * wage+(nightDiffOtPercent*nightOverTime*10);
    // const nightPay = overtimeNightRate +(nightDiffOtPercent*nightOverTime*10);
    const nightPay = nightDifferentialPercents + overtimeNightRatePercent;
    
  
    // const diffentialAndOvertimePerCent = nightDifferentialPercent + overtimeNightRatePercent
    // const nightDifferentialPercentss = nightDifferentialRate +(diffentialAndOvertimePerCent*nightDifferential*10);

    // const overtimeNightRatePercent = overtimeNightRatePercent+nightDifferentialPercents
    
    //const nightPay = nightHours * wage  +(nightPercent*nightHours*10) 

    //Total day shift
    const dayShift = baseSalary + overtimePay - lateHoursDeduction;
    //Total night Shift
    const nightShift = baseSalary + nightPay
 
  // const grossDay =
  // const grossNight=
  
    const gross = baseSalary + overtimePay + nightPay + holidayPay - lateHoursDeduction;
  
    
  
    
    setSalary({
      baseSalary,
      overtimePay,
      nightPay,
      holidayPay,
      gross,
      dayShift,
      nightShift,
      lateHoursDeduction,
    });
  };
  

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h4 style={{color: "red"}}>Phase 1: Testing</h4>
      <h1>Payslip Calculator (Daily, Hourly, Overtime Night shift and Day shift)</h1>
      <PayslipForm onCalculate={calculatePayslip} />
      {salary && <PayslipResult2 {...salary} />}
    </div>
  );
}

export default App;
