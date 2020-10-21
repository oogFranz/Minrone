const client = new KintoneRestAPIClient({
    baseUrl: "https://bozuman.cybozu.com"
});

client.record
  .getRecords({ app: "52673" })
  .then((resp) => {
    console.log(resp.records);
  })
  .catch((err) => {
    console.log(err);
  });