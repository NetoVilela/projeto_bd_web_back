const db = require("../../config/db");

exports.listarProdutos = async (req, res) => {
    const { rows } = await db.query("SELECT * FROM produtos");

    res.status(201).send({
        message: "Lista de usuários: ",
        body: rows
    })
}

exports.addProduto = async (req, res) => {
    const { nome, marca, preco } = req.body

    try {
        await db.query(`INSERT INTO produtos (nome,marca,preco) VALUES('${nome}','${marca}',${preco})`);
        res.json({ codigo: 200, message: "Produto cadastrado com sucesso!" });
    } catch (er) {
        res.json({ codigo: 500, message: "Não foi possível cadastrar o produto!" });
    }
}

exports.editListProduto = async (req, res) => {
    const { id } = req.params
    try {
        const { rows } = await db.query(`SELECT * FROM produtos WHERE id = ${id}`);
        res.json({ codigo: 200, body: rows });
    } catch (err) {
        res.json({ codigo: 500, message: "Houve algum erro" });
    }
}

exports.editProduto = async (req, res) => {
    const { id, nome, marca, preco } = req.body
    await db.query(`UPDATE produtos SET nome = '${nome}', marca = '${marca}', preco = ${preco} WHERE id=${id} `);

    res.status(201).send({
        message: "Produto editado com sucesso!"
    })
}

exports.deleteProduto = async (req, res) => {
    const { id } = req.body

    try {
        console.log("id: " + id)
        await db.query(`DELETE FROM produtos WHERE id=${id} `);
        res.json({ codigo: 200, message: "Produto deletado com sucesso!" });
    } catch (er) {
        res.json({ codigo: 500, message: "Não foi possível deletar o produto!" });
    }

}
