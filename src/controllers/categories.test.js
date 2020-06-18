const lambdaLocal = require("lambda-local");
const lambdaFunc = require('../../index');

describe('Categories sub-resource', () => {
  it('should return meals categories', async () => {
    const res = await lambdaLocal.execute({
      event: {
        path: "/meals/categories",
        httpMethod: "GET"
      },
      lambdaFunc
    });

    const resBody = JSON.parse(res.body);

    expect(res.statusCode).toEqual(200);
    expect(resBody.categories.length > 0).toBeTruthy();

    const category = resBody.categories[0];

    expect(typeof category.categoryId).toEqual('string');
    expect(typeof category.title).toEqual('string');
    expect(typeof category.color).toEqual('string');
  })
});

