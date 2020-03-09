import File from '../models/File';

class FileController {
  // eslint-disable-next-line class-methods-use-this
  async store(req, res) {
    const { filename: path, originalname: name } = req.file;

    const file = await File.create({
      name,
      path
    });

    return res.json(file);
  }
}

export default new FileController();
