const router = require("express").Router();
const socketRoutes = require("./socket.routes")
const clientRoutes = require("./clients.routes");

module.exports = router;

router.use('/api/links', linksRoutes)
// router.use('/api/recordsJson', linksRoutes)



// API error handlers (API routes must be registered before this)
useAPIErrorHandlers(router);

// register client routes
router.use(clientRoutes);

function useAPIErrorHandlers(router) {
  // Handle API 404
  router.use("/api/*", (req, res, next) => {
    res.sendStatus(404);
  });

  // Handle API 500
  router.use((err, req, res, next) => {
    // If the error object doesn't exists
    if (!err) {
      return next();
    }

    // Log it
    console.error(err.stack);

    // Redirect to error page
    res.sendStatus(500);
  });
}