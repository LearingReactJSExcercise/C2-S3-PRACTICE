import { format } from 'date-fns';
function Time() {
    let date = new Date();
    let formattedDate = format(date, 'hh:mm:ss a');
    return (
      <h2>
        {formattedDate}
      </h2>
    );
  }
  
  export default Time;
//npm install date-fns