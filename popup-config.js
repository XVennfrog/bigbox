function buildBigBoxScoresHTML (properties){
    return `
    <strong class="mapboxgl-popup-title"> ${properties.address || 'Feature'} </strong><br>
    <div class="mapboxgl-popup-body">
    <strong class="mapboxgl-popup-subheading"> Parcel ID </strong>: ${properties.parcel_id || 'n/a'} <br>
    <strong class="mapboxgl-popup-subheading"> Lot Area (acres)</strong>: ${properties.lot_area || 'n/a'}<br>
    <strong class="mapboxgl-popup-subheading"> Last Sale Date</strong>: ${properties.last_sale_date || 'n/a'}<br>
    <strong class="mapboxgl-popup-subheading"> Last Sale Price ($)</strong>: $${properties.last_sale_price || 'n/a'}<br>
    <strong class="mapboxgl-popup-subheading"> Class</strong>: ${properties.class || 'n/a'}<br>
    <strong class="mapboxgl-popup-subheading"> Use</strong>: ${properties.use || 'n/a'}<br>
    <strong class="mapboxgl-popup-subheading"> URA Property?</strong> ${properties.ura_property || 'No'}<br>
    <strong class="mapboxgl-popup-subheading"> Average Slope</strong>: ${properties.average_slope.toFixed(1) || 'n/a'}<br>
    <strong class="mapboxgl-popup-subheading"> Unsatisfied Lien Count</strong>: ${properties.unsatisfied_lien_count || 'n/a'}<br>
    <strong class="mapboxgl-popup-subheading"> Total Lien Amount</strong>: $${properties.total_lien_amount.toLocaleString('en-US') || '$0'}<br>
    <strong class="mapboxgl-popup-final-score">Final Score: ${properties.final_score.toFixed(2) || 'n/a'}</strong>
    </div>
    `
}

export const popupConfigs =[
    {
      layerId: 'Big-Box Scores',
      buildHTML: buildBigBoxScoresHTML
    }
]

/*
    Owner Address: ${formatAddress(properties.owner_address, properties.owner_city) || 'n/a'}<br>

*/