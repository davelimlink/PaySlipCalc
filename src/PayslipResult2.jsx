import { useRef } from "react";
import html2pdf from "html2pdf.js";

const formatJPY = (value) => `¥${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

function PayslipResult2({ baseSalary,
  overtimePay,
  gross,
  nightPay,
  lateHoursDeduction,
}) {
  const printRef = useRef();

  // const [deduction, setDeduction] = useState(0);

 
  // const handleTotal = () => {
  //   return gross - deduction;
  // }


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
      <p><strong>Base Salary:</strong> {formatJPY(baseSalary)}</p>
      <p><strong>Late deduction:</strong> {formatJPY(lateHoursDeduction)}</p>
      <p><strong>Overtime Payment:</strong> {formatJPY(overtimePay)}</p>
      <p><strong>Night Shift Payment:</strong> {formatJPY(nightPay)}</p>
{/* <p><strong>Holiday Work Pay:</strong> {formatJPY(holidayPay)}</p> */}
      
      {/* <p><strong>Total of Day Shift: </strong>{formatJPY(dayShift)}</p>
      <p><strong>Total of Night Shift: </strong>{formatJPY(nightShift)}</p> */}

      <p><strong>Gross Salary:</strong> {formatJPY(gross)}</p>
      {/* <input type="number" placeholder="Enter deduction" onChange={(e) => setDeduction(Number(e.target.value))} />
      <button onCanPlay={handleTotal()}>Deduct</button>
      <p><strong>Total salary: </strong>{formatJPY(deduction)}</p> */}
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