var qurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json"

var apikey = "LICjtqANAEWiEFnRRv38UUwE6hqGOKTE"

$("#search-btn").on("click", function () {

var searchInput = $("#search-term").val()

var number = $("#sel1").val()

var startYear = $("#start-year").val()

var endYear = $("#end-year").val()
$ajax ({
    url: qurl,
    data: {
        q: searchInput,
        "api-key": apikey
    }
}).done (function (response) {
    console.log (response)
})

})

$("#clear-btn").on("click", function(){
    $(".articles").empty()
})