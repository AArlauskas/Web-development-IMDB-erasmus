const table = ko.observableArray([])
ko.applyBindings()
var maxpage
$(document).ready(function () {
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/countries?page=" + a + "&pagesize=20",
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            table(response["List"])
            maxpage = response['PageCount']

        }
    })
    $("#button-table-search").click(() => {
        searchValue = document.getElementById("table-search").value;
        $.ajax({
            url: `http://192.168.160.58/Formula1/api/search/countries?q=${searchValue}`,
            method: "GET",
            success: (response) => {
                console.log(response)
                table(response)
            }
        })
    })
    $("#table-search").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#button-table-search").click();
        }
    });
});

const onTableRowClick = (data) => {
    const driverId = data["NationalityId"];
    window.location.href = `country-details.html?id=${driverId}`
}
