class ApiError extends Error {
    constructor(
        statuscode,
        message = "Something Went Wrong",
        errors,
        stack = ""
    ) {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        
    }
}