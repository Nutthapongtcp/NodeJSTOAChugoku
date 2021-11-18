const f = async() => {
    let promise = new Promise((resolve, reject) => {
        console.log("กำลังโหลดข้อมูล...")
        setTimeout(() => {
            resolve("done")
        }, 2000)

    })

    let result = await promise
    console.log(result)
}

f()

clg