import axios from 'axios';

const MPESA_BUSINESS_SHORTCODE = process.env.MPESA_BUSINESS_SHORTCODE;
const MPESA_PASSKEY = process.env.MPESA_PASSKEY;
const MPESA_BASE_URL =
    process.env.MPESA_ENVIRONMENT === "live"
      ? "https://api.safaricom.co.ke"
      : "https://sandbox.safaricom.co.ke";

export async function sendStkPush(req, res) {
    try {
        const token = req.token;
        if (!token) throw new Error('Failed to get M-Pesa token');

        const { amount, phoneNumber } = req.body;
    
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
        const password = Buffer.from(`${MPESA_BUSINESS_SHORTCODE}${MPESA_PASSKEY}${timestamp}`).toString('base64');
    
        const response = await axios.post(
          `${MPESA_BASE_URL}/mpesa/stkpush/v1/processrequest`,
          {
            BusinessShortCode: MPESA_BUSINESS_SHORTCODE,
            Password: password,
            Timestamp: timestamp,
            TransactionType: "CustomerPayBillOnline",
            Amount: amount,
            PartyA: phoneNumber,
            PartyB: MPESA_BUSINESS_SHORTCODE,
            PhoneNumber: phoneNumber,
            CallBackURL: `${process.env.MPESA_CALLBACK_URL}/callback`,
            AccountReference: "BOOKING BUDDY",
            TransactionDesc: "Service Booking Payment",
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
    
        return res.status(200).json(response.data);
      } catch (error) {
        console.error('Error initiating M-Pesa payment:', error);
        return res.status(500).json({ message: error.message });
      }
}

