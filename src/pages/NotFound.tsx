
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <DashboardLayout>
      <div className="min-h-full flex flex-col items-center justify-center py-12">
        <div className="text-center">
          <h1 className="text-6xl font-serif font-bold text-baker-brown mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            La page que vous recherchez n'existe pas
          </p>
          <Button asChild>
            <Link to="/">Retourner au tableau de bord</Link>
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default NotFound;
