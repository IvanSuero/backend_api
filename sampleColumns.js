export const columns = {
    'products': [
      {
        name: 'reference',
        label: 'Reference',
        field: 'reference',
        align: 'left',
        sortable: true
      },
      {
        name: 'description',
        label: 'Description',
        field: 'description',
        align: 'left',
        sortable: false
      },
      {
        name: 'buy_price',
        label: 'Buy Price',
        field: 'buy_price',
        align: 'left',
        sortable: true
      },
      {
        name: 'sell_price',
        label: 'Sell Price',
        field: 'sell_price',
        align: 'left',
        sortable: true
      },
      {
        name: 'stock',
        label: 'Stock',
        field: 'stock',
        align: 'left',
        sortable: true
      },
      {
        name: 'volume',
        label: 'Volume',
        field: 'volume',
        align: 'left',
        sortable: true
      },
      {
        name: 'weight',
        label: 'Weight',
        field: 'weight',
        align: 'left',
        sortable: true
      },
      {
        name: 'supplier_id',
        label: 'Supplier ID',
        field: 'supplier_id',
        align: 'left',
        sortable: true
      }
    ],
    'clientsList': [
      {
        name: 'id',
        label: 'ID',
        field: 'id',
        align: 'left',
        sortable: true
      },
      {
        name: 'name',
        label: 'Name',
        field: 'name',
        align: 'left',
        sortable: true
      },
      {
        name: 'contact_email',
        label: 'Email',
        field: 'email',
        align: 'left',
        sortable: false
      },
      {
        name: 'contact_phone',
        label: 'Budget',
        field: 'budget',
        align: 'left',
        sortable: true
      }
    ],
    'sellorders': [
      {
        name: 'orderid',
        label: 'Order ID',
        field: 'Order ID',
        align: 'left',
        sortable: true
      },
      {
        name: 'date',
        label: 'Date',
        field: 'Date',
        align: 'center',
        sortable: true
      },
      {
        name: 'client',
        label: 'Client',
        field: 'Client',
        align: 'left',
        sortable: true
      },
      {
        name: 'items',
        label: 'Items',
        field: 'Items',
        align: 'center',
        sortable: true
      },
      {
        name: 'price',
        label: 'Price',
        field: 'Price',
        align: 'right',
        sortable: true
      }
    ]
}