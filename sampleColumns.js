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
        name: 'price',
        label: 'Price',
        field: 'price',
        align: 'left',
        sortable: true
      },
      {
        name: 'stock',
        label: 'Stock',
        field: 'stock',
        align: 'left',
        sortable: true
      }
    ],
    'clientsList': [
      {
        name: 'name',
        label: 'Name',
        field: 'name',
        align: 'left',
        sortable: true
      },
      {
        name: 'email',
        label: 'Email',
        field: 'email',
        align: 'left',
        sortable: false
      },
      {
        name: 'budget',
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