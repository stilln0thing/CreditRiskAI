"use client"

import { motion } from "framer-motion"
import { Github, Mail, Twitter, BookOpen } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative overflow-hidden py-16 bg-gradient-to-b from-gray-900 to-black border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] mix-blend-soft-light"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-200">
              Credit Risk AI
            </h3>
            <p className="text-gray-400 mb-6">
              Providing fair credit assessment for underserved populations through advanced AI technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/financial-literacy"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>Financial Literacy Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/understanding-credit"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>Understanding Credit Scores</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/building-credit"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>Building Credit History</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/alternative-credit"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <BookOpen size={16} />
                  <span>Alternative Credit Solutions</span>
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates on financial inclusion initiatives.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500 text-white flex-1"
              />
              <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-r-lg transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Credit Risk AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
