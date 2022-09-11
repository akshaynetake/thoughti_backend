const fs = require("fs");

class ScheduleService {

    readData = new Promise((resolve, reject) => {
        fs.readFile("./data.json", "utf8", (err, string) => {
            if (err) {
                reject(err);
            }
            try {
                resolve(JSON.parse(string));
            } catch (err) {
                reject(err)
            }
        });
    })


    getUser = async () => {
        return this.readData
            .then(res => {
                let data = res.Users;
                return ({
                    code: 200,
                    data: data,
                    msg: 'SUCCSESS'
                })
            })
            .catch(e => {
                return ({
                    code: 401,
                    msg: e
                })
            })
    }

    getTasks = async () => {
        return this.readData
            .then(res => {
                let data = res.Tasks;
                return ({
                    code: 200,
                    data: data,
                    msg: 'SUCCSESS'
                })
            })
            .catch(e => {
                return ({
                    code: 401,
                    msg: e
                })
            })
    }
}
module.exports = new ScheduleService();
