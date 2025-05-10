
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit } from "lucide-react";

// Mock client data
const clients = [
  { id: 1, name: "Café du Coin", address: "23 Rue de Paris, Lyon", deliveryTime: "08:30", order: "3 baguettes, 2 pains au chocolat" },
  { id: 2, name: "Restaurant L'Étoile", address: "45 Avenue Gambetta, Lyon", deliveryTime: "07:45", order: "10 baguettes, 5 ficelles" },
  { id: 3, name: "Hôtel Splendide", address: "12 Place Bellecour, Lyon", deliveryTime: "06:30", order: "15 croissants, 8 pains au chocolat" },
  { id: 4, name: "Bistrot des Amis", address: "89 Rue Garibaldi, Lyon", deliveryTime: "09:15", order: "6 baguettes, 4 pains au levain" },
];

export function ClientList() {
  return (
    <Card className="animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Clients récents</CardTitle>
        <Button size="sm" variant="outline">Voir tous</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Adresse</TableHead>
              <TableHead>Heure</TableHead>
              <TableHead>Commande</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.address}</TableCell>
                <TableCell>{client.deliveryTime}</TableCell>
                <TableCell className="max-w-[200px] truncate">{client.order}</TableCell>
                <TableCell>
                  <Button size="icon" variant="ghost">
                    <Edit className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
