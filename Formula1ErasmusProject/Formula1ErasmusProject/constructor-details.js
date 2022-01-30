﻿const races = ko.observableArray();
const drivers = ko.observableArray();

ko.applyBindings();

$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/constructors/constructor?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            if (response["ImageUrl"] !== null) {
                document.getElementById("constructor-img").setAttribute("src", response["ImageUrl"])
            }
            document.getElementById("wiki-url").setAttribute("href", response["Url"]);
            document.getElementById("constructor-name").innerHTML = response["Name"];
            document.getElementById("constructor-nationality").innerHTML = `Nationality:<span id="nat_fun" style ="cursor: pointer;"> ${response['Nationality']} </span>`;
            races(response["Races"]);
            drivers(response["Drivers"]);
        }
    });
})

const onDriverTableRowClick = (data) => {
    if (event.target.className === "link") return;
    const driverId = data["DriverId"];
    window.location.href = `driver-details.html?id=${driverId}`
}

const onRaceTableRowClick = (data) => {
    if (event.target.className === "link") return;
    const raceId = data["RaceId"];
    window.location.href = `race-details.html?id=${raceId}`
}
const onYearClick = (data) => {
    const year = data["Year"];
    window.location.href = `season-details.html?year=${year}`;

}

$("#constructor-nationality").click(function () {
    var nationality = $("#nat_fun").html();
    var id;
    $.ajax({
        url: `http://192.168.160.58/Formula1/api/nationalities`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            for (var i = 0; i < response["Total"]; i++) {
                if (response["List"][i]["Name"].replace(/\s/g, '') === nationality.replace(/\s/g, '')) {
                    id = response["List"][i]["NationalityId"]
                    window.location.href = `nationality-details.html?id=${id}`
                }

            }
        }
    });

})

