const AWS = require('aws-sdk');

class HomeController {

    HomeController() {
        AWS.config.update({ region: 'REGION' })
    }

    async get(req, res) {
        let s3 = new AWS.S3({ apiVersion: '2006-03-01' });
        var bucketParams = {
            Bucket: 'spe-images',
        };
        s3.listObjects(bucketParams, async function(err, data) {

            if (err) {
                console.log("Error", err);
                return res.send(err)
            } else {
                console.log("Success", data);
                return res.json(data)
            }
        });
    }
    getbyHomeId(req, res) {
        return res.send(req.params.homeId);
    }
}

module.exports = new HomeController();