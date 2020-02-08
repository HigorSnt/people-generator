const { ApolloServer } = require("apollo-server");
const service = require("./service");

const { generateDates } = require("./util/generateDates");
const { generateCPF } = require("./util/generateCPF");

const typeDefs = `

    type Name {
        id: Int!
        type: String!
        value: String!
    }

    type Person {
        name: String!
        cpf: String!
        dateOfBirth: String!
    }

    type Query {
        names(type: String): [Name]
    }

    input NameInput {
        type: String!
        value: String!
    }

    type Mutation {
        saveName(name: NameInput): Name
        deleteName(id: Int): Boolean
        generatePeople: [Person]
    }
`;

const resolvers = {
    Query: {
        async names (_, args) {
            const names = await service.getNamesByType(args.type);
            return names;
        }
    },

    Mutation: {
        async saveName (_, args) {
            const name = args.name;
            const [newName] = await service.saveName(name);

            return newName;
        },
        async deleteName (_, args) {
            const id = args.id;
            await service.deleteName(id);

            return true;
        },
        async generatePeople() {
            let people = [];
            const names = await service.getNames();

            for (let firstName of names.filter(name => name.type === "firstName")){
                for (let lastName of names.filter(name => name.type === "lastName")) {
                    let name = `${firstName.value} ${lastName.value}`;
                    let dateOfBirth = generateDates(new Date(1930, 0, 1), new Date());
                    let cpf = generateCPF();

                    people.push({
                        name,
                        dateOfBirth,
                        cpf
                    });
                }
            }
            
            return people;
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen();