import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { TrendingUp, Award, Target, Brain } from "lucide-react";
import { AnalyticsHeader } from "../AnalyticsHeader";

const totalMentionsData = [
  { brand: "AI8 Digital", mentions: 1247, color: "#3B82F6" },
  { brand: "Soroco", mentions: 892, color: "#22C55E" },
  { brand: "Mixpanel", mentions: 756, color: "#8B5CF6" },
  { brand: "Nintex", mentions: 634, color: "#F59E0B" },
  { brand: "Competitor E", mentions: 523, color: "#EF4444" },
];

const averageRankData = [
  { date: "Jun 17", rank: 2.8 },
  { date: "Jun 18", rank: 2.6 },
  { date: "Jun 19", rank: 2.4 },
  { date: "Jun 20", rank: 2.1 },
  { date: "Jun 21", rank: 1.9 },
  { date: "Jun 22", rank: 2.0 },
  { date: "Jun 23", rank: 1.8 },
];

const promptWinnersData = [
  {
    prompt: "What are the best project management tools for remote teams?",
    topBrand: "AI8 Digital",
    numberOnes: 42,
    rankOneRate: "89%"
  },
  {
    prompt: "How to implement AI chatbots for customer service?",
    topBrand: "AI8 Digital",
    numberOnes: 38,
    rankOneRate: "76%"
  },
  {
    prompt: "Best practices for digital marketing automation",
    topBrand: "Mixpanel",
    numberOnes: 34,
    rankOneRate: "68%"
  },
  {
    prompt: "Software development lifecycle management",
    topBrand: "AI8 Digital",
    numberOnes: 29,
    rankOneRate: "72%"
  },
];

const modelComparisonData = [
  {
    model: "OpenAI",
    yourMentions: 324,
    theirMentions: 189,
    yourRank: 1.8,
    theirRank: 2.4
  },
  {
    model: "Claude",
    yourMentions: 298,
    theirMentions: 156,
    yourRank: 2.1,
    theirRank: 2.8
  },
  {
    model: "Gemini",
    yourMentions: 267,
    theirMentions: 203,
    yourRank: 2.3,
    theirRank: 2.6
  },
  {
    model: "Meta AI",
    yourMentions: 234,
    theirMentions: 178,
    yourRank: 2.5,
    theirRank: 3.1
  },
];

export function IntelligencePage() {
  const [modelFilter, setModelFilter] = useState("all");
  const [competitorFilter, setCompetitorFilter] = useState("all");
  const [timeRange, setTimeRange] = useState("7d");

  const tabs = [
    { value: "summary", label: "Summary" },
    { value: "rankings", label: "Rankings & Performance" },
    { value: "prompts", label: "Prompt Analysis" },
    { value: "models", label: "Model Comparison" },
    { value: "competitive", label: "Competitive Intelligence" }
  ];

  const filters = [
    {
      label: "Model Filter",
      value: modelFilter,
      options: [
        { value: "all", label: "All Models" },
        { value: "openai", label: "OpenAI" },
        { value: "claude", label: "Claude" },
        { value: "gemini", label: "Gemini" }
      ],
      onChange: setModelFilter
    },
    {
      label: "Competitor",
      value: competitorFilter,
      options: [
        { value: "all", label: "All Competitors" },
        { value: "top-3", label: "Top 3" },
        { value: "direct", label: "Direct Competitors" }
      ],
      onChange: setCompetitorFilter
    },
    {
      label: "Period",
      value: timeRange,
      options: [
        { value: "1d", label: "1D" },
        { value: "7d", label: "7D" },
        { value: "30d", label: "30D" },
        { value: "90d", label: "90D" }
      ],
      onChange: setTimeRange
    }
  ];

  const actions = (
    <button className="dark-button-secondary gap-2 flex items-center">
      <Brain className="w-4 h-4" />
      Generate Report
    </button>
  );

  return (
    <AnalyticsHeader
      title="Intelligence"
      subtitle="AI model insights and competitive intelligence"
      tabs={tabs}
      filters={filters}
      actions={actions}
    >
      <main className="flex-1 overflow-auto p-8 bg-dark-bg">
        <Tabs defaultValue="summary" className="w-full">
          {/* Summary Tab */}
          <TabsContent value="summary" className="space-y-8">
            {/* Top Row - Bar Chart and Line Chart */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="dark-card">
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2">Total Mentions</h3>
                  <p className="text-dark-secondary font-medium">Brand comparison across all AI models</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={totalMentionsData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="brand" 
                        stroke="#94A3B8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        angle={-45}
                        textAnchor="end"
                        height={80}
                      />
                      <YAxis 
                        stroke="#94A3B8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: "#1E293B",
                          border: "1px solid #374151",
                          borderRadius: "12px",
                          boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                          color: "#FFFFFF"
                        }}
                      />
                      <Bar dataKey="mentions" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="dark-card">
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2">Average Rank Over Time</h3>
                  <p className="text-dark-secondary font-medium">Your ranking performance trend</p>
                </div>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={averageRankData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="date" 
                        stroke="#94A3B8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                      />
                      <YAxis 
                        stroke="#94A3B8"
                        fontSize={12}
                        tickLine={false}
                        axisLine={false}
                        domain={[0, 4]}
                      />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: "#1E293B",
                          border: "1px solid #374151",
                          borderRadius: "12px",
                          boxShadow: "rgba(0, 0, 0, 0.4) 0px 8px 24px",
                          color: "#FFFFFF"
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="rank" 
                        stroke="#22C55E" 
                        strokeWidth={3}
                        dot={{ fill: "#22C55E", strokeWidth: 2, r: 5 }}
                        activeDot={{ r: 7, stroke: "#22C55E", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Tables Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Prompt Winners Table */}
              <div className="dark-card">
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-yellow-400" />
                    Prompt Winners
                  </h3>
                  <p className="text-dark-secondary font-medium">Prompts where you consistently rank #1</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-color">
                        <th className="text-left font-semibold text-dark-primary pb-3">Prompt Text</th>
                        <th className="text-left font-semibold text-dark-primary pb-3">Top Brand</th>
                        <th className="text-center font-semibold text-dark-primary pb-3">#1s</th>
                        <th className="text-center font-semibold text-dark-primary pb-3">Rate</th>
                      </tr>
                    </thead>
                    <tbody>
                      {promptWinnersData.map((prompt, index) => (
                        <tr key={index} className="border-b border-dark-color hover:bg-dark-table-hover transition-colors">
                          <td className="py-4 max-w-xs">
                            <p className="text-sm font-medium text-dark-primary leading-relaxed truncate">
                              {prompt.prompt}
                            </p>
                          </td>
                          <td className="py-4">
                            <div className={`dark-tag ${prompt.topBrand === "AI8 Digital" ? "bg-dark-cta" : ""}`}>
                              {prompt.topBrand}
                            </div>
                          </td>
                          <td className="py-4 text-center font-medium text-dark-primary">{prompt.numberOnes}</td>
                          <td className="py-4 text-center">
                            <span className="text-sm font-semibold text-dark-positive">{prompt.rankOneRate}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Model Comparison Table */}
              <div className="dark-card">
                <div className="pb-6">
                  <h3 className="text-xl font-bold text-dark-primary mb-2 flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Model Comparison
                  </h3>
                  <p className="text-dark-secondary font-medium">Your performance vs competitors by AI model</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dark-color">
                        <th className="text-left font-semibold text-dark-primary pb-3">Model</th>
                        <th className="text-center font-semibold text-dark-primary pb-3">Your Mentions</th>
                        <th className="text-center font-semibold text-dark-primary pb-3">Their Mentions</th>
                        <th className="text-center font-semibold text-dark-primary pb-3">Your Rank</th>
                        <th className="text-center font-semibold text-dark-primary pb-3">Their Rank</th>
                      </tr>
                    </thead>
                    <tbody>
                      {modelComparisonData.map((model, index) => (
                        <tr key={index} className="border-b border-dark-color hover:bg-dark-table-hover transition-colors">
                          <td className="py-4 font-medium text-dark-primary">{model.model}</td>
                          <td className="py-4 text-center">
                            <div className="dark-tag bg-dark-cta">
                              {model.yourMentions}
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <div className="dark-tag">
                              {model.theirMentions}
                            </div>
                          </td>
                          <td className="py-4 text-center">
                            <span className="text-sm font-semibold text-dark-positive">{model.yourRank}</span>
                          </td>
                          <td className="py-4 text-center">
                            <span className="text-sm font-medium text-dark-secondary">{model.theirRank}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Other tabs with placeholders */}
          <TabsContent value="rankings" className="space-y-6">
            <div className="text-center py-12">
              <TrendingUp className="w-12 h-12 text-dark-secondary mx-auto mb-4" />
              <h3 className="text-lg font-medium text-dark-primary mb-2">Rankings Analysis</h3>
              <p className="text-dark-secondary">Detailed ranking analysis filtered by: {modelFilter}, {competitorFilter}, {timeRange}</p>
            </div>
          </TabsContent>

          <TabsContent value="prompts" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-dark-primary mb-2">Prompt Performance</h3>
              <p className="text-dark-secondary">Individual prompt analytics for {modelFilter} models over {timeRange}</p>
            </div>
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-dark-primary mb-2">Model Analytics</h3>
              <p className="text-dark-secondary">Detailed model comparison filtered by {modelFilter}</p>
            </div>
          </TabsContent>

          <TabsContent value="competitive" className="space-y-6">
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-dark-primary mb-2">Competitive Intelligence</h3>
              <p className="text-dark-secondary">Competitive analysis against {competitorFilter} competitors</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </AnalyticsHeader>
  );
}