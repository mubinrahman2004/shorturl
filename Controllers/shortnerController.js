const creatshorlUrl = async (req, res) => {
  const { urlLong } = req.body;
  if (!urlLong) return res.status(400).send({ messege: "Url is requred" });
};
