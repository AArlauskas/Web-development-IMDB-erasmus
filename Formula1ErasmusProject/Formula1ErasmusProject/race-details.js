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
            document.getElementById("race-circuit-name").innerHTML = `Circuit:<span id="circuit_fun" style ="cursor: pointer;"> ${response['Circuit']} </span>`;
            document.getElementById("race-date").innerHTML = response["Date"].split("T")[0];
            document.getElementById("race-year").innerHTML = response["Year"];

            results(response["Results"].filter(el => el.Position < 10))
        }
    });
})

const onTableRowClick = (data) => {

    if (event.target.className === "link") return;
    const driverId = data["DriverId"];
    window.location.href = `driver-details.html?id=${driverId}`
}

const onYearClick = (e) => {
    const year = e.target.innerHTML;
    window.location.href = `season-details.html?year=${year}`;
}

function go() {
    console.log("bum")
    var constr = event.target.innerHTML
    $.ajax({
        url: `http://192.168.160.58/Formula1/api/search/constructors?q=${constr}`,
        method: "GET",
        success: (response) => {
            console.log(response)
            const constructorId = response[0]["ConstructorId"];
            window.location.href = `constructor-details.html?id=${constructorId}`
        }
    })
}


$("#race-circuit-name").click(function () {
    var circuit = $("#circuit_fun").html();
    var id;
    $.ajax({
        url: `http://192.168.160.58/Formula1/api/circuits`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            for (var i = 0; i < response["Total"]; i++) {
                if (response["List"][i]["Name"].replace(/\s/g, '') === circuit.replace(/\s/g, '')) {
                    id = response["List"][i]["CircuitId"]
                    window.location.href = `circuit-details.html?id=${id}`
                }

            }
        }
    });

})