import React from "react";

const formatJPY = (value) => `¥${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

function PayslipResult({
  baseSalary,
  overtimePay,
  gross,
  nightPay,
  
 
}) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Payslip Summary</h2>
      <p><strong>Base Salary:</strong> {formatJPY(baseSalary)}</p>
      <p><strong>Overtime Pay:</strong> {formatJPY(overtimePay)}</p>
      <p><strong>Night Work Pay:</strong> {formatJPY(nightPay)}</p>
{/* <p><strong>Holiday Work Pay:</strong> {formatJPY(holidayPay)}</p> */}
      
      {/* <p><strong>Total of Day Shift: </strong>{formatJPY(dayShift)}</p>
      <p><strong>Total of Night Shift: </strong>{formatJPY(nightShift)}</p> */}

      <p><strong>Gross Salary:</strong> {formatJPY(gross)}</p>
      <hr />

    </div>
  );
}

export default PayslipResult;
