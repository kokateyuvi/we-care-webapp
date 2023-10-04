import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const DatePickerLayout = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
`;

function DatePickerTool() {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePickerLayout>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    </DatePickerLayout>
  );
}

export default DatePickerTool;
