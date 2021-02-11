import React from 'react'

function datepicker() {
    return (
        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>

<KeyboardDatePicker
  margin="normal"
  id="date-picker-dialog"
  label="Date picker dialog"
  format="MM/dd/yyyy"
  value={hej}
  onChange={handleOnChange}
  KeyboardButtonProps={{
    'aria-label': 'change date',
  }}
/>
</MuiPickersUtilsProvider>
            
        </div>
    )
}

export default datepicker
