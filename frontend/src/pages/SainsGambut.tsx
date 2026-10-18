import ComicViewer from '@/components/sections/ComicViewer';
import { sainsGambut } from '@/data/comics';

export default function SainsGambut({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-20">
      <ComicViewer 
        title={sainsGambut.title} 
        panels={sainsGambut.panels} 
        onBack={onBack} 
      />
    </div>
  );
}