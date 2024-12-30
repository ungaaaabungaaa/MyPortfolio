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
      className="inline-flex items-center rounded-lg lg:rounded-full bg-foreground text-background px-3 py-1 text-sm lg:px-9 lg:py-3 lg:text-lg space-x-2"
    >
      <span>Schedule Meet</span>
      <Calendar size={16} />
    </button>
  );
}
