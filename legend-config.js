window.legendGroups = [
  {
    title: 'Real Estate',
    open: true,
    layers: [
      {
        label: 'Big-Box Properties',
        layerIds: ['Big-Box Scores', 'Parcels'],
        checkboxId: 'layer-big-box-scores',
        legendType: 'nested',
        symbol: 'point',
        defaultVisible: true,
        stops: [
          { label: 'Poor', color: '#fffff4' },
          { label: 'Fair', color: '#13a4c7' },
          { label: 'Good', color: '#1378c7' },
          { label: 'Excellent', color: '#1341c7' }

        ]

      },
      {
        label: 'CoStar Properties',
        layerIds: ['CoStar List'],
        checkboxId: 'layer-costar-list',
        legendType: 'nested',
        symbol: 'point',
        defaultVisible: false,
        stops: [
          { label: 'Land', color: '#fd53ef' },
          { label: 'Redevelopment', color: '#ff4785' },
        ]

      }
    ]
  },
  {
    title: 'Environmental',
    open: true,
    layers: [
      {
        label: '100-Year Floodplain',
        checkboxId: 'layer-floodplain',
        layerIds: ['Floodplain'],
        legendType: 'single',
        symbol: 'fill',
        color: '#5da8fe',
        defaultVisible: false
      },
      {
        label: 'Superfund Sites',
        checkboxId: 'layer-superfund-sites',
        layerIds: ['Superfund Sites'],
        legendType: 'single',
        symbol: 'square',
        color: '#5ef240',
        defaultVisible: false
      }
    ]
  },
  {
    title: 'Demographics',
    open: false,
    layers: [
      {
        label: 'Median Contract Rent',
        checkboxId: 'layer-median-contract-rent',
        layerIds: ['Median Contract Rent'],
        legendType: 'nested',
        symbol: 'square',
        defaultVisible: false,
        stops: [
          { label: '≤ $500', color: '#f7fcf5' },
          { label: '$500 - $1,500', color: '#c7e9c0' },
          { label: '$1,500 - $2,000', color: '#74c476' },
          { label: '$2,000 - $2,500', color: '#238b45' },
          { label: '$2,500 - $3,000', color: '#238b45' },
          { label: '≥ $3,000 - $2,000', color: '#00441b' }
        ]
      },
      {
        label: 'Percentage of Renters',
        checkboxId: 'layer-percentage-renters',
        layerIds: ['Percentage Renters'],
        legendType: 'nested',
        symbol: 'point',
        defaultVisible: false,
        stops: [
          { label: '≤ 20%', color: '#f7fcf5' },
          { label: '20 - 40%', color: '#c7e9c0' },
          { label: '40 - 60%', color: '#74c476' },
          { label: '60 - 80%', color: '#238b45' },
          { label: '≥ 80%', color: '#00441b' }
        ]
      }
    ]
  },
  {
    title: 'Administrative',
    open: false,
    layers: [
      {
        label: 'Allegheny County Boundaries',
        checkboxId: 'layer-allegheny-county-boundaries',
        layerIds: ['Allegheny County Boundaries'],
        legendType: 'single',
        symbol: '',
        defaultVisible: true,
      }
    ]
  },
  {
    title: 'Terrain',
    open: false,
    layers: [
      {
        label: 'Slope (Percentage)',
        checkboxId: 'layer-slope',
        layerIds: ['Slope'],
        legendType: 'single',
        defaultVisible: false,
      }
    ]
  }
];