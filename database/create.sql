CREATE SCHEMA people_generator;

CREATE TABLE people_generator.name (
    id SERIAL,
    type TEXT NOT NULL,
    value TEXT NOT NULL
);

INSERT INTO people_generator.name (type, value) values ('firstName', 'José');
INSERT INTO people_generator.name (type, value) values ('firstName', 'João');
INSERT INTO people_generator.name (type, value) values ('firstName', 'Maria');
INSERT INTO people_generator.name (type, value) values ('firstName', 'Ana');
INSERT INTO people_generator.name (type, value) values ('lastName', 'dos Santos');
INSERT INTO people_generator.name (type, value) values ('lastName', 'Silva');
INSERT INTO people_generator.name (type, value) values ('lastName', 'Medeiros');
INSERT INTO people_generator.name (type, value) values ('lastName', 'Costa');
