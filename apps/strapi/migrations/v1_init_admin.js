module.exports = async () => {
  try {
    const user = {
      username: process.env.ADMIN_USER || "super_admin",
      password: process.env.ADMIN_PASS || "ChangeMe#1234",
      firstname: process.env.ADMIN_USER || "Super",
      lastname: process.env.ADMIN_USER || "Admin",
      email: process.env.ADMIN_EMAIL || "super_admin@example.com",
      isActive: true,
    };

    const hasAdmin = await strapi.service("admin::user").exists();
    let superAdminRole = await strapi.service("admin::role").getSuperAdmin();

    if (hasAdmin) return;

    if (!superAdminRole) {
      superAdminRole = await strapi.service("admin::role").create({
        name: "Super Admin",
        code: "strapi-super-admin",
        description: "Super Admins can access and manage all features and settings.",
      });
    }

    await strapi
      .service("admin::user")
      .create({ ...user, registrationToken: null, roles: [superAdminRole.id] });

    console.log("🚀 Super Admin user is created.");
  } catch (error) {
    console.log("🚀 init admin ~ error", error);
  }
};
