function CreateCallback(req, res, model) {
    this.request = req;
    this.response = res;
    this.model = model;
    console.log(model+"-----------------------");
    var res = {status: 200};

    this.response.status(200);
}

CreateCallback.prototype.insert = function () {

    var req=this.request;
    var resp=this.response;
    model=this.model;

    return function (err, data) {
        if (err || data == undefined || data == null) {
            console.log(err);
            resp.status(1000).send({error:"unable to create "+model});
        }
        else {
            resp.status(200).send(data);
        }

    }
};

module.exports = CreateCallback;