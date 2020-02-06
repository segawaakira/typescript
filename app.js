var Address = (function () {
    function Address(zip) {
        this.addresses = {
            '079-1100': {
                'prefecture': '北海道',
                'city': '赤平市'
            },
            '038-0000': {
                'prefecture': '青森県',
                'city': '青森市'
            },
        };
        this.zip = zip;
    }
    Address.prototype.getZip = function () {
        return this.zip;
    };
    Address.prototype.getAddress = function () {
        var here = this.addresses[this.zip];
        return here.prefecture + " " + here.city;
    };
    return Address;
}());
var myAddress = new Address('079-1100');
console.log(myAddress.getAddress());
//# sourceMappingURL=app.js.map