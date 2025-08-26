import { randomBytes } from "crypto";

function generateRandomPassword(length: number = 12): string {
    return randomBytes(length)
        .toString("base64")
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, length);
}