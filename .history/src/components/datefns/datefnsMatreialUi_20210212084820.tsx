import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'
import DateFnsUtils from "@date-io/date-fns";

function datefnsMatreialUi() {
    return (
        <div>
       <MuiPickersUtilsProvider utils={LuxonUtils}>
        <KeyboardDatePicker
          variant="inline"
          format="yyyy-MM-dd"
          id="date-picker-inline"
          label="Datum"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleOnChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
        </div>
    )
}

export default datefnsMatreialUi
