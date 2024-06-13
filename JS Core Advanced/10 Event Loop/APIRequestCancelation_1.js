// Напишите функцию, которая извлекает
// данные из API и отменяет запрос, если он
// занимает больше указанного времени.

const API = "https://randomuser.me/api/";

async function FetchWithTime(api, milliseconds) {
  let controller = new AbortController();
  setTimeout(() => {controller.abort()}, milliseconds);
  try{let data = await fetch(api, {
    signal: controller.signal,
  });
  let json = await data.json()
  console.log(json);
  return
} catch(e) {
    console.log("Не успел");
}
}

FetchWithTime(API, 300)