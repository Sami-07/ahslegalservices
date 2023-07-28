import { NextRequest, NextResponse } from "next/server"
import * as fs from "fs"
// http://localhost:3000/api/servicedatafetch
export async function GET(req, res) {
  const data = await fs.promises.readFile(`servicesdata/allservices.json`, "utf-8")
  return new NextResponse(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json",
    }
  })
}
