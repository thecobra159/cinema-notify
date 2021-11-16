import fetch from "node-fetch";
import notifier from "node-notifier";
import path from "path";

let oneMinute = 60000;
let halfMinuter = 18000;

let url =
  "https://api-content.ingresso.com/v0/sessions/city/18/event/7766?partnership=&date=2021-11-21&includeOperationPolicies=true";

function notify(title, message, icon) {
  return notifier.notify({
    title,
    message,
    icon: path.join("F:/Projects/Back-End/cinemark/", icon),
    sound: true,
  });
}

setInterval(() => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let sessions = data[0]["theaters"][0]["rooms"][0]["sessions"].lenght;
      let rooms = data[0]["theaters"][0]["rooms"].lenght;

      if (rooms > 1) {
        notify(
          "ABRIU OUTRA SALA | HARRY POTTER TÁ OPEN DESGRAÇA CORRE FDP",
          "ABRIU ESSA CACETA, CORRE CORNO!",
          "happy-harry.jpg"
        );
      }

      if (sessions > 1) {
        notify(
          "HARRY POTTER TÁ OPEN DESGRAÇA CORRE FDP",
          "ABRIU ESSA CACETA, CORRE CORNO!",
          "happy-harry.jpg"
        );
      } else {
        // notify(
        //   "HARRY POTTER NUM TÁ OPEN DESGRAÇA",
        //   "QUAL É CINEMARK MOH VACILO",
        //   "sad-harry.jpg"
        // );
        console.log(
          "HARRY POTTER NUM TÁ OPEN DESGRAÇA, QUAL É CINEMARK MOH VACILO"
        );
      }
    });
}, oneMinute);
