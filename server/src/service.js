const database = require("./database");

exports.getNamesByType = function (type) {
    return database.execute("SELECT * FROM people_generator.name WHERE type = $1", [type]);
}

exports.getNames = function () {
    return database.execute("SELECT * FROM people_generator.name");
}

exports.saveName = function (name) {
    return database.execute("INSERT INTO people_generator.name (type, value) VALUES ($1, $2) RETURNING *", [name.type, name.value]);
}

exports.deleteName = function (id) {
    return database.execute("DELETE FROM people_generator.name WHERE id = $1", [id]);
}