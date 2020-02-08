// var express = require('express');

$(document).ready(function() {
    $(".form-control").on("change paste keyup", function() {
        var parentRow = $(this).parents(".row");
        var score = 0;
        var capacity = 0;
        var score1 = 0;
        var capacity1 = 0;
       
        parentRow.find('.lower').each(function() {
            var lower = parseInt($(this).val());
            if (!isNaN(lower)) {
                var lowerPoints = lower * 2;
                score += lowerPoints;
                capacity += lower;
            }      
        });
        parentRow.find('.outer').each(function(){
            var outer = parseInt($(this).val());
            if (!isNaN(outer)){
                var outerPoints = outer * 4;
                score += outerPoints;
                capacity += outer;
            }
           
            // console.log(OuterPoints);
        })
        parentRow.find('.inner').each(function(){
            var inner = parseInt($(this).val());
            if (!isNaN(inner)){
                var innerPoints = inner * 6;
                score += innerPoints;
                capacity += inner;
            }
        })
        parentRow.find('.lower1').each(function() {
            var lower = parseInt($(this).val());
            if (!isNaN(lower)) {
                var lowerPoints = lower * 2;
                score1 += lowerPoints;
                capacity1 += lower;
            }      
        });
        parentRow.find('.outer1').each(function() {
            var lower = parseInt($(this).val());
            if (!isNaN(lower)) {
                var lowerPoints = lower * 4;
                score1 += lowerPoints;
                capacity1 += lower;
            }      
        });
        parentRow.find('.inner1').each(function() {
            var lower = parseInt($(this).val());
            if (!isNaN(lower)) {
                var lowerPoints = lower * 6;
                score1 += lowerPoints;
                capacity1 += lower;
            }      
        });
        // console.log(innerCapacity);
        console.log(score);
        console.log(capacity)
        $("p").text(score);
        $("p1").text(capacity);
        $("p2").text(score1);
        $("p3").text(capacity1);
        // exports.score = score;
        // exports.capacity = capacity;  
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