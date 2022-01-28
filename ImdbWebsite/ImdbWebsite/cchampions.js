const table = ko.observableArray([])
ko.applyBindings()

$(document).ready(function () {
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/statistics/cchampions",
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            table(response)
        }
    })
});

const onTableRowClick = (data) => {
    const constructorId = data["ConstructorId"];
    window.location.href = `constructor-details.html?id=${constructorId}`
}
