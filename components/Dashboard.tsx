import { useState } from "react";
import { 
  BarChart3, 
  FileText, 
  Lightbulb, 
  Settings, 
  Brain, 
  Heart, 
  Quote, 
  Search, 
  Zap, 
  BookOpen, 
  Puzzle, 
  User,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { Separator } from "./ui/separator";
import { DashboardPage } from "./pages/DashboardPage";
import { ReportsPage } from "./pages/ReportsPage";
import { PromptsPage } from "./pages/PromptsPage";
import { OptimizePage } from "./pages/OptimizePage";
import { IntelligencePage } from "./pages/IntelligencePage";
import { SentimentPage } from "./pages/SentimentPage";
import { CitationsPage } from "./pages/CitationsPage";
import { CrawlersPage } from "./pages/CrawlersPage";
import { LLMTrafficPage } from "./pages/LLMTrafficPage";
import { IntegrationsPage } from "./pages/IntegrationsPage";

const mainNavItems = [
  { icon: BarChart3, label: "Dashboard", active: true },
  { icon: FileText, label: "Reports" },
  { icon: Lightbulb, label: "Prompts" },
  { icon: Settings, label: "Optimize" },
];

const insightItems = [
  { icon: Brain, label: "Intelligence" },
  { icon: Heart, label: "Sentiment" },
  { icon: Quote, label: "Citations" },
];

const analyticsItems = [
  { icon: Search, label: "Crawlers" },
  { icon: Zap, label: "LLM Traffic" },
];

const otherItems = [
  { icon: BookOpen, label: "Learn" },
  { icon: Puzzle, label: "Integrations" },
  { icon: User, label: "My Account" },
];

export function Dashboard() {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderNavItem = (item: any, isActive: boolean) => {
    const Icon = item.icon;
    return (
      <button
        key={item.label}
        onClick={() => setActivePage(item.label)}
        className={`dark-nav-item w-full text-left ${
          isActive ? "dark-nav-item-active" : ""
        }`}
      >
        <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-dark-secondary"}`} />
        <span>{item.label}</span>
        {isActive && (
          <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
        )}
      </button>
    );
  };

  const renderContent = () => {
    switch (activePage) {
      case "Dashboard":
        return <DashboardPage />;
      case "Reports":
        return <ReportsPage />;
      case "Prompts":
        return <PromptsPage />;
      case "Optimize":
        return <OptimizePage />;
      case "Intelligence":
        return <IntelligencePage />;
      case "Sentiment":
        return <SentimentPage />;
      case "Citations":
        return <CitationsPage />;
      case "Crawlers":
        return <CrawlersPage />;
      case "LLM Traffic":
        return <LLMTrafficPage />;
      case "Integrations":
        return <IntegrationsPage />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-bg overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Enhanced Sidebar */}
      <div className="w-72 flex flex-col relative">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/30 backdrop-blur-xl"></div>
        <div className="relative z-10 flex flex-col h-full border-r border-dark-color/50">
          
          {/* Enhanced Logo Section - Removed animate-float */}
          <div className="p-8 border-b border-dark-color/50">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center dark-shadow-glow">
                  <span className="text-white font-bold text-xl relative z-10">A8</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-secondary rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gradient-primary mb-1">AI8 Digital</h1>
                <p className="text-xs text-dark-secondary font-medium flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  LLM Analytics Platform
                </p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Navigation */}
          <nav className="flex-1 p-6 space-y-8 overflow-y-auto">
            {/* Main Navigation */}
            <div className="space-y-3">
              {mainNavItems.map((item) => renderNavItem(item, activePage === item.label))}
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-dark-border to-transparent" />

            {/* Insight Group */}
            <div className="space-y-4">
              <div className="px-4 flex items-center gap-2">
                <Brain className="w-3 h-3 text-dark-cta" />
                <h3 className="text-xs font-bold text-gradient-primary uppercase tracking-widest">Insight</h3>
              </div>
              <div className="space-y-3">
                {insightItems.map((item) => renderNavItem(item, activePage === item.label))}
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-dark-border to-transparent" />

            {/* Analytics Group */}
            <div className="space-y-4">
              <div className="px-4 flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <h3 className="text-xs font-bold text-gradient-secondary uppercase tracking-widest">Analytics</h3>
              </div>
              <div className="space-y-3">
                {analyticsItems.map((item) => renderNavItem(item, activePage === item.label))}
              </div>
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-dark-border to-transparent" />

            {/* Other Group */}
            <div className="space-y-4">
              <div className="px-4">
                <h3 className="text-xs font-bold text-dark-secondary uppercase tracking-widest">Other</h3>
              </div>
              <div className="space-y-3">
                {otherItems.map((item) => renderNavItem(item, activePage === item.label))}
              </div>
            </div>
          </nav>

          {/* Enhanced Bottom CTA */}
          <div className="p-6 border-t border-dark-color/50">
            <div className="glass-card-enhanced text-center relative overflow-hidden">
              {/* Animated background particles */}
              <div className="absolute top-2 right-2 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <h4 className="text-sm font-bold text-gradient-primary mb-2">Upgrade to Pro</h4>
                <p className="text-xs text-dark-secondary mb-4">Unlock advanced analytics & AI insights</p>
                <button className="dark-button-primary text-xs py-3 px-6 w-full">
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with enhanced styling */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Content area with subtle pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 flex flex-col h-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}