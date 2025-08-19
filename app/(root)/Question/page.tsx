"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Play, RotateCcw, ArrowLeft, Clock, BookOpen } from "lucide-react"
import dynamic from "next/dynamic"
import type { editor as MonacoEditor } from "monaco-editor"
import { EditorProps } from "@monaco-editor/react"
import { twoSum } from "@/lib/problems/two-sum"

const Editor = dynamic<EditorProps>(() => import("@monaco-editor/react").then((mod) => mod.default), {
  ssr: false,
})
export default function TwoSumPage() {
  const [code, setCode] = useState(`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};`)

  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [language, setLanguage] = useState("javascript")
  const [output, setOutput] = useState<{ line: string; type: string }[]>([])
  const editorRef = useRef<MonacoEditor.IStandaloneCodeEditor | null>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (isRunning) {
      interval = setInterval(() => {
        setTime((time) => time + 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.message.includes("ResizeObserver loop completed with undelivered notifications")) {
        event.preventDefault()
        event.stopPropagation()
        return false
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes("ResizeObserver loop completed with undelivered notifications")) {
        event.preventDefault()
        return false
      }
    }

    window.addEventListener("error", handleError)
    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("error", handleError)
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

const handleRun = async () => {
  if (!isRunning) setIsRunning(true);
  setOutput([]);

  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ];

  const out: { line: string; type: string }[] = [];

  // Helper to compare: strip spaces/newlines
  const norm = (s: string) => s.replace(/\s/g, "");

  // When we use Judge0, we’ll pass stdin like:
  //   n
  //   a1 a2 a3 ... an
  //   target
  const mkStdin = (tc: typeof testCases[number]) =>
    `${tc.nums.length}\n${tc.nums.join(" ")}\n${tc.target}\n`;

  try {
    if (language === "javascript") {
      // your existing in-browser JS evaluator
      const func = new Function(code + "; return twoSum;")();

      for (let i = 0; i < testCases.length; i++) {
        try {
          const res = func(testCases[i].nums, testCases[i].target);
          const got = Array.isArray(res) ? [...res].sort((a, b) => a - b) : undefined;
          const exp = [...testCases[i].expected].sort((a, b) => a - b);
          if (got && JSON.stringify(got) === JSON.stringify(exp)) {
            out.push({ line: `Test Case ${i + 1}: Passed`, type: "passed" });
          } else {
            out.push({
              line: `Test Case ${i + 1}: Failed | Expected ${JSON.stringify(exp)} | Got ${JSON.stringify(res)}`,
              type: "failed",
            });
          }
        } catch (e: any) {
          out.push({ line: `Test Case ${i + 1}: Error - ${e.message}`, type: "error" });
        }
      }
    } else if (["cpp", "python", "java"].includes(language)) {
      for (let i = 0; i < testCases.length; i++) {
        const stdin = mkStdin(testCases[i]);

        const res = await fetch("/api/run", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, language, stdin }),
        });

        const data = await res.json();

        if (data.compile_output) {
          out.push({ line: `Test Case ${i + 1}: Compile Error\n${data.compile_output}`, type: "error" });
          continue;
        }
        if (data.stderr) {
          out.push({ line: `Test Case ${i + 1}: Runtime Error\n${data.stderr}`, type: "error" });
          continue;
        }

        const actual = (data.stdout ?? "").trim();
        const expected = testCases[i].expected.join(" ");
        if (norm(actual) === norm(expected)) {
          out.push({ line: `Test Case ${i + 1}: Passed`, type: "passed" });
        } else {
          out.push({
            line: `Test Case ${i + 1}: Failed | Expected ${expected} | Got ${actual || "''"}`,
            type: "failed",
          });
        }
      }
    } else {
      out.push({ line: `Code execution for ${language} is not implemented yet.`, type: "error" });
    }
  } catch (e: any) {
    out.push({ line: `Execution Error: ${e.message || e}`, type: "error" });
  } finally {
    setOutput(out);
  }
};

  const handleReset = () => {
    const templates = {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};`,
      python: `class Solution:
    def twoSum(self, nums, target):
        `,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`,
    }
    setCode(templates[language as keyof typeof templates] || templates.javascript)
    setTime(0)
    setIsRunning(false)
  }

  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage)
    const templates = {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
};`,
      python: `class Solution:
    def twoSum(self, nums, target):
        `,
      java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        
    }
}`,
      cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
    }
};`,
    }
    setCode(templates[newLanguage as keyof typeof templates] || templates.javascript)
  }

  const handleEditorDidMount = (editor: MonacoEditor.IStandaloneCodeEditor) => {
    editorRef.current = editor
    // Suppress ResizeObserver errors from Monaco Editor
    try {
      editor.layout()
    } catch (error) {
      // Ignore ResizeObserver errors
      if (error instanceof Error) {
        if (!error.message.includes("ResizeObserver")) {
          console.error("Editor layout error:", error)
        }
      } else {
        console.error("Editor layout error:", error)
      }
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-200"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Button>
              <div className="flex items-center space-x-4">
                <h1 className="text-xl font-bold text-white">Two Sum</h1>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Clock className="h-4 w-4" />
                  <span className="font-mono text-sm">{formatTime(time)}</span>
                </div>
              </div>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200">
              Submit
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-88px)]">
        <div className="bg-slate-800 border-r border-slate-700 overflow-y-auto">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">1. Two Sum</h2>
              <span className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm font-medium">Easy</span>
            </div>

            <div className="flex items-center space-x-2 mb-6">
              <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm flex items-center">
                <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                Array
              </span>
              <span className="px-3 py-1 bg-slate-700 text-slate-300 rounded-full text-sm flex items-center">
                <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                Hash Table
              </span>
            </div>

            <div className="space-y-6">
              <div className="text-slate-300 leading-relaxed space-y-4">
                <p>
                  Given an array of integers{" "}
                  <code className="bg-slate-700 px-2 py-1 rounded text-orange-300 font-mono">nums</code> and an integer{" "}
                  <code className="bg-slate-700 px-2 py-1 rounded text-orange-300 font-mono">target</code>, return{" "}
                  <em className="text-blue-300 italic">indices</em> of the two numbers such that they add up to target.
                </p>
                <p>
                  You may assume that each input would have <strong className="text-white">exactly one solution</strong>
                  , and you may not use the same element twice. You can return the answer in any order.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Examples</h3>
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                    <div className="font-mono text-sm space-y-2">
                      <div>
                        <strong className="text-slate-400">Input:</strong>{" "}
                        <span className="text-slate-300">nums = [2,7,11,15], target = 9</span>
                      </div>
                      <div>
                        <strong className="text-slate-400">Output:</strong>{" "}
                        <span className="text-slate-300">[0,1]</span>
                      </div>
                      <div>
                        <strong className="text-slate-400">Explanation:</strong>{" "}
                        <span className="text-slate-400">Because nums[0] + nums[1] == 9, we return [0, 1].</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-lg p-4 border border-slate-600">
                  <div className="font-mono text-sm space-y-2">
                    <div>
                      <strong className="text-slate-400">Input:</strong>{" "}
                      <span className="text-slate-300">nums = [3,2,4], target = 6</span>
                    </div>
                    <div>
                      <strong className="text-slate-400">Output:</strong> <span className="text-slate-300">[1,2]</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3 text-white">Constraints</h3>
                <ul className="text-slate-300 space-y-2">
                  <li>
                    •{" "}
                    <code className="bg-slate-700 px-2 py-1 rounded text-orange-300 font-mono">
                      2 ≤ nums.length ≤ 10⁴
                    </code>
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-slate-700 px-2 py-1 rounded text-orange-300 font-mono">
                      -10⁹ ≤ nums[i] ≤ 10⁹
                    </code>
                  </li>
                  <li>
                    •{" "}
                    <code className="bg-slate-700 px-2 py-1 rounded text-orange-300 font-mono">
                      -10⁹ ≤ target ≤ 10⁹
                    </code>
                  </li>
                  <li>
                    • <strong className="text-white">Only one valid answer exists.</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-slate-700">
            <Button
              variant="outline"
              className="w-full bg-slate-800 border-slate-600 text-slate-300 hover:bg-slate-700 hover:text-white transition-all duration-200"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              View Editorial
            </Button>
          </div>
        </div>

        <div className="bg-slate-900 flex flex-col">
          <div className="p-4 border-b border-slate-700 flex items-center justify-between bg-slate-800">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-40 bg-slate-700 border-slate-600 text-white hover:bg-slate-600 transition-colors">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600 text-white">
                <SelectItem value="javascript" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                  JavaScript
                </SelectItem>
                <SelectItem value="python" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                  Python
                </SelectItem>
                <SelectItem value="java" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                  Java
                </SelectItem>
                <SelectItem value="cpp" className="text-white hover:bg-slate-700 focus:bg-slate-700">
                  C++
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center space-x-3">
              <Button
                onClick={handleReset}
                variant="ghost"
                size="sm"
                className="text-slate-400 hover:text-white hover:bg-slate-700 transition-all duration-200"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </Button>
              <Button
                onClick={handleRun}
                className="bg-slate-700 hover:bg-slate-600 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200"
                size="sm"
              >
                <Play className="h-4 w-4 mr-2" />
                Run
              </Button>
            </div>
          </div>

          <div className="flex-1 relative">
            <Editor
              height="100%"
              language={language}
              value={code}
              onChange={(value: string | undefined) => setCode(value || "")}
              onMount={handleEditorDidMount}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                insertSpaces: true,
                wordWrap: "on",
                contextmenu: false,
                folding: false,
                lineDecorationsWidth: 0,
                lineNumbersMinChars: 3,
                renderLineHighlight: "line",
                scrollbar: {
                  vertical: "visible",
                  horizontal: "visible",
                  useShadows: false,
                  verticalHasArrows: false,
                  horizontalHasArrows: false,
                },
              }}
            />
          </div>

          <div className="border-t border-slate-700 bg-slate-300 backdrop-blur-sm">
            <div className="grid grid-cols-2">
              <div className="p-4 border-r border-slate-700">
                <div className="flex items-center space-x-4 mb-3">
                  <span className="text-sm font-semibold text-white">Test Cases</span>
                  <div className="flex space-x-2">
                    <button className="px-3 py-1 bg-white/20 text-white rounded-md text-sm hover:bg-white/30 transition-colors backdrop-blur-sm">
                      Case 1
                    </button>
                    <button className="px-3 py-1 bg-white/10 text-white/70 rounded-md text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                      Case 2
                    </button>
                    <button className="px-3 py-1 bg-white/10 text-white/70 rounded-md text-sm hover:bg-white/20 transition-colors backdrop-blur-sm">
                      Case 3
                    </button>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-purple-300 font-mono">nums =</span>
                    <span className="ml-2 font-mono text-white/80">[2,7,11,15]</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-purple-300 font-mono">target =</span>
                    <span className="ml-2 font-mono text-white/80">9</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-3">
                  <span className="text-sm font-semibold text-white">Output</span>
                </div>
                <div className="bg-black/50 p-3 rounded-lg text-sm font-mono h-24 overflow-y-auto border border-white/20 backdrop-blur-sm">
                  {output.length > 0 ? (
                    output.map((outputLine, index) => (
                      <div
                        key={index}
                        className={`mb-1 ${
                          outputLine.type === "passed"
                            ? "text-green-300"
                            : outputLine.type === "failed"
                            ? "text-red-400"
                            : "text-yellow-400"
                        }`}
                      >
                        {outputLine.line}
                      </div>
                    ))
                  ) : (
                    <div className="text-white/50">Click "Run" to see output</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
