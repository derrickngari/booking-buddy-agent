import axios from "axios";

const MPESA_CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY;
const MPESA_CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET;
const mpesaEnv = process.env.MPESA_ENVIRONMENT;
const MPESA_BASE_URL =
    process.env.MPESA_ENVIRONMENT === "live"
      ? "https://api.safaricom.co.ke"
      : "https://sandbox.safaricom.co.ke";

async function mpesaMiddleware(req, res, next) {
    try {
      const auth = Buffer.from(`${MPESA_CONSUMER_KEY}:${MPESA_CONSUMER_SECRET}`).toString('base64');
      const response = await axios.get(
        `${MPESA_BASE_URL}/oauth/v1/generate?grant_type=client_credentials`,
        {
          headers: {
            Authorization: `Basic ${auth}`
          }
        }
      );

      req.token = response.data.access_token;
      console.log("Token:", req.token);
      next()
    } catch (error) {
      console.error("Mpesa Middleware Error:", error);
      return null;
    }
  }

  export default mpesaMiddleware