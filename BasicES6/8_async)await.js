const f = async() => {
    let promise = new Promise((resolve, reject) => {
        console.log("Loading...")
        setTimeout(() => {
            resolve("done")
        }, 2000)

    })

    let result = await promise
    console.log(result)
}

f()

clg