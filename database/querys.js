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
    getProductByStock: 'SELECT * FROM products WHERE stock = ',
    getProductByBuyPrice: 'SELECT * FROM products WHERE buy_price = ',
    getProductBySellPrice: 'SELECT * FROM products WHERE sell_price = ',
    getProductByVolume: 'SELECT * FROM products WHERE volume = ',
    getProductByWeight: 'SELECT * FROM products WHERE weight = ',
    getProductBySupplierId: 'SELECT * FROM products WHERE supplier_id = ',
}

module.exports = {
    querys,
    querysWithParams
}