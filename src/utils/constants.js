export const APIkey = "6a30705481c542028bcf58a18853b8e8";

export const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

const currentDateUnformatted = new Date();
// export const currentDate = currentDateUnformatted.toISOString();
export const currentDate =
  currentDateUnformatted.getFullYear() +
  "-" +
  (currentDateUnformatted.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  currentDateUnformatted.getDate().toString().padStart(2, "0");
console.log(currentDate);

const previousWeekUnformatted = new Date();
previousWeekUnformatted.setDate(currentDateUnformatted.getDate() - 7);
export const previousWeek =
  previousWeekUnformatted.getFullYear() +
  "-" +
  (previousWeekUnformatted.getMonth() + 1).toString().padStart(2, "0") +
  "-" +
  previousWeekUnformatted.getDate().toString().padStart(2, "0");
console.log(previousWeek);
