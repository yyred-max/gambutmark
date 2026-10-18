import ComicViewer from '@/components/sections/ComicViewer';
import { restorasi } from '@/data/comics';

export default function Restorasi({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-20">
      <ComicViewer 
        title={restorasi.title} 
        panels={restorasi.panels} 
        onBack={onBack} 
      />
    </div>
  );
}