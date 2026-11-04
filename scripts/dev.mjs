// Adapt the workspace preview launch arguments to Next's native CLI.
import { spawn } from "node:child_process";
const args = process.argv.slice(2);
const portIndex = args.indexOf("--port");
const port = portIndex >= 0 ? args[portIndex + 1] : process.env.PORT || "4173";
if (!/^\d{2,5}$/.test(port)) throw new Error("Invalid development port");
const child = spawn(
  process.execPath,
  [
    "node_modules/next/dist/bin/next",
    "dev",
    "--hostname",
    "0.0.0.0",
    "--port",
    port,
  ],
  {
    stdio: "inherit",
    env: {
      ...process.env,
      ORBIT_REVIEW_MODE: "1",
      NEXT_TELEMETRY_DISABLED: "1",
    },
  },
);
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
child.on("exit", (code) => process.exit(code ?? 1));
