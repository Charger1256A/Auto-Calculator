// const array = require('matchdata.json');
// var express = require('express');

$(document).ready(function () {
    $(".form-control").on("change paste keyup", function () {
        var parentRow = $(this).parents(".row");
        var score = 0;
        var capacity = 0;
        parentRow.find('.lower').each(function () {
            var lower = parseInt($(this).val());
            if (!isNaN(lower)) {
                var lowerPoints = lower * 2;
                score += lowerPoints;
                capacity += lower;
            }
        });
        parentRow.find('.outer').each(function () {
            var outer = parseInt($(this).val());
            if (!isNaN(outer)) {
                var outerPoints = outer * 4;
                score += outerPoints;
                capacity += outer;
            }
        })
        parentRow.find('.inner').each(function () {
            var inner = parseInt($(this).val());
            if (!isNaN(inner)) {
                var innerPoints = inner * 6;
                score += innerPoints;
                capacity += inner;
            }
        })
        console.log(score);
        console.log(capacity)
        $("test").ready(function () {
            $("p").text(score);
            $("p1").text(capacity);
        })
    });
});
$(document).ready(function () {
    $(".form-control1").on("change paste keyup", function () {
        var parentRow = $(this).parents(".row1");
        var score1 = 0;
        var capacity1 = 0;
        parentRow.find('.inner1').each(function () {
            var inner1 = parseInt($(this).val());
            if (!isNaN(inner1)) {
                var innerPoints1 = inner1 * 6;
                score1 += innerPoints1;
                capacity1 += inner1;
            }
        });
        parentRow.find('.outer1').each(function () {
            var outer1 = parseInt($(this).val());
            if (!isNaN(outer1)) {
                var outerPoints1 = outer1 * 4;
                score1 += outerPoints1;
                capacity1 += outer1;
            }
        });
        parentRow.find('.lower1').each(function () {
            var lower1 = parseInt($(this).val());
            if (!isNaN(lower1)) {
                var lowerPoints1 = lower1 * 2;
                score1 += lowerPoints1;
                capacity1 += lower1;
            }
        });
        console.log(score1);
        console.log(capacity1);
        $("test1").ready(function () {
            $("p2").text(score1);
            $("p3").text(capacity1);
        });
    });
});


// Configure if statement with API
$(document).ready(function () {
    $(".form-control2").on("change paste keyup", function () {
        var parentRow = $(this).parents(".row2");
        parentRow.find(".lower2").each(function () {
            const path = $(this).val();
            console.log(path);
            var matches = eval(`[${document.getElementsByName("matches")[0].content}]`)
            console.log(matches)
            var matchdata = eval(`${document.getElementsByName("matchdata")[0].content}`)
            console.log(matchdata)
            // ^Meta tag^
            for (var i in matches) {
                // console.log(`i=${i}, matches[i]=${matches[i]}, path=${path}`)
                if (matches[i] == path) {
                    var key = path - 1;
                    $("#blue").click(function () {
                        $("span1").text(matchdata[key]["blue"][0]);
                        $("span2").text(matchdata[key]["blue"][1]);
                        $("span3").text(matchdata[key]["blue"][2]);
                    });
                    $("#red").click(function () {
                        $("span1").text(matchdata[key]["red"][0]);
                        $("span2").text(matchdata[key]["red"][1]);
                        $("span3").text(matchdata[key]["red"][2]);
                    });

                } else {
                    console.log("invalid match key")
                }
            }
            // if (path.includes("qm") && (hasNumber.test(path))) {
            //     fetch(`https://www.thebluealliance.com/api/v3/match/2019utwv_${path}/simple`, {
            //         method: "GET",
            //         headers: {
            //             'X-TBA-Auth-Key': 'oSSXMWPE2jOJrLTYpgMvgP5BTvbtOJRwR6LSv1ytb0g5FS6RlaWBx70Pw0B8cwvA'
            //         }
            //     }).then((response) => response.json()).then(function (data) {
            //         $("#blue").click(function () {
            //             //alert("blue .click() worked")
            //             console.log(data);
            //             var initial = data["alliances"]["blue"]["team_keys"][0];
            //             var final = initial.replace("frc", "");
            //             $("span1").text(final);
            //             var initial1 = data["alliances"]["blue"]["team_keys"][1];
            //             var final1 = initial1.replace("frc", "");
            //             $("span2").text(final1);
            //             var zacharyIsABoT = data["alliances"]["blue"]["team_keys"][2];
            //             var AdityaIsAGOD = zacharyIsABoT.replace("frc", "");
            //             $("span3").text(AdityaIsAGOD);
            //         });
            //         $("#red").click(function () {
            //             // alert("red .click() worked")
            //             var initial2 = data["alliances"]["red"]["team_keys"][0];
            //             var final2 = initial2.replace("frc", "");
            //             $("span1").text(final2);
            //             var initial3 = data["alliances"]["red"]["team_keys"][1];
            //             var final3 = initial3.replace("frc", "");
            //             $("span2").text(final3);
            //             var initial4 = data["alliances"]["red"]["team_keys"][2];
            //             var final4 = initial4.replace("frc", "");
            //             $("span3").text(final4);
            //         });
            //         console.log(data["alliances"]["blue"]["team_keys"]);

            //     });
            // } else {
            //     console.log("invalid event key")
            // }
        });
    });
    $(".form-control3").on("change paste keyup", function () {
        var parentRow = $(this).parents(".row3");
        parentRow.find(".lower3").each(function () {
            const path1 = $(this).val();
            var matches1 = eval(`[${document.getElementsByName("matches1")[0].content}]`)
            console.log(matches1)
            var matchdata1 = eval(`${document.getElementsByName("matchdata1")[0].content}`)
            console.log(matchdata1)
                for (var i in matches1) {
                    if (matches1[i] == path1) {
                        var key1 = path1 - 1;
                        console.log("Hello")
                        console.log(matchdata1[key1]["blue"][0])
                        $("#blue1").click(function () {
                            console.log("hi")
                            $("span4").text(matchdata1[key1]["blue"][0]);
                            $("span5").text(matchdata1[key1]["blue"][1]);
                            $("span6").text(matchdata1[key1]["blue"][2]);
                        });
                        $("#red1").click(function () {
                            $("span4").text(matchdata1[key1]["red"][0]);
                            $("span5").text(matchdata1[key1]["red"][1]);
                            $("span6").text(matchdata1[key1]["red"][2]);
                        });
                    } else {
                        console.log("invalid match key")
                    }

                }
            
            // if (path.includes(`qm`) && hasNumber.test(path)) {
            //     fetch(`https://www.thebluealliance.com/api/v3/match/2019utwv_${path}/simple`, {
            //         method: "GET",
            //         headers: {
            //             'X-TBA-Auth-Key': 'oSSXMWPE2jOJrLTYpgMvgP5BTvbtOJRwR6LSv1ytb0g5FS6RlaWBx70Pw0B8cwvA'
            //         }
            //     }).then((response) => response.json()).then(function (data) {
            //         $("#blue1").click(function () {
            //             //alert("blue .click() worked")
            //             var initial5 = data["alliances"]["blue"]["team_keys"][0];
            //             var final5 = initial5.replace("frc", "");
            //             $("span4").text(final5);
            //             var initial6 = data["alliances"]["blue"]["team_keys"][1];
            //             var final6 = initial6.replace("frc", "");
            //             $("span5").text(final6);
            //             var initial7 = data["alliances"]["blue"]["team_keys"][2];
            //             var final7 = initial7.replace("frc", "");
            //             $("span6").text(final7);
            //         });
            //         $("#red1").click(function () {
            //             // alert("red .click() worked")
            //             var initial8 = data["alliances"]["red"]["team_keys"][0];
            //             var final8 = initial8.replace("frc", "");
            //             $("span4").text(final8);
            //             var initial9 = data["alliances"]["red"]["team_keys"][1];
            //             var final9 = initial9.replace("frc", "");
            //             $("span5").text(final9);
            //             var initial10 = data["alliances"]["red"]["team_keys"][2];
            //             var final10 = initial10.replace("frc", "");
            //             $("span6").text(final10);
            //         });
            //         console.log(data["alliances"]["blue"]["team_keys"]);
            //     });
            // }  else {
            //     console.log("invalid event key")
            // }
        });
    });
});