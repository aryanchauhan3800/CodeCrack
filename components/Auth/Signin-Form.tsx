"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Eye, EyeOff, Mail, Lock, User, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  // Form state
  const [isSignUp, setIsSignUp] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  // Terminal animation state
  const [currentCode, setCurrentCode] = useState("")
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  // Code lines for terminal animation
  const codeLines = [
    "$ function mergeSort(arr) {",
    "  // Time Complexity: O(n log n)",
    "  if (arr.length < 2) return arr;",
    "  const mid = Math.floor(arr.length / 2);",
    "  const left = mergeSort(arr.slice(0, mid));",
    "  const right = mergeSort(arr.slice(mid));",
    "  return merge(left, right);",
    "}",
  ]

  // Terminal typing animation effect
  useEffect(() => {
    if (currentLineIndex < codeLines.length) {
      const currentLine = codeLines[currentLineIndex]

      if (charIndex < currentLine.length) {
        const timer = setTimeout(() => {
          setCurrentCode((prev) => prev + currentLine[charIndex])
          setCharIndex(charIndex + 1)
        }, 50)
        return () => clearTimeout(timer)
      } else {
        // Move to next line
        const timer = setTimeout(() => {
          setCurrentCode((prev) => prev + "\n")
          setCurrentLineIndex(currentLineIndex + 1)
          setCharIndex(0)
        }, 500)
        return () => clearTimeout(timer)
      }
    } else {
      // Reset animation after 3 seconds
      const timer = setTimeout(() => {
        setCurrentCode("")
        setCurrentLineIndex(0)
        setCharIndex(0)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [charIndex, currentLineIndex])

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Fixed Logo - Top Left */}
      <div className="fixed top-6 left-6 z-50 flex items-center gap-3">
        <div className="text-2xl text-blue-400 drop-shadow-lg">{"</>"}</div>
        <h1 className="text-2xl font-bold text-purple-400 drop-shadow-lg">CodeCrack</h1>
      </div>

      {/* Premium Animated Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 animate-pulse"></div>

        {/* Moving gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Animated diagonal lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full border border-purple-500/10 rotate-12 animate-pulse"></div>
          <div
            className="absolute -top-1/2 -right-1/2 w-full h-full border border-blue-500/10 -rotate-12 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        {/* Floating geometric shapes */}
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-purple-500/20 rotate-45 animate-bounce"
          style={{ animationDelay: "0s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-3 h-3 bg-blue-500/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-32 left-40 w-2 h-8 bg-purple-500/20 animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-20 w-6 h-6 border border-blue-500/20 rotate-45 animate-spin"
          style={{ animationDuration: "8s" }}
        ></div>

        {/* Premium particle system */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}

        {/* Sharp light rays */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-purple-500/20 via-transparent to-transparent transform -translate-x-1/2"></div>
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -translate-y-1/2"></div>

        {/* Radial glow effects */}
        <div
          className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-400/50 rounded-full blur-sm animate-ping"
          style={{ animationDelay: "0s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-blue-400/50 rounded-full blur-sm animate-ping"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
      </div>

      {/* Content overlay with backdrop blur */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4 backdrop-blur-[0.5px]">
        <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Terminal */}
          <div className="hidden lg:block">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                Unlock Your <span className="text-purple-400">Coding</span>
              </h2>
              <h2 className="text-3xl font-bold text-purple-400 mb-4 drop-shadow-lg">Potential</h2>
              <p className="text-gray-300 text-lg drop-shadow-sm">
                The ultimate platform for honing your skills, from beginner to pro.
              </p>
            </div>

            {/* Animated Terminal */}
            <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 font-mono text-sm shadow-2xl shadow-purple-900/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-green-400">&gt;</span>
                  <span className="text-gray-300">codecrack-terminal</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-lg shadow-red-500/50"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-lg shadow-yellow-500/50"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-lg shadow-green-500/50"></div>
                </div>
              </div>
              <div className="border-t border-slate-700 mb-4"></div>
              <div className="min-h-[200px]">
                <pre className="whitespace-pre-wrap text-gray-300">
                  <code
                    dangerouslySetInnerHTML={{
                      __html: currentCode
                        .replace(/\$/g, '<span class="text-green-400">$</span>')
                        .replace(/function|if|const|return/g, '<span class="text-blue-400">$&</span>')
                        .replace(/mergeSort|merge|Math|floor|slice/g, '<span class="text-green-400">$&</span>')
                        .replace(/arr|mid|left|right|length/g, '<span class="text-orange-400">$&</span>')
                        .replace(/\/\/.*$/gm, '<span class="text-gray-500">$&</span>'),
                    }}
                  />
                  <span className="animate-pulse bg-green-400 w-2 h-5 inline-block ml-1 shadow-lg shadow-green-400/50"></span>
                </pre>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-lg p-4 text-center shadow-xl shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white drop-shadow-lg">2000+</div>
                <div className="text-gray-400 text-sm">Problems</div>
              </div>
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-lg p-4 text-center shadow-xl shadow-blue-900/10 hover:shadow-blue-900/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white drop-shadow-lg">Live</div>
                <div className="text-gray-400 text-sm">Contests</div>
              </div>
              <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-lg p-4 text-center shadow-xl shadow-purple-900/10 hover:shadow-purple-900/20 transition-all duration-300">
                <div className="text-2xl font-bold text-white drop-shadow-lg">AI-Powered</div>
                <div className="text-gray-400 text-sm">Hints</div>
              </div>
            </div>
          </div>

          {/* Right Side - Authentication Form */}
          <div className="w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
            {/* Mobile Logo */}
            <div className="lg:hidden text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="text-3xl text-blue-400 drop-shadow-lg">{"</>"}</div>
                <h1 className="text-3xl font-bold text-purple-400 drop-shadow-lg">CodeCrack</h1>
                <div className="text-3xl">🚀</div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-slate-800/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/30 transition-all duration-500">
              {/* Toggle Buttons */}
              <div className="flex bg-slate-700/80 backdrop-blur-sm rounded-lg p-1 mb-8 shadow-inner">
                <button
                  onClick={() => setIsSignUp(false)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    !isSignUp
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 transform scale-105"
                      : "text-gray-400 hover:text-white hover:bg-slate-600/50"
                  }`}
                >
                  Sign In
                </button>
                <button
                  onClick={() => setIsSignUp(true)}
                  className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all duration-300 ${
                    isSignUp
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 transform scale-105"
                      : "text-gray-400 hover:text-white hover:bg-slate-600/50"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              {/* Authentication Form */}
              <form className="space-y-6">
                {/* Username Field (Sign Up Only) */}
                {isSignUp && (
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-gray-300 drop-shadow-sm">
                      Username
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="username"
                        type="text"
                        placeholder="Enter your username"
                        className="pl-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 rounded-lg transition-all duration-300"
                      />
                    </div>
                  </div>
                )}

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 drop-shadow-sm">
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="pl-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 rounded-lg transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password" className="text-gray-300 drop-shadow-sm">
                      Password
                    </Label>
                    {!isSignUp && (
                      <button
                        type="button"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors drop-shadow-sm"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="pl-10 pr-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 rounded-lg transition-all duration-300"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Field (Sign Up Only) */}
                {isSignUp && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-300 drop-shadow-sm">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <Input
                        id="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 bg-slate-700/80 backdrop-blur-sm border border-slate-600/50 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20 focus:shadow-lg focus:shadow-blue-500/20 rounded-lg transition-all duration-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                      >
                        {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transform"
                >
                  {isSignUp ? "Sign Up" : "Sign In"} →
                </Button>

                {/* Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-600/50"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-slate-800/90 text-gray-400">Or</span>
                  </div>
                </div>

                {/* Social Login Buttons */}
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-slate-700/80 backdrop-blur-sm border-slate-600/50 text-white hover:bg-slate-600/80 hover:shadow-lg hover:shadow-slate-600/20 transition-all duration-300 rounded-lg transform hover:scale-105"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="bg-slate-700/80 backdrop-blur-sm border-slate-600/50 text-white hover:bg-slate-600/80 hover:shadow-lg hover:shadow-slate-600/20 transition-all duration-300 rounded-lg transform hover:scale-105"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>
                </div>

                {/* Guest Access Button */}
                <Button
                  type="button"
                  variant="outline"
                  className="w-full bg-slate-700/80 backdrop-blur-sm border-slate-600/50 text-white hover:bg-slate-600/80 hover:shadow-lg hover:shadow-slate-600/20 transition-all duration-300 rounded-lg transform hover:scale-105"
                >
                  Continue as Guest
                </Button>
              </form>

              {/* Footer Tagline */}
              <div className="mt-8 text-center">
                <p className="text-gray-400 text-sm italic drop-shadow-sm">
                  "Crack code. Crack careers. Start your journey today."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
