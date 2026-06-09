ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8916975.135844, 4921385.221275, -8892333.156253, 4945903.990968]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_AlleghenyCountyBoundaries_1 = new ol.format.GeoJSON();
var features_AlleghenyCountyBoundaries_1 = format_AlleghenyCountyBoundaries_1.readFeatures(json_AlleghenyCountyBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlleghenyCountyBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlleghenyCountyBoundaries_1.addFeatures(features_AlleghenyCountyBoundaries_1);
var lyr_AlleghenyCountyBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlleghenyCountyBoundaries_1, 
                style: style_AlleghenyCountyBoundaries_1,
                popuplayertitle: 'Allegheny County Boundaries',
                interactive: false,
                title: '<img src="styles/legend/AlleghenyCountyBoundaries_1.png" /> Allegheny County Boundaries'
            });
var format_OpportunityTracts_2 = new ol.format.GeoJSON();
var features_OpportunityTracts_2 = format_OpportunityTracts_2.readFeatures(json_OpportunityTracts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpportunityTracts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OpportunityTracts_2.addFeatures(features_OpportunityTracts_2);
var lyr_OpportunityTracts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OpportunityTracts_2, 
                style: style_OpportunityTracts_2,
                popuplayertitle: 'Opportunity Tracts',
                interactive: false,
    title: 'Opportunity Tracts<br />\
    <img src="styles/legend/OpportunityTracts_2_0.png" /> High Opportunity Tract<br />\
    <img src="styles/legend/OpportunityTracts_2_1.png" /> Non Opportunity Tract<br />' });
var format_SuperfundSites_3 = new ol.format.GeoJSON();
var features_SuperfundSites_3 = format_SuperfundSites_3.readFeatures(json_SuperfundSites_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SuperfundSites_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SuperfundSites_3.addFeatures(features_SuperfundSites_3);
var lyr_SuperfundSites_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SuperfundSites_3, 
                style: style_SuperfundSites_3,
                popuplayertitle: 'Superfund Sites',
                interactive: true,
                title: '<img src="styles/legend/SuperfundSites_3.png" /> Superfund Sites'
            });
var format_BigBoxProperties0100_4 = new ol.format.GeoJSON();
var features_BigBoxProperties0100_4 = format_BigBoxProperties0100_4.readFeatures(json_BigBoxProperties0100_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BigBoxProperties0100_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BigBoxProperties0100_4.addFeatures(features_BigBoxProperties0100_4);
var lyr_BigBoxProperties0100_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BigBoxProperties0100_4, 
                style: style_BigBoxProperties0100_4,
                popuplayertitle: 'Big-Box Properties [0-100]',
                interactive: true,
    title: 'Big-Box Properties [0-100]<br />\
    <img src="styles/legend/BigBoxProperties0100_4_0.png" /> 28.4 - 34.1<br />\
    <img src="styles/legend/BigBoxProperties0100_4_1.png" /> 34.1 - 38.6<br />\
    <img src="styles/legend/BigBoxProperties0100_4_2.png" /> 38.6 - 43.6<br />\
    <img src="styles/legend/BigBoxProperties0100_4_3.png" /> 43.6 - 48.8<br />\
    <img src="styles/legend/BigBoxProperties0100_4_4.png" /> 48.8 - 72.8<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_AlleghenyCountyBoundaries_1.setVisible(true);lyr_OpportunityTracts_2.setVisible(true);lyr_SuperfundSites_3.setVisible(true);lyr_BigBoxProperties0100_4.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_AlleghenyCountyBoundaries_1,lyr_OpportunityTracts_2,lyr_SuperfundSites_3,lyr_BigBoxProperties0100_4];
lyr_AlleghenyCountyBoundaries_1.set('fieldAliases', {'pk_0': 'pk_0', 'pk': 'pk', 'statefp': 'statefp', 'countyfp': 'countyfp', 'countyns': 'countyns', 'geoid': 'geoid', 'geoidfq': 'geoidfq', 'name': 'name', 'namelsad': 'namelsad', 'lsad': 'lsad', 'classfp': 'classfp', 'mtfcc': 'mtfcc', 'csafp': 'csafp', 'cbsafp': 'cbsafp', 'metdivfp': 'metdivfp', 'funcstat': 'funcstat', 'aland': 'aland', 'awater': 'awater', 'intptlat': 'intptlat', 'intptlon': 'intptlon', 'calculated_area': 'calculated_area', 'concatname': 'concatname', });
lyr_OpportunityTracts_2.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'FID_1': 'FID_1', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'AFFGEOID': 'AFFGEOID', 'GEOID': 'GEOID', 'NAME': 'NAME', 'LSAD': 'LSAD', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', 'Name_Num': 'Name_Num', 'Tracts': 'Tracts', 'OI_OBJECTID': 'OI_OBJECTID', 'OI_AFFGEOID': 'OI_AFFGEOID', 'OI_GEOID': 'OI_GEOID', 'OI_Census_Tract': 'OI_Census_Tract', 'OI_Municipality': 'OI_Municipality', 'OI_Neighborhood': 'OI_Neighborhood', 'OI_Opportunity_Tract': 'OI_Opportunity_Tract', 'OI_Population': 'OI_Population', 'OI_Total_Households': 'OI_Total_Households', 'OI_Percent_White_Alone': 'OI_Percent_White_Alone', 'OI_Percent_Black_Alone': 'OI_Percent_Black_Alone', 'OI_Percent_Asian_Alone': 'OI_Percent_Asian_Alone', 'OI_Percent_Hispanic_or_Latino': 'OI_Percent_Hispanic_or_Latino', 'OI_Family_Poverty_Rate': 'OI_Family_Poverty_Rate', 'OI_White_Family_Poverty_Rate': 'OI_White_Family_Poverty_Rate', 'OI_Black_Family_Poverty_Rate': 'OI_Black_Family_Poverty_Rate', 'OI_Asian_Family_Poverty_Rate': 'OI_Asian_Family_Poverty_Rate', 'OI_Single_Mother_Rate': 'OI_Single_Mother_Rate', 'OI_F25_and_up_wo_Bachelor_om_Ra': 'OI_F25_and_up_wo_Bachelor_om_Ra', 'OI_Rate_of_unemployed_males': 'OI_Rate_of_unemployed_males', 'OI_Gun_shots_fired_per_500': 'OI_Gun_shots_fired_per_500', 'OI_Median_Home_Value': 'OI_Median_Home_Value', 'OI_Median_Gross_Rent': 'OI_Median_Gross_Rent', 'OI_OI_average_income_rank_outco': 'OI_OI_average_income_rank_outco', 'OI_Percent_wo_access_to_vehicle': 'OI_Percent_wo_access_to_vehicle', 'OI_Percent_wo_access_to_interne': 'OI_Percent_wo_access_to_interne', 'OI_Average_CNI_OI_OM': 'OI_Average_CNI_OI_OM', 'OI_Total_HCV_HHs_2019': 'OI_Total_HCV_HHs_2019', 'OI_Percent_of_HCV_HHs_2019': 'OI_Percent_of_HCV_HHs_2019', 'Shape__Area': 'Shape__Area', 'Shape__Length': 'Shape__Length', });
lyr_SuperfundSites_3.set('fieldAliases', {'id': 'id', 'OBJECTID': 'OBJECTID', 'Site_Name': 'Site_Name', 'Site_Score': 'Site_Score', 'Site_EPA_ID': 'Site_EPA_ID', 'SEMS_ID': 'SEMS_ID', 'SITS_ID': 'SITS_ID', 'Region_ID': 'Region_ID', 'State': 'State', 'City': 'City', 'County': 'County', 'Status': 'Status', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Proposed_Date': 'Proposed_Date', 'Listing_Date': 'Listing_Date', 'Construction_Completion_Date': 'Construction_Completion_Date', 'Construction_Completion_Number': 'Construction_Completion_Number', 'NOID_Date': 'NOID_Date', 'Deletion_Date': 'Deletion_Date', 'Site_Listing_Narrative': 'Site_Listing_Narrative', 'Site_Progress_Profile': 'Site_Progress_Profile', 'Notice_of_Data_Availability': 'Notice_of_Data_Availability', 'Proposed_FR_Notice': 'Proposed_FR_Notice', 'Deletion_FR_Notice': 'Deletion_FR_Notice', 'Final_FR_Notice': 'Final_FR_Notice', 'NOID_FR_Notice': 'NOID_FR_Notice', 'Restoration_FR_Notice_Jumper_Page': 'Restoration_FR_Notice_Jumper_Page', 'Site_has_had_a_Partial_Deletion': 'Site_has_had_a_Partial_Deletion', 'CreationDate': 'CreationDate', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', 'ObjectId2': 'ObjectId2', });
lyr_BigBoxProperties0100_4.set('fieldAliases', {'long': 'long', 'lat': 'lat', 'parcel_id': 'parcel_id', 'address': 'address', 'city': 'city', 'municipality': 'municipality', 'class': 'class', 'use': 'use', 'lot_area': 'lot_area', 'last_sale_date': 'last_sale_date', 'last_sale_price': 'last_sale_price', 'deed_book_description': 'deed_book_description', 'average_slope': 'average_slope', 'ura_property': 'ura_property', 'opportunity_zone': 'opportunity_zone', 'flood_zone': 'flood_zone', 'slope_score': 'slope_score', 'unsatisfied_lien_count': 'unsatisfied_lien_count', 'total_lien_amount': 'total_lien_amount', 'tax_lien_score': 'tax_lien_score', 'ura_property_score': 'ura_property_score', 'opportunity_zone_score': 'opportunity_zone_score', 'median_contract_rent': 'median_contract_rent', 'percentage_renters': 'percentage_renters', 'miles_to_nearest_superfund': 'miles_to_nearest_superfund', 'superfund_proximity_score': 'superfund_proximity_score', 'final_score': 'final_score', });
lyr_AlleghenyCountyBoundaries_1.set('fieldImages', {'pk_0': '', 'pk': '', 'statefp': '', 'countyfp': '', 'countyns': '', 'geoid': '', 'geoidfq': '', 'name': '', 'namelsad': '', 'lsad': '', 'classfp': '', 'mtfcc': '', 'csafp': '', 'cbsafp': '', 'metdivfp': '', 'funcstat': '', 'aland': '', 'awater': '', 'intptlat': '', 'intptlon': '', 'calculated_area': '', 'concatname': '', });
lyr_OpportunityTracts_2.set('fieldImages', {'id': '', 'OBJECTID': '', 'FID_1': '', 'STATEFP': '', 'COUNTYFP': '', 'TRACTCE': '', 'AFFGEOID': '', 'GEOID': '', 'NAME': '', 'LSAD': '', 'ALAND': '', 'AWATER': '', 'Shape__Are': '', 'Shape__Len': '', 'Name_Num': '', 'Tracts': '', 'OI_OBJECTID': '', 'OI_AFFGEOID': '', 'OI_GEOID': '', 'OI_Census_Tract': '', 'OI_Municipality': '', 'OI_Neighborhood': '', 'OI_Opportunity_Tract': '', 'OI_Population': '', 'OI_Total_Households': '', 'OI_Percent_White_Alone': '', 'OI_Percent_Black_Alone': '', 'OI_Percent_Asian_Alone': '', 'OI_Percent_Hispanic_or_Latino': '', 'OI_Family_Poverty_Rate': '', 'OI_White_Family_Poverty_Rate': '', 'OI_Black_Family_Poverty_Rate': '', 'OI_Asian_Family_Poverty_Rate': '', 'OI_Single_Mother_Rate': '', 'OI_F25_and_up_wo_Bachelor_om_Ra': '', 'OI_Rate_of_unemployed_males': '', 'OI_Gun_shots_fired_per_500': '', 'OI_Median_Home_Value': '', 'OI_Median_Gross_Rent': '', 'OI_OI_average_income_rank_outco': '', 'OI_Percent_wo_access_to_vehicle': '', 'OI_Percent_wo_access_to_interne': '', 'OI_Average_CNI_OI_OM': '', 'OI_Total_HCV_HHs_2019': '', 'OI_Percent_of_HCV_HHs_2019': '', 'Shape__Area': '', 'Shape__Length': '', });
lyr_SuperfundSites_3.set('fieldImages', {'id': '', 'OBJECTID': '', 'Site_Name': '', 'Site_Score': '', 'Site_EPA_ID': '', 'SEMS_ID': '', 'SITS_ID': '', 'Region_ID': '', 'State': '', 'City': '', 'County': '', 'Status': '', 'Longitude': '', 'Latitude': '', 'Proposed_Date': '', 'Listing_Date': '', 'Construction_Completion_Date': '', 'Construction_Completion_Number': '', 'NOID_Date': '', 'Deletion_Date': '', 'Site_Listing_Narrative': '', 'Site_Progress_Profile': '', 'Notice_of_Data_Availability': '', 'Proposed_FR_Notice': '', 'Deletion_FR_Notice': '', 'Final_FR_Notice': '', 'NOID_FR_Notice': '', 'Restoration_FR_Notice_Jumper_Page': '', 'Site_has_had_a_Partial_Deletion': '', 'CreationDate': '', 'Creator': '', 'EditDate': '', 'Editor': '', 'ObjectId2': '', });
lyr_BigBoxProperties0100_4.set('fieldImages', {'long': '', 'lat': '', 'parcel_id': '', 'address': '', 'city': '', 'municipality': '', 'class': '', 'use': '', 'lot_area': '', 'last_sale_date': '', 'last_sale_price': '', 'deed_book_description': '', 'average_slope': '', 'ura_property': '', 'opportunity_zone': '', 'flood_zone': '', 'slope_score': '', 'unsatisfied_lien_count': '', 'total_lien_amount': '', 'tax_lien_score': '', 'ura_property_score': '', 'opportunity_zone_score': '', 'median_contract_rent': '', 'percentage_renters': '', 'miles_to_nearest_superfund': '', 'superfund_proximity_score': '', 'final_score': '', });
lyr_AlleghenyCountyBoundaries_1.set('fieldLabels', {'pk_0': 'no label', 'pk': 'no label', 'statefp': 'no label', 'countyfp': 'no label', 'countyns': 'no label', 'geoid': 'no label', 'geoidfq': 'no label', 'name': 'no label', 'namelsad': 'no label', 'lsad': 'no label', 'classfp': 'no label', 'mtfcc': 'no label', 'csafp': 'no label', 'cbsafp': 'no label', 'metdivfp': 'no label', 'funcstat': 'no label', 'aland': 'no label', 'awater': 'no label', 'intptlat': 'no label', 'intptlon': 'no label', 'calculated_area': 'no label', 'concatname': 'no label', });
lyr_OpportunityTracts_2.set('fieldLabels', {'id': 'no label', 'OBJECTID': 'no label', 'FID_1': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'AFFGEOID': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', 'Name_Num': 'no label', 'Tracts': 'no label', 'OI_OBJECTID': 'no label', 'OI_AFFGEOID': 'no label', 'OI_GEOID': 'no label', 'OI_Census_Tract': 'no label', 'OI_Municipality': 'no label', 'OI_Neighborhood': 'no label', 'OI_Opportunity_Tract': 'no label', 'OI_Population': 'no label', 'OI_Total_Households': 'no label', 'OI_Percent_White_Alone': 'no label', 'OI_Percent_Black_Alone': 'no label', 'OI_Percent_Asian_Alone': 'no label', 'OI_Percent_Hispanic_or_Latino': 'no label', 'OI_Family_Poverty_Rate': 'no label', 'OI_White_Family_Poverty_Rate': 'no label', 'OI_Black_Family_Poverty_Rate': 'no label', 'OI_Asian_Family_Poverty_Rate': 'no label', 'OI_Single_Mother_Rate': 'no label', 'OI_F25_and_up_wo_Bachelor_om_Ra': 'no label', 'OI_Rate_of_unemployed_males': 'no label', 'OI_Gun_shots_fired_per_500': 'no label', 'OI_Median_Home_Value': 'no label', 'OI_Median_Gross_Rent': 'no label', 'OI_OI_average_income_rank_outco': 'no label', 'OI_Percent_wo_access_to_vehicle': 'no label', 'OI_Percent_wo_access_to_interne': 'no label', 'OI_Average_CNI_OI_OM': 'no label', 'OI_Total_HCV_HHs_2019': 'no label', 'OI_Percent_of_HCV_HHs_2019': 'no label', 'Shape__Area': 'no label', 'Shape__Length': 'no label', });
lyr_SuperfundSites_3.set('fieldLabels', {'id': 'no label', 'OBJECTID': 'no label', 'Site_Name': 'no label', 'Site_Score': 'no label', 'Site_EPA_ID': 'no label', 'SEMS_ID': 'no label', 'SITS_ID': 'no label', 'Region_ID': 'no label', 'State': 'no label', 'City': 'no label', 'County': 'no label', 'Status': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Proposed_Date': 'no label', 'Listing_Date': 'no label', 'Construction_Completion_Date': 'no label', 'Construction_Completion_Number': 'no label', 'NOID_Date': 'no label', 'Deletion_Date': 'no label', 'Site_Listing_Narrative': 'no label', 'Site_Progress_Profile': 'no label', 'Notice_of_Data_Availability': 'no label', 'Proposed_FR_Notice': 'no label', 'Deletion_FR_Notice': 'no label', 'Final_FR_Notice': 'no label', 'NOID_FR_Notice': 'no label', 'Restoration_FR_Notice_Jumper_Page': 'no label', 'Site_has_had_a_Partial_Deletion': 'no label', 'CreationDate': 'no label', 'Creator': 'no label', 'EditDate': 'no label', 'Editor': 'no label', 'ObjectId2': 'no label', });
lyr_BigBoxProperties0100_4.set('fieldLabels', {'long': 'inline label - always visible', 'lat': 'inline label - always visible', 'parcel_id': 'inline label - always visible', 'address': 'header label - always visible', 'city': 'hidden field', 'municipality': 'inline label - always visible', 'class': 'inline label - always visible', 'use': 'inline label - always visible', 'lot_area': 'inline label - always visible', 'last_sale_date': 'inline label - always visible', 'last_sale_price': 'inline label - always visible', 'deed_book_description': 'hidden field', 'average_slope': 'inline label - always visible', 'ura_property': 'hidden field', 'opportunity_zone': 'hidden field', 'flood_zone': 'inline label - always visible', 'slope_score': 'inline label - always visible', 'unsatisfied_lien_count': 'inline label - always visible', 'total_lien_amount': 'inline label - always visible', 'tax_lien_score': 'inline label - always visible', 'ura_property_score': 'inline label - always visible', 'opportunity_zone_score': 'inline label - always visible', 'median_contract_rent': 'inline label - always visible', 'percentage_renters': 'inline label - always visible', 'miles_to_nearest_superfund': 'inline label - always visible', 'superfund_proximity_score': 'inline label - always visible', 'final_score': 'inline label - always visible', });
lyr_BigBoxProperties0100_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});