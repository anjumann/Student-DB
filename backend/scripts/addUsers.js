const axios = require("axios")

const mockData = require("../MOCK_DATA.json")

const users = mockData.map(async (user, key) => {
    try {

        let headersList = {
            "Accept": "*/*",
            "Content-Type": "application/json"
        }

        const branch = ["ISE", "CSE", "ECE", "EEE", "MECH", "CIVIL", "CHEM", "MBA", "MCA"]
        const section = ["A", "B", "C", "D"]
        const semester = ["1", "2", "3", "4", "5", "6", "7", "8"]
        let bodyContent = JSON.stringify({
            "name": user.name,
            "email": user.email,
            "password": user.password,
            "usn": user.usn,
            "branch": branch[Math.floor(Math.random() * branch.length)],
            "section": section[Math.floor(Math.random() * section.length)],
            "semester": semester[Math.floor(Math.random() * semester.length)]
        });

        let reqOptions = {
            url: "http://localhost:8080/auth/register",
            method: "POST",
            headers: headersList,
            data: bodyContent,
        }

        let response = await axios.request(reqOptions);
        console.log(response.data);
        console.log(user);
    }
    catch (error) {
        console.log(error);
    }
})

Promise.all(users).then(() => {
    console.log("Done");
})