export const cookieController = (req, res) => {
  const body = req.body;
  console.log("=== COOKIE CONTROLLER DEBUG ===");
  console.log("Request origin:", req.headers.origin);
  console.log("Request method:", req.method);
  console.log("Body received:", body);
  console.log("Body type:", typeof body);
  console.log("UID value:", body.uid);
  console.log("UID type:", typeof body.uid);
  
  try {
    res.cookie("user_ID", body.uid);
    console.log("✅ Cookie set successfully");
    console.log("Response headers will include Set-Cookie");
    res.send("cookie created");
  } catch (error) {
    console.error("❌ Error creating cookie:", error);
    res.status(500).send("Failed to create cookie");
  }
};

export const readCookie = (req, res) => {
  // const body = req.body;
  try {
    const cookies = req.cookies;
    console.log("cookies found", cookies);
    res.status(200).json({ message: "cookie found", cookies });
  } catch (error) {
    console.error("Error reading cookie:", error);
    res.status(500).send("no cookies found");
  }
};

export const deleteCookie = (req, res) => {
  try {
    res.clearCookie("user_ID", {
      path: "/", // ensure the same path used when setting
      httpOnly: true, // match the original cookie attributes
      secure: false,  // set `true` if using HTTPS
      sameSite: "Lax",
    });
    console.log("✅ Cookie deleted");
    res.status(200).send("Cookie deleted");
  } catch (err) {
    console.error("❌ Error deleting cookie", err);
    res.status(500).send("Failed to delete cookie");
  }
};

