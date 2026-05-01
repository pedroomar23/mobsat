// Auth 
// X-Api-Key and X-Api_Secret

export class Auth {
    constructor(data) {
        this.data = new Data(data)
    }

    toJson() {
        return {
            "data": this.data
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
 }

class Data {
    constructor(uid, name, email, balance) {
        this.uid = uid || "",
        this.name = name || "",
        this.email = email || "",
        this.balance = Number(balance) || 0
    }

    toJson() {
        return {
            "uid": this.uid,
            "name": this.name,
            "email": this.email,
            "balance": this.balance
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}