const faker = require('faker');

const db = require('../config/connection');
const { Review, User, Maid } = require('../models');

db.once('open', async () => {
  await Review.deleteMany({});
  await User.deleteMany({});
  await Maid.deleteMany({});

  // create user data
  const createdUsers = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    const user = await User.create({ username, email, password });
    createdUsers.push(user);
  }


  //const createdUsers = await User.collection.insertMany(userData);
  /* create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
    const { _id: userId } = createdUsers.insertedIds[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.insertedCount);
      friendId = createdUsers.insertedIds[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }*/

  // create reactions
  /*  for (let i = 0; i < 100; i += 1) {
      const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);
  
      const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
      const { username } = createdUsers[randomUserIndex];
  
      const randomReviewIndex = Math.floor(Math.random() * createdReviews.length);
      const { _id: reviewId } = createdReviews[randomReviewIndex];
  
      await Review.updateOne(
        { _id: reviewId },
        { $push: { reactions: { reactionBody, username } } },
        { runValidators: true }
      );
    }*/

  /*************/
  /*  MAIDS    */
  /*************/

  const maidSeed = [
    {
      name: 'Bubbly Brenda',
      maid_username: 'bbrenda',
    },
    {
      name: 'Cleaning Cindy',
      maid_username: 'ccindy',
    },
    {
      name: 'Sparkling Sarah',
      maid_username: 'ssarah',
    },
    {
      name: 'Mopping Mary',
      maid_username: 'mmary',
    },
    {
      name: 'Dust-Away Daryl',
      maid_username: 'ddaryl',
    },
  ];
  const createdMaids = [];
  for (let i = 0; i < maidSeed.length; i += 1) {
    createdMaids.push(maidSeed[i]);
    const maid = await Maid.create(maidSeed[i]);
  }

  /****************/
  /*  Reviews     */
  /****************/
  for (let i = 0; i < 50; i++) {
    let reviewText;
    do {
      reviewText = faker.random.words(Math.floor(Math.random() * 50));
    } while (reviewText.length <= 10 || reviewText.length >= 280);

    // get a random user
    const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    const { username } = createdUsers[randomUserIndex];

    const randomMaidIndex = Math.floor(Math.random() * createdMaids.length);
    const { maid_username } = createdMaids[randomMaidIndex];

    const createdReview = await Review.create({
      reviewText: reviewText,
      maid_username: maid_username,
      username: username,
      createdAt: Date.now(),
    });

    await Maid.updateOne(
      { maid_username: maid_username },
      { $push: { reviews: createdReview } }
    );
    await User.updateOne(
      { username: username },
      { $push: { reviews: createdReview } }
    );
  }

  console.log('all done!');
  process.exit(0);
});
