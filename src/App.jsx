import React, { useState } from "react";
import PayslipForm from "./PayslipForm";
import PayslipResult from "./PayslipResult";

function App() {
  const [salary, setSalary] = useState(null);

  const calculatePayslip = ({ days, hours, wage, overtimeHours, overtimePercent, holidayHours,nightPercent,nightDifferential,
    nightOverTime,
    nightDifferentialPercent }) => {
    const baseSalary = days * hours * wage;
   
    const overtimePay =   overtimeHours * wage  +(overtimePercent*overtimeHours*10) 
    const holidayPay = holidayHours * wage * 30;
    //night
    // const normalNightRate = nightHours * wage;
    const overtimeNightRate = nightOverTime * wage
    const overtimeNightRatePercent = overtimeNightRate +(nightPercent*nightOverTime*10);
    const nightDifferentialRate  = nightDifferential * wage;
    const nightDifferentialPercents = nightDifferentialRate +(nightDifferentialPercent*nightDifferential*10);;

    const nightPay = overtimeNightRatePercent+nightDifferentialPercents
    
    //const nightPay = nightHours * wage  +(nightPercent*nightHours*10) 

    //Total day shift
    const dayShift = baseSalary + overtimePay;
    //Total night Shift
    const nightShift = baseSalary + nightPay
 
  // const grossDay =
  // const grossNight=
  
    const gross = baseSalary + overtimePay + nightPay + holidayPay;
  
    
  
    
    setSalary({
      baseSalary,
      overtimePay,
      nightPay,
      holidayPay,
      gross,
      dayShift,
      nightShift
    });
  };
  

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Payslip Calculator (Daily, Hourly, Overtime Night shift and Day shift)</h1>
      <PayslipForm onCalculate={calculatePayslip} />
      {salary && <PayslipResult {...salary} />}
    </div>
  );
}

export default App;
