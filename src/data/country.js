// Country 

export class GetCountry {
    constructor(success, message, data) {
        this.success = Boolean(success),
        this.message = message || "",
        this.data = new Data(data)
    }

    toJson() {
        return {
            "success": this.success,
            "message": this.message,
            "data": this.data.toJson()
        }
    }

    toString() {
        return JSON.stringify(this.toJson());
    }
}

class Data {
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