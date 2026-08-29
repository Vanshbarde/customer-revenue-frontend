import { create } from "zustand";
import { persist } from "zustand/middleware";

export type SessionUser = {
  fullName: string;
  email: string;
  organization: string;
  role: string;
  country: string;
  orgType: string;
  contactNumber: string;
  address: string;
};

type SessionState = {
  user: SessionUser | null;
  login: (user: SessionUser) => void;
  logout: () => void;
};

export const DEMO_USER: SessionUser = {
  fullName: "Rohit Sharma",
  email: "rohit.sharma@abcretail.in",
  organization: "ABC Retail Pvt. Ltd.",
  role: "Admin",
  country: "India",
  orgType: "Retail",
  contactNumber: "+91 98765 43210",
  address: "Bandra Kurla Complex, Mumbai",
};

export const useSession = create<SessionState>()(
  persist(
    (set) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    { name: "crioi-session" },
  ),
);
