
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Reel {
  id: string;
  title: string;
  embedUrl: string;
}

interface ReelsModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  reels: Reel[];
}

const ReelsModal: React.FC<ReelsModalProps> = ({ isOpen, onClose, projectTitle, reels }) => {
  const [currentReelIndex, setCurrentReelIndex] = useState(0);

  const nextReel = () => {
    setCurrentReelIndex((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setCurrentReelIndex((prev) => (prev - 1 + reels.length) % reels.length);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto bg-black/95 border-purple-400/30 backdrop-blur-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="text-white text-lg font-semibold">
            {projectTitle}
          </DialogTitle>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span>{currentReelIndex + 1} of {reels.length}</span>
          </div>
        </DialogHeader>

        <div className="relative">
          {/* Main Reel Display */}
          <div className="aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden">
            <iframe
              src={reels[currentReelIndex]?.embedUrl}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={reels[currentReelIndex]?.title}
            />
          </div>

          {/* Navigation Buttons */}
          {reels.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={prevReel}
                disabled={currentReelIndex === 0}
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={nextReel}
                disabled={currentReelIndex === reels.length - 1}
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>

        {/* Reel Navigation Dots */}
        {reels.length > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            {reels.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentReelIndex ? 'bg-purple-400' : 'bg-gray-600'
                }`}
                onClick={() => setCurrentReelIndex(index)}
              />
            ))}
          </div>
        )}

        {/* Scrollable Reel List */}
        <ScrollArea className="max-h-32 mt-4">
          <div className="space-y-2">
            {reels.map((reel, index) => (
              <button
                key={reel.id}
                className={`w-full text-left p-2 rounded-lg transition-colors ${
                  index === currentReelIndex
                    ? 'bg-purple-400/20 text-purple-400'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                onClick={() => setCurrentReelIndex(index)}
              >
                <div className="text-sm font-medium">{reel.title}</div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ReelsModal;
