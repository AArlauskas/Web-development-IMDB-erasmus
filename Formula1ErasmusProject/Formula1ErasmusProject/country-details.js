const circuits = ko.observableArray();
ko.applyBindings();

$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/countries/country?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            document.getElementById("country-name").innerHTML = response["Name"];
            circuits(response["Circuits"]);
        }
    });
})

const onTableRowClick = (data) => {
    const circuitId = data["CircuitId"];
    window.location.href = `circuit-details.html?id=${circuitId}`
}