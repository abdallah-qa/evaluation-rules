import fs from "fs";
import { exec } from "child_process";

fs.chmod("/var/app/config.json", 0o777, () => {});
fs.mkdir("/var/app/uploads", 0o777, () => {});
exec("mkdir --mode=777 /var/app/public", () => {});