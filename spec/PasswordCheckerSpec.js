describe("PasswordIsVAlid", function() {
  it("should be larger than 8 characters", function() {
    expect(PasswordIsVAlid("Buhlebloo1")).toBe(true);
  });
  it("should not be null", function() {
    expect(function() {
      PasswordIsVAlid("");
    }).toThrow(new Error("Your password is invalid"));
  });

  it("should have at least one uppercase letter", function() {
    expect(PasswordIsVAlid("lihleNgwenya6")).toBe(true);
  });
  it("should have at least one lowercase letter", function() {
    expect(PasswordIsVAlid("THANKYoU2")).toBe(true);
  });
  it("should have at least one number", function() {
    expect(PasswordIsVAlid("Palesasit1")).toBe(true);
  });
  it(" should return true if the password passes three of the five tests", function() {
    expect(PasswordIsVAlid("buhlend9Lo")).toBe(true);
    expect(PasswordIsVAlid("Ntombimko3")).toBe(true);
    expect(PasswordIsVAlid("l1hleNgwenya")).toBe(true);
  });
  it("should throw an error when the password does not have the required format", function() {
    expect(PasswordIsOk("linnk")).toBe(false);
  });
});
