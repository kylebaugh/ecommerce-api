const products = require('../products.json')


const getProduct = (req, res) => {
    const foundId = products.find((val) => val.id === +req.params.id)
        if(!foundId) {
            return res.status(500).send('Item not in list')
        }
        res.status(200).send(foundId)
}




module.exports = getProduct