import { create } from "zustand";
import { persist } from "zustand/middleware";

export type DatasetStatus = "pending" | "processing" | "processed" | "failed";

export type Dataset = {
  id: string;
  name: string;
  fileName: string;
  description: string;
  type: "CSV" | "Parquet" | "Excel";
  status: DatasetStatus;
  rows: number;
  columns: number;
  missing: number;
  duplicates: number;
  quality: number;
  uploadedAt: string;
  lastProcessedAt: string | null;
  active: boolean;
};

const SEED: Dataset[] = [
  {
    id: "ds-olist",
    name: "Brazilian E-Commerce Dataset",
    fileName: "olist_ecommerce_2017_2018.csv",
    description: "Olist store orders, customers, products, payments and reviews for 2017–2018.",
    type: "CSV",
    status: "processed",
    rows: 112_650,
    columns: 20,
    missing: 0,
    duplicates: 0,
    quality: 96,
    uploadedAt: "2024-06-15T10:30:00",
    lastProcessedAt: "2024-06-15T10:42:00",
    active: true,
  },
  {
    id: "ds-olist-may",
    name: "May 2024 Snapshot",
    fileName: "May_2024_Data.csv",
    description: "Monthly refresh used for inference-only scoring.",
    type: "CSV",
    status: "processed",
    rows: 118_250,
    columns: 20,
    missing: 12,
    duplicates: 4,
    quality: 94,
    uploadedAt: "2024-05-18T11:20:00",
    lastProcessedAt: "2024-05-18T11:41:00",
    active: false,
  },
];

type DatasetState = {
  items: Dataset[];
  add: (ds: Dataset) => void;
  update: (id: string, patch: Partial<Dataset>) => void;
  setActive: (id: string) => void;
  remove: (id: string) => void;
};

export const useDatasets = create<DatasetState>()(
  persist(
    (set) => ({
      items: SEED,
      add: (ds) => set((s) => ({ items: [ds, ...s.items] })),
      update: (id, patch) =>
        set((s) => ({
          items: s.items.map((d) => (d.id === id ? { ...d, ...patch } : d)),
        })),
      setActive: (id) =>
        set((s) => ({
          items: s.items.map((d) => ({ ...d, active: d.id === id })),
        })),
      remove: (id) => set((s) => ({ items: s.items.filter((d) => d.id !== id) })),
    }),
    { name: "crioi-datasets" },
  ),
);

export function activeDataset(items: Dataset[]) {
  return items.find((d) => d.active) ?? items[0];
}
