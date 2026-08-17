module.exports = {
  apps: [
    {
      name: "pianomelodies",
      script: "npm",
      args: "run start",
      cwd: "/var/www/pianomelodies",
      instances: 1,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};
