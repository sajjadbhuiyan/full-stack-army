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


const addToCalender = (meetingDetails) =>{
    // meetingDetails means ---
    // const meetingDatails = {
    //     name: "CPE Meeting",
    //     location: "Google Meet",
    //     time: "10: 00 PM",
    // }
        const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`
        return Promise.resolve(calender)
}


async function myMeeting(){
    try
    {const meetingObject = await meeting;
    const calander = await addToCalender(meetingObject);
    console.log(calander)
    }catch{
        console.log(`something wrong happend`);
    }
}

myMeeting();

console.log("Hello")