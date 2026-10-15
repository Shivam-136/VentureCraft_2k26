"use client";

import { useEffect, useState } from "react";
import { X, Mail, Send, CheckCircle2, Sparkles, Building2, Phone, User } from "lucide-react";

interface SponsorInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: string;
}

export default function SponsorInquiryModal({
  isOpen,
  onClose,
  defaultTier = "Custom Partnership",
}: SponsorInquiryModalProps) {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedTier, setSelectedTier] = useState(defaultTier);
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultTier) {
      setSelectedTier(defaultTier);
    }
  }, [defaultTier]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      `Sponsorship Inquiry: ${companyName || "Organization"} - ${selectedTier}`
    );
    const mailtoBody = encodeURIComponent(
      `Hello VentureCraft 2026 Secretariat,\n\nI am interested in exploring a sponsorship / partnership opportunity for VentureCraft 2K26.\n\nOrganization / Brand: ${companyName}\nContact Person: ${contactPerson}\nWork Email: ${email}\nPhone / WhatsApp: ${phone}\nInterested Tier: ${selectedTier}\nProposed Scope / Notes:\n${notes || "Please share the comprehensive sponsorship prospectus and customized activation packages."}\n\nBest regards,\n${contactPerson}`
    );

    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:venturecraft2025@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#050e18]/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-2xl bg-gradient-to-b from-[#0f2236] to-[#07131f] border border-[#1f3a56] shadow-2xl p-6 sm:p-8 z-10 text-[#e8eef4] my-8 overflow-hidden">
        {/* Top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-32 bg-[#f5b83d]/10 rounded-full blur-[70px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#07131f] border border-[#1f3a56] text-[#93a8bd] hover:text-[#e8eef4] hover:border-[#f5b83d] transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#f5b83d]">
              // PARTNERSHIP DESK
            </span>
            <span className="w-8 h-[1px] bg-[#f5b83d]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-black font-heading text-[#e8eef4]">
            Become a <span className="text-[#f5b83d]">Sponsor</span>
          </h3>
          <p className="text-xs text-[#93a8bd] font-mono mt-1.5 leading-relaxed">
            Collaborate with VentureCraft 2K26. Submit your details below to receive our official partnership deck and customized engagement packages.
          </p>
        </div>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#3ddbb0]/10 border border-[#3ddbb0]/40 flex items-center justify-center mx-auto text-[#3ddbb0]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-bold font-heading text-[#e8eef4]">
              Inquiry Prepared
            </h4>
            <p className="text-xs text-[#93a8bd] font-mono max-w-md mx-auto">
              Your default email client is opening with your pre-filled inquiry. You can also contact us directly at{" "}
              <a href="mailto:venturecraft2025@gmail.com" className="text-[#f5b83d] font-bold underline">
                venturecraft2025@gmail.com
              </a>.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#0f2236] border border-[#1f3a56] hover:border-[#f5b83d] text-xs font-mono text-[#e8eef4]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#93a8bd] mb-1.5 uppercase tracking-wider">
                  Organization / Brand *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 absolute left-3 top-3 text-[#93a8bd]" />
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g. Acme Corp / Brand"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#07131f] border border-[#1f3a56] text-xs text-[#e8eef4] placeholder-[#93a8bd]/40 focus:outline-none focus:border-[#f5b83d] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#93a8bd] mb-1.5 uppercase tracking-wider">
                  Contact Person *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-[#93a8bd]" />
                  <input
                    type="text"
                    required
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    placeholder="Full Name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#07131f] border border-[#1f3a56] text-xs text-[#e8eef4] placeholder-[#93a8bd]/40 focus:outline-none focus:border-[#f5b83d] font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-mono text-[#93a8bd] mb-1.5 uppercase tracking-wider">
                  Official Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-[#93a8bd]" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="partnerships@brand.com"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#07131f] border border-[#1f3a56] text-xs text-[#e8eef4] placeholder-[#93a8bd]/40 focus:outline-none focus:border-[#f5b83d] font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[#93a8bd] mb-1.5 uppercase tracking-wider">
                  Phone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3 top-3 text-[#93a8bd]" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-[#07131f] border border-[#1f3a56] text-xs text-[#e8eef4] placeholder-[#93a8bd]/40 focus:outline-none focus:border-[#f5b83d] font-mono"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#93a8bd] mb-1.5 uppercase tracking-wider">
                Partnership Interest
              </label>
              <select
                value={selectedTier}
                onChange={(e) => setSelectedTier(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl bg-[#07131f] border border-[#1f3a56] text-xs text-[#e8eef4] focus:outline-none focus:border-[#f5b83d] font-mono"
              >
                <option value="Title Sponsor">Title Sponsor</option>
                <option value="Powered By Partner">Powered By Partner</option>
                <option value="Associate Sponsor">Associate Sponsor</option>
                <option value="Food & Beverage Partner">Food & Beverage Partner</option>
                <option value="Technology Partner">Technology Partner</option>
                <option value="Community Partner">Community Partner</option>
                <option value="Custom Partnership">Custom Partnership Package</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#93a8bd] mb-1.5 uppercase tracking-wider">
                Message / Objective (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share your marketing goals, preferred branding activations, or inquiries..."
                className="w-full px-3 py-2 rounded-xl bg-[#07131f] border border-[#1f3a56] text-xs text-[#e8eef4] placeholder-[#93a8bd]/40 focus:outline-none focus:border-[#f5b83d] font-mono resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#f5b83d] text-[#07131f] font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#ffc857] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Transmit Sponsorship Inquiry</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 rounded-xl bg-[#07131f] border border-[#1f3a56] hover:bg-[#152d47] text-[#93a8bd] hover:text-[#e8eef4] font-mono text-xs transition-colors"
              >
                Cancel
              </button>
            </div>

            <p className="text-[10px] text-[#93a8bd]/70 font-mono text-center pt-1">
              Direct Secretariat: <a href="mailto:venturecraft2025@gmail.com" className="text-[#f5b83d] hover:underline">venturecraft2025@gmail.com</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
