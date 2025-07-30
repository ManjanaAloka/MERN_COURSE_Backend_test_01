let winner = "manjana";
let isJudgeBoardOk = true;
async function my_Promise() {
    return new Promise(
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

        })
}

async function getWinner() {
    try {
        let response = await my_Promise();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}



function fetchUserData(dbPass) {
    return new Promise(
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
}

async function getUser() {
    try {
        let response = await fetchUserData("12345");
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

getUser("12345");

getWinner();


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