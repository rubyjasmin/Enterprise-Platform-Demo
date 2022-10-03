const { faker } = require("@faker-js/faker");

module.exports = async () => {
  try {
    const authors = Array.from({ length: 6 }, () => {
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const email = faker.helpers.unique(faker.internet.email, [firstName, lastName]);

      return {
        avatar: faker.image.avatar(),
        email,
        firstName,
        lastName,
      };
    });

    await strapi.db.query("api::author.author").createMany({ data: authors });

    console.log("🚀 Authors were created.");
  } catch (err) {
    console.log("🚀 v3_load_mock_content.js ~ err", err);
  }
};
