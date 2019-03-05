$(document).ready(function () {

    // Create an array and save it to a variable called topics
    var heroTopics = ["Batman", "Superman", "The Flash", "Aquaman", "Cyborg", "Wonder Woman"];

    $("btn btn-primary").on("click", function () {

        var hero = $(this).attr("data-name");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=batman";

        hero + "&api_key=wHCSuOfsZ0RmYMldeKM8aVMiOd5vUtFU=5"

        // Ajax GET request
        $.ajax({
            url: queryURL,
            method: "GET"
        })

            .then(function (response) {

                // Create a div(button) to hold hero name

                var heroName = response.data;

                for (var i = 0; i < heroTopics.length; i++) {
                    console.log(heroTopics[1])

                    var heroDiv = $("<div class='hero'>");


                    var p = $("<p>").text("Name: " + heroName);

                    var heroImage = $("<img>");

                    heroImage.attr("src", results[i].images.fixed - height.url)

                    heroDiv.append(p);
                    heroDiv.append(heroImage)

                    var imgURL = response.data.image_original_url;


                    heroImage.attr("src", imgURL);
                    heroImage.attr("alt", "hero image");

                    $("#gifs-appear-here").prepend(heroDiv);

                }
            })
            })
            })