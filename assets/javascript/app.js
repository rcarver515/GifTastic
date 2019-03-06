$(document).ready(function () {

    // Create an array and save it to a variable called topics
    var heroTopics = ["Batman", "Superman", "The Flash", "Aquaman", "Cyborg", "Wonder Woman"];

    $(document).on("click", ".heroButtons", function () {
        console.log('here');

        var hero = $(this).attr("data-person");

        heroGen(hero);
    })


    $("#guess-btn").on("click", function(){
        
        //<button class="btn btn-primary heroButtons" type="submit" data-person="Cyborg">Cyborg</button>
        var newHero = $("#user-search").val();
        var newBtn = $("<button class='btn btn-primary heroButtons'></button>");
        newBtn.attr('data-person', newHero);
        newBtn.text(newHero);
        $("#heroBtnContainer").append(newBtn);
        });
});

function heroGen(hero) {
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + hero + "&api_key=wHCSuOfsZ0RmYMldeKM8aVMiOd5vUtFU" + "&limit=5";

    // Ajax GET request
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log(queryURL);

            // Create a div(button) to hold hero name

            var heroTopics = response.data;

            for (var i = 0; i < heroTopics.length; i++) {

                var heroDiv = $("<div class=btn btn-primary>");


                var p = $("<p>").text("Name: " + hero);

                var heroImage = $("<img>");

                heroImage.attr("src", heroTopics[i].images.fixed_height.url);

                heroDiv.append(p);
                heroDiv.append(heroImage)

                heroImage.attr("alt", "hero image");

                $("#gifs-appear-here").prepend(heroDiv);

            }

        })
};