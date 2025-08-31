---
title: Hello-World
date: 2025-08-24
tags:
  - introduction
  - about
---

# Introduction

Hello everyone, it’s currently `2:24 am` as I’m writing this *Introduction* section.

My name is Abhiram, but you might know me as **TheDummyUser**, my GitHub alias. I currently work as a React/React Native developer.

I’m quite proficient in JavaScript and TypeScript, but since I already use them for 9 hours a day, 5 days a week at work, I don’t always want to code in them during my free time. For a change, I started learning Go, but eventually I got bored of it too. So right now, I honestly don’t know exactly what I’m doing or what I’ll do next. As a small shift, I thought of writing these blogs about the things I’m currently learning or experimenting with, mostly around programming and Linux.

At the moment, I’m planning to do more recreational programming and dive into DSA. Let’s see how long I keep up with it — or if I eventually give up.

---

# About the Linux system I use

I use [NixOS](https://nixos.org). Unlike Arch, Debian, or other distros, NixOS is a completely different entity.

NixOS is a **declarative operating system**, which means a single configuration file is enough to define your entire system. For example, installing new packages is as simple as adding them to your configuration. Since it’s reproducible, the exact same configuration can be used to replicate or clone your system within minutes.

Now, you might ask: *why not just use another Linux distro?* Here’s why — let’s say you update your system and a package stops working. On most distros, the only fix is to wait for a patch from the package maintainer or spend hours debugging it yourself. But in NixOS, every configuration update creates a snapshot of your system. That makes it super easy to roll back if something breaks. Plus, package conflicts are practically nonexistent — even with Electron apps like Discord or VS Code.

Another neat thing: Nix packages are isolated by default, so you’ll often download a separate Electron runtime for each app that needs it.

That’s it for now about my OS. I’ll dive deeper into NixOS in a future blog.

As for my editor of choice: **GNU Emacs**.

I know my setup is a little unusual, but I think the tools I use are awesome — they’ve stood the test of time. Some of the original Linux legends still swear by Emacs. And hey, at least I’m not using Linux From Scratch (LFS)…
