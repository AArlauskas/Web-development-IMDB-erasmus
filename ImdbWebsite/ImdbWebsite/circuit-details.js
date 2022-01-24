const races = ko.observableArray();
ko.applyBindings();

$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/circuits/circuit?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            if (response["ImageUrl"] !== null) {
                document.getElementById("circuit-img").setAttribute("src", response["ImageUrl"])
            }
            document.getElementById("wiki-url").setAttribute("href", response["Url"]);
            document.getElementById("circuit-name").innerHTML = response["Name"];
            document.getElementById("circuit-country").innerHTML = `Country: ${response["Country"]}`;
            document.getElementById("circuit-location").innerHTML = `Location: ${response["Location"]}`;

            races(response["Races"]);

        }
    });
});

const onTableRowClick = (data) => {
    const raceId = data["RaceId"];
    window.location.href = `race-details.html?id=${raceId}`
}