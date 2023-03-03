import { useState } from 'react';
import Map, { ViewOptions } from '../components/Map';

export default function Home() {
  const [viewOptions, setViewOptions] = useState<ViewOptions>({
    center: [31.3, 37.5],
    zoom: 8,
  });

  const zoomTo = (coordinates: [number, number], zoom: number) => () => {
    setViewOptions({
      center: coordinates,
      zoom,
    });
  };

  return (
    <div className="flex flex-col flex-1">
      <Map viewOptions={viewOptions} />
      <div className="absolute right-2 bottom-8 w-96  bg-white rounded-md shadow-md p-4" style={{ zIndex: 999 }}>
        {/* Jurisdictions */}
        <h3 className="font-bold mb-4">مناطق الاختصاص</h3>
        <div className="flex flex-col gap-y-2">
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([32.27067, 36.386093], 10)}
          >
            <div className="w-4 h-4 bg-lime-600 rounded-full border border-black" />
            <span className="flex-1">محافظة المفرق /محافظة الزرقاء/محافظة اربد/محافظة جرش /محافظة عجلون</span>
          </div>
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([31.51822, 36.100162], 10)}
          >
            <div className="w-4 h-4 bg-cyan-400 rounded-full border border-black" />
            <span className="flex-1">محافظة العاصمة عمان / محافظة البلقاء / محافظة مادبا /محافظة الكرك</span>
          </div>
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([32.3257641, 38.034161], 10)}
          >
            <div className="w-4 h-4 bg-yellow-300 rounded-full border border-black" />
            <span className="flex-1">الرويشد والازرق</span>
          </div>
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([30.288305, 36.32422], 10)}
          >
            <div className="w-4 h-4 bg-amber-600 rounded-full border border-black" />
            <span className="flex-1">محافظة العقبة / محافظة الطفيلة / محافظة معان</span>
          </div>
        </div>

        {/* Centers */}
        <h3 className="font-bold mb-4 mt-6">المراكز</h3>
        <div className="flex flex-col gap-y-2">
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([32.3524728212889, 36.2248300205784], 17)}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-black" />
            <span className="flex-1">مركز مكافحة المفرق واربد</span>
          </div>
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([32.5133910361728, 38.2209376845779], 17)}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-black" />
            <span className="flex-1">مركز دوريات الرويشد</span>
          </div>
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([31.9984473798001, 35.9027218931361], 17)}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-black" />
            <span className="flex-1">مديرية مكافحة التهريب المركزية</span>
          </div>
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([31.8403841887092, 36.811591232927], 17)}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-black" />
            <span className="flex-1">مركز دوريات الأزرق</span>
          </div>
          <div
            className="flex items-center gap-x-2 hover:text-green-700 hover:cursor-pointer"
            onClick={zoomTo([29.5926354365621, 35.1650389757939], 17)}
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full border border-black" />
            <span className="flex-1">مركز دوريات الجنوب</span>
          </div>
        </div>
      </div>
    </div>
  );
}
