function buildBigBoxPopupHTML (properties){
    return `
    <strong>${properties.Site_Name || 'Feature'}</strong><br>
    Parcel ID: ${properties.parcel_id || 'n/a'}<br>
    Lot Area (acres): ${properties.lot_area || 'n/a'}<br>
    Last Sale Date: ${properties.last_sale_date || 'n/a'}<br>
    Last Sale Price ($): ${properties.last_sale_price || 'n/a'}<br>
    Class: ${properties.class || 'n/a'}<br>
    Use: ${properties.use || 'n/a'}<br>
    URA Property? ${properties.ura_property || 'No'}<br>
    Average Slope (%): ${properties.average_slope.toFixed(1) || 'n/a'}<br>
    Unsatisfied Lien Count: ${properties.unsatisfied_lien_count || 'n/a'}<br>
    Total Lien Amount ($): ${properties.total_lien_amount.toLocaleString('en-US') || '$0'}<br>
    <strong>Final Score: ${properties.final_score.toFixed(2) || 'n/a'}</strong>
`
}

function buildCoStarListHTML (properties){
    return `
    <strong>${properties['Property Address'] || 'Feature'}</strong><br>
    Parcel ID: ${properties.Parcel_ID || 'n/a'}<br>
    Total Available Space (SF): ${properties['Total Available Space (SF)'] || 'n/a'}<br>
    Year Built: ${properties['Year Built'] || 'n/a'}<br>
    Year Renovated: ${properties['Year Renovated'] || 'n/a'}<br>
    Tenancy: ${properties['Tenancy'] || 'n/a'}<br>
    For Sale Price: ${properties['For Sale Price'] || 'n/a'}<br>
    For Sale Status: ${properties['For Sale Status'] || 'n/a'}<br>
    Last Sale Date: ${properties['Last Sale Date'] || 'n/a'}<br>
    Last Sale Price: ${properties['Last Sale Price'] || 'n/a'}<br>
    Leasing Company Contact: ${properties['Leasing Company Contact'] || 'n/a'}<br>
    Leasing Company Name: ${properties['Leasing Company Name'] || 'n/a'}<br>
    Sale Company Contact: ${properties['Sale Company Contact'] || 'n/a'}<br>
    Sale Company Name: ${properties['Sale Company Name'] || 'n/a'}<br>
    Market Name: ${properties['Market Name'] || 'n/a'}<br>
    Lot Area (acres): ${properties.lot_area || 'n/a'}<br>
    Last Sale Date: ${properties.last_sale_date || 'n/a'}<br>
    Last Sale Price ($): ${properties.last_sale_price || 'n/a'}<br>
`
}

window.popupConfigs =[
    {
      layerId: 'Big-Box Scores',
      buildHTML: buildBigBoxPopupHTML
    },
    {
      layerId: 'CoStar List',
      buildHTML: buildCoStarListHTML
    }
]