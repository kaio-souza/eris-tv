const { ApolloServer } = require("apollo-server")

const live = require("./mockups/live.json");

const typeDefs = `
    type Channel {
        number: Int,
        logo: String,
        name: String,
        category_id: String
    }

    type Category {
        id: String,
        title: String,
        icon: String
    }

    type CategoriesWithChannels {
        category: Category,
        channels: [Channel]
    }

    type Query {
        channels: [Channel],
        categories: [Category],
        categoriesWithChannels: [CategoriesWithChannels]
    }
`;

const resolvers = {
    Query: {
        channels (_, args) {
            return live.channels;
        },
        categories(_, args) {
            return live.categories;
        },
        categoriesWithChannels(_,args){
            let list = []
            live.categories.forEach(category => {
                let item = {
                    category,
                    channels: live.channels.filter(function(channel){
                        return channel.category_id === category.id
                    })
                };

                list.push(item)
            });
            return list
        }

    },

};

const server = new ApolloServer({typeDefs, resolvers});

server.listen(4001, function(){
    console.log('Listen on 4001')
});