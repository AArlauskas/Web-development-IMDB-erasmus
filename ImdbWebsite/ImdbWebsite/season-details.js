const races = ko.observableArray();
ko.applyBindings();

$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const year = parameters.get("year");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/seasons/season?year=${year}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            document.getElementById("season-year").innerHTML = response["Year"];
            races(response["Races"]);
        }
    });
});

const onTableWikiClick = (race) => {
    window.location.href = race["Url"];
}

const onTableRowClick = (data) => {
    const raceId = data["RaceId"];
    window.location.href = `race-details.html?id=${raceId}`
}