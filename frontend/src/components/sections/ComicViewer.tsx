import { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

interface Panel {
  title: string;
  content: string;
  icon?: string;
}

interface ComicViewerProps {
  title: string;
  panels: Panel[];
  onBack?: () => void;
}

export default function ComicViewer({ title, panels, onBack }: ComicViewerProps) {
  const [currentPanel, setCurrentPanel] = useState(0);

  const handleNext = () => {
    if (currentPanel < panels.length - 1) {
      setCurrentPanel(currentPanel + 1);
    }
  };

  const handlePrev = () => {
    if (currentPanel > 0) {
      setCurrentPanel(currentPanel - 1);
    }
  };

  const goToPanel = (index: number) => {
    setCurrentPanel(index);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-stone-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Tombol Kembali */}
        {onBack && (
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-6 text-stone-600 hover:text-stone-900 font-semibold transition-colors"
          >
            <ArrowLeft size={20} /> Kembali ke Topik
          </button>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-center text-stone-800 mb-12">
          {title}
        </h1>

        {/* Comic Panel Container */}
        <div className="relative bg-amber-50 rounded-2xl shadow-2xl p-6 md:p-10 border-4 border-stone-700 overflow-hidden min-h-[500px]">
          {/* Panel Content with Transition */}
          <div className="relative">
            {panels.map((panel, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out ${
                  index === currentPanel
                    ? 'opacity-100 translate-x-0 relative'
                    : index < currentPanel
                    ? 'opacity-0 -translate-x-full absolute inset-0'
                    : 'opacity-0 translate-x-full absolute inset-0'
                }`}
              >
                {/* Panel Header */}
                <div className="text-center mb-8">
                  {panel.icon && (
                    <div className="text-6xl mb-4">{panel.icon}</div>
                  )}
                  <h2 className="text-2xl md:text-3xl font-black text-stone-800 mb-3 leading-tight">
                    {panel.title}
                  </h2>
                  <div className="h-1 w-24 bg-emerald-700 mx-auto rounded-full"></div>
                </div>

                {/* Panel Content Text */}
                <div className="text-center">
                  <p className="text-base md:text-lg text-stone-700 leading-relaxed max-w-2xl mx-auto whitespace-pre-line">
                    {panel.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-12 pt-6 border-t-2 border-stone-300">
            <button
              onClick={handlePrev}
              disabled={currentPanel === 0}
              className={`px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-200 flex items-center gap-2 ${
                currentPanel === 0
                  ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                  : 'bg-stone-700 text-amber-50 hover:bg-stone-800 hover:scale-105 active:scale-95'
              }`}
            >
              <ChevronLeft size={20} /> Prev
            </button>

            {/* Panel Indicator */}
            <div className="flex flex-col items-center">
              <span className="text-sm text-stone-600 font-semibold mb-2">
                Panel {currentPanel + 1} dari {panels.length}
              </span>
              <div className="flex gap-2">
                {panels.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPanel(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPanel
                        ? 'bg-emerald-700 scale-125'
                        : 'bg-stone-400 hover:bg-stone-500'
                    }`}
                    aria-label={`Ke panel ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={currentPanel === panels.length - 1}
              className={`px-6 py-3 rounded-lg font-bold text-sm md:text-base transition-all duration-200 flex items-center gap-2 ${
                currentPanel === panels.length - 1
                  ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
                  : 'bg-emerald-700 text-amber-50 hover:bg-emerald-800 hover:scale-105 active:scale-95'
              }`}
            >
              Next <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}