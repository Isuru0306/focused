const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51NSAlbC1idODKND4eNmvXys09CcQOIU5l1dcLsQiWVGnfH37a4EnGxk6fAqPAx6gEhRRaGmDcBpwJCyguEGjZ3ul00hBJPnhjM"
);

// router endpoints
router.post("/intents", async (req, res, next) => {
  try {
    // create a PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount, // Integer, usd -> pennies, eur -> cents
      currency: "usd",
      setup_future_usage: "off_session",
    });
    // Return the secret
    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
});

module.exports = router;
