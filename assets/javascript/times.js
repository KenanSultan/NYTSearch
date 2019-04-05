var qurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

var apikey = "LICjtqANAEWiEFnRRv38UUwE6hqGOKTE"

$("#search-btn").on("click", function () {
    console.log("ok")

    var searchInput = $("#search-term").val()

    var number = $("#sel1").val()

    var beginYear = "20120101"
    var begin = $("#start-year").val()
    console.log(begin)
    if (begin.length > 0) {
        beginYear = begin + "0101"
    }
    console.log(beginYear)

    var endYear = "20190101"
    var end = $("#end-year").val()
    console.log(end)
    if (end.length > 0) {
        endYear = end + "0101"
    }
    console.log(beginYear)

    $.ajax({
        url: qurl,
        data: {
            q: searchInput,
            "api-key": apikey,
            "begin_date": beginYear,
            "end_date": endYear
        }
    }).done(function (resp) {
        $(".panel-footer").empty()

        for (let i = 0; i < number; i++) {
            var holderDiv = $("<div>")
            holderDiv.addClass("holder")

            var articleNumber = $("<span>")
            articleNumber.addClass("article-number")
            articleNumber.html(i + 1)
            holderDiv.append(articleNumber)

            var articleHead = $("<h1>")
            articleHead.addClass("article-head")
            articleHead.html(resp.response.docs[i].headline.name)
            holderDiv.append(articleHead)

            var autor = $("<p>")
            autor.addClass("article-autor")
            autor.html(resp.response.docs[i].byline.original)
            holderDiv.append(autor)

            $(".panel-footer").append(holderDiv)


        }
    })

})

$("#clear-btn").on("click", function () {
    $(".panel-footer").empty()
})