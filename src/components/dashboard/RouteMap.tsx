
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function RouteMap() {
  return (
    <Card className="col-span-3 h-[450px] animate-slide-in">
      <CardHeader>
        <CardTitle>Tournée du jour</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="map" className="h-full space-y-0">
          <div className="flex items-center justify-between px-6 pt-2 pb-4">
            <div className="flex-grow"></div>
            <TabsList className="grid w-[180px] grid-cols-2">
              <TabsTrigger value="map">Carte</TabsTrigger>
              <TabsTrigger value="list">Liste</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="map" className="m-0 border-0">
            <div className="relative h-[350px] bg-gray-100 rounded-b-lg flex items-center justify-center">
              {/* Map would be rendered here with Leaflet.js */}
              <div className="text-center p-4">
                <p className="text-muted-foreground mb-2">La carte sera affichée ici</p>
                <p className="text-xs text-muted-foreground">Cette fonctionnalité nécessite l'intégration avec Leaflet.js ou Google Maps API</p>
                <div className="w-full h-[280px] bg-white rounded-lg mt-2 border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="p-4">
                    <div className="w-full max-w-xs mx-auto">
                      <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                      <div className="h-32 bg-gray-200 rounded-lg mb-3"></div>
                      <div className="flex space-x-2 mb-2">
                        <div className="h-3 w-3 bg-baker-brown rounded-full"></div>
                        <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex space-x-2 mb-2">
                        <div className="h-3 w-3 bg-baker-orange rounded-full"></div>
                        <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                      </div>
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 bg-gray-400 rounded-full"></div>
                        <div className="h-3 w-1/4 bg-gray-200 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="list" className="m-0 border-0">
            <div className="p-4 h-[350px] overflow-y-auto">
              <div className="space-y-4">
                {["08:00", "08:30", "09:15", "09:45", "10:30"].map((time, i) => (
                  <div key={i} className="flex items-start">
                    <div className="flex-shrink-0 w-12 text-sm font-medium text-muted-foreground">
                      {time}
                    </div>
                    <div className="ml-2 bg-secondary p-3 rounded-lg flex-grow">
                      <div className="font-medium">{["Café du Coin", "Restaurant L'Étoile", "Hôtel Splendide", "Bistrot des Amis", "Epicerie Fine"][i]}</div>
                      <div className="text-sm text-muted-foreground">{["23 Rue de Paris", "45 Avenue Gambetta", "12 Place Bellecour", "89 Rue Garibaldi", "56 Rue Victor Hugo"][i]}, Lyon</div>
                      <div className="mt-1 text-xs font-medium">{["3 baguettes, 2 pains au chocolat", "10 baguettes, 5 ficelles", "15 croissants, 8 pains au chocolat", "6 baguettes, 4 pains au levain", "4 pains spéciaux, 8 viennoiseries"][i]}</div>
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
