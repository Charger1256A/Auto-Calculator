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

        
        // Edit this
        // parentRow.find('.lower').each(function() {
        //     var lower = parseInt($(this).val());
        //     if (!isNaN(lower)) {
        //         var lowerPoints = lower * 2;
        //         score1 += lowerPoints;
        //         capacity1 += lower;
        //     }      
        // });
        // parentRow.find('.outer').each(function() {
        //     var lower = parseInt($(this).val());
        //     if (!isNaN(lower)) {
        //         var lowerPoints = lower * 4;
        //         score1 += lowerPoints;
        //         capacity1 += lower;
        //     }      
        // });
        // parentRow.find('.inner').each(function() {
        //     var lower = parseInt($(this).val());
        //     if (!isNaN(lower)) {
        //         var lowerPoints = lower * 6;
        //         score1 += lowerPoints;
        //         capacity1 += lower;
        //     }      
        // });
        // console.log(innerCapacity);
        console.log(score);
    
        console.log(capacity)
        $("test").ready(function () {
            $("p").text(score);
            $("p1").text(capacity);
        })

        // exports.score = score;
        // exports.capacity = capacity;  
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
            // console.log("hello")
            $("p2").text(score1);
            $("p3").text(capacity1);
        })
        
    });
});


        // var valueLower = $(this).val()
        // var valueOuter = $(this).val()
        // var valueInner = $(this).val()
        // var LowerPoints = Number(valueLower) + 1
        // var OuterPoints = Number(valueOuter) + 3
        // var InnerPoints = Number(valueInner) + 5
        // var amountOfPoints = LowerPoints + OuterPoints + InnerPoints



        // console.log(amountOfPoints);


        // console.log(parentRow.find('.inner'))
        // console.log(parentRow.find(".outer"))       