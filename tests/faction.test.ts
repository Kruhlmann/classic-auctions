import { randomBytes } from "crypto";
import * as controller from "../src/routes/factions/controller";
import { initdb } from "../src/db";

describe("FactionsAPI", () => {
    initdb(true);
    const faction_name = randomBytes(256).toString("hex");
    const faction_name_long = randomBytes(257).toString("hex");

    describe("truncate", () => {
        test("will truncate", async (done) => {
            await controller.truncate(true);
            const factions = await controller.get_all();
            expect(factions.length).toEqual(0);
            done();
        });
    });

    describe("post /faction", () => {
        test("valid request", async (done) => {
            const faction = await controller.create(faction_name);
            expect(faction).toBeDefined();
            const factions = await controller.get_all();
            expect(factions.length).toBeGreaterThan(0);
            expect(factions.find((f) => f.id === faction.id)).toBeDefined();
            done();
        });
        test("name too long", () => {
            expect(controller.create(faction_name_long)).rejects.toThrow();
        });
        test("empty name", () => {
            expect(controller.create("")).rejects.toThrow();
        });
        test("undefined name", () => {
            expect(controller.create(undefined)).rejects.toThrow();
        });
    });

    describe("delete /faction", () => {
        test("valid request", async (done) => {
            let factions = await controller.get_all();
            let faction = factions.find((f) => f.name === faction_name);
            expect(faction).toBeDefined();
            await controller.destroy(faction.id);
            factions = await controller.get_all();
            faction = factions.find((f) => f.name === faction_name);
            expect(faction).not.toBeDefined();
            done();
        });
    });
});
