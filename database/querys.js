// querys for the database

const querys = {
    querys: {
        getAllProducts: 'SELECT * FROM products'
    },
    withParams: {
        getProductById: 'SELECT * FROM products WHERE reference = ',
        getProductByName: 'SELECT * FROM products WHERE description = ',
        getProductByStock: 'SELECT * FROM products WHERE stock = ',
        getProductByBuyPrice: 'SELECT * FROM products WHERE buy_price = ',
        getProductBySellPrice: 'SELECT * FROM products WHERE sell_price = ',
        getProductByVolume: 'SELECT * FROM products WHERE volume = ',
        getProductByWeight: 'SELECT * FROM products WHERE weight = ',
        getProductBySupplierId: 'SELECT * FROM products WHERE supplier_id = ',
    }
}

module.exports = {
    querys
}