"use client";

import { useEffect, useState } from "react";
import { contact } from "@/lib/site";
import { WhatsAppIcon, SmsIcon, PhoneIcon } from "@/components/icons";

/*
  Persistent floating contact stack — bottom-right, thumb-reachable, every page.
  Conversion hierarchy: WhatsApp (primary) → SMS → Call.
*/
export function FloatingContact() {
  const [open, setOpen] = useState(false);

  // Expand once after first scroll so the WhatsApp action is obvious, then user controls it.
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) {
        setOpen(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <div
        className={`flex flex-col items-end gap-3 transition-all duration-300 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <a
          href={contact.sms}
          aria-label="Text us"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-fg shadow-lg ring-1 ring-white/10 transition-colors hover:text-accent"
        >
          <SmsIcon className="h-5 w-5" />
        </a>
        <a
          href={contact.tel}
          aria-label={`Call ${contact.display}`}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-card text-fg shadow-lg ring-1 ring-white/10 transition-colors hover:text-accent"
        >
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>

      {/* Primary: WhatsApp */}
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-primary px-4 py-3.5 text-white shadow-xl shadow-black/40 ring-1 ring-white/10 transition-colors hover:bg-primary-hover"
      >
        <WhatsAppIcon className="h-6 w-6" />
        <span className="hidden text-sm font-semibold font-[var(--font-heading)] sm:inline">
          WhatsApp us
        </span>
      </a>
    </div>
  );
}
