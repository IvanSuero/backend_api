// querys for the database

const querys = {
    getAllClients: 'SELECT * FROM clients',
    getAllClientsOrders: 'SELECT * FROM clients_orders',
    getAllSuppliers: 'SELECT * FROM suppliers',
    getAllSuppliersOrders: 'SELECT * FROM suppliers_orders',
    getAllProducts: 'SELECT * FROM products'
}

const querysWithParams = {
    getProductById: 'SELECT * FROM products WHERE reference = ',
    getProductByName: 'SELECT * FROM products WHERE description = ',
    getProductByStock: 'SELECT * FROM products WHERE stock = '
}

module.exports = {
    querys,
    querysWithParams
}