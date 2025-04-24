
'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="bg-zinc-900 min-h-screen text-white p-6">
      <section className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Angu — Хувцасны Брэнд
        </motion.h1>
        <p className="text-zinc-300 text-lg">
          Чанартай футболк, цамц, худи таны загварын сонголт.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Футболк', 'Цамц', 'Худи'].map((item, i) => (
          <Card key={i} className="bg-zinc-800">
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item}</h2>
              <p className="text-zinc-400 mb-4">Загварлаг, эвтэйхэн, өдөр тутмын хэрэглээнд.</p>
              <Button className="bg-white text-black hover:bg-zinc-200">Дэлгэрэнгүй</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Холбоо барих</h2>
        <p className="text-zinc-400">Утас: 86968785</p>
        <p className="text-zinc-400">Имэйл: gangaaganbayr@gmail.com</p>
        <p className="text-zinc-400">QPay холбоос: удахгүй нэмэгдэнэ</p>
      </section>
    </main>
  );
}
