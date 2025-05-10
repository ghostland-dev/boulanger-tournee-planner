
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamic import for Leaflet (to avoid SSR issues)
const LeafletMap = dynamic(() => import("../maps/LeafletMap"), {
  ssr: false,
  loading: () => (
    <div className="h-[350px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p className="text-muted-foreground">Chargement de la carte...</p>
    </div>
  ),
});

// Sample bakery delivery points in Lyon, France
const deliveryPoints = [
  { id: 1, name: "Café du Coin", position: [45.7640, 4.8357], time: "08:00", order: "3 baguettes, 2 pains au chocolat" },
  { id: 2, name: "Restaurant L'Étoile", position: [45.7578, 4.8320], time: "08:30", order: "10 baguettes, 5 ficelles" },
  { id: 3, name: "Hôtel Splendide", position: [45.7597, 4.8422], time: "09:15", order: "15 croissants, 8 pains au chocolat" },
  { id: 4, name: "Bistrot des Amis", position: [45.7530, 4.8289], time: "09:45", order: "6 baguettes, 4 pains au levain" },
  { id: 5, name: "Epicerie Fine", position: [45.7675, 4.8307], time: "10:30", order: "4 pains spéciaux, 8 viennoiseries" }
];

export function RouteMap() {
  const [activeTab, setActiveTab] = useState<string>("map");

  return (
    <Card className="col-span-3 h-[450px] animate-slide-in">
      <CardHeader>
        <CardTitle>Tournée du jour</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="map" className="h-full" onValueChange={setActiveTab}>
          <div className="px-6 pb-4">
            <TabsList className="grid w-[180px] grid-cols-2 ml-auto">
              <TabsTrigger value="map">Carte</TabsTrigger>
              <TabsTrigger value="list">Liste</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="map" className="m-0 border-0">
            <div className="h-[350px]">
              {activeTab === "map" && <LeafletMap deliveryPoints={deliveryPoints} />}
            </div>
          </TabsContent>

          <TabsContent value="list" className="m-0 border-0">
            <div className="p-4 h-[350px] overflow-y-auto">
              <div className="space-y-4">
                {deliveryPoints.map((point) => (
                  <div key={point.id} className="flex items-start">
                    <div className="flex-shrink-0 w-12 text-sm font-medium text-muted-foreground">
                      {point.time}
                    </div>
                    <div className="ml-2 bg-secondary p-3 rounded-lg flex-grow">
                      <div className="font-medium">{point.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {`${Math.floor(Math.random() * 100)} Rue ${["de Paris", "Victor Hugo", "Garibaldi", "République", "Berthelot"][Math.floor(Math.random() * 5)]}`}, Lyon
                      </div>
                      <div className="mt-1 text-xs font-medium">{point.order}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
