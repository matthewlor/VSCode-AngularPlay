var app;
(function (app) {
    var models;
    (function (models) {
        var Product = (function () {
            function Product(productId, productName, productCode, releaseDate, price, description, imageUrl) {
                this.productId = productId;
                this.productName = productName;
                this.productCode = productCode;
                this.releaseDate = releaseDate;
                this.price = price;
                this.description = description;
                this.imageUrl = imageUrl;
            }
            Product.prototype.calculatedDiscount = function (percent) {
                return this.price - (this.price * percent / 100);
            };
            return Product;
        })();
        models.Product = Product;
    })(models = app.models || (app.models = {}));
})(app || (app = {}));
