import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Filter, Download } from "lucide-react";

interface TabConfig {
  value: string;
  label: string;
}

interface FilterConfig {
  label: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
}

interface AnalyticsHeaderProps {
  title: string;
  subtitle: string;
  tabs: TabConfig[];
  filters?: FilterConfig[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export function AnalyticsHeader({ 
  title, 
  subtitle, 
  tabs, 
  filters = [], 
  actions,
  children 
}: AnalyticsHeaderProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.value || "");

  return (
    <>
      <header className="bg-dark-bg border-b border-dark-color px-8 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-dark-primary mb-2">{title}</h1>
            <p className="text-dark-secondary font-medium">{subtitle}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="dark-tag">
              Live Data
            </div>
            {actions || (
              <button className="dark-button-primary gap-2 flex items-center">
                <Download className="w-4 h-4" />
                Export Report
              </button>
            )}
          </div>
        </div>

        {/* ThoughtSpot-inspired Tab Navigation */}
        <div className="flex items-center justify-between">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex items-center justify-between">
              <TabsList className="bg-dark-tag border border-dark-color">
                {tabs.map((tab) => (
                  <TabsTrigger 
                    key={tab.value}
                    value={tab.value} 
                    className="text-sm font-semibold data-[state=active]:bg-dark-cta data-[state=active]:text-white text-dark-secondary px-6 py-2"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {/* Filter Controls */}
              {filters.length > 0 && (
                <div className="flex items-center space-x-4">
                  <Filter className="w-4 h-4 text-dark-secondary" />
                  {filters.map((filter, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-dark-secondary">{filter.label}:</span>
                      <Select value={filter.value} onValueChange={filter.onChange}>
                        <SelectTrigger className="w-32 bg-dark-card border-dark-color text-dark-primary">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-dark-card border-dark-color">
                          {filter.options.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Tabs>
        </div>
      </header>

      {children}
    </>
  );
}