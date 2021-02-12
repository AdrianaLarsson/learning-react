import React from 'react';
import LuxonUtils from '@date-io/luxon';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



function MaterialUIPickers() {
const 
    return (
        <div>
            <MuiPickersUtilsProvider utils={LuxonUtils}>
             <KeyboardDatePicker
             variant="inline"
             format="yyyy-MM-dd"
             KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
             
             />

            </MuiPickersUtilsProvider>
        </div>
    )
}

export default MaterialUIPickers;


/* export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState();

  const handleDateChange = (date:any) => {
    setSelectedDate(date);
  };


  return (
    <MuiPickersUtilsProvider utils={LuxonUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
 */