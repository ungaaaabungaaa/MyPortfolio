"use client";
import { Button } from "@/components/ui/button";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";
import { useEffect } from "react";
export function CalPopup() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quickchat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="quickchat"
      data-cal-link="ungaaaabungaaaa/quickchat"
      data-cal-config='{"layout":"month_view","theme":"auto"}'
      className="inline-flex items-center rounded-full bg-foreground text-background px-9 py-3 text-lg space-x-2"
    >
      <span>Meet</span>
      <Calendar size={16} />
    </button>
  );
}
