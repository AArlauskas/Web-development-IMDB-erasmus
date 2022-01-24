$(document).ready(() => {
    const parameters = new URLSearchParams(window.location.search);
    const id = parameters.get("id");

    $.ajax({
        url: `http://192.168.160.58/Formula1/api/constructors/constructor?id=${id}`,
        context: "application/json",
        method: "GET",
        success: (response) => {
            console.log(response)
            if (response["ImageUrl"] !== null) {
                document.getElementById("constructor-img").setAttribute("src", response["ImageUrl"])
            }
            document.getElementById("wiki-url").setAttribute("href", response["Url"]);
            document.getElementById("constructor-name").innerHTML = response["Name"];
            document.getElementById("constructor-nationality").innerHTML = `Nationality: ${response["Nationality"]}`;
            //document.getElementById("race-date").innerHTML = response["Date"].split("T")[0];

            //results(response["Results"].filter(el => el.Position < 10))
        }
    });
})