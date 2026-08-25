import { useState } from "react";
import { calculatorSchema } from "./CalculatorSchema";

function CalculatorScreen() {
  const [Number1, setNumber1] = useState("");
  const [Number2, setNumber2] = useState("");
  const [Result, setResult] = useState(null);
  const [activeInput, setActiveInput] = useState("num1");

  const handleKeyClick = (value) => {
    if (activeInput === "num1") {
      setNumber1((prev) => prev + value);
    } else {
      setNumber2((prev) => prev + value);
    }
  };

  const handleBackspace = () => {
    if (activeInput === "num1") {
      setNumber1((prev) => prev.slice(0, -1));
    } else {
      setNumber2((prev) => prev.slice(0, -1));
    }
  };

  const handleClear = () => {
    setNumber1("");
    setNumber2("");
    setResult(null);
  };

  const calculate = (operation) => {
    const validation = calculatorSchema.safeParse({
      number1: Number1,
      number2: Number2,
    });

    if (!validation.success) {
      const firstError = validation.error.issues[0].message;
      setResult(firstError);
      return;
    }

    const n1 = Number(Number1);
    const n2 = Number(Number2);

    let rawResult = 0;

    switch (operation) {
      case "add":
        rawResult = n1 + n2;
        break;
      case "subtract":
        rawResult = n1 - n2;
        break;
      case "multiply":
        rawResult = n1 * n2;
        break;
      case "divide":
        if (n2 === 0) {
          setResult("لا يمكن القسمة على صفر");
          return;
        }
        rawResult = n1 / n2;
        break;
      default:
        return;
    }

    const finalResult = Math.round(rawResult * 1000) / 1000;
    setResult(finalResult);
  };

  return (
    // تم تغيير max-w-200 إلى max-w-xl للحفاظ على حجم حاسبة متناسق
    <div className="max-w-xl sm:my-6 mx-auto p-6 bg-[#e1e5ec] dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700/60 rounded-2xl shadow-sm space-y-5 transition-colors duration-300">
      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 text-center">
       Calculator
      </h3>

      <div className="flex flex-col sm:flex-row gap-6">
        {/* قسم حقول الإدخال والنتيجة */}
        <div className="w-full sm:w-1/2 space-y-3">
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-200 mb-1">
                Number One
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={Number1}
                onFocus={() => setActiveInput("num1")}
                onChange={(e) => setNumber1(e.target.value)}
                placeholder="0"
                className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-zinc-900 border rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none transition-all ${
                  activeInput === "num1"
                    ? "border-blue-500 dark:border-red-400 ring-2 ring-blue-500/20 dark:ring-red-500/20"
                    : "border-slate-200 dark:border-zinc-700"
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-600 dark:text-slate-200 mb-1">
                Number Two
              </label>
              <input
                type="text"
                inputMode="decimal"
                value={Number2}
                onFocus={() => setActiveInput("num2")}
                onChange={(e) => setNumber2(e.target.value)}
                placeholder="0"
                className={`w-full px-4 py-2.5 bg-slate-50 dark:bg-zinc-900 border rounded-xl text-slate-900 dark:text-slate-100 focus:outline-none transition-all ${
                  activeInput === "num2"
                    ? "border-blue-500 dark:border-red-400 ring-2 ring-blue-500/20 dark:ring-red-500/20"
                    : "border-slate-200 dark:border-zinc-700"
                }`}
              />
            </div>
          </div>

          {Result !== null && (
            <div className="p-3 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 rounded-xl text-center">
              <span className="text-sm text-slate-500 dark:text-slate-200 block mb-1">
                النتيجة
              </span>
              <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                {Result}
              </span>
            </div>
          )}
        </div>

        {/* قسم الأزرار */}
        <div className="w-full sm:w-1/2 space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleKeyClick(num)}
                className="py-3 bg-slate-100 dark:bg-zinc-900 hover:bg-[#d5dadf] dark:hover:bg-zinc-700/70 text-slate-800 dark:text-slate-100 font-bold rounded-xl transition-colors cursor-pointer text-lg"
              >
                {num}
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleKeyClick(".")}
              className="py-3 bg-slate-100 dark:bg-zinc-900 hover:bg-[#d5dadf] dark:hover:bg-zinc-700/70 text-slate-800 dark:text-slate-100 font-bold rounded-xl transition-colors cursor-pointer text-lg"
            >
              .
            </button>

            <button
              type="button"
              onClick={() => handleKeyClick("0")}
              className="py-3 bg-slate-100 dark:bg-zinc-900 hover:bg-[#d5dadf] dark:hover:bg-zinc-700/70 text-slate-800 dark:text-slate-100 font-bold rounded-xl transition-colors cursor-pointer text-lg"
            >
              0
            </button>

            <button
              type="button"
              onClick={handleBackspace}
              className="py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold rounded-xl transition-colors cursor-pointer text-lg"
            >
              ⌫
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {["add", "subtract", "multiply", "divide"].map((op, idx) => {
              const symbols = ["+", "-", "×", "÷"];
              return (
                <button
                  key={op}
                  type="button"
                  onClick={() => calculate(op)}
                  className="py-2.5 bg-blue-500/90 dark:bg-red-500 hover:bg-blue-500 dark:hover:bg-red-500/85 text-white font-bold rounded-xl transition-colors shadow-xs cursor-pointer"
                >
                  {symbols[idx]}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleClear}
            className="w-full py-2.5 bg-red-500/60 sm:bg-red-500 dark:bg-red-500/40 hover:bg-red-400 dark:hover:bg-red-500/30 text-white dark:text-red-400 font-semibold text-sm rounded-xl transition-colors cursor-pointer"
          >
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

export default CalculatorScreen;