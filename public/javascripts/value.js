// var express = require('express');

$(document).ready(function () {
    const match = () => {fetch(`https://www.thebluealliance.com/api/v3/match/2019qcmo_qm1/simple`, {
        method: "GET",
        headers: {
            'X-TBA-Auth-Key': 'oSSXMWPE2jOJrLTYpgMvgP5BTvbtOJRwR6LSv1ytb0g5FS6RlaWBx70Pw0B8cwvA'
        },
    }).then(response => response).then(success => console.log(success + " it worked")).catch(error => console.log(error))
}
(match()).then(snapshot => {
    console.log(snapshot);
});
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
        })
        parentRow.find('.outer1').each(function () {
            var outer1 = parseInt($(this).val());
            if (!isNaN(outer1)) {
                var outerPoints1 = outer1 * 4;
                score1 += outerPoints1;
                capacity1 += outer1;
            }
        })
        parentRow.find('.lower1').each(function () {
            var lower1 = parseInt($(this).val());
            if (!isNaN(lower1)) {
                var lowerPoints1 = lower1 * 2;
                score1 += lowerPoints1;
                capacity1 += lower1;
            }
        })
        console.log(score1);
        console.log(capacity1)
        $("test1").ready(function () {
            $("p2").text(score1);
            $("p3").text(capacity1);
        })
    });
});