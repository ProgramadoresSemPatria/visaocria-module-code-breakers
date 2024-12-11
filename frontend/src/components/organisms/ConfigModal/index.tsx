'use client';

import { useState } from 'react';
import { Label } from 'src/components/atoms/Label';
import { Switch } from 'src/components/atoms/Switch';
import useConfigModalStore from 'src/store/ConfigModalStore';

const ConfigModal = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isPanning, setIsPanning] = useState(true);
  const [isZooming, setIsZooming] = useState(true);

  const { setIsConfigModalStore } = useConfigModalStore();

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <section className="bg-[#1A1B26] w-[500px] rounded-lg shadow-lg flex flex-col">
        <h2 className="text-xl text-white font-medium text-center py-6 border-b border-gray-800">
          Settings
        </h2>

        <main className="p-6 space-y-6">
          <div className="flex items-center justify-between group">
            <Label htmlFor="dragging" className="text-gray-200 text-sm">
              Enable Dragging
            </Label>
            <Switch
              id="dragging"
              checked={isDragging}
              onCheckedChange={setIsDragging}
            />
          </div>

          <div className="flex items-center justify-between group">
            <Label htmlFor="panning" className="text-gray-200 text-sm">
              Enable Panning
            </Label>
            <Switch
              id="panning"
              checked={isPanning}
              onCheckedChange={setIsPanning}
            />
          </div>

          <div className="flex items-center justify-between group">
            <Label htmlFor="zooming" className="text-gray-200 text-sm">
              Enable Zooming
            </Label>
            <Switch
              id="zooming"
              checked={isZooming}
              onCheckedChange={setIsZooming}
            />
          </div>
        </main>

        <div className="flex justify-center pb-6">
          <button
            onClick={() => setIsConfigModalStore(false)}
            className="px-4 py-2 text-sm text-white bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded transition-colors"
          >
            Close
          </button>
        </div>
      </section>
    </div>
  );
};

export default ConfigModal;
