import Discipline from "../models/Discipline";

// CRUD - Create | Read | Update | Delete

class DisciplineController {
  async index(req, res) {
    try {
      const discipline = await Discipline.find();

      return res.status(200).json(discipline);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async store(req, res) {
    const { code, name, teacher, department, credits } = req.body;

    const discipline = await Discipline.findOne({ 'code': code })

    if (discipline) {
      return res
        .status(400)
        .json({ message: "Disciplina já está cadastrada" })
    }

    if (!(name && teacher && department && credits)) {
      return res
        .status(422)
        .json({ message: "Nome, professor, departamento e número de créditos são obrigatórios!" });
    }

    try {
      const discipline = await Discipline.create(req.body);

      return res.status(201).json(discipline);
    } catch (error) {
      return res.status(500).json({ message: `Erro no servidor! ${error}` });
    }
  }

  async update(req, res) {
    if (!req.params.id) {
      return res
        .status(400)
        .json({ message: "É necessário passar o ID da disciplina" })
    }

    const { id } = req.params;

    const disciplineToUpdate = await Discipline.findOne({
      _id: id,
    });

    if (!disciplineToUpdate) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe, ID inválido" });
    }

    await Discipline.update(req.body);

    return res.status(200).json({ message: "Disciplina atualizada com sucesso!" });
  }

  async delete(req, res) {
    if (!req.params.id) {
      return res
        .status(400)
        .json({ message: "É necessário passar o ID da disciplina" })
    }

    const disciplineToDelete = await Discipline.findOne({ _id: req.params.id });

    if (!disciplineToDelete) {
      return res
        .status(422)
        .json({ message: "Disciplina não existe. ID inválido" });
    }

    await Discipline.deleteOne({ _id: req.params.id });

    return res.json({ message: "A disciplina foi excluída" });
  }
}

export default new DisciplineController();
