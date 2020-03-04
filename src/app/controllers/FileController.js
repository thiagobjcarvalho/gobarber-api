class FileController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    return res.json(req.file);
  }
}

export default new FileController();
