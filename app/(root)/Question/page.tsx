"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Play, RotateCcw, Clock, Send } from "lucide-react"
import dynamic from "next/dynamic"
import type { editor } from "monaco-editor"
import type { Monaco, EditorProps } from "@monaco-editor/react"

// Dynamically import Monaco Editor to avoid SSR issues
const Editor = dynamic(
  () => import("@monaco-editor/react"),
  { ssr: false }
) as React.ComponentType<EditorProps>

const problemData = {
  title: "Two Sum",
  difficulty: "Easy",
  tags: ["Array", "Hash Table"],
  description:
    "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
  details:
    "You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.",
  examples: [
    {
      input: "nums = [2,7,11,15], target = 9",
      output: "[0,1]",
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
    },
    {
      input: "nums = [3,2,4], target = 6",
      output: "[1,2]",
    },
  ],
  constraints: [
    "2 <= nums.length <= 10⁴",
    "-10⁹ <= nums[i] <= 10⁹",
    "-10⁹ <= target <= 10⁹",
    "Only one valid answer exists.",
  ],
}

const initialCode = `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Your code here
    
};`

export default function CodingChallenge() {
  const [code, setCode] = useState(initialCode)
  const [language, setLanguage] = useState("javascript")
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [timer, setTimer] = useState(40)
  const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null)

  // Timer effect
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const runCode = async () => {
    setIsRunning(true)
    setOutput("")

    try {
      // Create a safe execution environment
      const testCases = [
        { nums: [2, 7, 11, 15], target: 9 },
        { nums: [3, 2, 4], target: 6 },
        { nums: [3, 3], target: 6 },
      ]

      const functionMatch = code.match(/var twoSum = function\((nums, target)\) \{([\s\S]*)\};/)
      if (!functionMatch) {
        setOutput("Error: Please maintain the function structure")
        return
      }

      const functionBody = functionMatch[2]
      const userFunction = new Function("nums", "target", functionBody)

      const results = []
      for (let i = 0; i < testCases.length; i++) {
        const { nums, target } = testCases[i]
        try {
          const result = userFunction(nums, target)
          results.push(`Test Case ${i + 1}: ${JSON.stringify(result)}`)
        } catch (error: any) {
          results.push(`Test Case ${i + 1}: Error - ${error.message}`)
        }
      }

      setOutput(results.join("\n"))
    } catch (error: any) {
      setOutput(`Runtime Error: ${error.message}`)
    } finally {
      setIsRunning(false)
    }
  }

  const resetCode = () => {
    setCode(initialCode)
    setOutput("")
  }

  const handleEditorDidMount = (editorInstance: editor.IStandaloneCodeEditor, monaco: Monaco) => {
    editorRef.current = editorInstance
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Home
          </Button>
          <h1 className="text-xl font-semibold">Two Sum</h1>
          <div className="flex items-center gap-2 text-slate-400">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{formatTime(timer)}</span>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Send className="w-4 h-4 mr-2" />
          Submit
        </Button>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Panel - Problem Description */}
        <div className="w-1/2 p-6 overflow-y-auto border-r border-slate-700">
          <div className="space-y-6">
            {/* Title and Tags */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-2xl font-bold">1. {problemData.title}</h2>
                <Badge className="bg-green-600 hover:bg-green-700">⭐ {problemData.difficulty}</Badge>
              </div>
              <div className="flex gap-2">
                {problemData.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-slate-300 border-slate-600">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Problem Description */}
            <div className="space-y-4">
              <p className="text-slate-300 leading-relaxed">
                Given an array of integers <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-400">nums</code>{" "}
                and an integer <code className="bg-slate-800 px-1 py-0.5 rounded text-blue-400">target</code>, return{" "}
                <em>indices</em> of the two numbers such that they add up to target.
              </p>
              <p className="text-slate-300 leading-relaxed">
                You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the
                same element twice. You can return the answer in any order.
              </p>
            </div>

            {/* Examples */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Examples</h3>
              <div className="space-y-4">
                {problemData.examples.map((example, index) => (
                  <div key={index} className="bg-slate-800 p-4 rounded-lg font-mono text-sm">
                    <div className="text-slate-300">
                      <strong>Input:</strong> {example.input}
                    </div>
                    <div className="text-slate-300 mt-1">
                      <strong>Output:</strong> {example.output}
                    </div>
                    {example.explanation && (
                      <div className="text-slate-400 mt-2">
                        <strong>Explanation:</strong> {example.explanation}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Constraints */}
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Constraints</h3>
              <ul className="space-y-2 text-slate-300">
                {problemData.constraints.map((constraint, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span className="font-mono text-sm">{constraint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Panel - Code Editor */}
        <div className="w-1/2 flex flex-col">
          {/* Editor Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-32 bg-slate-800 border-slate-600">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-slate-600">
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={runCode}
                disabled={isRunning}
                className="bg-slate-800 border-slate-600 hover:bg-slate-700"
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? "Running..." : "Run"}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetCode}
                className="bg-slate-800 border-slate-600 hover:bg-slate-700"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
            </div>
          </div>

          {/* Monaco Editor */}
          <div className="flex-1">
            <Editor
              height="100%"
              language={language}
              theme="vs-dark"
              value={code}
              onChange={(value: string | undefined) => setCode(value || "")}
              onMount={handleEditorDidMount}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                roundedSelection: false,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 2,
                wordWrap: "on",
              }}
            />
          </div>

          {/* Output Panel */}
          {output && (
            <div className="border-t border-slate-700 p-4 bg-slate-800 max-h-32 overflow-y-auto">
              <h4 className="text-sm font-semibold text-slate-300 mb-2">Output:</h4>
              <pre className="text-sm text-slate-300 whitespace-pre-wrap font-mono">{output}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
