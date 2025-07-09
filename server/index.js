const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Helper: Get Management API token
async function getManagementToken() {
  try {
    const response = await axios.post(`https://${process.env.AUTH0_DOMAIN}/oauth/token`, {
      client_id: process.env.AUTH0_MGMT_CLIENT_ID,
      client_secret: process.env.AUTH0_MGMT_CLIENT_SECRET,
      audience: `https://${process.env.AUTH0_DOMAIN}/api/v2/`,
      grant_type: "client_credentials",
    });
    console.log("im here", response.data.access_token);
    return response.data.access_token;
  } catch (err) {
    console.error("Error fetching management token:", err.response?.data || err.message);
    throw err;
  }
}

// Route: Get Auth0 user details by user_id
app.get("/api/user/:userId", async (req, res) => {
  try {
    const token = await getManagementToken();
    const userId = req.params.userId;
    console.log({ token, userId });
    const userRes = await axios.get(`https://${process.env.AUTH0_DOMAIN}/api/v2/users/${encodeURIComponent(userId)}`, { headers: { Authorization: `Bearer ${token}` } });
    const { last_login, logins_count, last_ip, ...rest } = userRes.data;
    res.json({ last_login, logins_count, last_ip, ...rest });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
