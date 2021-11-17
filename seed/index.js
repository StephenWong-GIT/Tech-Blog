// const seedPosts = require('./post-seeds');
// const { User, Post, Comment } = require('../models');
// const sequelize = require('../config/connection');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n');
//   await seedPosts();
//   console.log('\n----- POSTS SEEDED -----\n');

//   process.exit(0);
// };

// seedAll();

// -------------------------------------------------------------------------

const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

// -----------------------------------------------------------------------

    // for (const posts of postData) {
    //     await Post.create({
    //         ...posts,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }

    // // Need to seed test comment data

    // for (const comments of commentData) {
    //     await Comment.create({
    //         ...comments,
    //         user_id: users[Math.floor(Math.random() * users.length)].id,
    //     });
    // }
// -------------------------------------------------------

    console.log("-----DATA HAS BEEN SEEDED!-----")

    process.exit(0);
}

seedDatabase();

// -------------------------------------------------------