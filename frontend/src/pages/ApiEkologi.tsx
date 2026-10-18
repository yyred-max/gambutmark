import ComicViewer from '@/components/sections/ComicViewer';
import { apiEkologi } from '@/data/comics';

export default function ApiEkologi({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-20">
      <ComicViewer 
        title={apiEkologi.title} 
        panels={apiEkologi.panels} 
        onBack={onBack} 
      />
    </div>
  );
}