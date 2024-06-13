// Напишите функцию, которая сначала
// загружает данные с одного сервера, а затем
// использует эти данные для выполнения
// запроса к другому серверу. Используйте
// async/await для обеспечения
// последовательного выполнения запросов.

const FROM_API = "https://randomuser.me/api/"
const TO_API = "https://httpbin.org/post"

async function ResendDate (fromAPI, toAPI) {

    let dataFrom = await fetch(fromAPI)
    let userData = await dataFrom.json()
    let jsonTo = JSON.stringify({username: userData.results[0].login.username, password: userData.results[0].login.password})
    let dataTo = await fetch(toAPI, {
        method: "POST", 
        body: jsonTo
    })
    let respData = await dataTo.json()
    let resp = await `${JSON.stringify(respData.json)}\n${respData.origin}\n${respData.url}`
    console.log(resp);
    

}

ResendDate(FROM_API,TO_API)