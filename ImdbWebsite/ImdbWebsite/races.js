const races = ko.observableArray([])
ko.applyBindings()
var a = 1;
var hasPrevious = false;
var hasNext = true;



    

$(document).ready(function() {
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/races?page="+a+"&pagesize=20",
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
    $("#table-search").keyup(function (event) {
        if (event.keyCode === 13) {
            $("#button-table-search").click();
        }
    });
});

