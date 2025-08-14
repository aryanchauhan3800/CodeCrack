"use client"

import {
  ArrowLeftIcon,
  CheckIcon,
  ArrowTrendingUpIcon,
  TrophyIcon,
  ClockIcon,
  StarIcon,
} from "@heroicons/react/24/outline"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const statsCards = [
  { icon: CheckIcon, label: "Problems Solved", value: "42", color: "bg-green-500/20 text-green-400" },
  { icon: ArrowTrendingUpIcon, label: "Current Streak", value: "7", color: "bg-orange-500/20 text-orange-400" },
  { icon: TrophyIcon, label: "Total Points", value: "1,250", color: "bg-yellow-500/20 text-yellow-400" },
  { icon: ClockIcon, label: "Time Spent", value: "24h", color: "bg-purple-500/20 text-purple-400" },
]

const recentActivity = [
  { title: "Two Sum", time: "2 hours ago", difficulty: "Easy", status: "Solved" },
  { title: "Add Two Numbers", time: "1 day ago", difficulty: "Medium", status: "Attempted" },
  { title: "Longest Substring", time: "2 days ago", difficulty: "Medium", status: "Solved" },
  { title: "Median of Arrays", time: "3 days ago", difficulty: "Hard", status: "Attempted" },
]

const goals = [
  { label: "Daily Goal", current: 2, total: 3, color: "bg-purple-500" },
  { label: "Weekly Goal", current: 12, total: 15, color: "bg-green-500" },
  { label: "Monthly Goal", current: 42, total: 60, color: "bg-orange-500" },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500/20 text-green-400 border-green-500/30"
    case "Medium":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
    case "Hard":
      return "bg-red-500/20 text-red-400 border-red-500/30"
    default:
      return "bg-gray-500/20 text-gray-400 border-gray-500/30"
  }
}

export interface User {
  name: string
  title: string
  avatarUrl: string
}

interface DashboardProps {
  user: User
}

export default function Dashboard({ user }: DashboardProps) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
  }
  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated Gradient Overlays */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/15 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 5,
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-500/20 via-cyan-500/15 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 10,
        }}
        className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-t from-orange-500/20 via-yellow-500/15 to-transparent rounded-full blur-3xl transform -translate-x-1/2"
      />

      {/* Additional floating gradient orbs */}
      <motion.div
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 80, -80, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 35,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 15,
        }}
        className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r from-green-500/15 to-emerald-500/10 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          x: [0, 120, -60, 0],
          y: [0, -100, 50, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 40,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 20,
        }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-l from-red-500/15 to-pink-500/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            >
              <ArrowLeftIcon className="w-5 h-5" />
            </motion.button>
            <div className="flex items-center gap-2">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                    "0 0 30px rgba(236, 72, 153, 0.6)",
                    "0 0 20px rgba(168, 85, 247, 0.4)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center"
              >
                <span className="text-white font-bold text-sm">&lt;/&gt;</span>
              </motion.div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                CodeCrack Dashboard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Avatar className="w-10 h-10 ring-2 ring-purple-500/30">
              <AvatarImage src={user.avatarUrl} />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                {getInitials(user.name)}
              </AvatarFallback>
            </Avatar>
            <div className="text-right">
              <p className="font-semibold">{user.name}</p>
              <p className="text-sm text-gray-400">{user.title}</p>
            </div>
          </div>
        </motion.header>

        {/* Greeting Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-4xl font-bold mb-2">Welcome back, {user.name.split(" ")[0]}! 👋</h2>
          <p className="text-gray-400 text-lg">Ready to solve some problems today?</p>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {statsCards.map((card, index) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.1)",
              }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <motion.div
                whileHover={{ rotate: 5 }}
                className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
              >
                <card.icon className="w-6 h-6" />
              </motion.div>
              <motion.p initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} className="text-3xl font-bold mb-1">
                {card.value}
              </motion.p>
              <p className="text-gray-400 text-sm">{card.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="w-2 h-2 rounded-full bg-blue-400"
              />
              Recent Activity
            </h3>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{
                    x: 4,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{
                        boxShadow:
                          activity.status === "Solved"
                            ? [
                                "0 0 5px rgba(34, 197, 94, 0.5)",
                                "0 0 15px rgba(34, 197, 94, 0.8)",
                                "0 0 5px rgba(34, 197, 94, 0.5)",
                              ]
                            : [
                                "0 0 5px rgba(234, 179, 8, 0.5)",
                                "0 0 15px rgba(234, 179, 8, 0.8)",
                                "0 0 5px rgba(234, 179, 8, 0.5)",
                              ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className={`w-3 h-3 rounded-full ${activity.status === "Solved" ? "bg-green-400" : "bg-yellow-400"}`}
                    />
                    <div>
                      <p className="font-medium group-hover:text-white transition-colors">{activity.title}</p>
                      <p className="text-sm text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={`${getDifficultyColor(activity.difficulty)} border`}>{activity.difficulty}</Badge>
                    <span
                      className={`text-xs px-2 py-1 rounded ${activity.status === "Solved" ? "text-green-400" : "text-gray-400"}`}
                    >
                      {activity.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Goals & Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/[0.07] transition-all duration-300"
          >
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="w-2 h-2 rounded-full bg-purple-400"
              />
              Goals & Progress
            </h3>

            <div className="space-y-6 mb-8">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{goal.label}</span>
                    <span className="text-sm text-gray-400">
                      {goal.current}/{goal.total} problems
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(goal.current / goal.total) * 100}%` }}
                      transition={{ delay: 0.8 + index * 0.2, duration: 1, ease: "easeOut" }}
                      className={`h-full ${goal.color} rounded-full relative`}
                    >
                      <motion.div
                        animate={{
                          boxShadow: [
                            "0 0 10px rgba(255,255,255,0.3)",
                            "0 0 20px rgba(255,255,255,0.6)",
                            "0 0 10px rgba(255,255,255,0.3)",
                          ],
                        }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        className="absolute inset-0 rounded-full"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievement */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 hover:from-yellow-500/25 hover:to-orange-500/25 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 3,
                  }}
                >
                  <StarIcon className="w-6 h-6 text-yellow-400 fill-yellow-400 drop-shadow-lg" />
                </motion.div>
                <div>
                  <p className="font-semibold text-yellow-400">Achievement Unlocked!</p>
                  <p className="text-sm text-gray-300">"Problem Solver" - Solved 40+ problems this month</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
