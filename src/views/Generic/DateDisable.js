// *** Disable date based on previously selected date or default takes today's date
export default function DateDisable(date) {
  let today;
  let dd;
  let mm;
  let yyyy;

  if (date) {
    today = new Date(date);
    dd = String(today.getDate() + 1).padStart(2, "0");
    mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    yyyy = today.getFullYear();
  } else {
    today = new Date();
    dd = String(today.getDate()).padStart(2, "0");
    mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    yyyy = today.getFullYear();
  }

  return yyyy + "-" + mm + "-" + dd;
}
