import React, { useState } from "react";

function PayslipForm({ onCalculate }) {
const [form, setForm] = useState({
  days: "",
  hours: "",
  wage: "",
  overtimeHours: "",
  overtimePercent: "",
  nightHours: "",
  holidayHours: "",
  nightPercent: "", // default
  nightDifferential:"",
  nightOverTime:"",
  nightDifferentialPercent:"",
  hoursLate:""
});

const handleChange = (e) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({
    ...prevForm,
    [name]: value,
  }));
};

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const days = parseFloat(form.days);
    const hours = parseFloat(form.hours);
    const hoursLate = parseFloat(form.hoursLate) || 0;
    const wage = parseFloat(form.wage);
    const overtimeHours = parseFloat(form.overtimeHours) || 0;
    const overtimePercent = parseFloat(form.overtimePercent) || 0;
    //night
    const nightHours = parseFloat(form.nightHours) || 0;
    const nightDifferential = parseFloat(form.nightDifferential) || 0;
    const nightOverTime = parseFloat(form.nightOverTime) || 0;
    const nightDifferentialPercent = parseFloat(form.nightDifferentialPercent) || 0;
    const nightPercent = parseFloat(form.nightPercent) || 0;
    //holiday
    const holidayHours = parseFloat(form.holidayHours) || 0;
    const holidayPercent = parseFloat(form.holidayPercent) || 0;
  
    // const totalHours = days * hours;
    // const nightHours = totalHours * (nightPercent / 100);
    //const nightHours = nightHours * wage +(nightPercent * nightHours*10)
  
    onCalculate({
      days,
      hours,
      wage,
      overtimeHours,
      overtimePercent,
      nightHours,
      nightPercent,
      holidayHours,
      holidayPercent,
      nightDifferential,
      nightOverTime,
      nightDifferentialPercent,
      hoursLate
    });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      {/* Day */}
      
      <div>
        <label>Working Days:</label><br />
        <input name="days" type="number" value={form.days} onChange={handleChange} required />
      </div>
      <div>
        <label>Hours per Day:</label><br />
        <input name="hours" type="number" value={form.hours} onChange={handleChange} required />
      </div>
      <div>
        <label>Hours Late</label><br />
        <input name="hoursLate" type="number" value={form.hoursLate} onChange={handleChange}  />
      </div>
      <div>
        <label>Hourly Wage (JPY):</label><br />
        <input name="wage" type="number" value={form.wage} onChange={handleChange} required />
      </div>
      <div>
        <label>Overtime Hours:</label><br />
        <input name="overtimeHours" type="number" value={form.overtimeHours} onChange={handleChange} />
      </div>
      <div>
        <label>Overtime Rate % (e.g. 25%):</label><br />
        <input name="overtimePercent" type="number" value={form.overtimePercent} onChange={handleChange} />
      </div>
      
      {/* Night */}
<h4>Night Shift Differential and Overtime Rate calculation</h4>
      {/* <div>
  <label>Night Work Normal Hours:</label><br />
  <input name="nightHours" type="number" value={form.nightHours} onChange={handleChange} />
</div> */}
<div>
  <label>Night Differential Hours:</label><br />
  <input name="nightDifferential" type="number" value={form.nightDifferential} onChange={handleChange} />
</div>
<div>
  <label>Night Work Differential Rate %  (e.g. 25%):</label><br />
  <input
    name="nightDifferentialPercent"
    type="number"
    value={form.nightDifferentialPercent}
    onChange={handleChange}
   
  />
</div>
<div>
  <label>Night Overtime Hours:</label><br />
  <input name="nightOverTime" type="number" value={form.nightOverTime} onChange={handleChange} />
</div>
<div>
  <label>Night Work Overtime Rate %  (e.g. 30%):</label><br />
  <input
    name="nightPercent"
    type="number"
    value={form.nightPercent}
    onChange={handleChange}
  />
</div>



{/* Holiday */}
{/* <h4>Holiday Shift calculation</h4>
<div>
  <label>Holiday Work Hours:</label><br />
  <input name="holidayHours" type="number" value={form.holidayHours} onChange={handleChange} />
</div>
<div>
  <label>Holiday Work %  (e.g. 30%):</label><br />
  <input
    name="nightPercent"
    type="number"
    value={form.nightPercent}
    onChange={handleChange}
    required
  />
</div>
<div>
  <label>Holiday Work overtime %  (e.g. 30%):</label><br />
  <input
    name="nightPercent"
    type="number"
    value={form.nightPercent}
    onChange={handleChange}
    required
  />
</div> */}
      <br />
      <button type="submit">Calculate</button>
    </form>
  );
}

export default PayslipForm;
