function status(request, response) {
  response.status(200).json({
    chave: "Status-code-200-OK",
  });
}

export default status;
