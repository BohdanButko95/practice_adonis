class CustomValidator {
  async fails(errorMessages) {
    return this.ctx.response.json(errorMessages);
  }
}

module.exports = CustomValidator;
