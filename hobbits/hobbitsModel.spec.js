const db = require("../data/dbConfig.js");
const Hobbits = require("./hobbitsModel.js");

describe("hobbits model", () => {
  describe("insert", () => {
    it("shoudl insert the provided hobbits int he db", async () => {
      await Hobbits.insert({ name: "raza" });
      await Hobbits.insert({ name: "raza2" });

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });

    it("should return the inserted hobbit", async () => {
      let hobbit = await Hobbits.insert({ name: "raza" });
      expect(hobbit.name).toBe("raza");

      hobbit = await Hobbits.insert({ name: "sam" });
      expect(hobbit.name).toBe("sam");
    });
  });
});

beforeEach(async () => {
  await db("hobbits").truncate();
});
