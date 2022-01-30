const drivers = ko.observableArray();
const constructors = ko.observableArray();
ko.applyBindings()

$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/nationalities/nationality?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            document.getElementById("nationality-name").innerHTML = response["Name"];
            drivers(response["Drivers"])
            constructors(response["Constructors"]);
        }
    });

})

const onTableRowClickD = (data) => {
    if (event.target.className === "link") return;
    const raceId = data["DriverId"];
    window.location.href = `driver-details.html?id=${raceId}`
}
const onTableRowClickC = (data) => {
    if (event.target.className === "link") return;
    const raceId = data["ConstructorId"];
    window.location.href = `constructor-details.html?id=${raceId}`
}

const onYearClick = (data) => {
    const year = data["Year"];
    window.location.href = `season-details.html?year=${year}`;
}
