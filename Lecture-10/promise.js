const hasMeeting = true;

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

meeting
    .then((res) =>{
        console.log(res)
    })
    .catch((err) =>{
        console.log(err)
    })