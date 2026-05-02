// Operators 

export class ListOperators {
    constructor(success, message, data) {
        this.success = Boolean(success),
        this.message = message || "",
        this.data = new NData(data)
    }

    toJson() {
        return {
            "success": this.success,
            "message": this.message,
            "data": this.data.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

class NData {
    constructor(data) {
        this.data = [new Operators(data)]
    }

    toJson() {
        return {
            "data": this.data.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

class Operators {
    constructor(id, name, photo, country) {
        this.id = Number(id) || 0,
        this.name = name || "",
        this.photo = photo || ""
        this.country = new Country(country)
    }

    toJson() {
        return {
            "id": this.id,
            "name": this.name,
            "photo": this.photo,
            "country": this.country.toString()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}
class Country {
    constructor(id, iso_code, name, flag_png, flag_svg, calling_code) {
        this.id = Number(id) || 0,
        this.iso_code = iso_code || "",
        this.name = name || "",
        this.flag_png = flag_png || "",
        this.flag_svg = flag_svg || "",
        this.calling_code = Number(calling_code) || 0
    }

    toJson() {
        return {
            "id": this.id,
            "iso_code": this.iso_code,
            "name": this.name,
            "flag_png": this.flag_png,
            "flag_svg": this.flag_svg,
            "calling_code": this.calling_code
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}