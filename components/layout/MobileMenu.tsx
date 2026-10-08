"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/shared/Button";
import { contactPhone, homeSections, mainNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div
      className={cn(
        "overflow-hidden border-b border-border bg-background transition-[max-height] duration-300 ease-in-out lg:hidden",
        isOpen ? "max-h-[36rem]" : "max-h-0"
      )}
    >
      <nav className="flex flex-col gap-1 px-4 py-4">
        {mainNav.map((item) =>
          item.children ? (
            <div key={item.label}>
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
                aria-expanded={openDropdown}
              >
                {item.label}
                <ChevronDown
                  className={cn("h-4 w-4 transition-transform", openDropdown && "rotate-180")}
                />
              </button>

              {openDropdown && (
                <div className="ml-3 flex flex-col gap-1 border-l border-border pl-3">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={onClose}
                      className="rounded-lg px-3 py-2 text-sm text-foreground hover:bg-surface-muted"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground hover:bg-surface-muted"
            >
              {item.label}
            </Link>
          )
        )}

        <a
          href={contactPhone.href}
          onClick={onClose}
          className="mt-2 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-foreground hover:bg-surface-muted"
        >
          <Phone className="h-4 w-4" />
          {contactPhone.label}
        </a>

        <Button
          href={homeSections.getStarted}
          className="mt-2 w-full bg-[#7c011e] text-white shadow-[0_8px_24px_rgba(124,1,30,0.2)] hover:bg-[#630018] focus-visible:ring-[#7c011e]"
          onClick={onClose}
        >
          Get A Quote
        </Button>
      </nav>
    </div>
  );
}
