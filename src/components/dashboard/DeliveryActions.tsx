
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarCheck, FileText, Trash, FileText as FileTextIcon } from "lucide-react";

export function DeliveryActions() {
  return (
    <Card className="animate-fade-in">
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full flex items-center justify-start gap-2 bg-baker-brown hover:bg-baker-brown/90">
          <CalendarCheck className="h-4 w-4" />
          Planifier une tournée
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-start gap-2">
          <FileText className="h-4 w-4" />
          Exporter feuille de route (PDF)
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-start gap-2">
          <FileTextIcon className="h-4 w-4" />
          Générer factures
        </Button>
        <Button variant="ghost" className="w-full flex items-center justify-start gap-2 text-muted-foreground hover:text-destructive">
          <Trash className="h-4 w-4" />
          Annuler la tournée
        </Button>
      </CardContent>
    </Card>
  );
}
