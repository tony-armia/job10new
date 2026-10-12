"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Audience } from "@/types/audience";

interface AudienceContextValue {
  audience: Audience;
  setAudience: (newAudience: Audience) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: (fallbackToGuest?: boolean) => void;
  hasInitialized: boolean;
}

const AudienceContext = createContext<AudienceContextValue | undefined>(undefined);

export function AudienceProvider({ children }: { children: React.ReactNode }) {
  const [audience, setAudienceState] = useState<Audience>("recruiter");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const urlRole = (urlParams.get("role") || urlParams.get("audience"))?.toLowerCase();

        if (urlRole === "recruiter" || urlRole === "jobseeker") {
          setAudienceState(urlRole as Audience);
          setIsModalOpen(false);
          try {
            localStorage.setItem("job10_audience_role", urlRole);
          } catch {}
          return;
        }

        if (urlRole === "choose" || urlRole === "modal" || urlParams.get("modal") === "true") {
          setIsModalOpen(true);
          return;
        }
      }

      const stored = localStorage.getItem("job10_audience_role") as Audience | null;
      if (stored && (stored === "recruiter" || stored === "jobseeker")) {
        setAudienceState(stored);
        setIsModalOpen(false);
      } else {
        // First visit: open selection modal automatically
        setIsModalOpen(true);
      }
    } catch {
      setIsModalOpen(true);
    } finally {
      setHasInitialized(true);
    }
  }, []);

  // Scroll locking when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const setAudience = (newAudience: Audience) => {
    // Restrict to active roles
    const safeRole = newAudience === "guest" ? "recruiter" : newAudience;
    setAudienceState(safeRole);
    setIsModalOpen(false);
    try {
      localStorage.setItem("job10_audience_role", safeRole);
    } catch {}

    // Scroll to the top / hero section when switching roles
    if (typeof window !== "undefined") {
      if (window.location.hash) {
        window.history.replaceState(null, "", window.location.pathname);
      }
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = (fallbackToDefault = false) => {
    setIsModalOpen(false);
    if (fallbackToDefault && !localStorage.getItem("job10_audience_role")) {
      setAudience("recruiter");
    }
  };

  return (
    <AudienceContext.Provider
      value={{
        audience,
        setAudience,
        isModalOpen,
        openModal,
        closeModal,
        hasInitialized,
      }}
    >
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const context = useContext(AudienceContext);
  if (!context) {
    throw new Error("useAudience must be used within an AudienceProvider");
  }
  return context;
}
