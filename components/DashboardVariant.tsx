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
  TrendingUp,
  Eye,
  Target,
  Trophy,
  MessageSquare,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Globe,
  Star,
  Info
} from "lucide-react";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
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
  { icon: BarChart3, label: "Dashboard", active: true, color: "text-blue-400" },
  { icon: FileText, label: "Reports", color: "text-green-400" },
  { icon: Lightbulb, label: "Prompts", color: "text-yellow-400" },
  { icon: Settings, label: "Optimize", color: "text-purple-400" },
];

const insightItems = [
  { icon: Brain, label: "Intelligence", color: "text-cyan-400" },
  { icon: Heart, label: "Sentiment", color: "text-pink-400" },
  { icon: Quote, label: "Citations", color: "text-orange-400" },
];

const analyticsItems = [
  { icon: Search, label: "Crawlers", color: "text-indigo-400" },
  { icon: Zap, label: "LLM Traffic", color: "text-emerald-400" },
];

const otherItems = [
  { icon: BookOpen, label: "Learn", color: "text-slate-400" },
  { icon: Puzzle, label: "Integrations", color: "text-teal-400" },
  { icon: User, label: "My Account", color: "text-rose-400" },
];

// Widget metrics with tooltip data
const widgetMetrics = [
  {
    title: "Visibility Score",
    value: "8.4",
    change: "+12.5% vs last week",
    icon: Eye,
    gradient: "bg-gradient-primary",
    isPositive: true,
    tooltipContent: {
      title: "Weekly Visibility Growth",
      description: "Significant improvement in brand visibility across all AI models",
      details: [
        "Increased from 7.5 to 8.4 visibility score",
        "Best weekly performance in the last month",
        "Driven by improved rankings in OpenAI and Claude"
      ]
    }
  },
  {
    title: "Presence Score",
    value: "74%",
    change: "+8.2% vs last week",
    icon: Target,
    gradient: "bg-gradient-secondary",
    isPositive: true,
    tooltipContent: {
      title: "Presence Rate Improvement",
      description: "Higher frequency of brand mentions in AI responses",
      details: [
        "Increased from 68% to 74% presence rate",
        "Strong growth in competitive queries",
        "Indicates improved brand recall"
      ]
    }
  },
  {
    title: "Average Rank",
    value: "2.3",
    change: "-0.4 vs last week",
    icon: Trophy,
    gradient: "bg-gradient-warm",
    isPositive: true,
    tooltipContent: {
      title: "Ranking Position Improvement",
      description: "Better average ranking across all mentions (lower is better)",
      details: [
        "Improved from position 2.7 to 2.3",
        "Consistent progress toward #1 rankings",
        "Strong performance in product comparison queries"
      ]
    }
  },
  {
    title: "Total Mentions",
    value: "1,247",
    change: "+23.1% vs last week",
    icon: MessageSquare,
    gradient: "bg-gradient-accent",
    isPositive: true,
    tooltipContent: {
      title: "Mention Volume Surge",
      description: "Substantial increase in total brand mentions",
      details: [
        "Added 235 new mentions this week",
        "Growth across all monitored AI models",
        "Strong momentum in brand awareness"
      ]
    }
  }
];

// Alternative layout focused on widget-style cards with tooltips
const WidgetDashboard = () => {
  return (
    <TooltipProvider>
      <div className="p-8 space-y-8">
        {/* Status Bar */}
        <div className="flex items-center justify-between p-6 glass-card-enhanced">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-dark-primary">System Healthy</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-dark-secondary" />
              <span className="text-sm text-dark-secondary">Last updated: 2 min ago</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400 font-medium">6 Models Active</span>
            </div>
          </div>
          <button className="dark-button-secondary text-sm">
            Refresh Data
          </button>
        </div>

        {/* Main Stats Grid with Enhanced Tooltips */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {widgetMetrics.map((metric, index) => {
            const Icon = metric.icon;
            const isNegativeGood = metric.title === "Average Rank"; // Lower rank is better
            
            return (
              <div key={index} className="metric-card relative group">
                <div className="absolute top-4 right-4">
                  <ArrowUpRight className={`w-5 h-5 ${metric.isPositive ? 'text-green-400' : 'text-orange-400'}`} />
                </div>
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-12 h-12 ${metric.gradient} rounded-xl flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-dark-secondary font-medium uppercase tracking-wide">{metric.title}</p>
                    
                    {/* Enhanced tooltip for change indicator */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <p className="text-sm text-green-400 font-semibold cursor-help hover:text-green-300 transition-colors flex items-center space-x-1">
                          <span>{metric.change}</span>
                          <Info className="w-3 h-3 opacity-60" />
                        </p>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="top" 
                        className="glass-card-enhanced border-none max-w-xs p-4"
                        sideOffset={8}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <TrendingUp className="w-4 h-4 text-green-400" />
                            <h4 className="font-semibold text-dark-primary text-sm">{metric.tooltipContent.title}</h4>
                          </div>
                          
                          <p className="text-xs text-dark-secondary leading-relaxed">
                            {metric.tooltipContent.description}
                          </p>
                          
                          <div className="space-y-2">
                            {metric.tooltipContent.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <div className="w-1 h-1 rounded-full bg-blue-400 mt-2 flex-shrink-0"></div>
                                <span className="text-xs text-dark-secondary leading-relaxed">{detail}</span>
                              </div>
                            ))}
                          </div>
                          
                          <div className="pt-2 border-t border-dark-border/30">
                            <span className="text-xs text-dark-secondary opacity-80">
                              Period: Last 7 days
                            </span>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h2 className="text-4xl font-bold text-white">{metric.value}</h2>
                  {metric.title === "Average Rank" ? (
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= 3 ? 'text-yellow-400 fill-current' : 'text-dark-tag'}`}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className={`w-full bg-dark-tag/30 rounded-full h-2`}>
                      <div className={`h-2 ${metric.gradient} rounded-full`} 
                           style={{ width: metric.title === "Presence Score" ? "74%" : "84%" }}>
                      </div>
                    </div>
                  )}
                </div>
                
                {metric.title === "Total Mentions" && (
                  <p className="text-xs text-dark-secondary mt-2">Across 6 AI models</p>
                )}
              </div>
            );
          })}
        </div>

        {/* Activity Feed and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Activity Feed */}
          <div className="lg:col-span-2 glass-card-enhanced">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-bold text-dark-primary">Recent Activity</h3>
              </div>
              <span className="text-xs text-dark-secondary">Live updates</span>
            </div>
            
            <div className="space-y-4">
              {[
                { type: 'mention', model: 'OpenAI GPT-4', content: 'New mention in response about project management tools', time: '2 min ago', positive: true },
                { type: 'rank', model: 'Claude', content: 'Ranking improved to #1 for customer service queries', time: '5 min ago', positive: true },
                { type: 'citation', model: 'Gemini', content: 'Cited as source for AI implementation best practices', time: '12 min ago', positive: true },
                { type: 'mention', model: 'Meta AI', content: 'Mentioned in comparison with competitors', time: '18 min ago', positive: false },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-dark-hover/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full mt-2 ${activity.positive ? 'bg-green-400' : 'bg-orange-400'} animate-pulse`}></div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-sm font-semibold text-dark-primary">{activity.model}</span>
                      <span className="text-xs text-dark-secondary">{activity.time}</span>
                    </div>
                    <p className="text-sm text-dark-secondary">{activity.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Stats Panel */}
          <div className="space-y-6">
            {/* Top Performing Model */}
            <div className="glass-card-enhanced">
              <h4 className="text-sm font-semibold text-dark-primary mb-4">Top Performing Model</h4>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-sm">🤖</span>
                </div>
                <div>
                  <h5 className="font-semibold text-dark-primary">OpenAI GPT-4</h5>
                  <p className="text-xs text-green-400">Visibility: 8.7/10</p>
                </div>
              </div>
            </div>

            {/* Recent Improvements */}
            <div className="glass-card-enhanced">
              <h4 className="text-sm font-semibold text-dark-primary mb-4">Recent Improvements</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark-secondary">Sentiment</span>
                  <span className="text-sm font-semibold text-green-400">+15.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark-secondary">Citations</span>
                  <span className="text-sm font-semibold text-green-400">+8.9%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-dark-secondary">Rankings</span>
                  <span className="text-sm font-semibold text-green-400">+12.4%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-card-enhanced">
              <h4 className="text-sm font-semibold text-dark-primary mb-4">Quick Actions</h4>
              <div className="space-y-2">
                <button className="dark-button-secondary w-full text-sm py-2">
                  Generate Report
                </button>
                <button className="dark-button-secondary w-full text-sm py-2">
                  Export Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export function DashboardVariant() {
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
        <Icon className={`w-5 h-5 ${isActive ? "text-white" : item.color}`} />
        <span>{item.label}</span>
        {isActive && (
          <div className="ml-auto w-2 h-2 rounded-full bg-white animate-pulse"></div>
        )}
      </button>
    );
  };

  const renderContent = () => {
    if (activePage === "Dashboard") {
      return <WidgetDashboard />;
    }
    // ... other pages would render here
    return <WidgetDashboard />;
  };

  return (
    <div className="flex h-screen bg-gradient-bg overflow-hidden" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Compact Sidebar */}
      <div className="w-64 flex flex-col relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-800/30 backdrop-blur-xl"></div>
        <div className="relative z-10 flex flex-col h-full border-r border-dark-color/50">
          
          {/* Compact Logo - No animations */}
          <div className="p-6 border-b border-dark-color/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">A8</span>
              </div>
              <div>
                <h1 className="text-lg font-bold text-gradient-primary">AI8 Digital</h1>
                <p className="text-xs text-dark-secondary">Analytics Platform</p>
              </div>
            </div>
          </div>
          
          {/* Compact Navigation */}
          <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
            <div className="space-y-2">
              {mainNavItems.map((item) => renderNavItem(item, activePage === item.label))}
            </div>

            <Separator className="bg-gradient-to-r from-transparent via-dark-border to-transparent" />

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-dark-secondary uppercase tracking-widest px-3">Insight</h3>
              <div className="space-y-2">
                {insightItems.map((item) => renderNavItem(item, activePage === item.label))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-dark-secondary uppercase tracking-widest px-3">Analytics</h3>
              <div className="space-y-2">
                {analyticsItems.map((item) => renderNavItem(item, activePage === item.label))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold text-dark-secondary uppercase tracking-widest px-3">Other</h3>
              <div className="space-y-2">
                {otherItems.map((item) => renderNavItem(item, activePage === item.label))}
              </div>
            </div>
          </nav>

          {/* Compact CTA */}
          <div className="p-4 border-t border-dark-color/50">
            <div className="glass-card-enhanced text-center p-4">
              <p className="text-xs text-dark-secondary mb-2">Upgrade for more</p>
              <button className="dark-button-primary text-xs py-2 px-4 w-full">
                Go Pro
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <div className="relative z-10 flex flex-col h-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}