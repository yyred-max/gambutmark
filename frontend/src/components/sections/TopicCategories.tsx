import React from 'react';
import { TopicIcon } from '@/components/illustrations/Scenes';
import { topicCategories } from '@/data/mockData';
import { ArrowRight } from 'lucide-react';

interface TopicCategoriesProps {
  onSelectTopic: (topicId: string) => void;
}

export default function TopicCategories({ onSelectTopic }: TopicCategoriesProps) {
  return (
    <section id="topics" className="relative py-20 px-4" style={{ background: '#f5ead7' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-display font-semibold text-sm uppercase tracking-wider" style={{ color: '#d94c2a' }}>
            Jelajahi per Tema
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-2 mb-3" style={{ color: '#1a3c2e' }}>
            Kategori Topik
          </h2>
          <p className="font-body text-lg max-w-2xl mx-auto" style={{ color: '#234d3a' }}>
            Selami sains, cerita, dan solusi di balik lahan gambut Indonesia.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {topicCategories.map((topic, i) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className="cartoon-card reveal-on-scroll rounded-2xl p-6 cursor-pointer border-2.5 bg-white text-left w-full transition-transform hover:-translate-y-1"
              style={{
                borderColor: topic.color,
                boxShadow: '4px 6px 0 rgba(26, 60, 46, 0.12)',
                transitionDelay: `${i * 0.05}s`,
              }}
            >
              {/* Icon */}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: `${topic.color}20` }}
              >
                <TopicIcon iconKey={topic.iconKey} size={40} />
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-xl mb-2" style={{ color: '#1a3c2e' }}>
                {topic.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed mb-4" style={{ color: '#5c4a3a' }}>
                {topic.description}
              </p>

              {/* Link */}
              <div className="flex items-center gap-1.5 font-display font-semibold text-sm" style={{ color: topic.color }}>
                <span>Pelajari lebih lanjut</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}