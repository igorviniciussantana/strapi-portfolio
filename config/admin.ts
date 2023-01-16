export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '877c9cf4507c5453d56e7c231208f870'),
  },
});
