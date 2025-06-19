export const cookieController = (req, res) => {
  const body = req.body;
  try {
    res.cookie("user_ID", "sfdkgerjsf");
    res.send("cookie created");
    console.log("cookie created");
  } catch (error) {
    console.error("Error creating cookie:", error);
    res.status(500).send("Failed to create cookie");
  }
};

export const readCookie = (req, res) => {
  const body = req.body;
  try {
    const cookies = req.cookies;
    console.log("cookies found", cookies);
    res.status(200).json({ message: "cookie found", cookies });
  } catch (error) {
    console.error("Error reading cookie:", error);
    res.status(500).send("no cookies found");
  }
};
