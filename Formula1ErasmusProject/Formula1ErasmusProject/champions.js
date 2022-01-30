const table = ko.observableArray([])
ko.applyBindings()

$(document).ready(function () {
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/statistics/champions",
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            table(response)
        }
    })
});

const onTableRowClick = (data) => {
    if (event.target.className === "link") return;
    const driverId = data["DriverId"];
    window.location.href = `driver-details.html?id=${driverId}`
}
const onYearClick = (data) => {
    const year = data["Year"];
    window.location.href = `season-details.html?year=${year}`;
}
