import { randomBytes } from "crypto";
import * as controller from "../src/routes/factions/controller";
import { initdb } from "../src/db";

describe("FactionsAPI", () => {
    initdb(true);
    const faction_name = randomBytes(256).toString("hex");
    const faction_name_long = randomBytes(257).toString("hex");

    describe("operations", () => {
        it("successfully truncates the table", async (done) => {
            await controller.truncate(true);
            const factions = await controller.get_all();
            expect(factions.length).toEqual(0);
            done();
        });
    });

    describe("post /faction", () => {
        it("creates a faction on valid request", async (done) => {
            const faction = await controller.create(faction_name);
            expect(faction).toBeDefined();
            const factions = await controller.get_all();
            expect(factions.length).toBeGreaterThan(0);
            expect(factions.find((f) => f.id === faction.id)).toBeDefined();
            done();
        });
        it("rejects a request with a name exceeding 512 characters", () => {
            expect(controller.create(faction_name_long)).rejects.toThrow();
        });
        it("rejects a request with an empty name", () => {
            expect(controller.create("")).rejects.toThrow();
        });
        it("rejects a request with an undefined name", () => {
            expect(controller.create(undefined)).rejects.toThrow();
        });
    });

    describe("get /faction", () => {
        it("retrieves factions", async (done) => {
            const factions = await controller.get_all();
            expect(factions).toBeDefined();
            expect(factions.length).toBeGreaterThan(0);
            done();
        });
    });

    describe("delete /faction", () => {
        it("delets an existing faction", async (done) => {
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
