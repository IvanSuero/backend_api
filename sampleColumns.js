export const columns = {
    'products': [
      {
        name: 'reference',
        label: 'Reference',
        field: 'reference',
        align: 'left',
        sortable: true,
        visible: true,
        rules: [value => !!value || 'Required.']
      },
      {
        name: 'description',
        label: 'Description',
        field: 'description',
        align: 'left',
        sortable: false,
        visible: true,
        rules: [value => !!value || 'Required.']
      },
      {
        name: 'buy_price',
        label: 'Buy Price',
        field: 'buy_price',
        align: 'left',
        sortable: true,
        visible: false,
        rules: [value => !!value || 'Required.']
      },
      {
        name: 'sell_price',
        label: 'Sell Price',
        field: 'sell_price',
        align: 'left',
        sortable: true,
        visible: false,
        rules: [value => !!value || 'Required.']
      },
      {
        name: 'stock',
        label: 'Stock',
        field: 'stock',
        align: 'left',
        sortable: true,
        visible: true,
        rules: [value => !!value || 'Required.']
      },
      {
        name: 'volume',
        label: 'Volume',
        field: 'volume',
        align: 'left',
        sortable: true,
        visible: false,
        rules: [value => !!value || 'Required.']
      },
      {
        name: 'weight',
        label: 'Weight',
        field: 'weight',
        align: 'left',
        sortable: true,
        visible: false,
        rules: [value => !!value || 'Required.']
      }
    ]
}