import { querys, querysWithParams } from '../database/querys'
import { callDbGetFunction, callDbGetFunctionWithParams } from '../database/dbCallFunction'

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.getAllProducts)
    },
    getProductByParam(req, res) {
        switch (req.body.param) {
            case 'id':
                callDbGetFunctionWithParams(res, 'getProductById', req.body.id)
                break;
            case 'name':
                callDbGetFunctionWithParams(res, 'getProductByName', req.body.name)
                break;
            case 'stock':
                callDbGetFunctionWithParams(res, 'getProductByStock', req.body.stock)
                break;
            case 'buy_price':
                callDbGetFunctionWithParams(res, 'getProductByBuyPrice', req.body.buy_price)
                break;
            case 'sell_price':
                callDbGetFunctionWithParams(res, 'getProductBySellPrice', req.body.sell_price)
                break;
            case 'volume':
                callDbGetFunctionWithParams(res, 'getProductByVolume', req.body.volume)
                break;
            case 'weight':
                callDbGetFunctionWithParams(res, 'getProductByWeight', req.body.weight)
                break;
            case 'supplier_id':
                callDbGetFunctionWithParams(res, 'getProductBySupplierId', req.body.supplier_id)
                break;
            default:
                res.json({ error: 'Invalid parameter' })
        }
    }
}

module.exports = productController;