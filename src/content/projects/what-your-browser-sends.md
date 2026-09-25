---
title: What your browser sends
phrase: a page that shows what your browser sends
summary: Open one page and see the real request your browser just sent, with every line explained in plain words.
status: idea
stack: [Go, TypeScript, Netlify Functions]
startedAt: 2026-09-25
tint: sky
heroNote: cookies are never shown
art: request
callouts:
  - label: Your own request
    note: The page shows the request your browser just sent, not a diagram of someone else's.
    x: 40
    y: 18
    side: left
  - label: Nothing sensitive
    note: Only an allowlist of headers is shown. Cookies and tokens are never displayed or stored.
    x: 58
    y: 48
    side: right
featured: true
---

## Problem

Most explanations of HTTP are diagrams. People who use the web every day rarely see what their own browser actually sends when they open a page, so words like "header" and "request" stay abstract.

## Approach

A small Go function reflects the visitor's own request back as JSON, keeping only an allowlist of safe headers. A TypeScript page shows that request line by line and explains each part in plain words, for example what `Accept-Language` tells a server. Nothing is logged or stored.

The MVP is two weeks: the Go endpoint with tests that prove cookies never leak, and one page with explanations for about fifteen common headers.

## Result

Not built yet. This is the first project in the "How Things Work" series.

## Learnings

Nothing yet. This section fills in as I build.
