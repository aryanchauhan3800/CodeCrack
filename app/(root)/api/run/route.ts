// app/api/run/route.ts
import { NextRequest, NextResponse } from "next/server"

const JUDGE0_URL = "http://localhost:2358" // Judge0 API
const JUDGE0_TIMEOUT = 10000

export async function POST(req: NextRequest) {
  try {
    const { code, language, stdin } = await req.json()

    // Map language to Judge0 ID
    const langMap: Record<string, number> = {
      cpp: 54, // C++17 (GCC 9.2.0)
      python: 71, // Python 3
      java: 62, // Java 17
      javascript: 63, // JS Node.js 14
    }

    const language_id = langMap[language]
    if (!language_id) {
      return NextResponse.json({ error: "Unsupported language" }, { status: 400 })
    }

    // Encode base64
    const src_b64 = Buffer.from(code).toString("base64")
    const stdin_b64 = Buffer.from(stdin || "").toString("base64")

    // Submit to Judge0
    const submissionRes = await fetch(`${JUDGE0_URL}/submissions?base64_encoded=true&wait=true`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_code: src_b64,
        stdin: stdin_b64,
        language_id,
      }),
    })

    const data = await submissionRes.json()

    // Decode outputs
    const decode = (s: string | null) => (s ? Buffer.from(s, "base64").toString("utf-8") : null)

    return NextResponse.json({
      stdout: decode(data.stdout),
      stderr: decode(data.stderr),
      compile_output: decode(data.compile_output),
    })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
