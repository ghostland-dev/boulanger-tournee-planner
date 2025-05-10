
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function DeliverySummary() {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Résumé de la tournée</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1 text-sm">
              <span>Progression</span>
              <span className="font-medium">3/8 clients</span>
            </div>
            <Progress value={37.5} className="h-2" />
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-2">
            <div>
              <p className="text-sm text-muted-foreground">Distance totale</p>
              <p className="text-lg font-medium">18.5 km</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Durée estimée</p>
              <p className="text-lg font-medium">2h 15min</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Produits livrés</p>
              <p className="text-lg font-medium">42 articles</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Montant total</p>
              <p className="text-lg font-medium">187,50 €</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
