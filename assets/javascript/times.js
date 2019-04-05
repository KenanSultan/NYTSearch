var qurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

var apikey = "LICjtqANAEWiEFnRRv38UUwE6hqGOKTE"

$("#search-btn").on("click", function () {
    console.log("ok")

    var searchInput = $("#search-term").val()

    var number = $("#sel1").val()

    var startYear = $("#start-year").val()

var endYear = $("#end-year").val()
$.ajax ({
    url: qurl,
    data: {
        q: searchInput,
        "api-key": apikey
        "begin_date": startYear + "0101",
        "end_date": endYear + "0101"
    }
}).done (function (resp) {

    for ( let i = 0; i < numbers; i++ ) {
    var holderDiv = $("<div>")
    holderDiv.addClass("holder")
    
    var articleNumber = $("<span>")
    articleNumber.addClass ("article-number")
    articleNumber.html(i)
    holderDiv.append (articleNumber)
    
    var articleHead = $("<h1>") 
    articleHead.addClass("article-head")
    articleHead.html(resp.response.docs[i].headline.name)
    holderDiv.append (articleHead)
    
    var autor = $("<p>")
    autor.addClass("article-autor")
    autor.html(resp.response.docs[i].byline.original)
    holderDiv.append (autor)


    }
})

})

$("#clear-btn").on("click", function () {
    $(".articles").empty()
})