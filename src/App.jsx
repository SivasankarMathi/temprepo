import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  AccumulationDataLabel,
  AccumulationTooltip,
  Inject,
  PieSeries,
} from '@syncfusion/ej2-react-charts';
import '@syncfusion/ej2-base/styles/material.css';
import './App.css';

// Dummy sales-by-category data for the pie chart
const pieData = [
  { category: 'Electronics', sales: 42 },
  { category: 'Clothing', sales: 28 },
  { category: 'Home & Garden', sales: 18 },
  { category: 'Sports', sales: 12 },
  { category: 'Books', sales: 8 },
];

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Sales by Category</h1>
        <p>Simple React app with a Syncfusion pie chart and dummy data</p>
      </header>

      <main className="chart-card">
        <AccumulationChartComponent
          id="sales-pie-chart"
          title="Q1 Product Sales Distribution"
          legendSettings={{ visible: true, position: 'Bottom' }}
          enableSmartLabels={true}
          tooltip={{ enable: true, format: '${point.x}: <b>${point.y}%</b>' }}
          width="100%"
          height="420px"
        >
          <Inject
            services={[
              PieSeries,
              AccumulationLegend,
              AccumulationDataLabel,
              AccumulationTooltip,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={pieData}
              xName="category"
              yName="sales"
              type="Pie"
              radius="80%"
              explode={true}
              explodeOffset="10%"
              explodeIndex={0}
              dataLabel={{
                visible: true,
                position: 'Outside',
                name: 'category',
                font: { fontWeight: '600' },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </main>
    </div>
  );
}
