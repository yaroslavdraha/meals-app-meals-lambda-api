const lambdaLocal = require("lambda-local");
const lambdaFunc = require('../../index');

describe('Meals sub-resource', () => {
  it('should return meals', async () => {
    const res = await lambdaLocal.execute({
      event: {
        path: "/meals",
        httpMethod: "GET"
      },
      lambdaFunc
    });

    const resBody = JSON.parse(res.body);

    expect(res.statusCode).toEqual(200);
    expect(resBody.meals.length > 0).toBeTruthy();

    const meal = resBody.meals[0];

    expect(typeof meal.id).toEqual('string');
    expect(typeof meal.title).toEqual('string');
  })
});

