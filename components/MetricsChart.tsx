import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from "recharts";
import { TrendingUp, Activity, Zap } from "lucide-react";

const visibilityData = [
  { date: "Jan 18", visibility: 6.8, presence: 68 },
  { date: "Jan 19", visibility: 7.2, presence: 71 },
  { date: "Jan 20", visibility: 6.9, presence: 69 },
  { date: "Jan 21", visibility: 7.8, presence: 73 },
  { date: "Jan 22", visibility: 8.1, presence: 76 },
  { date: "Jan 23", visibility: 8.4, presence: 74 },
  { date: "Jan 24", visibility: 8.4, presence: 74 },
];

const mentionsData = [
  { date: "Jan 18", mentions: 156, citations: 89 },
  { date: "Jan 19", mentions: 203, citations: 112 },
  { date: "Jan 20", mentions: 178, citations: 95 },
  { date: "Jan 21", mentions: 234, citations: 134 },
  { date: "Jan 22", mentions: 289, citations: 167 },
  { date: "Jan 23", mentions: 312, citations: 189 },
  { date: "Jan 24", mentions: 298, citations: 172 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card-enhanced p-4 border-none shadow-lg">
        <p className="text-sm font-semibold text-dark-primary mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center space-x-2 mb-1">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm text-dark-secondary">{entry.dataKey}:</span>
            <span className="text-sm font-semibold text-dark-primary">{entry.value}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function MetricsChart() {
  const [activeChart, setActiveChart] = useState("visibility");

  return (
    <div className="glass-card-enhanced relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-5 rounded-full -translate-y-16 translate-x-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-secondary opacity-5 rounded-full translate-y-12 -translate-x-12"></div>
      
      <div className="relative z-10">
        <div className="flex items-center justify-between pb-8">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gradient-primary mb-1">Visibility & Presence Trends</h3>
              <p className="text-dark-secondary font-medium">
                Track your brand's performance across AI models over the last 7 days
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-xs text-green-400 font-semibold">Live</span>
          </div>
        </div>

        <div>
          <Tabs value={activeChart} onValueChange={setActiveChart} className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 glass-card-enhanced border-none">
              <TabsTrigger 
                value="visibility" 
                className="text-sm font-semibold data-[state=active]:bg-gradient-primary data-[state=active]:text-white text-dark-secondary rounded-lg transition-all duration-300"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Visibility & Presence
              </TabsTrigger>
              <TabsTrigger 
                value="mentions" 
                className="text-sm font-semibold data-[state=active]:bg-gradient-secondary data-[state=active]:text-white text-dark-secondary rounded-lg transition-all duration-300"
              >
                <Zap className="w-4 h-4 mr-2" />
                Mentions & Citations
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="visibility" className="space-y-4">
              <div className="h-80 relative">
                {/* Chart background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-green-500/5 rounded-xl"></div>
                
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={visibilityData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <defs>
                      <linearGradient id="visibilityGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="presenceGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22C55E" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#22C55E" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="date" 
                      stroke="#94A3B8"
                      fontSize={12}
                      fontWeight={500}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#94A3B8"
                      fontSize={12}
                      fontWeight={500}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="visibility"
                      stroke="#3B82F6"
                      strokeWidth={3}
                      fill="url(#visibilityGradient)"
                      name="Visibility Score"
                      dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "#3B82F6", strokeWidth: 2, fill: "#1E293B" }}
                    />
                    <Area
                      type="monotone"
                      dataKey="presence"
                      stroke="#22C55E"
                      strokeWidth={3}
                      fill="url(#presenceGradient)"
                      name="Presence %"
                      dot={{ fill: "#22C55E", strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, stroke: "#22C55E", strokeWidth: 2, fill: "#1E293B" }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Enhanced Legend */}
              <div className="flex justify-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-400"></div>
                  <span className="text-sm font-medium text-dark-primary">Visibility Score</span>
                  <span className="text-xs text-green-400 font-semibold">+15.2%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
                  <span className="text-sm font-medium text-dark-primary">Presence %</span>
                  <span className="text-xs text-green-400 font-semibold">+8.9%</span>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="mentions" className="space-y-4">
              <div className="h-80 relative">
                {/* Chart background */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-purple-500/5 rounded-xl"></div>
                
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={mentionsData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                    <XAxis 
                      dataKey="date" 
                      stroke="#94A3B8"
                      fontSize={12}
                      fontWeight={500}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis 
                      stroke="#94A3B8"
                      fontSize={12}
                      fontWeight={500}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="mentions" 
                      stroke="#22C55E" 
                      strokeWidth={3}
                      dot={{ fill: "#22C55E", strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 7, stroke: "#22C55E", strokeWidth: 2, fill: "#1E293B" }}
                      name="Total Mentions"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="citations" 
                      stroke="#8B5CF6" 
                      strokeWidth={3}
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 7, stroke: "#8B5CF6", strokeWidth: 2, fill: "#1E293B" }}
                      name="Citations"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Enhanced Legend */}
              <div className="flex justify-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-green-500 to-green-400"></div>
                  <span className="text-sm font-medium text-dark-primary">Total Mentions</span>
                  <span className="text-xs text-green-400 font-semibold">+23.1%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
                  <span className="text-sm font-medium text-dark-primary">Citations</span>
                  <span className="text-xs text-green-400 font-semibold">+17.4%</span>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}