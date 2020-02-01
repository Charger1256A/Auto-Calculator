
$(document).ready(function() {
    $(".form-control").on("change paste keyup", function() {
        var parentRow = $(this).parents(".row");
        var score = 0;
        var capacity = 0;
       
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
        // console.log(innerCapacity);
        console.log(score);
     
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
       
exports.score = score;
exports.capacity = capacity;   


