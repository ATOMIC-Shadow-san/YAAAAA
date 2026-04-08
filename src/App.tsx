import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from './data/questions';
import { Sparkles, BookOpen, Gamepad2, CheckCircle2, XCircle, ChevronRight, Trophy } from 'lucide-react';

function getShuffledQuiz() {
  return [...questions].sort(() => Math.random() - 0.5).map(q => {
    const opts = q.options.map((text, index) => ({
      text: text.replace(/^[A-D]\.\s*/, ''),
      isCorrect: index === q.answer
    })).sort(() => Math.random() - 0.5);
    return { ...q, shuffledOptions: opts };
  });
}

export default function App() {
  const [mode, setMode] = useState<'learn' | 'quiz' | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-indigo-100 font-sans text-slate-800">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-500 p-2 rounded-xl">
              <Sparkles className="w-6 h-6 text-yellow-300" />
            </div>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Python 小學堂
            </h1>
          </div>
          {mode && (
            <button
              onClick={() => setMode(null)}
              className="text-sm font-medium text-indigo-600 hover:text-indigo-800 bg-indigo-50 px-4 py-2 rounded-full transition-colors"
            >
              回首頁
            </button>
          )}
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!mode && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800">
                  準備好成為程式小達人了嗎？
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                  這裡有 30 個超有趣的 Python 挑戰，我們用最簡單、最可愛的方式解釋給你聽！
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
                <button
                  onClick={() => setMode('learn')}
                  className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-purple-400 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-fuchsia-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col items-center space-y-4">
                    <div className="bg-purple-100 p-4 rounded-2xl text-purple-600 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">學習模式</h3>
                    <p className="text-slate-600">直接看題目和超有趣的解釋，適合第一次學習的你！</p>
                  </div>
                </button>

                <button
                  onClick={() => setMode('quiz')}
                  className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 border-2 border-transparent hover:border-sky-400 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex flex-col items-center space-y-4">
                    <div className="bg-sky-100 p-4 rounded-2xl text-sky-600 group-hover:scale-110 transition-transform">
                      <Gamepad2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-800">挑戰模式</h3>
                    <p className="text-slate-600">自己動腦猜猜看，答對了會有小驚喜喔！</p>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {mode === 'learn' && (
            <motion.div
              key="learn"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-purple-700 mb-2">學習模式</h2>
                <p className="text-slate-600">慢慢看，把每個觀念都學起來吧！</p>
              </div>
              {questions.map((q) => (
                <LearnCard key={q.id} question={q} />
              ))}
            </motion.div>
          )}

          {mode === 'quiz' && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <QuizGame />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

function LearnCard({ question }: { question: typeof questions[0] }) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 border-2 border-purple-100">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-shrink-0 bg-purple-100 text-purple-700 font-bold w-10 h-10 rounded-full flex items-center justify-center text-lg">
          {question.id}
        </div>
        <h3 className="text-xl font-bold text-slate-800 mt-1 whitespace-pre-wrap leading-relaxed">
          {question.question}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6 pl-14">
        {question.options.map((opt, i) => (
          <div
            key={i}
            className={`p-4 rounded-xl border-2 transition-colors ${
              i === question.answer
                ? 'bg-green-50 border-green-400 text-green-800 font-semibold'
                : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}
          >
            {opt.replace(/^[A-D]\.\s*/, '')}
            {i === question.answer && (
              <CheckCircle2 className="inline-block w-5 h-5 ml-2 text-green-500" />
            )}
          </div>
        ))}
      </div>

      <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 ml-0 md:ml-14 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-amber-400" />
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <h4 className="font-bold text-amber-800">小老師解釋：</h4>
        </div>
        <p className="text-amber-900 leading-relaxed text-lg">
          {question.explanation}
        </p>
      </div>
    </div>
  );
}

function QuizGame() {
  const [shuffledQuestions, setShuffledQuestions] = useState(getShuffledQuiz);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const question = shuffledQuestions[currentIndex];
  const isAnswered = selectedAnswer !== null;

  const handleSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    if (question.shuffledOptions[index].isCorrect) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center max-w-2xl mx-auto border-4 border-sky-100">
        <Trophy className="w-24 h-24 text-yellow-400 mx-auto mb-6" />
        <h2 className="text-4xl font-bold text-slate-800 mb-4">挑戰完成！</h2>
        <p className="text-2xl text-slate-600 mb-8">
          你答對了 <span className="text-sky-600 font-bold text-4xl mx-2">{score}</span> / {questions.length} 題
        </p>
        <div className="bg-sky-50 rounded-2xl p-6 mb-8">
          <p className="text-lg text-sky-800 font-medium">
            {score === questions.length
              ? '太神啦！你是 Python 大師！ 🎉'
              : score > 20
              ? '表現得很棒喔！繼續保持！ 🌟'
              : '沒關係，多練習幾次就會越來越厲害！ 💪'}
          </p>
        </div>
        <button
          onClick={() => {
            setShuffledQuestions(getShuffledQuiz());
            setCurrentIndex(0);
            setSelectedAnswer(null);
            setScore(0);
            setIsFinished(false);
          }}
          className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 active:scale-95"
        >
          再玩一次
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-8 flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm">
        <div className="text-sky-600 font-bold text-lg">
          第 {currentIndex + 1} / {questions.length} 題
        </div>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === currentIndex
                  ? 'bg-sky-500 scale-150'
                  : i < currentIndex
                  ? 'bg-sky-300'
                  : 'bg-slate-200'
              } transition-all`}
            />
          ))}
        </div>
        <div className="text-amber-500 font-bold text-lg flex items-center gap-1">
          <Trophy className="w-5 h-5" /> {score}
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-2 border-sky-100">
        <h3 className="text-2xl font-bold text-slate-800 mb-8 whitespace-pre-wrap leading-relaxed">
          {question.question}
        </h3>

        <div className="grid grid-cols-1 gap-4 mb-8">
          {question.shuffledOptions.map((opt, i) => {
            let btnClass = 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-sky-50 hover:border-sky-300';
            let Icon = null;

            if (isAnswered) {
              if (opt.isCorrect) {
                btnClass = 'bg-green-100 border-green-500 text-green-800 font-bold';
                Icon = <CheckCircle2 className="w-6 h-6 text-green-600" />;
              } else if (i === selectedAnswer) {
                btnClass = 'bg-red-100 border-red-500 text-red-800 font-bold';
                Icon = <XCircle className="w-6 h-6 text-red-600" />;
              } else {
                btnClass = 'bg-slate-50 border-slate-200 text-slate-400 opacity-50';
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isAnswered}
                className={`flex items-center justify-between p-5 rounded-2xl border-2 text-left text-lg transition-all ${btnClass} ${
                  !isAnswered ? 'active:scale-[0.98]' : ''
                }`}
              >
                <span>{opt.text}</span>
                {Icon}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
              className="overflow-hidden"
            >
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-amber-400 rounded-l-2xl" />
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-6 h-6 text-amber-500" />
                  <h4 className="font-bold text-amber-800 text-lg">小老師解釋：</h4>
                </div>
                <p className="text-amber-900 leading-relaxed text-lg mb-6">
                  {question.explanation}
                </p>
                
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-xl transition-transform hover:scale-105 active:scale-95"
                  >
                    {currentIndex < questions.length - 1 ? '下一題' : '看成績'}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
