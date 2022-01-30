﻿const races = ko.observableArray();
const statistics = ko.observableArray();
ko.applyBindings()
const table = ko.observableArray();

$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/drivers/driver?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            if (response["ImageUrl"] !== null) {
                document.getElementById("driver-img").setAttribute("src", response["ImageUrl"])
            }
            document.getElementById("wiki-url").setAttribute("href", response["Url"]);
            document.getElementById("driver-name").innerHTML = response["Name"];
            document.getElementById("driver-nationality").innerHTML = `Nationality:<span id="nat_fun" style ="cursor: pointer;"> ${response['Nationality']} </span>`;
            races(response["Races"])
        }
    });

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/statistics/driver?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            document.getElementById("driver-races-count").innerHTML = `Races: ${response['Races']}`;
            document.getElementById("driver-races-win").innerHTML = `Wins: ${response['Wins']}`;
            statistics(response["Career"]);
        }
    });
})

const onTableRowClick = (data) => {
    if (event.target.className === "link") return;
    const raceId = data["RaceId"];
    window.location.href = `race-details.html?id=${raceId}`
}

const onYearClick = (data) => {
    const year = data["Year"];
    window.location.href = `season-details.html?year=${year}`;
}
$("#driver-nationality").click(function () {
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