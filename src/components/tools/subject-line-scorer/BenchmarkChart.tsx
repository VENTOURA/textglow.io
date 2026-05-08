const benchmarkData = {
  byLength: [
    { label: '1–5 words', openRate: 16 },
    { label: '6–10 words', openRate: 21 },
    { label: '11–15 words', openRate: 18 },
    { label: '16+ words', openRate: 14 },
  ],
  emoji: [
    { label: 'No emoji', openRate: 18.8 },
    { label: 'One emoji', openRate: 20.4 },
    { label: 'Multiple', openRate: 17.1 },
  ],
  personalization: [
    { label: 'None', openRate: 17.6 },
    { label: '[First Name]', openRate: 20.9 },
  ],
  format: [
    { label: 'Statement', openRate: 17.3 },
    { label: 'Question', openRate: 20.1 },
    { label: 'Number / list', openRate: 21.5 },
  ],
};

interface ChartProps {
  data: { label: string; openRate: number }[];
  title: string;
}

const MiniChart = ({ data, title }: ChartProps) => {
  const maxRate = Math.max(...data.map(d => d.openRate)) + 5;

  return (
    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
      <h4 className="text-sm font-bold text-slate-800 mb-4">{title}</h4>
      <div className="flex-1 flex flex-col justify-end space-y-3">
        {data.map((item, idx) => {
          const width = `${(item.openRate / maxRate) * 100}%`;
          const isHighest = item.openRate === Math.max(...data.map(d => d.openRate));
          return (
            <div key={idx} className="w-full">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-slate-600 font-medium">{item.label}</span>
                <span className={`font-bold ${isHighest ? 'text-brand-600' : 'text-slate-500'}`}>
                  {item.openRate}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${isHighest ? 'bg-brand-500' : 'bg-slate-300'}`}
                  style={{ width }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const BenchmarkChart = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MiniChart data={benchmarkData.byLength} title="Average Open Rate by Length" />
        <MiniChart data={benchmarkData.personalization} title="Impact of Personalization" />
        <MiniChart data={benchmarkData.emoji} title="Impact of Emojis" />
        <MiniChart data={benchmarkData.format} title="Impact of Format" />
      </div>
      <p className="text-xs text-slate-500 text-center">
        Data based on published research from Mailchimp, HubSpot, and Campaign Monitor. Actual results vary by industry and audience.
      </p>
    </div>
  );
};
