const rp = require('request-promise');

test('admin get shipping', async() => {
  const options = {
    uri: 'http://localhost:8080/admin/shipping',
    json: true
  };
  const response = await rp(options);
  expect(response).toBeDefined();
});

test('user add shipping', async() => {
  const options = {
    uri: 'http://localhost:8080/user/shipping',
    json: true
  };
  const response = await rp(options);
  expect(response).toBeDefined();
});
