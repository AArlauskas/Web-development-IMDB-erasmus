const next = searchname => {
    if (hasNext) {
        if (!hasPrevious) {
            document.getElementById("button-previous-clch").className = "page-item";
            document.getElementById("button-previous-clch2").className = "page-item";
            document.getElementById("button-first-clch").className = "page-item";
            document.getElementById("button-first-clch2").className = "page-item";
        }
        a++
        $.ajax({
            url: "http://192.168.160.58/Formula1/api/" + searchname +"?page=" + a + "&pagesize=20",
            method: "GET",
            success: (response) => {
                console.log(response)
                hasNext = response["HasNext"]
                hasPrevious = response["HasPrevious"]
                races(response["List"])
                if (!response["HasNext"]) {
                    document.getElementById("button-next-clch").className = "page-item disabled";
                    document.getElementById("button-next-clch2").className = "page-item disabled";
                    document.getElementById("button-last-clch").className = "page-item disabled";
                    document.getElementById("button-last-clch2").className = "page-item disabled";
                }
            }
        })
        document.getElementById("current-page").innerHTML = a;
        document.getElementById("current-page2").innerHTML = a;

    }
}
const lastpage = searchname => {
    if (!hasPrevious) {
        document.getElementById("button-previous-clch").className = "page-item";
        document.getElementById("button-previous-clch2").className = "page-item";
        document.getElementById("button-first-clch").className = "page-item";
        document.getElementById("button-first-clch2").className = "page-item";
    }
    a = 53
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/" + searchname +"?page=" + a + "&pagesize=20",
        method: "GET",
        success: (response) => {
            console.log(response)
            hasNext = response["HasNext"]
            hasPrevious = response["HasPrevious"]
            races(response["List"])
            document.getElementById("button-next-clch").className = "page-item disabled";
            document.getElementById("button-next-clch2").className = "page-item disabled";
            document.getElementById("button-last-clch").className = "page-item disabled";
            document.getElementById("button-last-clch2").className = "page-item disabled";
        }
    })
    document.getElementById("current-page").innerHTML = a;
    document.getElementById("current-page2").innerHTML = a;
}
const previous = searchname => {
    if (hasPrevious) {
        if (!hasNext) {
            document.getElementById("button-next-clch").className = "page-item";
            document.getElementById("button-next-clch2").className = "page-item";
            document.getElementById("button-last-clch").className = "page-item";
            document.getElementById("button-last-clch2").className = "page-item";
        }
        a--
        $.ajax({
            url: "http://192.168.160.58/Formula1/api/" + searchname +"?page=" + a + "&pagesize=20",
            method: "GET",
            success: (response) => {
                console.log(response)
                hasNext = response["HasNext"]
                hasPrevious = response["HasPrevious"]
                races(response["List"])
                if (!response["HasPrevious"]) {
                    document.getElementById("button-previous-clch").className = "page-item disabled";
                    document.getElementById("button-previous-clch2").className = "page-item disabled";
                    document.getElementById("button-first-clch").className = "page-item disabled";
                    document.getElementById("button-first-clch2").className = "page-item disabled";
                }
            }
        })
    }
    document.getElementById("current-page").innerHTML = a;
    document.getElementById("current-page2").innerHTML = a;
}
const firstpage = searchname => {
    document.getElementById("button-next-clch").className = "page-item";
    document.getElementById("button-next-clch2").className = "page-item";
    document.getElementById("button-last-clch").className = "page-item";
    document.getElementById("button-last-clch2").className = "page-item";
    a = 1
    $.ajax({
        url: "http://192.168.160.58/Formula1/api/" + searchname +"?page=" + a + "&pagesize=20",
        method: "GET",
        success: (response) => {
            console.log(response)
            hasNext = response["HasNext"]
            hasPrevious = response["HasPrevious"]
            races(response["List"])
            document.getElementById("button-previous-clch").className = "page-item disabled";
            document.getElementById("button-previous-clch2").className = "page-item disabled";
            document.getElementById("button-first-clch").className = "page-item disabled";
            document.getElementById("button-first-clch2").className = "page-item disabled";
        }
    })
    document.getElementById("current-page").innerHTML = a;
    document.getElementById("current-page2").innerHTML = a;

}