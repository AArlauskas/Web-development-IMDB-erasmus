const movies = ko.observableArray([])
ko.applyBindings()

$(document).ready(function() {
    console.log("ready")
    $.ajax({
        url: "http://192.168.160.58/imdb5000/api/movies",
        context: "application/json",
        method: "GET",
        success: (response) => {
            movies(response)
        }
    })
});

