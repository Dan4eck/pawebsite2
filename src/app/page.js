'use client';
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const cards = [
    { title: 'Поглядеть', link: '/watch' },
    { title: 'Научиться', link: '/learn' },
    { title: 'Переговорить (b2b)', link: '/talk' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col lg:flex-row p-4 lg:p-8">
      <div className="lg:w-1/2 pr-4 lg:pr-20 mb-8 lg:mb-0">
        <h1 className="text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight">Люди, Роботы – Привет!</h1>
        <p className="text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed">
          Мы изучаем технологии и рассказываем, как их использовать в жизни и работе. "Продуктивный Совет" – ютуб-канал с фокусом
          на нейросети. От локальных Ллам до нелокальных Лор. Поглядите.
        </p>
        <p className="text-base lg:text-lg mb-4 lg:mb-6 leading-relaxed">
          "How2AI курсы" – образовательное направление в телеграм. Курсы по промтингу в текстовых и графических нейронках.
        </p>
        <p className="text-base lg:text-lg leading-relaxed">
          "How2AI b2b" – автоматизации, консультации и другие решения для бизнеса
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col lg:flex-row lg:items-center lg:justify-center space-y-4 lg:space-y-0 lg:space-x-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full lg:w-auto"
          >
            <Link
              href={card.link}
              className={`w-full h-24 lg:w-48 lg:h-64 bg-gradient-to-b from-gray-800 to-gray-700 rounded-xl lg:rounded-3xl flex items-center justify-center text-center p-4 lg:p-6 transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl
                ${index === 0 ? 'lg:-rotate-6 lg:-translate-y-2' : ''}
                ${index === 1 ? 'lg:rotate-0 lg:translate-y-0' : ''}
                ${index === 2 ? 'lg:rotate-6 lg:-translate-y-2' : ''}`}
            >
              <span className="text-xl lg:text-2xl font-bold">{card.title}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}