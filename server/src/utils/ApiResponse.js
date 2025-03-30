class ApiResponse {
  constructor(message = "success", statuscode, data) {
    this.message = message;
    this.statuscode = statuscode;
    this.success = statuscode < 400;
    this.data = data;
  }
}

export { ApiResponse };
