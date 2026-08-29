import { createServerFn } from "@tanstack/react-start";
import { AI_SYSTEM_CONTEXT, INSIGHTS, REPORTS, type ReportId } from "@/lib/data/platform";

type Msg = { role: "user" | "assistant"; content: string };

function localAnswer(message: string, reportId?: ReportId): string {
  const q = message.toLowerCase();
  const report = reportId ? REPORTS.find((r) => r.id === reportId) : undefined;
  const insights = reportId ? INSIGHTS[reportId] : Object.values(INSIGHTS).flat();

  if (q.includes("state") || q.includes("são paulo") || q.includes("sao paulo") || q.includes("sp")) {
    return "São Paulo (SP) is the strongest revenue-generating state at ₹5.99M — about 29% of recorded revenue — with 15,540 customers and 41,720 orders. Rio de Janeiro (₹2.14M) and Minas Gerais (₹1.87M) are the natural expansion corridor.";
  }
  if (q.includes("declin") || q.includes("growth") || q.includes("drop") || q.includes("fall")) {
    return "Latest revenue growth is -76.68%. September 2018 closed at ₹0.25M versus ₹1.05M in August. The extract confirms the decline but does not prove the cause — the last month is also incomplete. Next: transaction volume, customer activity, and product-level sales.";
  }
  if (q.includes("categor") || q.includes("beauty") || q.includes("product")) {
    return "Health & Beauty is the leading named category at ₹1.44M. The long tail still holds 60.3% of revenue, so assortment strategy cannot stop at the head. Top SKU: Hegon Beauty Serum Kit (₹412K).";
  }
  if (q.includes("churn") || q.includes("at risk") || q.includes("retention")) {
    return "8,150 customers are at risk, carrying ₹1.85M of historical revenue. The churn model is production-ready at 92.4% accuracy. Prioritise VIP-at-risk first, then a broader win-back cadence.";
  }
  if (q.includes("opportunit") || q.includes("offer") || q.includes("cross")) {
    return "8,314 customers are flagged high-opportunity. Three plays: (1) 1,250 high-value targets, potential ₹2.3M; (2) retention save on the at-risk base; (3) housewares cross-sell to 3,200 likely buyers (₹1.1M).";
  }
  if (q.includes("customer") || q.includes("segment") || q.includes("vip")) {
    return "41,599 customers. Largest segment is Potential Loyalists (12,230). VIPs are only 2,790 people but ₹6.18M of revenue. Convert Potential Loyalists; protect VIPs.";
  }
  if (q.includes("model") || q.includes("ml") || q.includes("accuracy") || q.includes("auc")) {
    return "Three models, last trained 15 Jun 2024: Churn 92.4% accuracy, CLV R² 0.88, Purchase Propensity AUC 0.91. Dataset updates run inference only — they do not retrain.";
  }
  if (q.includes("month") || q.includes("november") || q.includes("best")) {
    return "November 2017 is the high-water mark at ₹4.82M and 22,100 orders (Black Friday). Use that month as the campaign baseline, not the incomplete 2018 tail.";
  }

  const top = insights.slice(0, 3).map((i) => `• ${i.title} — ${i.summary}`).join("\n");
  const scope = report ? ` the ${report.title}` : " the loaded workspace";
  return `I can answer from${scope}. Headline facts:\n${top}\n\nAsk about a state, category, segment, model, or the revenue decline for a deeper cut.`;
}

export const askBusinessAi = createServerFn({ method: "POST" })
  .validator((data: { message: string; reportId?: ReportId; history?: Msg[] }) => data)
  .handler(async ({ data }) => {
    const apiKey = process.env.XAI_API_KEY;
    const report = data.reportId ? REPORTS.find((r) => r.id === data.reportId) : undefined;
    const extra = report
      ? `\nThe user is currently viewing: ${report.title} (${report.blurb}). Prefer insights from that report unless they ask otherwise.`
      : "";

    if (!apiKey) {
      return { ok: true as const, text: localAnswer(data.message, data.reportId), source: "local" as const };
    }

    try {
      const history = (data.history ?? []).slice(-8);
      const res = await fetch("https://api.x.ai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "grok-4.5",
          temperature: 0.3,
          max_tokens: 700,
          messages: [
            { role: "system", content: AI_SYSTEM_CONTEXT + extra },
            ...history,
            { role: "user", content: data.message },
          ],
        }),
      });
      if (!res.ok) {
        return { ok: true as const, text: localAnswer(data.message, data.reportId), source: "local" as const };
      }
      const body = (await res.json()) as { choices: { message: { content: string } }[] };
      const text = body.choices[0]?.message.content ?? localAnswer(data.message, data.reportId);
      return { ok: true as const, text, source: "grok" as const };
    } catch {
      return { ok: true as const, text: localAnswer(data.message, data.reportId), source: "local" as const };
    }
  });
