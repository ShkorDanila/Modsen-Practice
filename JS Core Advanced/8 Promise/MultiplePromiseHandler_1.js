// Напишите функцию, которая принимает
// массив URL-адресов и параллельно
// загружает содержимое каждого URL-адреса с
// помощью Promises.

let urls = [
  "https://learn.modsen.app/courses/8",
  "https://learn.modsen.app/courses"
];

function SettleAllPromises(urlArray) {
  let requests = urlArray.map((url) => fetch(url));
  Promise.all(requests).then((responses) =>
    responses.forEach((response) =>
      console.log(response.url + " | " + response.status)
    )
  );
}

console.log(SettleAllPromises(urls));
