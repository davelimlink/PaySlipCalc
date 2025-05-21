import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";

const formatJPY = (value) => `¥${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

function PayslipResult2({ baseSalary,
  overtimePay,
  gross,
  nightPay,
  lateHoursDeduction,
}) {
  const printRef = useRef();

  const [deductions, setDeductions] = useState("");
  const [adds, setAdds] = useState("");

  const inputAdd = useRef(null);

  const add = () => {
   return setAdds(gross + inputAdd.current.value/1);
  }

  const inputDeduct = useRef(null);
 
   const deduction = () => {
     return setDeductions(adds - inputDeduct.current.value/1)
   }


  const handleDownloadPDF = () => {
    const element = printRef.current;
    const opt = {
      margin:       1,
      filename:     `payslip-${new Date().toISOString().slice(0, 10)}.pdf`,
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };
  return (
    <> <div style={{ marginTop: "2rem" }} ref={printRef}>
      <h2>Payslip Summary</h2>
      <p><strong>Base Salary: </strong> {formatJPY(baseSalary)}</p>
      <p><strong>Late deduction: </strong> {formatJPY(lateHoursDeduction)}</p>
      <p><strong>Overtime Salary: </strong> {formatJPY(overtimePay)}</p>
      <p><strong>Night Shift Salary: </strong> {formatJPY(nightPay)}</p>
{/* <p><strong>Holiday Work Pay:</strong> {formatJPY(holidayPay)}</p> */}
      <p><strong>Gross Salary:</strong> {formatJPY(gross)}</p>
      {/* <p><strong>Total of Day Shift: </strong>{formatJPY(dayShift)}</p>
      <p><strong>Total of Night Shift: </strong>{formatJPY(nightShift)}</p> */}
<p>Enter Bonus, Transportation allowance etc:</p>
<input type="number" placeholder="Enter deduction"  ref={inputAdd} />
<button onClick={()=>add()}>Add</button>
<p><strong>Salary with additional:</strong> {formatJPY(adds)}</p>
      <p>Enter Salary Deductions Tax etc.:</p>
      <input type="number" placeholder="Enter deduction"  ref={inputDeduct} />
      <button onClick={()=>deduction()}>Deduct</button>
      <p><strong>Total salary: </strong>{formatJPY(deductions)}</p> 
      <hr />
    </div> 
     <button
        onClick={handleDownloadPDF}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Download PDF
      </button>
    </>
   
  );
}

export default PayslipResult2;