import ComicViewer from '@/components/sections/ComicViewer';
import { komunitas } from '@/data/comics';

export default function Komunitas({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-20">
      <ComicViewer 
        title={komunitas.title} 
        panels={komunitas.panels} 
        onBack={onBack} 
      />
    </div>
  );
}