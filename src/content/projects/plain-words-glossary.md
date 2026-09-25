---
title: Plain-words glossary
phrase: a glossary of software terms in plain words
summary: Software terms explained for readers aged 14 to 18, one short card per term, drafted with a local AI model and edited by me.
status: idea
stack: [Python, Ollama, Markdown]
startedAt: 2026-09-25
tint: sage
heroNote: every card is checked by a person
art: cards
callouts:
  - label: One term per card
    note: At most 60 words and one everyday comparison, short enough to read on a phone.
    x: 34
    y: 26
    side: left
  - label: A person has the last word
    note: The model only writes a draft. A term goes live after I edit and approve it.
    x: 70
    y: 48
    side: right
---

## Problem

Teenagers who get curious about technology meet words like API, cache, and deploy, and most explanations use more jargon to explain the jargon. Existing glossaries are written for developers.

## Approach

A Python command-line tool asks a model running locally (through Ollama) for a first draft of each term, under strict rules: at most 60 words, one everyday comparison, no other technical terms. Automatic checks measure length, a readability score, and banned jargon. I edit and approve every card before it becomes a Markdown page on this site.

The MVP is three weeks and twenty reviewed terms.

## Result

Not built yet.

## Learnings

Nothing yet. This section fills in as I build.
