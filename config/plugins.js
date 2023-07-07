module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_fYOVe7JXUiXTHSLSSkSHMvmv7kbu/zoXF7ILMVB",
      apiToken: "rfGhH1WMF0DKkjj2HmoiAx0l",
      appFilter: "strapi-tribuana-cms",
      teamFilter: "your-team-id-on-vercel",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
