// querys for the database

const querys = {
    getAllClients: "SELECT * FROM clients",
    getAllClientsOrders: "SELECT * FROM clients_orders",
    getAllSuppliers: "SELECT * FROM suppliers",
    getAllSuppliersOrders: "SELECT * FROM suppliers_orders",
    getAllProducts: "SELECT * FROM products"
}

const querysWithParams = {
    getAllClientsOrdersProducts: "SELECT * FROM clients_orders_products WHERE order_id =",
    getAllSuppliersOrdersProducts: "SELECT * FROM suppliers_orders_products WHERE order_id = ",
    getClientById: "SELECT * FROM clients WHERE id = ",
    getClientByName: "SELECT * FROM clients WHERE name = ",
    getSupplierById: "SELECT * FROM suppliers WHERE id = ",
    getSupplierByName: "SELECT * FROM suppliers WHERE name = ",
    getClientOrderById: "SELECT * FROM clients_orders WHERE order_id = ",
    getOrderByClientId: "SELECT * FROM clients_orders WHERE client_id = ",
    getOrderByClientName: "SELECT * FROM clients_orders WHERE client_name = ",
    getClientOrderByNProducts: "SELECT * FROM clients_orders WHERE n_products = ",
    getClientOrderByCost: "SELECT * FROM clients_orders WHERE cost = ",
    getSupplierOrderById: "SELECT * FROM suppliers_orders WHERE order_id = ",
    getOrderBySupplierId: "SELECT * FROM suppliers_orders WHERE supplier_id = ",
    getOrderBySupplierName: "SELECT * FROM suppliers_orders WHERE supplier_name = ",
    getSupplierOrderByNProducts: "SELECT * FROM suppliers_orders WHERE n_products = ",
    getSupplierOrderByCost: "SELECT * FROM suppliers_orders WHERE cost = ",
    getProductById: "SELECT * FROM products WHERE reference = ",
    getProductByName: "SELECT * FROM products WHERE description = ",
    getProductByStock: "SELECT * FROM products WHERE stock = ",
    getProductByBuyPrice: "SELECT * FROM products WHERE buy_price = ",
    getProductBySellPrice: "SELECT * FROM products WHERE sell_price = ",
    getProductByVolume: "SELECT * FROM products WHERE volume = ",
    getProductByWeight: "SELECT * FROM products WHERE weight = ",
    getProductBySupplierId: "SELECT * FROM products WHERE supplier_id = ",
}

module.exports = {
    querys,
    querysWithParams
}