const races = ko.observableArray([])
ko.applyBindings()

$(document).ready(function() {
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/races?page=1&pagesize=20",
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            races(response["List"])
        }
    })
    $("#button-table-search").click(() => {
        searchValue = document.getElementById("table-search").value;
        $.ajax({
            url: `http://192.168.160.58/Formula1/api/search/races?q=${searchValue}`,
            method: "GET",
            success: (response) => {
                console.log(response)
                races(response)
            }
        })
    })
});

