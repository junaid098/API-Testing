const { test, expect } = require("@playwright/test");

test("GET REQUEST", async ({ request }) => {
  const response = await request.get(
    `http://dummy.restapiexample.com/api/v1/employees?employee_name=Michael Silva&employee_salary=198500`
  );
  expect(response.status()).toBe(200);
  const body = await response.text();
  console.log(body);
});
