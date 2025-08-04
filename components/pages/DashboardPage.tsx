import { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { Eye, Target, Trophy, MessageSquare, Download, TrendingUp, Filter, ChevronDown, Sparkles, Zap, Activity, Info } from "lucide-react";
import { MetricsChart } from "../MetricsChart";
import { OptimizationDonut } from "../OptimizationDonut";
import { ModelPerformanceGrid } from "../ModelPerformanceGrid";
import { TopPerformingPrompts } from "../TopPerformingPrompts";
import { CompetitorRanking } from "../CompetitorRanking";

const metrics = [
  {
    title: "Visibility Score",
    value: "8.4",
    change: "+12.5%",
    icon: Eye,
    gradientBg: "bg-gradient-primary",
    glowColor: "shadow-blue-500/20",
    isPositive: true,
    description: "Overall brand visibility across AI models",
    tooltipContent: {
      title: "Visibility Score Improvement",
      description: "Your brand's visibility increased by 12.5% compared to the previous 7-day period",
      details: [
        "This represents improved ranking positions across all AI models",
        "Based on 1,247 total mentions analyzed",
        "Strong performance indicates effective brand positioning"
      ],
      period: "vs last 7 days"
    }
  },
  {
    title: "Presence Score", 
    value: "74%",
    change: "+8.2%",
    icon: Target,
    gradientBg: "bg-gradient-secondary",
    glowColor: "shadow-green-500/20",
    isPositive: true,
    description: "Frequency of brand mentions in responses",
    tooltipContent: {
      title: "Presence Score Growth",
      description: "Your brand presence improved by 8.2% in AI model responses",
      details: [
        "74% of relevant queries now mention your brand",
        "Significant improvement in brand recall rates",
        "Indicates stronger market positioning vs competitors"
      ],
      period: "vs last 7 days"
    }
  },
  {
    title: "Average Rank",
    value: "2.3",
    change: "-0.4",
    icon: Trophy,
    gradientBg: "bg-gradient-warm",
    glowColor: "shadow-orange-500/20",
    isPositive: false,
    description: "Mean ranking position when mentioned",
    tooltipContent: {
      title: "Average Ranking Improvement",
      description: "Your average ranking improved by 0.4 positions (lower numbers are better)",
      details: [
        "Now ranking at position 2.3 vs 2.7 previously",
        "Improvement across OpenAI, Claude, and Gemini models",
        "Getting closer to consistent #1 rankings"
      ],
      period: "vs last 7 days"
    }
  },
  {
    title: "Total Mentions",
    value: "1,247",
    change: "+23.1%",
    icon: MessageSquare,
    gradientBg: "bg-gradient-accent",
    glowColor: "shadow-purple-500/20",
    isPositive: true,
    description: "Total brand mentions across all models",
    tooltipContent: {
      title: "Mention Volume Surge",
      description: "Brand mentions increased by 23.1% with 235 additional mentions",
      details: [
        "Strong growth across all 6 monitored AI models",
        "Highest weekly growth rate in the last month",
        "Indicates increasing brand awareness and relevance"
      ],
      period: "vs last 7 days"
    }
  },
];

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [visibilityFilter, setVisibilityFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("7d");
  const [isLoading, setIsLoading] = useState(false);

  const handleFilterChange = (value: string, type: string) => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
    
    if (type === 'visibility') setVisibilityFilter(value);
    if (type === 'time') setTimeRange(value);
  };

  return (
    <TooltipProvider>
      {/* Enhanced Header with Glassmorphism */}
      <header className="relative border-b border-dark-color/30 backdrop-blur-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-slate-800/20"></div>
        <div className="relative z-10 px-8 py-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gradient-primary mb-2">Dashboard</h1>
                <p className="text-dark-secondary font-medium flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  Monitor your brand's visibility across AI models
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="dark-tag animate-pulse-slow">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 inline-block animate-ping"></div>
                Live Data
              </div>
              <button className="dark-button-primary gap-2 flex items-center">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Enhanced Tab Navigation */}
          <div className="flex items-center justify-between">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex items-center justify-between">
                <TabsList className="glass-card-enhanced border-none">
                  <TabsTrigger 
                    value="overview" 
                    className="text-sm font-semibold data-[state=active]:bg-gradient-primary data-[state=active]:text-white text-dark-secondary px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    Overview
                  </TabsTrigger>
                  <TabsTrigger 
                    value="performance" 
                    className="text-sm font-semibold data-[state=active]:bg-gradient-primary data-[state=active]:text-white text-dark-secondary px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    Performance & Rankings
                  </TabsTrigger>
                  <TabsTrigger 
                    value="trends" 
                    className="text-sm font-semibold data-[state=active]:bg-gradient-primary data-[state=active]:text-white text-dark-secondary px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    Trends
                  </TabsTrigger>
                  <TabsTrigger 
                    value="models" 
                    className="text-sm font-semibold data-[state=active]:bg-gradient-primary data-[state=active]:text-white text-dark-secondary px-6 py-3 rounded-lg transition-all duration-300"
                  >
                    Model Breakdown
                  </TabsTrigger>
                </TabsList>

                {/* Enhanced Filter Controls */}
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                      <Filter className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-dark-primary">Visibility:</span>
                      <Select value={visibilityFilter} onValueChange={(value) => handleFilterChange(value, 'visibility')}>
                        <SelectTrigger className="w-36 glass-card-enhanced border-none text-dark-primary">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass-card-enhanced border-none">
                          <SelectItem value="all">All Models</SelectItem>
                          <SelectItem value="top-tier">Top Tier</SelectItem>
                          <SelectItem value="emerging">Emerging</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-semibold text-dark-primary">Period:</span>
                      <Select value={timeRange} onValueChange={(value) => handleFilterChange(value, 'time')}>
                        <SelectTrigger className="w-24 glass-card-enhanced border-none text-dark-primary">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="glass-card-enhanced border-none">
                          <SelectItem value="1d">1D</SelectItem>
                          <SelectItem value="7d">7D</SelectItem>
                          <SelectItem value="30d">30D</SelectItem>
                          <SelectItem value="90d">90D</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8 bg-gradient-bg relative">
        {/* Loading overlay */}
        {isLoading && (
          <div className="absolute inset-0 bg-dark-bg/50 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="glass-card-enhanced px-8 py-4 flex items-center space-x-3">
              <div className="w-6 h-6 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-dark-primary font-medium">Updating data...</span>
            </div>
          </div>
        )}
        
        <Tabs value={activeTab} className="w-full">
          {/* Enhanced Overview Tab */}
          <TabsContent value="overview" className="space-y-10">
            {/* Enhanced Metrics Cards with Tooltips */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                
                return (
                  <div 
                    key={metric.title} 
                    className="metric-card group"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl ${metric.gradientBg} flex items-center justify-center ${metric.glowColor} shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <p className="text-xs text-dark-secondary font-medium uppercase tracking-wide mb-1">
                            {metric.title}
                          </p>
                          <p className="text-xs text-dark-secondary opacity-70">
                            {metric.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Enhanced tooltip for percentage change */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className={`px-3 py-1 rounded-full text-xs font-bold cursor-help transition-all duration-200 hover:scale-105 ${
                            metric.isPositive 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/20 hover:bg-green-500/30' 
                              : 'bg-red-500/20 text-red-400 border border-red-500/20 hover:bg-red-500/30'
                          }`}>
                            <div className="flex items-center space-x-1">
                              <span>{metric.change}</span>
                              <Info className="w-3 h-3 opacity-60" />
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="top" 
                          className="glass-card-enhanced border-none max-w-xs p-4"
                          sideOffset={8}
                        >
                          <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                              <TrendingUp className={`w-4 h-4 ${metric.isPositive ? 'text-green-400' : 'text-orange-400'}`} />
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
                                Period: {metric.tooltipContent.period}
                              </span>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-5xl font-bold text-white group-hover:text-gray-100 transition-all duration-300">
                        {metric.value}
                      </h3>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className={`w-4 h-4 ${metric.isPositive ? 'text-green-400' : 'text-red-400'}`} />
                        <span className="text-sm text-dark-secondary font-medium">vs last period</span>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="mt-6 pt-4 border-t border-dark-border/50">
                      <div className="flex justify-between text-xs text-dark-secondary mb-2">
                        <span>Target Progress</span>
                        <span>{Math.min(100, Math.floor(parseFloat(metric.value) * 10))}%</span>
                      </div>
                      <div className="w-full bg-dark-tag/50 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${metric.gradientBg} transition-all duration-1000`}
                          style={{ width: `${Math.min(100, Math.floor(parseFloat(metric.value) * 10))}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <MetricsChart />
              </div>
              <div>
                <OptimizationDonut />
              </div>
            </div>
          </TabsContent>

          {/* Enhanced Performance Tab */}
          <TabsContent value="performance" className="space-y-10">
            <ModelPerformanceGrid />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <TopPerformingPrompts />
              <CompetitorRanking />
            </div>
          </TabsContent>

          {/* Enhanced Trends Tab */}
          <TabsContent value="trends" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <MetricsChart />
              <div className="glass-card-enhanced">
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gradient-primary mb-3">Advanced Trend Analysis</h3>
                  <p className="text-dark-secondary mb-6 max-w-sm mx-auto">
                    Detailed trend breakdowns, predictions, and pattern recognition powered by AI
                  </p>
                  <button className="dark-button-primary">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Enhanced Models Tab */}
          <TabsContent value="models" className="space-y-8">
            <ModelPerformanceGrid />
          </TabsContent>
        </tabs>
      </main>
    </TooltipProvider>
  );
}