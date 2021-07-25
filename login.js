import { Selector } from "testcafe";

fixture`Log in`.page("https://www.etalente.co.za/");

test("Log in", async (t) => {
  await t
    .typeText("#mat-input-0", "alric9382@gmail.com")
    .typeText("#mat-input-1", "Mathilde07")
    .click(".mat-focus-indicator");
});

test("Fail Log in", async (t) => {
  await t
    .typeText("username", "alric9382@gmail.com")
    .typeText("#mat-input-1", "Mathilde07")
    .click(".mat-focus-indicator");
});
