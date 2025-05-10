
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatCard } from "@/components/dashboard/StatCard";
import { ClientList } from "@/components/dashboard/ClientList";
import { RouteMap } from "@/components/dashboard/RouteMap";
import { DeliveryActions } from "@/components/dashboard/DeliveryActions";
import { DeliverySummary } from "@/components/dashboard/DeliverySummary";
import { Calendar, Map, Users, FileText } from "lucide-react";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-serif font-bold text-baker-brown">
          Bonjour, Martin
        </h1>
        <p className="text-muted-foreground">
          Voici un aperçu de vos tournées de livraison pour aujourd'hui.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Clients"
            value="32"
            icon={<Users className="h-4 w-4" />}
            description="Clients actifs ce mois"
            trend={{ value: 12, label: "vs mois dernier" }}
            className="delay-75"
          />
          <StatCard
            title="Tournées"
            value="24"
            icon={<Map className="h-4 w-4" />}
            description="Tournées ce mois"
            trend={{ value: 4, label: "vs mois dernier" }}
            className="delay-150"
          />
          <StatCard
            title="Produits"
            value="528"
            icon={<FileText className="h-4 w-4" />}
            description="Articles livrés ce mois"
            trend={{ value: -2, label: "vs mois dernier" }}
            className="delay-200"
          />
          <StatCard
            title="Planning"
            value="8"
            icon={<Calendar className="h-4 w-4" />}
            description="Livraisons à venir cette semaine"
            className="delay-300"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <RouteMap />
          <div className="space-y-4">
            <DeliveryActions />
            <DeliverySummary />
          </div>
        </div>

        <ClientList />
      </div>
    </DashboardLayout>
  );
};

export default Index;
