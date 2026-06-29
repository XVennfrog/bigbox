export const layerConfigs =[
  {
    id: 'Big-Box Scores',
    type: 'circle',
    source: 'source-big-box-scores',
    'source-layer': '11d8751c4cf39420be1a',
    paint: {
      'circle-color': [
        'interpolate',
        ['linear'],
        ['get','final_score'],
        20, '#fffff4',
        40, '#13a4c7',
        60, '#1378c7',
        80, '#1341c7',
      ],
      'circle-radius': 3
    },
    layout: {
      'visibility': 'visible'
    },

    legend: {
      label: 'Big-Box Scores',
      checkboxId: 'layer-big-box-scores',
      group: 'Real Estate Properties',
      legendType: 'nested',
      symbol: 'point',
      stops: [
        {label: 'Poor', color:'#fffff4'},
        {label: 'Fair', color:'#13a4c7'},
        {label: 'Good', color:'#1378c7'},
        {label: 'Excellent', color:'#1341c7'},
      ],
      defaultVisible: false,
      layerIds: ['Big-Box Scores', 'Parcels']

    }
  },

    {
    id: 'Parcels',
    type: 'line',
    source: 'source-parcels',
    'source-layer': '64fc9f350c7c1265168c',
    paint: {
      'line-width': [
           'step',
           ['zoom'],
           0,
           15,
           1
      ],
      'line-color': 'rgba(0, 0, 0, 0.4)'
    },
    layout: {
      'line-cap': 'round',
      'line-join': 'round',
      'visibility': 'none'
    }
  },

  {
    id: 'CoStar List',
    type: 'circle',
    source: 'source-costar-list',
    'source-layer': '5f4a9c9b67d29aed33fa',
    paint: {
      'circle-color': [
        'match',
        ['get','layer'],
        '20260623_CoStar_List_1', '#f86d6d',
        '20260623_CoStar_List_2', '#c06df8',
        '#999999'
      ],
      'circle-radius': 3
    },
    layout: {
      'visibility': 'visible'
    },
    legend:{
      label: 'CoStar Properties',
      checkboxId: 'layer-costar-list',
      group: 'Real Estate Properties',
      legendType: 'nested',
      symbol: 'point',
      stops: [
        {label: 'Vacant Land', color:'#fd53ef'},
        {label: 'Redevelopment', color:'#ff4785'},
      ],
      defaultVisible: false

    }
  },

  {
    id: 'Population Density',
    type: 'fill',
    source: 'source-census-data',
    'source-layer': '608126806a0f193423d6',
    'filter':[
      'has',
      'population_density_sqm'
    ],
    'paint': {
        'fill-color': [
          'interpolate',
          ['linear'],
          [
            'get',
            'population_density_sqm'
          ],
          0,'#ffffff',
          3229.30,'#ffbfbf',
         6952.93,'#ff8080',
         12007.20,'#ff4040',
          21380.36,'#ff0000'
        ],
        'fill-opacity': 0.7,
        'fill-outline-color': 'rgba(247, 247, 247, 0.4)'
  },
    legend: {
      label: 'Population Density',
      checkboxId: 'layer-population',
      group: 'Census Data',
      legendType: 'nested',
      symbol: '',
      stops: [
        {label: '≤ 3,229.3 per sq.mi', color:'#ffffff'},
        {label: '3,229.3 - 6,952.93 per sq.mi', color:'#ffbfbf'},
        {label: '6,952.93 - 12,007.2 per sq.mi', color:'#ff8080'},
        {label: '12,007.2 - 21,380 per sq.mi', color:'#ff4040'},
        {label: '≥ 21,380 per sq.mi', color:'#ff0000'}
      ],
      defaultVisible: false,
      layerIds:['Population Density', 'Population Labels']
    }
  },

    {
    id: 'Population Labels',
    type: 'symbol',
    source: 'source-census-data',
    'source-layer': 'd0442a05a741191763ee',
    'minzoom': 11,
    layout: {
      visibility: 'visible',
      'text-field': [
        'number-format',
        ['to-number',['get', 'total_population']],
        {'locale': 'en-US'}
      ],
      'text-size': 12,
      'text-allow-overlap': false,
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': '#8b8b8b',
      'text-halo-color': '#ffffff',
      'text-halo-width': 0
    }
  },

  {
    id: 'Median Household Income',
    type: 'fill',
    source: 'source-census-data',
    'source-layer': '608126806a0f193423d6',
    'filter':[
      'has',
      'population_density_sqm'
    ],
    'paint': {
        'fill-color': [
          'interpolate',
          ['linear'],
          [
            'get',
            'median_household_income'
          ],
          0,'#f7fcf5',
          27609.00,'#c9eac2',
          64717.00,'#7bc77c',
          98750.00,'#2a924b',
          150658.00,'#00441b'
        ],
        'fill-opacity': 0.7,
        'fill-outline-color': 'rgba(247, 247, 247, 0.4)'
  },
    legend: {
      label: 'Median Household Income',
      checkboxId: 'layer-median-household-income',
      group: 'Census Data',
      legendType: 'nested',
      symbol: '',
      stops: [
        {label: '≤ $27,609', color:'#f7fcf5'},
        {label: '$27,609 - $64,717', color:'#c9eac2'},
        {label: '$64,717 - $98,750', color:'#7bc77c'},
        {label: '$98,750 - $150,658', color:'#2a924b'},
        {label: '≥ $150,658', color:'#00441b'}
      ],
      defaultVisible: false,
      layerIds:['Median Household Income', 'Median Household Income Labels']
    }
  },

    {
    id: 'Median Household Income Labels',
    type: 'symbol',
    source: 'source-census-data',
    'source-layer': 'd0442a05a741191763ee',
    'minzoom': 12,
    layout: {
      visibility: 'none',
      'text-field': [
        'concat',
        '$',
        [
          'number-format',
          ['to-number',['get', 'median_household_income']],
          {'locale': 'en-US'}
        ]
      ],
      'text-size': 12,
      'text-allow-overlap': false,
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': '#616161',
      'text-halo-color': '#ffffff',
      'text-halo-width': 0
    }
  },


  {
    id: 'Percentage Renters',
    type: 'fill',
    source: 'source-census-data',
    'source-layer': '608126806a0f193423d6',
    filter:[
      'has',
      'percentage_renters'
    ],
    'paint': {
        'fill-color': [
          'interpolate',
          ['linear'],
          ['to-number',['get','percentage_renters']],
          0.0,'#edf8fb',
          15.0,'#b3cde3',
          33.0,'#8c96c6',
          52.0,'#8856a7',
          74.0,'#edf8fb',
        ],
        'fill-opacity': 0.7,
        'fill-outline-color': 'rgba(247, 247, 247, 0.4)'
  },
    legend: {
      label: 'Percentage of Renters',
      checkboxId: 'layer-percentage-renters',
      group: 'Census Data',
      legendType: 'nested',
      symbol: '',
      stops: [
        {label: '≤ 15%', color:'#edf8fb'},
        {label: '15 - 33%', color:'#b3cde3'},
        {label: '33 - 52%', color:'#8c96c6'},
        {label: '52 - 74%', color:'#8856a7'},
        {label: '≥ 74%', color:'#edf8fb'}
      ],
      defaultVisible: false,
      layerIds: ['Percentage Renters', 'Percentage Renters Labels']
    }
  },
  
    {
    id: 'Percentage Renters Labels',
    type: 'symbol',
    source: 'source-census-data',
    'source-layer': 'd0442a05a741191763ee',
    'minzoom': 12,
    layout: {
      visibility: 'visible',
      'text-field':[
        'concat', 
          [ 'number-format',
            ['to-number',['get', 'percentage_renters']],
            {'locale': 'en-US',
             'max-fraction-digits': 1
            }
          ],
          '%'
        ],
      'text-size': 12,
      'text-allow-overlap': false,
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': '#616161',
      'text-halo-color': '#ffffff',
      'text-halo-width': 0
    }
  },


  {
  id: 'Median Contract Rent',
  type: 'fill',
  source: 'source-census-data',
  'source-layer': '608126806a0f193423d6',
  'filter':[
    'has',
    'median_contract_rent'
  ],
  'paint': {
      'fill-color': [
        'interpolate',
        ['linear'],
        [
          'get',
          'median_contract_rent'
        ],
        1,
        '#e9f6e7',
        500,
        '#baf1d1',
        1500,
        '#8cecbb',
        2000,
        '#5de8a6',
        2500,
        '#2fe390',
        3000,
        '#00de7a'
      ],
      'fill-opacity': 0.8,
      'fill-outline-color': '#f7f7f7'
  },
    legend: {
      label: 'Median Contract Rent',
      checkboxId: 'layer-median-contract-rent',
      group: 'Census Data',
      legendType: 'nested',
      symbol: '',
      stops: [
        {label: '≤ $500%', color:'#e9f6e7'},
        {label: '$500 - $1,500', color:'#baf1d1'},
        {label: '$1,500 - $2,000', color:'#8cecbb'},
        {label: '$2,000 - $2,500', color:'#5de8a6'},
        {label: '$2,500 - $3,000', color:'#2fe390'},
        {label: '≥3,000', color:'#00de7a'}
      ],
      defaultVisible: false,
      layerIds: [
        'Median Contract Rent',
        'Median Contract Rent Labels'
      ]
    }
  },

  {
    id: 'Median Contract Rent Labels',
    type: 'symbol',
    source: 'source-census-data',
    'source-layer': 'd0442a05a741191763ee',
    minzoom: 12,
    layout: {
      visibility: 'visible',
      'text-field': [
        'concat',
        '$',
        ['get', 'median_contract_rent']
      ],
      'text-size': 12,
      'text-allow-overlap': false,
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': '#8b8b8b',
      'text-halo-color': '#ffffff',
      'text-halo-width': 0
    }
  },

  {
    id: 'Upper Gross Rent Quartile',
    type: 'fill',
    source: 'source-census-data',
    'source-layer': '608126806a0f193423d6',
    'filter':[
      'has',
      'upper_gross_rent_quartile_dollars'
    ],
    'paint': {
        'fill-color': [
          'interpolate',
          ['linear'],
          [
            'get',
            'upper_gross_rent_quartile_dollars'
          ],
          0,'#feebe2',
          510,'#fbb4b9',
          1260,'#f768a1',
          1683,'#c51b8a',
          2293,'#7a0177'
        ],
        'fill-opacity': 0.7,
        'fill-outline-color': 'rgba(247, 247, 247, 0.4)'
  },
    legend: {
      label: 'Upper Gross Rent Quartile (Dollars)',
      checkboxId: 'layer-upper-gross-rent-quartile',
      group: 'Census Data',
      legendType: 'nested',
      symbol: '',
      stops: [
        {label: '≤ $510', color:'#feebe2'},
        {label: '$510 - $1,260', color:'#fbb4b9'},
        {label: '$1,260 - $1,683', color:'#f768a1'},
        {label: '$1,683 - $2,293', color:'#c51b8a'},
        {label: '≥ $2,293', color:'#7a0177'}
      ],
      defaultVisible: false,
      layerIds:['Upper Gross Rent Quartile', 'Upper Gross Rent Quartile Labels']
    }
  },

  {
    id: 'Upper Gross Rent Quartile Labels',
    type: 'symbol',
    source: 'source-census-data',
    'source-layer': 'd0442a05a741191763ee',
    'minzoom': 11,
    layout: {
      visibility: 'visible',
      'text-field': [
        'concat',
        '$',
        ['get', 'upper_gross_rent_quartile_dollars']
      ],
      'text-size': 12,
      'text-allow-overlap': false,
      'symbol-placement': 'point'
    },
    paint: {
      'text-color': '#8b8b8b',
      'text-halo-color': '#ffffff',
      'text-halo-width': 0
    }
  },


  {
    id: 'Race',
    type: 'circle',
    source: 'source-race',
    'source-layer': '35c052093a14c7b0b44e',
    'minzoom': 11,
    'maxzoom': 15,
    paint: {
      'circle-color': [
        'match',
        ['get','layer'],
        'Whites_div10', '#1275d1',
        'Blacks_div10', '#21a358',
        'Asians_div10', '#8b0d13',
        'Hispanic_div10', '#eecb07',
        'Other', '#8513c7',
        '#999999'
      ],
      'circle-radius': [
        'interpolate',
        ['linear'],
        ['zoom'],
        5, 0.75,
        10, 1.25,
        12, 2

      ]
    },
    layout: {
      'visibility': 'visible'
    },

    legend: {
      label: 'Race',
      checkboxId: 'layer-race',
      group: 'Census Data',
      legendType: 'nested',
      symbol: 'point',
      stops: [
        {label: 'Asian', color:'#8b0d13'},
        {label: 'Black', color:'#21a358'},
        {label: 'Hispanic', color:'#eecb07'},
        {label: 'Other', color:'#8513c7'},
        {label: 'White', color:'#1275d1'},
      ],
      defaultVisible: false
    }
  },

  {
    'id': 'Opportunity Tracts',
    'type': 'fill',
    'source': 'source-opportunity-tracts',
    'source-layer': '1d1133ac98b4b42b6198',
    'layout': {
      'visibility': 'none'
    },

    'paint': {
      'fill-opacity': 0.5,
      'fill-outline-color': '#ffffff',
      'fill-color': [
        'match',
        ['get', 'Type'],
        'Opportunity Tract',
        '#f692e4',
        'High Opportunity Tract',
        '#eb66eb',
        '#808080'
      ],
      'fill-antialias': false
    },

    legend: {
      label: 'Opportunity Tracts',
      checkboxId: 'layer-opportunity-tracts',
      group: 'Environmental',
      legendType: 'nested',
      symbol: 'fill',
      stops: [
        {label: 'Opportunity Tract', color: '#f692e4'},
        {label: 'High Opportunity Tract', color: '#eb66eb'}
      ],
      defaultVisible: false
    }
  },
  
  {
    id: 'Superfund Sites',
    type: 'circle',
    source: 'source-superfund-sites',
    'source-layer': '7da2bf28ea37c8944698',

    paint: {
    'circle-color': '#5ef240',
    },

    legend: {
      label: 'Superfund Sites',
      checkboxId: 'layer-superfund-sites',
      group: 'Environmental',
      legendType: 'single',
      symbol: 'point',
      color: '#5ef240',
      defaultVisible: false,
      layerIds: [
        'Superfund Sites',
        'Superfund Site Labels'
      ]
    }
  },

  {
    id: 'Superfund Site Labels',
    type: 'symbol',
    source: 'source-superfund-sites',
    'source-layer': '7da2bf28ea37c8944698',
    layout: {
      visibility: 'visible',
      'text-field': ['get', 'Site_Name'],
      'text-size': 12,
      'text-anchor': 'top',
      'text-offset': [0, 1.1],
      'text-allow-overlap': false
    },
    paint: {
      'text-color': '#8b8b8b',
      'text-halo-color': '#ffffff',
      'text-halo-width': 1
    }
  },

  {
    id: 'Floodplain',
    type: 'fill',
    source: 'source-floodplain',
    'source-layer': 'eb387176be6b05a0b920',
    paint: {
      'fill-color': '#5da8fe',
      'fill-opacity': 0.2
    },
    layout: {
      'visibility': 'none'
    },
    legend: {
      label: '100-Year Floodplain',
      checkboxId: 'layer-floodplain',
      group: 'Environmental',
      legendType: 'single',
      symbol: 'square',
      color: '#5da8fe',
      defaultVisible: false
    }
  },
  {
    id: 'Allegheny County Boundaries',
    type: 'line',
    source: 'source-allegheny-county-boundaries',
    'source-layer': '764fe41de85005eac3a7',
    layout: {
      'line-cap':'round',
      'line-join': 'round',
      visibility: 'visible'
    },
    paint: {
      'line-color': 'hsl(212, 0%, 57%)',
      'line-width': 2,
      'line-dasharray': [1, 2]
    },
    legend: {
      label: 'Allegheny County Boundaries',
      checkboxId: 'layer-allegheny-county-boundaries',
      group: 'Administrative Boundaries',
      legendType: 'single',
      defaultVisible: true
    }
  }
]