fixture`Log in`.page("https://www.etalente.co.za/");

const email = "alric9382@gmail.com";
const password = "Mathilde07";

test("Log in", async (t) => {
  await t
    .typeText("#mat-input-0", email)
    .typeText("#mat-input-1", password)
    .click(".mat-focus-indicator");
});

test("Fail Log in", async (t) => {
  await t
    .typeText("username", email)
    .typeText("#mat-input-1", password)
    .click(".mat-focus-indicator");
});
