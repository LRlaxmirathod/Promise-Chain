// promises chain 

function getdata(dataid){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            console.log(dataid)
            resolve("promise is resolved")
        } , 1000)
    })
}

getdata("getting data").then(()=>{
    console.log("getting data 1")
    return getdata(1)
    .then(()=>{
        console.log("getting data 2")
        return getdata(2)
        .then(()=>{
            console.log("getting data3")
            return getdata(3)
            .then(()=>{
                console.log("getting data 4")
                return getdata(4)
            })
        })
    })
})