let winner = "manjana";
let isJudgeBoardOk = true;

async function my_Promise() {
    const myPromise = new Promise(
        (resolve, reject) => {
            if (isJudgeBoardOk) {
                setTimeout(
                    () => {
                        resolve({
                            winner: winner,
                            message: "The judge board is ok",
                            statusCode: 200
                        });
                    }, 5000
                )
            } else {
                reject({
                    reson: "The judge board is not ok, please check the system",
                    errorCode: 500,
                    errorType: "System Error"
                });
            }

            try {
                let response = await myPromise;
                console.log(response);
            } catch (error) {
                console.log(error);
            }

        })

}

async function getUser(dbPass) {
    const myPromise = new Promise(
        (resolve, reject) => {
            if (dbPass === "12345") {
                resolve([
                    { name: "Manjana", age: 25, city: "Colombo" },
                    { name: "Manjana", age: 25, city: "Colombo" },
                    { name: "Manjana", age: 25, city: "Colombo" }
                ])
            } else {
                reject({
                    reason: "wrong password",
                    errorType: "System Error",
                    errorCode: 401
                })
            }
        });


    try {
        let response = await myPromise;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
    return myPromise;
}




my_Promise();

getUser("12345");

// getUser("12345").then(
//     (success) => {
//         console.log("User found");
//         console.log(success);
//     }
// ).catch(
//     (error) => {
//         console.log("User not found");
//         console.log(error);
//     }