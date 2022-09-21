document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");
  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: "bootstrap5",
    initialView: "dayGridMonth",
    headerToolbar: {
      left: "prev",
      center: "title",
      right: "next",
    },
    events: [
      {
        id: "reservation-example",
        title: "Reservation",
        start: "2022-09-07",
        end: "2022-09-10",
      },
      {
        id: "Reserved",
        title: "Reserved",
        start: "2022-09-01",
        end: "2022-09-06",
        backgroundColor: "#FF0000",
      },
    ],
  });
  calendar.render();
});
