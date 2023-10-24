const { API_KEY } = process.env;

const conversation = async (req, res) => {
  const response = req.body.data.message;

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: response }],
      max_tokens: 100,
    }),
  };

  try {
    const apiResponse = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );
    const data = await apiResponse.json();

    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = { conversation };
