import React from "react";
import { DateTime } from "luxon";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import LuxonUtils from '@date-io/luxon';



function Datepicker() {
con

    let hej;
const handleOnChange = () => {

}
 
  return (
    <div>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <KeyboardDatePicker
          variant="inline"
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="yyyy-MM-dd"
          value={hej}
          inputVariant="outlined"
          onChange={handleOnChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          variant="inline"
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="yyyy-MM-dd"
          value={hej}
          inputVariant="outlined"
          onChange={handleOnChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
    </div>
  );
}

export default Datepicker;
