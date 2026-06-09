var size = 0;
var placement = 'point';

var style_BigBoxProperties0100_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("final_score");
    var labelFont = "13.0px \'Acumin Pro\', sans-serif";
    var labelFill = "#565656";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (exp_label_BigBoxProperties0100_4_eval_expression(context) !== null && resolution > 0 && resolution < 5) {
        labelText = String(exp_label_BigBoxProperties0100_4_eval_expression(context));
    }
    if (value >= 28.381056 && value <= 34.140883) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(68,1,84,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 34.140883 && value <= 38.584633) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(59,82,139,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 38.584633 && value <= 43.581811) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(33,144,141,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 43.581811 && value <= 48.789690) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(93,201,99,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    } else if (value >= 48.789690 && value <= 72.766500) {
            style = [ new ol.style.Style({
        image: new ol.style.Circle({radius: 4.0 + size,
            displacement: [0, 0],  fill: new ol.style.Fill({color: 'rgba(253,231,37,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })]
                    };

    return style;
};
