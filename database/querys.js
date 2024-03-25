// querys for the database

const querys = {
    getAllProducts: 'SELECT * FROM products',
    addProduct: 'INSERT INTO products (reference, description, buy_price, sell_price, stock, volume, weight) VALUES '
}

module.exports = {
    querys
}