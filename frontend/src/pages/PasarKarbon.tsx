import ComicViewer from '@/components/sections/ComicViewer';
import { pasarKarbon } from '@/data/comics';

export default function PasarKarbon({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-20">
      <ComicViewer 
        title={pasarKarbon.title} 
        panels={pasarKarbon.panels} 
        onBack={onBack} 
      />
    </div>
  );
}