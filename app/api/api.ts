export default function handler(req, res) {
  const { mom } = req.query;
  res.end(`why are you here ${mom}!`);
}
