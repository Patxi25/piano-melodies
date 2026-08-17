module.exports = {
  apps: [
    {
      name: "piano-melodies",
      script: "npm",
      args: "run start",
      cwd: "/var/www/piano-melodies",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
