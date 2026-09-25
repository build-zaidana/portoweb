const monthYear = new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" });
const fullDate = new Intl.DateTimeFormat("en", {
  day: "numeric",
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

/** "September 2026" — used for /now and project timelines. */
export const formatMonth = (date: Date): string => monthYear.format(date);

/** "8 Sep 2026" — used for article dates. */
export const formatDate = (date: Date): string => fullDate.format(date);

/** Machine-readable value for <time datetime>. */
export const isoDate = (date: Date): string => date.toISOString().slice(0, 10);
