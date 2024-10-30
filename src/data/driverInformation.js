const driveInforamations = [
    {
        id: "1",
        first: "saikiran",
        last: "manchala",
        drivercode: "123",
        primaryEmail: "sai@gmail.com",
        phone: "8885929690",
        country: "india",
        isAvailable: true
    },
    {
        id: "2",
        first: "shivaprasad",
        last: "manchala",
        drivercode: "456",
        primaryEmail: "shiva@gmail.com",
        phone: "6304638984",
        country: "usa",
        isAvailable: false
    },
    {
        id: "3",
        first: "raji",
        last: "manchala",
        drivercode: "890",
        primaryEmail: "raji@gmail.com",
        phone: "7675876208",
        country: "Pakistan",
        isAvailable: false
    }

]

module.exports = driveInforamations;


/*

for testing 

query{
  driveInforamtions {
    first,last,phone,country
  }
}
*/