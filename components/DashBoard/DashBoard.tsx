"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import {
  Code2,
  Trophy,
  GraduationCap,
  Target,
  Clock,
  CheckCircle2,
  Star,
  Zap,
  Brain,
  Flame,
  Rocket,
  TrendingUp,
  Award,
  Activity,
} from "lucide-react"

const problemsData = [
  {
    difficulty: "BASIC",
    count: 45,
    bgGradient: "from-emerald-500/10 to-teal-500/5",
    borderColor: "border-emerald-500/20",
    textColor: "text-emerald-300",
    iconBg: "bg-emerald-500/20",
    hoverGlow: "hover:shadow-emerald-500/20",
    icon: Target,
  },
  {
    difficulty: "EASY",
    count: 32,
    bgGradient: "from-blue-500/10 to-indigo-500/5",
    borderColor: "border-blue-500/20",
    textColor: "text-blue-300",
    iconBg: "bg-blue-500/20",
    hoverGlow: "hover:shadow-blue-500/20",
    icon: Zap,
  },
  {
    difficulty: "MEDIUM",
    count: 28,
    bgGradient: "from-amber-500/10 to-orange-500/5",
    borderColor: "border-amber-500/20",
    textColor: "text-amber-300",
    iconBg: "bg-amber-500/20",
    hoverGlow: "hover:shadow-amber-500/20",
    icon: Brain,
  },
  {
    difficulty: "HARD",
    count: 15,
    bgGradient: "from-red-500/10 to-pink-500/5",
    borderColor: "border-red-500/20",
    textColor: "text-red-300",
    iconBg: "bg-red-500/20",
    hoverGlow: "hover:shadow-red-500/20",
    icon: Flame,
  },
  {
    difficulty: "ADVANCE",
    count: 8,
    bgGradient: "from-violet-500/10 to-purple-500/5",
    borderColor: "border-violet-500/20",
    textColor: "text-violet-300",
    iconBg: "bg-violet-500/20",
    hoverGlow: "hover:shadow-violet-500/20",
    icon: Rocket,
  },
]

const historyData = [
  { id: 1, problem: "Two Sum Algorithm", difficulty: "Easy", time: "2 hours ago", status: "Solved", score: 95 },
  { id: 2, problem: "Binary Tree Traversal", difficulty: "Medium", time: "5 hours ago", status: "Solved", score: 88 },
  {
    id: 3,
    problem: "Dynamic Programming Matrix",
    difficulty: "Hard",
    time: "1 day ago",
    status: "Attempted",
    score: 65,
  },
  {
    id: 4,
    problem: "Advanced Graph Algorithms",
    difficulty: "Advance",
    time: "2 days ago",
    status: "Solved",
    score: 92,
  },
  { id: 5, problem: "String Pattern Matching", difficulty: "Basic", time: "3 days ago", status: "Solved", score: 100 },
  { id: 6, problem: "Heap Sort Implementation", difficulty: "Medium", time: "4 days ago", status: "Solved", score: 87 },
]

const getDifficultyStyle = (difficulty: string) => {
  const styles: { [key: string]: string } = {
    Basic: "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border-emerald-500/40",
    Easy: "bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 border-blue-500/40",
    Medium: "bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/40",
    Hard: "bg-gradient-to-r from-red-500/20 to-pink-500/20 text-red-300 border-red-500/40",
    Advance: "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-300 border-violet-500/40",
  }
  return styles[difficulty] || styles["Easy"]
}

export default function CodeCrackDashboard() {
  const [activeTab, setActiveTab] = useState("HOME")

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-gray-950 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-violet-500/5 to-fuchsia-500/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-500"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 p-4 max-w-7xl mx-auto">
        {/* Enhanced Top Navigation */}
        <nav className="mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur opacity-75 animate-pulse"></div>
                <div className="relative flex items-center space-x-3 bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-slate-700/50">
                  <Code2 className="w-8 h-8 text-cyan-400" />
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    CodeCrack
                  </h1>
                </div>
              </div>
            </div>
            <div className="flex space-x-3">
              {["HOME", "SOLVE PROBLEMS"].map((item) => (
                <Button
                  key={item}
                  onClick={() => setActiveTab(item)}
                  className={`relative px-8 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 border ${
                    activeTab === item
                      ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-2xl shadow-cyan-500/25 border-transparent"
                      : "bg-slate-900/60 text-gray-300 hover:bg-slate-800/80 border-slate-700/50 hover:border-cyan-500/50 backdrop-blur-sm"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                  {activeTab === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-sm opacity-50 animate-pulse"></div>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </nav>

        {/* Enhanced Main Dashboard Layout */}
        <div className="grid grid-cols-12 gap-4">
          {/* Enhanced Left Profile Section */}
          <div className="col-span-3 space-y-4">
            {/* Enhanced Profile Card */}
            <Card className="bg-black/10 border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 text-center relative z-10">
                <div className="relative mb-4 inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-spin-slow opacity-75"></div>
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-0.5">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Profile"
                      className="w-full h-full rounded-full object-cover bg-slate-800"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-ping"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Alex Johnson</h3>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
                  <Award className="w-3 h-3 mr-1" />
                  Pro Developer
                </Badge>
              </CardContent>
            </Card>

            {/* Enhanced Institution Info */}
            <Card className="bg-black/10 border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-5 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Institution</h4>
                </div>
                <p className="text-gray-200 mb-3 font-medium">Stanford University</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">Global Rank</span>
                  </div>
                  <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    #12
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Coding Score */}
            <Card className="bg-black/10 border-slate-700/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-5 relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold">Coding Score</h4>
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  2,847
                </div>
                <div className="relative w-full bg-slate-800/50 rounded-full h-2 mb-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-cyan-400/20 animate-pulse"></div>
                  <div className="bg-gradient-to-r from-green-400 to-cyan-400 h-full rounded-full w-3/4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Top 5% this month</span>
                  <div className="flex items-center space-x-1 text-green-400">
                    <Activity className="w-3 h-3" />
                    <span>+127</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Redesigned Middle Section - Problems Solved */}
          <div className="col-span-4">
            <Card className="bg-black/10 border-slate-700/50 backdrop-blur-sm h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-xl font-bold text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center space-x-2">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <span>PROBLEMS SOLVED</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 relative z-10">
                <div className="space-y-3">
                  {problemsData.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <div
                        key={item.difficulty}
                        className={`p-4 bg-gradient-to-r ${item.bgGradient} rounded-xl border ${item.borderColor} hover:bg-slate-800/60 transition-all duration-500 hover:border-opacity-60 group cursor-pointer relative overflow-hidden backdrop-blur-sm ${item.hoverGlow} hover:shadow-xl`}
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                        ></div>
                        <div className="relative z-10">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 ${item.iconBg} rounded-lg backdrop-blur-sm`}>
                                <IconComponent className={`w-5 h-5 ${item.textColor}`} />
                              </div>
                              <span className={`font-bold text-lg tracking-wide ${item.textColor}`}>
                                {item.difficulty}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className={`text-2xl font-bold ${item.textColor}`}>{item.count}</div>
                              <div
                                className={`w-2 h-2 ${item.textColor.replace("text-", "bg-")} rounded-full animate-pulse opacity-60`}
                              ></div>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center justify-between text-sm">
                            <span className="text-gray-400">Problems</span>
                            <div className="flex items-center space-x-1 text-gray-400">
                              <Star className="w-3 h-3" />
                              <span>Avg: {Math.floor(85 + Math.random() * 10)}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Enhanced Total Problems */}
                <div className="mt-6 p-4 bg-slate-800/40 rounded-xl border border-slate-600/30 backdrop-blur-sm relative overflow-hidden group hover:bg-slate-800/60 transition-all duration-500 hover:border-cyan-500/50">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                        <Star className="w-5 h-5 text-cyan-400" />
                      </div>
                      <span className="text-lg font-semibold text-gray-200">Total Solved</span>
                    </div>
                    <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      {problemsData.reduce((sum, item) => sum + item.count, 0)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Right Section - History */}
          <div className="col-span-5">
            <Card className="bg-black/10 border-slate-700/50 backdrop-blur-sm h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-900/20"></div>
              <CardHeader className="relative z-10 pb-4">
                <CardTitle className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-cyan-400" />
                  <span>RECENT SOLUTIONS</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-2 relative z-10">
                <div className="space-y-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                  {historyData.map((item, index) => (
                    <div
                      key={item.id}
                      className="p-4 bg-slate-800/40 rounded-xl border border-slate-600/30 hover:bg-slate-800/60 transition-all duration-500 hover:border-cyan-500/50 group cursor-pointer relative overflow-hidden backdrop-blur-sm"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-3">
                          <h5 className="font-semibold text-white group-hover:text-cyan-300 transition-colors text-sm">
                            {item.problem}
                          </h5>
                          <div className="flex items-center space-x-2">
                            <Badge
                              className={`${
                                item.status === "Solved"
                                  ? "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-500/40"
                                  : "bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border-yellow-500/40"
                              } border text-xs px-2 py-1`}
                            >
                              {item.status === "Solved" ? (
                                <CheckCircle2 className="w-3 h-3 mr-1" />
                              ) : (
                                <Clock className="w-3 h-3 mr-1" />
                              )}
                              {item.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Badge
                              className={`${getDifficultyStyle(item.difficulty)} border text-xs px-2 py-1 font-medium`}
                            >
                              {item.difficulty}
                            </Badge>
                            <div className="flex items-center space-x-1 text-xs text-gray-400">
                              <Star className="w-3 h-3" />
                              <span>{item.score}%</span>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">{item.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(51, 65, 85, 0.2);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #06b6d4, #8b5cf6);
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #0891b2, #7c3aed);
        }
      `}</style>
    </div>
  )
}
