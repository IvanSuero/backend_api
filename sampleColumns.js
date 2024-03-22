export const columns = {
    'products': [
      {
        name: 'reference',
        label: 'Reference',
        field: 'reference',
        align: 'left',
        sortable: true,
        visible: true
      },
      {
        name: 'description',
        label: 'Description',
        field: 'description',
        align: 'left',
        sortable: false,
        visible: true
      },
      {
        name: 'buy_price',
        label: 'Buy Price',
        field: 'buy_price',
        align: 'left',
        sortable: true,
        visible: false
      },
      {
        name: 'sell_price',
        label: 'Sell Price',
        field: 'sell_price',
        align: 'left',
        sortable: true,
        visible: false
      },
      {
        name: 'stock',
        label: 'Stock',
        field: 'stock',
        align: 'left',
        sortable: true,
        visible: true
      },
      {
        name: 'volume',
        label: 'Volume',
        field: 'volume',
        align: 'left',
        sortable: true,
        visible: false
      },
      {
        name: 'weight',
        label: 'Weight',
        field: 'weight',
        align: 'left',
        sortable: true,
        visible: false
      }
    ]
}