"use client";

import React, { useState, useRef, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { Upload, FileText, CheckCircle2, ArrowRight, X } from "lucide-react";

type UploadState = "idle" | "dragging" | "uploading" | "done";

export function ResumeUpload() {
  const [uploadState, setUploadState] = useState<UploadState>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const simulateUpload = useCallback((file: File) => {
    setFileName(file.name);
    setUploadState("uploading");
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploadState("done");
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 18) + 6, 100);
      });
    }, 180);
  }, []);

  const handleFile = useCallback(
    (file: File | undefined) => {
      if (!file) return;
      const allowed = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowed.includes(file.type)) return;
      simulateUpload(file);
    },
    [simulateUpload]
  );

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setUploadState("idle");
      handleFile(e.dataTransfer.files[0]);
    },
    [handleFile]
  );

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setUploadState("dragging");
  };

  const onDragLeave = () => {
    setUploadState((s) => (s === "dragging" ? "idle" : s));
  };

  const reset = () => {
    setUploadState("idle");
    setFileName(null);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const isDragging = uploadState === "dragging";
  const isDone = uploadState === "done";
  const isUploading = uploadState === "uploading";

  const benefits = [
    {
      title: "Instant skill extraction",
      desc: "We parse your CV to identify skills, seniority, and domain depth automatically.",
    },
    {
      title: "Curated matches, not noise",
      desc: "Only see roles genuinely suited to your background without keyword spam.",
    },
    {
      title: "Your data, your control",
      desc: "Resume details are never shared with employers without your approval.",
    },
  ];

  return (
    <section className="py-14 md:py-20 bg-white border-t border-slate-100">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-tight leading-[1.15] mb-3">
              Upload your resume.{" "}
              <span className="text-[#192CE7]">Let opportunities find you.</span>
            </h2>
            <p className="text-base text-slate-500 max-w-xl mx-auto font-normal leading-relaxed">
              Drop your CV and our AI instantly surfaces the roles that actually match your
              experience, skills, and ambitions.
            </p>
          </div>

          {/* Upload Card */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
            {/* Drop Zone */}
            <div className="lg:col-span-3 flex flex-col h-full">
              <div
                onDrop={onDrop}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onClick={() => {
                  if (uploadState === "idle" || uploadState === "dragging") {
                    fileInputRef.current?.click();
                  }
                }}
                className={[
                  "relative flex flex-col items-center justify-center rounded-[22px] border-2 border-dashed",
                  "transition-all duration-300 h-full w-full min-h-[300px] p-8 text-center select-none",
                  isDone
                    ? "border-emerald-300 bg-emerald-50/60 cursor-default"
                    : isDragging
                    ? "border-[#192CE7] bg-indigo-50/60 scale-[1.01] cursor-copy"
                    : isUploading
                    ? "border-indigo-200 bg-indigo-50/30 cursor-default"
                    : "border-slate-200 bg-slate-50/60 hover:border-[#192CE7] hover:bg-indigo-50/30 cursor-pointer",
                ].join(" ")}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                  onChange={(e) => handleFile(e.target.files?.[0])}
                />

                {/* Idle / Dragging State */}
                {(uploadState === "idle" || uploadState === "dragging") && (
                  <>
                    <div
                      className={[
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300",
                        isDragging ? "bg-[#192CE7] scale-110" : "bg-indigo-100",
                      ].join(" ")}
                    >
                      <Upload
                        className={[
                          "w-7 h-7 transition-colors duration-300",
                          isDragging ? "text-white" : "text-[#192CE7]",
                        ].join(" ")}
                      />
                    </div>
                    <p className="text-base font-semibold text-slate-800 mb-1">
                      {isDragging ? "Drop your file here" : "Drag and drop your resume"}
                    </p>
                    <p className="text-sm text-slate-500 mb-4">
                      or{" "}
                      <span className="text-[#192CE7] font-semibold underline underline-offset-2">
                        browse to upload
                      </span>
                    </p>
                    <p className="text-xs text-slate-400">PDF, DOC or DOCX (Max 10 MB)</p>
                  </>
                )}

                {/* Uploading State */}
                {isUploading && (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center mb-4 animate-pulse">
                      <FileText className="w-7 h-7 text-[#192CE7]" />
                    </div>
                    <p className="text-base font-semibold text-slate-800 mb-1 truncate max-w-[220px]">
                      {fileName}
                    </p>
                    <p className="text-sm text-slate-500 mb-5">Analyzing your resume...</p>
                    <div className="w-full max-w-[280px] h-1.5 bg-indigo-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#192CE7] rounded-full transition-all duration-200 ease-out"
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      />
                    </div>
                    <p className="text-xs text-slate-400 mt-2">{Math.min(progress, 100)}%</p>
                  </>
                )}

                {/* Done State */}
                {isDone && (
                  <>
                    <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                    </div>
                    <p className="text-base font-semibold text-slate-800 mb-1">Resume uploaded!</p>
                    <p className="text-sm text-slate-500 mb-1 truncate max-w-[240px]">{fileName}</p>
                    <p className="text-xs text-emerald-600 font-medium mb-5">
                      Profile enriched. Matches being generated.
                    </p>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        reset();
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-slate-700 transition-colors border border-slate-200 rounded-full px-3 py-1.5 hover:border-slate-300"
                    >
                      <X className="w-3 h-3" />
                      Upload a different file
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Benefits Sidebar */}
            <div className="lg:col-span-2 flex flex-col justify-between gap-3.5 h-full">
              {benefits.map((item, idx) => (
                <div
                  key={item.title}
                  className="flex-1 flex items-start gap-3.5 bg-slate-50 rounded-2xl p-4 sm:p-4.5 border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-200 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#192CE7] flex items-center justify-center shrink-0 font-semibold text-xs border border-indigo-100/60 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 mb-0.5 group-hover:text-[#192CE7] transition-colors">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}

              {isDone && (
                <a
                  href="#opportunities"
                  className="mt-1 inline-flex items-center justify-center gap-2 w-full text-sm font-semibold px-5 py-3 rounded-full bg-[#192CE7] hover:bg-[#1324C7] text-white shadow-md hover:shadow-lg transition-all group active:scale-95"
                >
                  <span>View my matched roles</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
