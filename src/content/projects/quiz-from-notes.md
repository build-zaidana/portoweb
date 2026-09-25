---
title: Quiz from my lecture notes
phrase: a quiz app for lecture notes
summary: Paste class notes and get five practice questions, each linked to its source sentence. It runs in your browser, so your notes never leave your device.
status: idea
stack: [TypeScript, WebLLM, Zod]
startedAt: 2026-09-25
tint: tan
heroNote: every answer links back to the notes
art: form
callouts:
  - label: Notes stay on your device
    note: The model runs in the browser, so pasted notes are never sent to a server.
    x: 38
    y: 24
    side: left
  - label: Answers need a source
    note: A question is rejected if its answer doesn't point to a real sentence in the notes.
    x: 72
    y: 60
    side: right
---

## Problem

Re-reading notes feels like studying but tests almost nothing. Writing good practice questions takes longer than the reading itself.

## Approach

Paste a page of notes. The page splits it into numbered sentences and asks a small model, running in the browser with WebLLM, for five multiple-choice questions as JSON. A schema checks the output, and any question whose answer doesn't point to a real sentence is thrown away. Browsers without WebGPU see a clear message and a recorded example instead.

The MVP is four weeks, built after the first two projects.

## Result

Not built yet. The plan is to try it on one course for two weeks and count how many questions needed editing.

## Learnings

Nothing yet. This section fills in as I build.
