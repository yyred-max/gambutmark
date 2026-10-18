import ComicViewer from '@/components/sections/ComicViewer';
import { satwaLiar } from '@/data/comics';

export default function SatwaLiar({ onBack }: { onBack: () => void }) {
  return (
    <div className="pt-20">
      <ComicViewer 
        title={satwaLiar.title} 
        panels={satwaLiar.panels} 
        onBack={onBack} 
      />
    </div>
  );
}