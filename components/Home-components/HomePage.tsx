"use client"

import { useState, useEffect } from "react"
import {
  BookOpen,
  Users,
  Trophy,
  Zap,
  Brain,
  ChevronRight,
  Play,
  Star,
  Target,
  Clock,
  Award,
  Sparkles,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const dsaTopics = [
  { name: "Array", icon: "📊", problems: 450, color: "from-blue-500 to-cyan-500" },
  { name: "Strings", icon: "📝", problems: 280, color: "from-green-500 to-emerald-500" },
  { name: "LinkedList", icon: "🔗", problems: 120, color: "from-purple-500 to-violet-500" },
  { name: "Stack", icon: "📚", problems: 85, color: "from-orange-500 to-red-500" },
  { name: "Queue", icon: "🚶", problems: 65, color: "from-pink-500 to-rose-500" },
  { name: "Tree", icon: "🌳", problems: 180, color: "from-indigo-500 to-blue-500" },
  { name: "Graph", icon: "🕸️", problems: 150, color: "from-teal-500 to-cyan-500" },
  { name: "DP", icon: "🧩", problems: 200, color: "from-yellow-500 to-orange-500" },
]

const companies = [
  { name: "Amazon", logo: "🛒", color: "from-orange-400 to-yellow-500" },
  { name: "Google", logo: "🔍", color: "from-blue-400 to-green-500" },
  { name: "Microsoft", logo: "🪟", color: "from-blue-500 to-cyan-500" },
  { name: "Meta", logo: "📘", color: "from-blue-600 to-purple-600" },
  { name: "Apple", logo: "🍎", color: "from-gray-400 to-gray-600" },
  { name: "Netflix", logo: "🎬", color: "from-red-500 to-red-600" },
]

const difficultyLevels = [
  { name: "BASIC", count: 150, color: "from-green-400 to-green-600", glow: "shadow-green-500/50" },
  { name: "EASY", count: 300, color: "from-blue-400 to-blue-600", glow: "shadow-blue-500/50" },
  { name: "MEDIUM", count: 450, color: "from-yellow-400 to-orange-500", glow: "shadow-yellow-500/50" },
  { name: "HARD", count: 280, color: "from-red-400 to-red-600", glow: "shadow-red-500/50" },
  { name: "ADVANCE", count: 120, color: "from-purple-400 to-purple-600", glow: "shadow-purple-500/50" },
]

const codeSnippet = `function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}`

export default function Homepage() {
  const [currentProblem, setCurrentProblem] = useState("Two Sum")
  const [codeVisible, setCodeVisible] = useState(false)

  useEffect(() => {
    const problems = ["Two Sum", "Reverse Linked List", "Valid Parentheses", "Merge Intervals", "Climbing Stairs"]
    const interval = setInterval(() => {
      setCurrentProblem(problems[Math.floor(Math.random() * problems.length)])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white overflow-hidden relative">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Main gradient overlay with continuous animation */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-purple-900/20 to-black/90 animate-pulse"></div>

        {/* Continuous floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-r from-indigo-500/8 to-purple-500/8 rounded-full blur-2xl animate-float-gentle"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid-move"></div>

        {/* Premium glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-500/5 to-transparent animate-glow-pulse"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-6 backdrop-blur-sm bg-black/20 border-b border-purple-500/20">
        <div className="flex items-center gap-3">
          <div className="text-2xl text-blue-400 drop-shadow-lg">{"</>"}</div>
          <h1 className="text-2xl font-bold text-purple-400 drop-shadow-lg">CodeCrack</h1>
        </div>

        <nav className="flex items-center space-x-4">
          {["About Us", "Search Que", "Problem Sets"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="relative group hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 border border-transparent hover:border-purple-500/50 transition-all duration-300"
            >
              <span className="relative z-10">{item}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:to-cyan-500/10 rounded-md transition-all duration-300"></div>
            </Button>
          ))}
          <Button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
            Login → Dashboard
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </nav>
      </header>

      <div className="flex min-h-screen pt-20">
        {/* Sidebar */}
        <aside className="w-80 p-6 backdrop-blur-sm bg-black/20 border-r border-purple-500/20">
          {/* Company Filter */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Top Companies
            </h3>
            <div className="space-y-3">
              {companies.map((company) => (
                <div
                  key={company.name}
                  className="group flex items-center p-3 rounded-lg bg-gradient-to-r from-gray-800/50 to-gray-700/50 hover:from-gray-700/70 hover:to-gray-600/70 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span className="text-2xl mr-3">{company.logo}</span>
                  <span className="font-medium group-hover:text-cyan-400 transition-colors">{company.name}</span>
                  <div
                    className={`ml-auto w-2 h-2 rounded-full bg-gradient-to-r ${company.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Year Filter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" />
              Academic Year
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {["1st Year", "2nd Year", "3rd Year", "4th Year"].map((year) => (
                <Button
                  key={year}
                  variant="outline"
                  className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-gray-600/50 hover:border-green-500/50 hover:bg-gradient-to-r hover:from-green-500/10 hover:to-emerald-500/10 transition-all duration-300"
                >
                  {year}
                </Button>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Total Problems</span>
              <span className="text-cyan-400 font-bold">2000+</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-2">
              <span className="text-gray-400">Active Users</span>
              <span className="text-green-400 font-bold">50K+</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Problem of the Day */}
          <div className="mb-8">
            <Card className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent flex items-center">
                    <Sparkles className="w-6 h-6 mr-2 text-yellow-400" />
                    Problem of the Day
                  </h2>
                  <div className="flex items-center space-x-2">
                    <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                      MEDIUM
                    </div>
                    <Button
                      size="sm"
                      onClick={() => setCodeVisible(!codeVisible)}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      Solve
                    </Button>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white transition-all duration-500">{currentProblem}</h3>
                <p className="text-gray-400 mb-4">
                  Given an array of integers, return indices of the two numbers such that they add up to a specific
                  target.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    1.2M solved
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 text-yellow-400" />
                    4.8 rating
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    15 min avg
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* DSA Topics Grid */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent flex items-center">
              <Brain className="w-6 h-6 mr-2 text-orange-400" />
              Data Structures & Algorithms
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dsaTopics.map((topic, index) => (
                <Card
                  key={topic.name}
                  className="group bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50 hover:border-purple-500/50 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{topic.icon}</div>
                    <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">{topic.name}</h3>
                    <p className="text-sm text-gray-400">{topic.problems} problems</p>
                    <div
                      className={`mt-2 h-1 rounded-full bg-gradient-to-r ${topic.color} opacity-60 group-hover:opacity-100 transition-opacity`}
                    ></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Difficulty Levels */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent flex items-center">
              <Target className="w-6 h-6 mr-2 text-cyan-400" />
              Difficulty Levels
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {difficultyLevels.map((level, index) => (
                <Button
                  key={level.name}
                  className={`group h-20 bg-gradient-to-r ${level.color} hover:scale-105 transition-all duration-300 shadow-lg hover:${level.glow} hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-center">
                    <div className="font-bold text-lg">{level.name}</div>
                    <div className="text-sm opacity-90">{level.count} problems</div>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardContent className="p-6 text-center">
                <Trophy className="w-12 h-12 mx-auto mb-4 text-green-400" />
                <h3 className="text-xl font-semibold mb-2">Live Contests</h3>
                <p className="text-gray-400 text-sm">Participate in weekly coding contests</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">AI-Powered Hints</h3>
                <p className="text-gray-400 text-sm">Get intelligent hints when stuck</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 border-purple-500/20">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                <p className="text-gray-400 text-sm">Unlock badges and track progress</p>
              </CardContent>
            </Card>
          </div>

          {/* Code Terminal (Optional) */}
          {codeVisible && (
            <Card className="mt-8 bg-gradient-to-r from-gray-900/90 to-black/90 border-green-500/30">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="ml-4 text-green-400 font-mono text-sm">terminal</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setCodeVisible(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </Button>
                </div>
                <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </CardContent>
            </Card>
          )}
        </main>
      </div>
    </div>
  )
}
