const promise1 = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Prominse 1 Resolved");
    },5000)
})

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Promise 2 Resolved");
    }, 2000)
})

Promise.race([promise1, promise2]).then((result)=>{
        console.log(result);
    })



/* 
======PROMISE ALL METHOD======

const promise1 = Promise.resolve("Prominse 1 Resolved");

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        resolve("Promise 2 Resolved")
    }, 2000)
})

Promise.all([promise1, promise2])
    .then((result)=>{
        console.log(result);
    }) */


// ******UNDERTANDING OF PROMISE******

/* const hasMeeting = false;

const meeting = new Promise((resolve, reject) =>{
    if (!hasMeeting) {
        const meetingDatails = {
            name: "CPE Meeting",
            location: "Google Meet",
            time: "10: 00 PM",
        }

        resolve(meetingDatails)
    }else{
        reject(new Error("Meeting already scheduled!"))
    }
})

// const addToCalender = (meetingDetails) =>{
//     return new Promise((resolve, reject)=>{
//         const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
//         resolve(calender)
//     })
// }

const addToCalender = (meetingDetails) =>{
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        return Promise.resolve(calender)
}

meeting
    .then(addToCalender)  // if you want to chain
    .then((res) =>{
        console.log(JSON.stringify(res))
    })
    .catch((err) =>{
        console.log(err.message)
    })

console.log("Hello") */