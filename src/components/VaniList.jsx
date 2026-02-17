import { useState } from "react";

export default function VaniList({
  lectures,
  filters,
  activeFilters,
  totalRecords,
  currentPage,
  totalPages,
  startIndex,
}) {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [pendingFilters, setPendingFilters] = useState({});

  const initializePendingFilters = (filterId) => {
    if (!pendingFilters[filterId]) {
      setPendingFilters((prev) => ({
        ...prev,
        [filterId]: new Set(activeFilters[filterId] || []),
      }));
    }
  };

  const toggleDropdown = (filterId) => {
    if (openDropdown === filterId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(filterId);
      initializePendingFilters(filterId);
      if (window.innerWidth < 640) document.body.style.overflow = "hidden";
    }
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
    document.body.style.overflow = "";
  };

  const toggleFilterItem = (filterId, value) => {
    setPendingFilters((prev) => {
      const newSet = new Set(prev[filterId] || []);
      if (newSet.has(value)) newSet.delete(value);
      else newSet.add(value);
      return { ...prev, [filterId]: newSet };
    });
  };

  const applyFilters = (filterId) => {
    const values = Array.from(pendingFilters[filterId] || []);
    const params = new URLSearchParams(window.location.search);
    params.delete(filterId);
    values.forEach((v) => params.append(filterId, v));
    params.delete("page");
    window.location.href = `${window.location.pathname}?${params.toString()}`;
  };

  const clearFilter = (filterId) => {
    setPendingFilters((prev) => ({ ...prev, [filterId]: new Set() }));
  };

  const removeTag = (filterId, value) => {
    const params = new URLSearchParams(window.location.search);
    const values = params.getAll(filterId).filter((v) => v !== value);
    params.delete(filterId);
    values.forEach((v) => params.append(filterId, v));
    params.delete("page");
    window.location.href = `${window.location.pathname}?${params.toString()}`;
  };

  const changePage = (newPage) => {
    const params = new URLSearchParams(window.location.search);
    if (newPage > 1) params.set("page", newPage);
    else params.delete("page");
    window.location.href = `${window.location.pathname}?${params.toString()}`;
  };

  const getFilterLabel = (filterId, filterLabel) => {
    const active = activeFilters[filterId] || [];
    if (active.length === 0) return filterLabel;
    const items = filters[filterId] || [];
    const firstItem = items.find((item) => item.value === active[0]);
    if (active.length === 1) return firstItem?.label || filterLabel;
    return `${firstItem?.label} +${active.length - 1}`;
  };

  const isFilterActive = (filterId) => (activeFilters[filterId] || []).length > 0;

  // ── Filter configs ────────────────────────────────────────
  const filterConfigs = [
    { id: "audio",    label: "Audio"    },
    { id: "year",     label: "Year"     },
    { id: "category", label: "Category" },
    { id: "location", label: "Location" },
  ];

  // ── Active tags ───────────────────────────────────────────
  const activeTags = [];
  filterConfigs.forEach((config) => {
    const values = activeFilters[config.id] || [];
    const items  = filters[config.id] || [];
    values.forEach((value) => {
      const item = items.find((i) => i.value === value);
      if (item) {
        activeTags.push({ filterId: config.id, filterLabel: config.label, value, label: item.label });
      }
    });
  });

  return (
    <>
      {/* ============ FILTER BAR ============ */}
      <div className="flex flex-wrap gap-2 sm:gap-2.5 lg:gap-3 mb-3 sm:mb-4">
        {filterConfigs.map((config) => {
          const isOpen      = openDropdown === config.id;
          const isActive    = isFilterActive(config.id);
          const filterItems = filters[config.id] || [];
          const pending     = pendingFilters[config.id] || new Set();

          return (
            <div key={config.id} className="relative">
              {/* Trigger Button */}
              <button
                onClick={() => toggleDropdown(config.id)}
                className={`inline-flex items-center gap-1.5 sm:gap-2 border px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md active:scale-95 ${
                  isActive
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-text-body/20 text-text-body hover:border-primary hover:text-primary"
                }`}
              >
                <span className="truncate max-w-[120px] sm:max-w-none">
                  {getFilterLabel(config.id, config.label)}
                </span>
                <svg
                  className={`w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Panel */}
              {isOpen && (
                <div className="fixed sm:absolute top-0 left-0 sm:top-full sm:left-auto right-0 sm:right-auto sm:mt-2 w-full sm:w-72 h-full sm:h-auto bg-white sm:rounded-xl border-0 sm:border border-text-body/10 shadow-2xl sm:shadow-xl z-50 overflow-hidden">

                  {/* Mobile Close */}
                  <button onClick={closeDropdown} className="sm:hidden absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-text-body/5 hover:bg-text-body/10 transition-colors z-10">
                    <svg className="w-5 h-5 text-text-body" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>

                  {/* Header */}
                  <div className="flex items-center justify-between px-4 py-3 sm:py-2.5 bg-primary">
                    <h3 className="text-white text-sm font-semibold tracking-wide">Filter by {config.label}</h3>
                    {pending.size > 0 && (
                      <span className="text-xs font-bold text-white bg-white/20 px-2 py-0.5 rounded-full">{pending.size}</span>
                    )}
                  </div>

                  {/* Items List */}
                  <div className="h-[calc(100vh-160px)] sm:h-auto sm:max-h-56 overflow-y-auto py-1">
                    {filterItems.length === 0 ? (
                      <p className="text-center text-xs text-text-body/40 py-6">No options available</p>
                    ) : (
                      filterItems.map((item) => {
                        const isChecked = pending.has(item.value);
                        return (
                          <button
                            key={item.value}
                            onClick={() => toggleFilterItem(config.id, item.value)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 sm:py-2 text-left cursor-pointer transition-colors duration-150 hover:bg-orange-50 active:bg-orange-100 ${isChecked ? "bg-section-bg" : ""}`}
                          >
                            <span
                              className={`flex-shrink-0 border-2 rounded flex items-center justify-center transition-all duration-150 ${isChecked ? "bg-primary border-primary" : "bg-white border-text-body/25"}`}
                              style={{ width: "18px", height: "18px" }}
                            >
                              {isChecked && (
                                <svg className="text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" style={{ width: "11px", height: "11px" }}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </span>
                            <span className="flex-1 text-text-body text-sm font-medium">{item.label}</span>
                          </button>
                        );
                      })
                    )}
                  </div>

                  {/* Footer */}
                  <div className="flex gap-2 px-3 py-3 border-t border-text-body/10 bg-white">
                    <button onClick={() => clearFilter(config.id)} className="flex-shrink-0 px-4 py-2 sm:py-1.5 border border-text-body/20 rounded-lg text-xs font-semibold text-text-body/60 cursor-pointer transition-all duration-150 hover:border-primary hover:text-primary active:scale-95">
                      Clear
                    </button>
                    <button onClick={() => { applyFilters(config.id); closeDropdown(); }} className="flex-1 px-4 py-2 sm:py-1.5 bg-primary rounded-lg text-xs font-bold text-white cursor-pointer transition-all duration-150 hover:bg-primary-hover hover:shadow-md active:scale-95">
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ============ ACTIVE TAGS ============ */}
      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 items-center" style={{ minHeight: "28px" }}>
        {activeTags.map((tag, idx) => (
          <span key={`${tag.filterId}-${tag.value}-${idx}`} className="inline-flex items-center gap-1.5 bg-primary text-white text-xs font-semibold px-2.5 sm:px-3 py-1 rounded-full">
            <span className="truncate max-w-[200px] sm:max-w-none">{tag.filterLabel}: {tag.label}</span>
            <button onClick={() => removeTag(tag.filterId, tag.value)} className="flex items-center justify-center rounded-full bg-white/25 hover:bg-white/40 active:bg-white/50 transition-colors cursor-pointer border-0 p-0" style={{ width: "16px", height: "16px" }}>
              <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" style={{ width: "9px", height: "9px", color: "#fff" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </span>
        ))}
      </div>

      {/* ============ RECORD COUNT ============ */}
      <p className="text-xs sm:text-sm text-text-body/60 mb-5 sm:mb-6 lg:mb-7">
        Found <span className="font-bold text-text-body">{totalRecords}</span> records
      </p>

      {/* ============ VANI LIST ============ */}
      <div className="max-w-3xl">
        {lectures.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-body/60 text-lg">No lectures found matching your filters.</p>
            <button onClick={() => (window.location.href = window.location.pathname)} className="mt-4 inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold shadow-sm cursor-pointer transition-all duration-200 hover:bg-primary-hover hover:shadow-md active:scale-95">
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            {lectures.map((item, idx) => (
              <a
                key={item.id}
                href={`/vani/${item.slug}`}
                className="group flex flex-col sm:flex-row sm:items-center justify-between py-3 sm:py-4 border-b border-text-body/15 transition-all duration-200 hover:pl-2 sm:hover:pl-3 active:bg-orange-50/30"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-baseline gap-2 sm:gap-2.5">
                    <span className="text-xs font-bold text-text-body/25 shrink-0" style={{ width: "18px", textAlign: "right", fontVariantNumeric: "tabular-nums" }}>
                      {String(startIndex + idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-primary group-hover:text-primary-hover transition-colors duration-150 break-words pr-2 sm:pr-0">
                      {item.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 flex-wrap" style={{ marginLeft: "24px" }}>
                    <span className="text-xs text-text-body/45">{item.date}</span>
                    {item.location !== "—" && (
                      <>
                        <span className="text-text-body/25">·</span>
                        <span className="text-xs text-text-body/45">{item.location}</span>
                      </>
                    )}
                    {item.hasAudio && (
                      <>
                        <span className="text-text-body/25">·</span>
                        <span className="inline-flex items-center gap-0.5 text-xs text-green-600 font-medium">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3a4 4 0 0 1 4 4v5a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v5a2 2 0 0 0 4 0V7a2 2 0 0 0-2-2zm-7 8h2a5 5 0 0 0 10 0h2a7 7 0 0 1-6 6.92V21h2v2H9v-2h2v-1.08A7 7 0 0 1 5 13z"/>
                          </svg>
                          Audio
                        </span>
                      </>
                    )}
                  </div>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-text-body/20 group-hover:text-primary transition-all duration-200 group-hover:scale-110 shrink-0 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* ============ PAGINATION ============ */}
            <div className="mt-8 sm:mt-10 lg:mt-12 flex items-center justify-center gap-2 sm:gap-3">
              {currentPage > 1 ? (
                <button onClick={() => changePage(currentPage - 1)} className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-text-body/20 text-text-body px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm cursor-pointer transition-all duration-200 hover:border-primary hover:text-primary hover:shadow-md active:scale-95">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  <span className="hidden xs:inline">Back</span>
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-white border border-text-body/20 text-text-body/40 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold cursor-not-allowed">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
                  <span className="hidden xs:inline">Back</span>
                </span>
              )}

              <span className="text-xs sm:text-sm text-text-body/60 font-medium px-2">
                Page {currentPage} of {totalPages}
              </span>

              {currentPage < totalPages ? (
                <button onClick={() => changePage(currentPage + 1)} className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm cursor-pointer transition-all duration-200 hover:bg-primary-hover hover:shadow-lg active:scale-95">
                  <span className="hidden xs:inline">Next</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              ) : (
                <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/40 text-white px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold cursor-not-allowed">
                  <span className="hidden xs:inline">Next</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}