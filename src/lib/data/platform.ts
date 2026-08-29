export const ORG = {
  name: "ABC Retail Pvt. Ltd.",
  dataset: "Brazilian E-Commerce Dataset",
  fileName: "olist_ecommerce_2017_2018.csv",
  period: "Jan 2017 – Sep 2018",
  lastTrained: "15 Jun 2024",
};

export const KPI = {
  revenue: 20_580_000,
  revenueDelta: -76.68,
  customers: 41_599,
  customersDelta: 4.2,
  aov: 1850,
  aovDelta: -8.4,
  orders: 99_441,
  ordersDelta: -71.2,
  profit: 6_174_000,
  profitDelta: -64.1,
  highOpportunity: 8314,
  atRisk: 8150,
};

export const MONTHLY_REVENUE = [
  { month: "Jan 17", revenue: 420_000, orders: 2100 },
  { month: "Feb 17", revenue: 680_000, orders: 3400 },
  { month: "Mar 17", revenue: 1_120_000, orders: 5600 },
  { month: "Apr 17", revenue: 1_450_000, orders: 7100 },
  { month: "May 17", revenue: 1_890_000, orders: 9200 },
  { month: "Jun 17", revenue: 2_150_000, orders: 10400 },
  { month: "Jul 17", revenue: 2_480_000, orders: 11800 },
  { month: "Aug 17", revenue: 2_910_000, orders: 13600 },
  { month: "Sep 17", revenue: 3_220_000, orders: 14900 },
  { month: "Oct 17", revenue: 3_650_000, orders: 16800 },
  { month: "Nov 17", revenue: 4_820_000, orders: 22100 },
  { month: "Dec 17", revenue: 3_910_000, orders: 18100 },
  { month: "Jan 18", revenue: 3_550_000, orders: 16400 },
  { month: "Feb 18", revenue: 3_280_000, orders: 15200 },
  { month: "Mar 18", revenue: 3_410_000, orders: 15700 },
  { month: "Apr 18", revenue: 3_180_000, orders: 14600 },
  { month: "May 18", revenue: 3_520_000, orders: 16100 },
  { month: "Jun 18", revenue: 2_890_000, orders: 13200 },
  { month: "Jul 18", revenue: 2_120_000, orders: 9800 },
  { month: "Aug 18", revenue: 1_050_000, orders: 4900 },
  { month: "Sep 18", revenue: 246_000, orders: 1140 },
];

export const CATEGORIES = [
  { name: "Health & Beauty", key: "health_beauty", revenue: 1_440_000, orders: 9670, share: 7.0 },
  { name: "Watches & Gifts", key: "watches_gifts", revenue: 1_210_000, orders: 5980, share: 5.9 },
  { name: "Bed, Bath & Table", key: "bed_bath_table", revenue: 1_080_000, orders: 11120, share: 5.2 },
  { name: "Sports & Leisure", key: "sports_leisure", revenue: 980_000, orders: 8640, share: 4.8 },
  { name: "Furniture & Decor", key: "furniture_decor", revenue: 890_000, orders: 7440, share: 4.3 },
  { name: "Computers & Accessories", key: "computers_accessories", revenue: 820_000, orders: 6820, share: 4.0 },
  { name: "Housewares", key: "housewares", revenue: 710_000, orders: 6960, share: 3.5 },
  { name: "Auto", key: "auto", revenue: 540_000, orders: 3890, share: 2.6 },
  { name: "Garden Tools", key: "garden_tools", revenue: 490_000, orders: 3510, share: 2.4 },
  { name: "Others", key: "others", revenue: 12_420_000, orders: 35411, share: 60.3 },
];

export const STATES = [
  { code: "SP", name: "São Paulo", revenue: 5_990_000, customers: 15540, orders: 41720, lat: -23.55, lng: -46.63 },
  { code: "RJ", name: "Rio de Janeiro", revenue: 2_140_000, customers: 5120, orders: 12840, lat: -22.91, lng: -43.17 },
  { code: "MG", name: "Minas Gerais", revenue: 1_870_000, customers: 4680, orders: 11610, lat: -19.92, lng: -43.94 },
  { code: "RS", name: "Rio Grande do Sul", revenue: 1_120_000, customers: 2890, orders: 5460, lat: -30.03, lng: -51.23 },
  { code: "PR", name: "Paraná", revenue: 980_000, customers: 2520, orders: 5040, lat: -25.43, lng: -49.27 },
  { code: "SC", name: "Santa Catarina", revenue: 760_000, customers: 1980, orders: 3890, lat: -27.59, lng: -48.55 },
  { code: "BA", name: "Bahia", revenue: 650_000, customers: 1750, orders: 3380, lat: -12.97, lng: -38.5 },
  { code: "DF", name: "Distrito Federal", revenue: 480_000, customers: 1210, orders: 2140, lat: -15.78, lng: -47.93 },
  { code: "GO", name: "Goiás", revenue: 410_000, customers: 1080, orders: 1980, lat: -16.68, lng: -49.25 },
  { code: "ES", name: "Espírito Santo", revenue: 380_000, customers: 940, orders: 1760, lat: -20.32, lng: -40.34 },
];

export const SEGMENTS = [
  { name: "VIP Customers", count: 2790, share: 6.7, revenue: 6_180_000, color: "var(--color-chart-1)" },
  { name: "Loyal Customers", count: 8445, share: 20.3, revenue: 5_760_000, color: "var(--color-chart-2)" },
  { name: "Potential Loyalists", count: 12230, share: 29.4, revenue: 4_320_000, color: "var(--color-chart-3)" },
  { name: "New Customers", count: 9984, share: 24.0, revenue: 2_470_000, color: "var(--color-chart-5)" },
  { name: "At Risk Customers", count: 8150, share: 19.6, revenue: 1_850_000, color: "var(--color-chart-4)" },
];

export const PRODUCTS = [
  { name: "Hegon Beauty Serum Kit", category: "Health & Beauty", revenue: 412_000, units: 3180, contribution: 2.0 },
  { name: "Luminara Watch Gift Box", category: "Watches & Gifts", revenue: 388_000, units: 1420, contribution: 1.9 },
  { name: "Comfort-Flex Mattress Protector", category: "Bed, Bath & Table", revenue: 341_000, units: 4560, contribution: 1.7 },
  { name: "SportX Resistance Band Set", category: "Sports & Leisure", revenue: 298_000, units: 3890, contribution: 1.4 },
  { name: "CasaNova Decorative Vase", category: "Furniture & Decor", revenue: 276_000, units: 2210, contribution: 1.3 },
  { name: "Nimbus Wireless Mouse", category: "Computers & Accessories", revenue: 254_000, units: 5120, contribution: 1.2 },
  { name: "Forge Auto Phone Mount", category: "Auto", revenue: 198_000, units: 2760, contribution: 1.0 },
  { name: "Terra Garden Pruner", category: "Garden Tools", revenue: 176_000, units: 1980, contribution: 0.9 },
];

export const MODELS = [
  {
    id: "churn",
    name: "Churn Prediction Model",
    metric: "Accuracy",
    score: "92.4%",
    status: "good" as const,
    trained: "15 Jun 2024",
    description: "Gradient boosting classifier on RFM, recency gaps, and category mix.",
  },
  {
    id: "clv",
    name: "Customer Lifetime Value Model",
    metric: "R² Score",
    score: "0.88",
    status: "good" as const,
    trained: "15 Jun 2024",
    description: "Regresses 12-month expected value from order history and freight.",
  },
  {
    id: "propensity",
    name: "Purchase Propensity Model",
    metric: "AUC Score",
    score: "0.91",
    status: "good" as const,
    trained: "15 Jun 2024",
    description: "Ranks next-best-offer likelihood for cross-sell campaigns.",
  },
];

export const OPPORTUNITIES = [
  {
    id: "high-value",
    title: "High Revenue Opportunity",
    body: "Target 1,250 high-value customers with personalized offers in Health & Beauty and Watches.",
    value: 2_300_000,
    label: "Potential Revenue",
    tone: "good" as const,
  },
  {
    id: "at-risk",
    title: "At Risk Customers",
    body: "8,150 customers are likely to churn. Engage them with retention campaigns before the next cycle.",
    value: 1_850_000,
    label: "Revenue at Risk",
    tone: "warn" as const,
  },
  {
    id: "cross-sell",
    title: "Cross-sell Opportunity",
    body: "Promote complementary housewares to 3,200 customers with high propensity scores.",
    value: 1_100_000,
    label: "Potential Revenue",
    tone: "default" as const,
  },
  {
    id: "geo",
    title: "Expand beyond São Paulo",
    body: "RJ and MG together contribute ₹4.01M. A regional campaign can lift secondary-state share.",
    value: 890_000,
    label: "Addressable Lift",
    tone: "default" as const,
  },
];

export const SELLERS = [
  { name: "Atlas Commerce SP", orders: 4820, revenue: 1_120_000, rating: 4.7, delay: 2.1 },
  { name: "Costa & Lima Retail", orders: 3910, revenue: 860_000, rating: 4.5, delay: 3.4 },
  { name: "Norte Sul Distribuidora", orders: 2740, revenue: 640_000, rating: 4.2, delay: 5.8 },
  { name: "Beleza Prime", orders: 2210, revenue: 510_000, rating: 4.8, delay: 1.6 },
  { name: "Casa Forte Home", orders: 1980, revenue: 470_000, rating: 4.1, delay: 6.2 },
];

export const CITIES = [
  { city: "São Paulo", state: "SP", revenue: 3_210_000, orders: 18400 },
  { city: "Rio de Janeiro", state: "RJ", revenue: 1_540_000, orders: 8920 },
  { city: "Belo Horizonte", state: "MG", revenue: 720_000, orders: 4310 },
  { city: "Porto Alegre", state: "RS", revenue: 510_000, orders: 2680 },
  { city: "Curitiba", state: "PR", revenue: 480_000, orders: 2510 },
  { city: "Brasília", state: "DF", revenue: 390_000, orders: 1740 },
];

export type ReportId =
  | "overview"
  | "revenue"
  | "customers"
  | "products"
  | "geography"
  | "performance"
  | "predictions"
  | "opportunity";

export type Insight = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  next: string[];
  tone: "danger" | "warn" | "good" | "info";
  metric?: string;
};

export const REPORTS: {
  id: ReportId;
  name: string;
  title: string;
  blurb: string;
  group: "core" | "intel";
}[] = [
  { id: "overview", name: "Overview", title: "Executive Overview", blurb: "Board-level snapshot of revenue, customers, and risk.", group: "core" },
  { id: "revenue", name: "Revenue", title: "Revenue Intelligence", blurb: "Growth, mix, and the late-period decline.", group: "core" },
  { id: "customers", name: "Customers", title: "Customer Intelligence", blurb: "Segments, value, and churn exposure.", group: "core" },
  { id: "products", name: "Products", title: "Product Intelligence", blurb: "Category leaders and long-tail contribution.", group: "core" },
  { id: "geography", name: "Geography", title: "Geographic Intelligence", blurb: "State and city concentration of demand.", group: "core" },
  { id: "performance", name: "Performance", title: "Sales Performance", blurb: "Sellers, delivery, and operational quality.", group: "intel" },
  { id: "opportunity", name: "Opportunity", title: "Opportunity Center", blurb: "Where the next rupee of revenue is hiding.", group: "intel" },
  { id: "predictions", name: "Predictions", title: "ML Insights", blurb: "Churn, CLV, and purchase propensity models.", group: "intel" },
];

export const INSIGHTS: Record<ReportId, Insight[]> = {
  overview: [
    {
      id: "ov-decline",
      title: "Revenue is declining",
      summary: "Latest growth: -76.68%",
      metric: "-76.68%",
      tone: "danger",
      detail:
        "Latest revenue growth is -76.68%. September 2018 closed at ₹0.25M versus ₹1.05M in August. The available data confirms the decline, but does not establish the exact cause — the last month of the Olist extract is also incomplete.",
      next: ["Customer activity", "Transaction volume", "Product performance", "Geographic concentration"],
    },
    {
      id: "ov-sp",
      title: "Strongest state is São Paulo",
      summary: "SP generates ₹5.99M",
      metric: "₹5.99M",
      tone: "good",
      detail:
        "São Paulo accounts for ₹5.99M — roughly 29% of recorded revenue — and 15,540 customers. Concentration is a strength and a risk: a SP-only shock would move the whole P&L.",
      next: ["Secondary-state campaigns in RJ and MG", "Freight cost by state", "Seller coverage outside SP"],
    },
    {
      id: "ov-opp",
      title: "8,314 high-opportunity customers",
      summary: "Ready for targeted offers",
      metric: "8,314",
      tone: "info",
      detail:
        "The opportunity model flags 8,314 customers with high propensity and residual value. Prioritising this cohort is the fastest path to recovering late-period revenue.",
      next: ["Personalised Health & Beauty offers", "Retention for overlapping at-risk VIPs", "Cross-sell housewares"],
    },
    {
      id: "ov-nov",
      title: "Best month is November 2017",
      summary: "Black Friday peak ₹4.82M",
      metric: "₹4.82M",
      tone: "good",
      detail:
        "November 2017 is the high-water mark at ₹4.82M and 22,100 orders. Seasonal playbooks from that month remain the best template for recovery campaigns.",
      next: ["Rebuild the November offer calendar", "Inventory for Health & Beauty and Watches", "Seller SLA ahead of peak"],
    },
  ],
  revenue: [
    {
      id: "rev-decline",
      title: "Revenue is declining",
      summary: "Latest growth: -76.68%",
      metric: "-76.68%",
      tone: "danger",
      detail:
        "Latest revenue growth is -76.68%. The available data confirms the decline, but does not establish the exact cause. September 2018 looks structurally thin versus the 2017 run-rate.",
      next: ["Customer activity", "Transaction volume", "Product-level sales"],
    },
    {
      id: "rev-state",
      title: "Strongest region",
      summary: "SP — ₹5.99M",
      metric: "₹5.99M",
      tone: "good",
      detail: "SP generates ₹5.99M revenue, more than RJ and MG combined. Mix is healthy but over-indexed.",
      next: ["Share of wallet in SP", "Expansion into RJ / MG", "Payment method mix in SP"],
    },
    {
      id: "rev-cat",
      title: "Top category",
      summary: "Health & Beauty — ₹1.44M",
      metric: "₹1.44M",
      tone: "info",
      detail:
        "Health_Beauty is the leading named category at ₹1.44M. The long tail ('Others') still holds 60% of revenue, so category strategy cannot stop at the head.",
      next: ["Attach rate of beauty kits", "Margin by category", "Long-tail SKU rationalisation"],
    },
    {
      id: "rev-month",
      title: "Best month",
      summary: "November 2017",
      metric: "₹4.82M",
      tone: "good",
      detail: "November 2017 delivered ₹4.82M. Use that month as the baseline for campaign ROI, not the incomplete 2018 tail.",
      next: ["Campaign calendar", "Peak capacity planning"],
    },
  ],
  customers: [
    {
      id: "cu-seg",
      title: "Largest segment",
      summary: "Potential Loyalists — 12,230",
      metric: "12,230",
      tone: "info",
      detail:
        "Potential Loyalists are the largest cohort at 12,230 (29.4%). Converting a slice of this group into Loyal is higher leverage than acquiring net-new.",
      next: ["Second-purchase offers", "Category onboarding journeys"],
    },
    {
      id: "cu-opp",
      title: "High opportunity",
      summary: "8,314 customers",
      metric: "8,314",
      tone: "good",
      detail:
        "8,314 customers score high on residual value and propensity. Prioritise them for targeted offers before spraying the full base.",
      next: ["Offer design by segment", "Suppress low-propensity sends"],
    },
    {
      id: "cu-risk",
      title: "At-risk base",
      summary: "8,150 customers · ₹1.85M",
      metric: "8,150",
      tone: "warn",
      detail:
        "8,150 customers are classified at risk, carrying ₹1.85M of historical revenue. Recency gaps and falling order frequency are the dominant drivers.",
      next: ["Win-back cadence", "VIP-at-risk white-glove", "Churn model features"],
    },
    {
      id: "cu-vip",
      title: "VIP concentration",
      summary: "2,790 customers · ₹6.18M",
      metric: "₹6.18M",
      tone: "good",
      detail: "VIPs are only 6.7% of customers but 30% of revenue. Protect this list first.",
      next: ["Dedicated CSM motion", "Exclusive drops"],
    },
  ],
  products: [
    {
      id: "pr-top",
      title: "Category leader",
      summary: "Health & Beauty ₹1.44M",
      metric: "₹1.44M",
      tone: "good",
      detail: "Health & Beauty leads named categories. Kits and serums drive both AOV and repeat.",
      next: ["Bundle architecture", "Review velocity"],
    },
    {
      id: "pr-sku",
      title: "Top SKU",
      summary: "Hegon Beauty Serum Kit",
      metric: "₹0.41M",
      tone: "info",
      detail: "Hegon Beauty Serum Kit is the highest-revenue SKU at ₹412K and 3,180 units.",
      next: ["Inventory cover", "Lookalike SKUs"],
    },
    {
      id: "pr-tail",
      title: "Long tail dominates",
      summary: "Others = 60.3% of revenue",
      metric: "60.3%",
      tone: "warn",
      detail:
        "Named head categories explain under 40% of revenue. Assortment intelligence needs a long-tail view, not just top-10 charts.",
      next: ["SKU productivity", "Delist rules", "Search merchandising"],
    },
    {
      id: "pr-cross",
      title: "Attach opportunity",
      summary: "Housewares × 3,200 customers",
      metric: "₹1.10M",
      tone: "info",
      detail: "Propensity model recommends housewares attach to 3,200 existing buyers.",
      next: ["Bundle with bed & bath", "Post-purchase email"],
    },
  ],
  geography: [
    {
      id: "geo-sp",
      title: "São Paulo leads",
      summary: "SP — ₹5.99M · 29% share",
      metric: "₹5.99M",
      tone: "good",
      detail: "SP is the strongest revenue-generating state at ₹5.99M with 41,720 orders.",
      next: ["City-level SP split", "Last-mile cost"],
    },
    {
      id: "geo-second",
      title: "RJ + MG = ₹4.01M",
      summary: "Best expansion corridor",
      metric: "₹4.01M",
      tone: "info",
      detail: "Rio de Janeiro and Minas Gerais are the natural second act — dense, high AOV, existing seller coverage.",
      next: ["Regional media", "Seller onboarding"],
    },
    {
      id: "geo-freight",
      title: "Freight erodes distant states",
      summary: "BA / GO show weaker contribution",
      metric: "BA ₹0.65M",
      tone: "warn",
      detail: "North-east and centre-west states convert, but freight and delivery delay suppress repeat.",
      next: ["Regional fulfilment nodes", "Free-freight thresholds"],
    },
    {
      id: "geo-city",
      title: "City concentration",
      summary: "São Paulo city ₹3.21M",
      metric: "₹3.21M",
      tone: "info",
      detail: "A single city accounts for more revenue than most states. Hyperlocal campaigns will move the needle.",
      next: ["Neighbourhood targeting", "Same-day pilots"],
    },
  ],
  performance: [
    {
      id: "pe-seller",
      title: "Top seller",
      summary: "Atlas Commerce SP · ₹1.12M",
      metric: "₹1.12M",
      tone: "good",
      detail: "Atlas Commerce SP leads with 4,820 orders and a 4.7 rating at 2.1 days average delay.",
      next: ["Replicate SLA playbook", "Capacity for peak"],
    },
    {
      id: "pe-delay",
      title: "Delay outliers",
      summary: "Casa Forte Home 6.2 days",
      metric: "6.2d",
      tone: "warn",
      detail: "Two sellers exceed 5-day average delay, correlating with lower ratings and repeat.",
      next: ["SLA enforcement", "Reroute SKUs"],
    },
    {
      id: "pe-rating",
      title: "Quality is a growth lever",
      summary: "Beleza Prime 4.8 rating",
      metric: "4.8",
      tone: "good",
      detail: "Highest-rated sellers in beauty also show the strongest repeat. Quality compounds.",
      next: ["Review response time", "Quality-linked ranking"],
    },
    {
      id: "pe-orders",
      title: "Order volume collapsed late",
      summary: "Sep 2018 · 1,140 orders",
      metric: "1,140",
      tone: "danger",
      detail: "Order counts fell from 4,900 in August to 1,140 in September — the operational twin of the revenue drop.",
      next: ["Ingestion completeness check", "Seller activity audit"],
    },
  ],
  opportunity: [
    {
      id: "op-high",
      title: "High-value pool",
      summary: "1,250 customers · ₹2.3M",
      metric: "₹2.3M",
      tone: "good",
      detail: "Target 1,250 high-value customers with personalised offers. Expected recoverable revenue is ₹2.3M.",
      next: ["Offer matrix", "Channel mix"],
    },
    {
      id: "op-risk",
      title: "Retention save",
      summary: "₹0.80M–₹1.85M at risk",
      metric: "₹1.85M",
      tone: "warn",
      detail: "At-risk customers hold ₹1.85M. A focused retention wave can save a material share.",
      next: ["Win-back", "Loyalty points"],
    },
    {
      id: "op-cross",
      title: "Cross-sell housewares",
      summary: "3,200 likely buyers · ₹1.1M",
      metric: "₹1.1M",
      tone: "info",
      detail: "Promote complementary housewares to 3,200 customers the propensity model ranks as likely to buy.",
      next: ["Bundle with bed & bath", "Onsite modules"],
    },
    {
      id: "op-geo",
      title: "Secondary-state lift",
      summary: "RJ + MG addressable ₹0.89M",
      metric: "₹0.89M",
      tone: "info",
      detail: "A regional push in RJ and MG is modelled at ₹0.89M incremental if SP playbooks are reused.",
      next: ["Localised creative", "Seller coverage"],
    },
  ],
  predictions: [
    {
      id: "ml-churn",
      title: "Churn model is production-ready",
      summary: "Accuracy 92.4%",
      metric: "92.4%",
      tone: "good",
      detail: "The churn classifier holds 92.4% accuracy on the held-out slice. Precision on the at-risk class is the number to watch in production.",
      next: ["Weekly batch scoring", "Threshold calibration"],
    },
    {
      id: "ml-clv",
      title: "CLV explains 88% of variance",
      summary: "R² 0.88",
      metric: "0.88",
      tone: "good",
      detail: "The lifetime-value regressor is stable. Use it to size offers, not just to rank customers.",
      next: ["Offer-value caps", "VIP definition refresh"],
    },
    {
      id: "ml-prop",
      title: "Propensity ranks well",
      summary: "AUC 0.91",
      metric: "0.91",
      tone: "good",
      detail: "Purchase propensity AUC of 0.91 supports next-best-offer ranking for the Opportunity Center.",
      next: ["Category-level heads", "Exploration budget"],
    },
    {
      id: "ml-retrain",
      title: "Do not retrain on every append",
      summary: "Update path skips training",
      metric: "Inference only",
      tone: "info",
      detail:
        "When historical data is appended, CRIOI runs ETL → clean → database update → inference. Training is reserved for new datasets or drift.",
      next: ["Drift monitor", "Retrain policy"],
    },
  ],
};

export const AI_SYSTEM_CONTEXT = `You are CRIOI, the Customer Revenue Opportunity Intelligence assistant for ABC Retail Pvt. Ltd.
You answer business questions about the Brazilian E-Commerce (Olist) dataset loaded in this workspace.

Ground truth (do not invent conflicting numbers):
- Period: January 2017 – September 2018
- Total revenue: ₹20.58M
- Customers: 41,599
- Orders: 99,441
- Average order value: ₹1,850
- Latest monthly growth: -76.68% (Sep 2018 ₹0.25M vs Aug 2018 ₹1.05M)
- Best month: November 2017 at ₹4.82M
- Strongest state: São Paulo (SP) ₹5.99M (~29% share), 15,540 customers, 41,720 orders
- Next states: RJ ₹2.14M, MG ₹1.87M, RS ₹1.12M, PR ₹0.98M
- Top named category: Health & Beauty ₹1.44M
- Other named categories: Watches & Gifts ₹1.21M, Bed/Bath/Table ₹1.08M, Sports & Leisure ₹0.98M
- Long tail ("Others") is 60.3% of revenue
- Top SKU: Hegon Beauty Serum Kit ₹412K
- Segments: VIP 2,790 (₹6.18M), Loyal 8,445, Potential Loyalists 12,230, New 9,984, At Risk 8,150 (₹1.85M)
- High-opportunity customers: 8,314
- Models: Churn accuracy 92.4%, CLV R² 0.88, Propensity AUC 0.91, last trained 15 Jun 2024
- Dataset: 112,650 rows, 20 columns, 0 missing, 0 duplicates, quality 96%
- The late-2018 drop may partly reflect incomplete extraction; do not claim a single root cause.

Style: concise, numerical, decision-oriented. Use ₹. Suggest a next analysis when the data cannot prove causality.
If asked something outside this dataset, say so.`;
