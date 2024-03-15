import { querys, querysWithParams } from '../database/querys'
import { callDbGetFunction, callDbGetFunctionWithParams } from '../database/dbCallFunction'

const productController = {
    getAllProducts(req, res) {
        callDbGetFunction(res, querys.getAllProducts)
    },
    getProductByParam(req, res) {
        switch (req.body.paramName) {
            case 'id':
                callDbGetFunctionWithParams(res, 'getProductById', req.body.param)
                break;
            case 'name':
                callDbGetFunctionWithParams(res, 'getProductByName', req.body.param)
                break;
            case 'stock':
                callDbGetFunctionWithParams(res, 'getProductByStock', req.body.param)
                break;
            case 'buy_price':
                callDbGetFunctionWithParams(res, 'getProductByBuyPrice', req.body.param)
                break;
            case 'sell_price':
                callDbGetFunctionWithParams(res, 'getProductBySellPrice', req.body.param)
                break;
            case 'volume':
                callDbGetFunctionWithParams(res, 'getProductByVolume', req.body.param)
                break;
            case 'weight':
                callDbGetFunctionWithParams(res, 'getProductByWeight', req.body.param)
                break;
            case 'supplier_id':
                callDbGetFunctionWithParams(res, 'getProductBySupplierId', req.body.param)
                break;
            default:
                res.json({ error: 'Invalid parameter' })
        }
    }
}

module.exports = productController;