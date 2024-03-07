export const columns = [
  {
    areaColumns: 'products',
    columns: [
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
    actions: [
      {
        name: 'add',
        label: 'Add',
        edit: true,
        empty: true,
        buttons: [
          {
            confirmBtn: 'Add new Product',
            cancelBtn: 'Cancel'
          }
        ]
      },
      {
        name: 'edit',
        label: 'Edit',
        edit: true,
        empty: false,
        buttons: [
          {
            confirmBtn: 'Save',
            cancelBtn: 'Cancel'
          }
        ]
      },
      {
        name: 'delete',
        label: 'Delete',
        edit: false,
        empty: false,
        buttons: [
          {
            confirmBtn: 'Delete',
            cancelBtn: 'Cancel'
          }
        ]
      },
      {
        name: 'view',
        label: 'View',
        edit: false,
        empty: false,
        buttons: [
          {
            confirmBtn: 'Close',
            cancelBtn: ''
          }
        ]
      }
    ]
  },
  {
    areaColumns: 'clientslist',
    columns: [
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
    actions: [
      {
        name: 'add',
        label: 'Add',
        edit: true,
        empty: true,
        buttons: [
          {
            confirmBtn: 'Add new Client',
            cancelBtn: 'Cancel'
          }
        ]
      },
      {
        name: 'edit',
        label: 'Edit',
        edit: true,
        empty: false,
        buttons: [
          {
            confirmBtn: 'Save',
            cancelBtn: 'Cancel'
          }
        ]
      },
      {
        name: 'delete',
        label: 'Delete',
        edit: false,
        empty: false,
        buttons: [
          {
            confirmBtn: 'Delete',
            cancelBtn: 'Cancel'
          }
        ]
      },
      {
        name: 'view',
        label: 'View',
        edit: false,
        empty: false,
        buttons: [
          {
            confirmBtn: 'Close',
            cancelBtn: ''
          }
        ]
      }
    ]
  },
  {
    areaColumns: 'sellorders',
    columns: [
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
    ],
    actions: [
      {
        name: 'add',
        label: 'Create',
        edit: true,
        empty: true,
        buttons: [
          {
            confirmBtn: 'Create Sell Order',
            cancelBtn: 'Cancel'
          }
        ]
      },
      {
        name: 'view',
        label: 'View',
        edit: false,
        empty: false,
        buttons: [
          {
            confirmBtn: 'Close',
            cancelBtn: ''
          }
        ]
      }
    ]
  }
]