
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Map, 
  FileText, 
  Settings, 
  Menu, 
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

type NavItem = {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navItems: NavItem[] = [
  { name: 'Dashboard', path: '/', icon: Home },
  { name: 'Clients', path: '/clients', icon: Users },
  { name: 'Routes', path: '/routes', icon: Map },
  { name: 'Planning', path: '/planning', icon: Calendar },
  { name: 'Reports', path: '/reports', icon: FileText },
  { name: 'Settings', path: '/settings', icon: Settings },
];

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

export function Sidebar({ isOpen, toggle }: SidebarProps) {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  if (!isOpen && isMobile) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 bg-white shadow-md rounded-full"
        onClick={toggle}
      >
        <Menu className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <div className={`
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      ${isMobile ? 'fixed inset-y-0 left-0 z-40' : 'relative'}
      w-64 bg-white border-r border-gray-200 transition-transform duration-200 ease-in-out
      flex flex-col h-full
    `}>
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-baker-brown flex items-center justify-center text-white font-serif text-lg">
            B
          </div>
          <h1 className="ml-2 font-serif text-xl text-baker-brown">BoulangExpress</h1>
        </div>
        <p className="text-xs text-muted-foreground mt-1">Gestion de tournées de livraison</p>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${isActive ? 'active' : ''}`}
            >
              <item.icon className={`h-5 w-5 ${isActive ? 'text-baker-brown' : 'text-gray-500'}`} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <div className="ml-2">
            <p className="text-sm font-medium">Boulangerie Martin</p>
            <p className="text-xs text-muted-foreground">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}
