import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xABf9005107b2f363334F034Fe750D2fC1E55265A");

(async () => {
    try {
        await editionDrop.createBatch([
            {
                name: "Tome of Knowledge",
                description: "This NFT will give you access to scholarship DAO!",
                image: readFileSync("scripts/assets/tome_of_knowledge.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})();
