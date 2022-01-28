const results = ko.observableArray();
ko.applyBindings()
$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/races/race?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            document.getElementById("wiki-url").setAttribute("href", response["Url"]);
            document.getElementById("race-name").innerHTML = response["Name"];
            document.getElementById("race-circuit-name").innerHTML = `Circuit: ${response["Name"]}`;
            document.getElementById("race-date").innerHTML = response["Date"].split("T")[0];
            document.getElementById("race-year").innerHTML = response["Year"];

            results(response["Results"].filter(el => el.Position < 10))
        }
    });
})

const onTableRowClick = (data) => {
    const driverId = data["DriverId"];
    window.location.href = `driver-details.html?id=${driverId}`
}

const onYearClick = (e) => {
    const year = e.target.innerHTML;
    window.location.href = `season-details.html?year=${year}`;
}