const { Buku } = require("../models");

class Controller {
  static async getbooks(req, res, next) {
    try {
      const books = await Buku.findAll({
        attributes: ["id", "judul", "penulis", "tahunTerbit"],
      });
      res.status(200).json(books);
    } catch (error) {
      next(error);
    }
  }
  static async getBookById(req, res, next) {
    try {
      const id = req.params.id;
      const book = await Buku.findByPk(id, {
        attributes: ["id", "judul", "penulis", "tahunTerbit"],
      });
      if (book) {
        res.status(200).json(book);
      } else {
        throw { name: "NotFound" };
      }
    } catch (error) {
      next(error);
    }
  }
  static async postbooks(req, res, next) {
    try {
      const { judul, penulis, tahunTerbit } = req.body;
      const book = await Buku.create({ judul, penulis, tahunTerbit });
      res.status(201).json(book);
    } catch (error) {
      next(error);
    }
  }
  static async editbooks(req, res, next) {
    try {
      const id = req.params.id;
      const { judul, penulis, tahunTerbit } = req.body;
      const book = await Buku.update(
        { judul, penulis, tahunTerbit },
        { where: { id }, returning: true }
      );
      res.status(200).json(book[1][0]);
    } catch (error) {
      next(error);
    }
  }
  static async deletebooks(req, res, next) {
    try {
      const id = req.params.id;
      const book = await Buku.findOne({ where: { id } });

      if (!book) {
        throw { name: "NotFound" };
      }

      await Buku.destroy({ where: { id } });
      res.status(200).json({ message: "Buku berhasil dihapus" });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
