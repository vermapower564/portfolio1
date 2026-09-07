"use client";

import React, { useState } from "react";
import { Share2, Link, Check, Linkedin, MessageCircle, Twitter } from "lucide-react";

interface ProjectShareProps {
  title: string;
  url: string;
}

export function ProjectShare({ title, url }: ProjectShareProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== "undefined" ? window.location.href : url;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${title} — Roushan Kumar Verma Portfolio`,
          text: `Check out ${title} built by Roushan Kumar Verma`,
          url: fullUrl,
        });
      } catch (err) {
        console.log("Share skipped", err);
      }
    } else {
      handleCopyLink();
    }
  };

  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedText = encodeURIComponent(`Check out ${title} built by Full-Stack Developer Roushan Kumar Verma:`);

  const linkedInShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const whatsAppShare = `https://api.whatsapp.com/send?text=${encodedText}%20${encodedUrl}`;
  const twitterShare = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;

  return (
    <div className="p-4 rounded-2xl bg-stone-900 border border-rose-950/60 space-y-3 font-mono text-xs">
      <div className="flex items-center justify-between">
        <span className="text-stone-300 font-bold flex items-center gap-2">
          <Share2 className="w-4 h-4 text-rose-400" />
          Share This Project Case Study
        </span>
        {copied && (
          <span className="text-[11px] text-emerald-400 font-semibold animate-in fade-in">
            ✓ Project link copied.
          </span>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {/* Copy Link Trigger */}
        <button
          onClick={handleCopyLink}
          className="px-3.5 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-semibold border border-stone-700 transition-colors flex items-center gap-2"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Link className="w-3.5 h-3.5" />}
          <span>{copied ? "Link Copied!" : "Copy Link"}</span>
        </button>

        {/* Web Share API */}
        <button
          onClick={handleNativeShare}
          className="px-3.5 py-2 rounded-xl bg-rose-950 text-rose-300 hover:bg-rose-900 font-semibold border border-rose-800/40 transition-colors flex items-center gap-2"
        >
          <Share2 className="w-3.5 h-3.5 text-rose-400" />
          <span>Web Share</span>
        </button>

        {/* LinkedIn */}
        <a
          href={linkedInShare}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-stone-800 hover:bg-rose-950/40 text-stone-300 hover:text-rose-400 border border-stone-700 transition-colors"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </a>

        {/* WhatsApp */}
        <a
          href={whatsAppShare}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-stone-800 hover:bg-emerald-950/40 text-stone-300 hover:text-emerald-400 border border-stone-700 transition-colors"
          aria-label="Share on WhatsApp"
        >
          <MessageCircle className="w-4 h-4" />
        </a>

        {/* X/Twitter */}
        <a
          href={twitterShare}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
          aria-label="Share on X / Twitter"
        >
          <Twitter className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
