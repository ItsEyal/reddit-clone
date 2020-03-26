module.exports = db => ({
  Query: {
    allPosts: async () =>
      await db
        .collection('posts')
        .find()
        .toArray()
  }
});
