---
title: How I read an error message now (and how I used to)
phrase: how I read error messages
description: A sample article showing the writing layout. The real first post will replace it.
publishedAt: 2026-09-08
tags: [learning, debugging]
highlight: read it from the top, in three passes
sample: true
---

> Sample article. It exists to test the reading layout, the newsletter form, and the RSS feed.

When an error appears, I used to copy the last line into a search engine. Now I read it from the top, in three passes.

## Pass one: where

The file and line number. Before anything else, open that exact line.

## Pass two: what

The error type. `TypeError` and `SyntaxError` point to very different problems.

## Pass three: why

The message itself, read slowly. Most of the time it already says what is wrong.

```ts
const user = users.find((u) => u.id === id);
console.log(user.name); // TypeError: Cannot read properties of undefined
```
