---
layout: post
comments: true
title: Google Script - An Upload Portal
date: 2017-12-14 05:32:20 +0530
description: A webapp coded in Google Script.
image: /img/google.jpg # Add image post (optional)
tags: [Code]
author: Vivek Kaushal
---

[Megathon][megathon]{:target="_blank"} is an annual Hackaton that we, at E-Cell, organise. Being subtle, as I am, it gives me immense pleasure to tell you that it is one of the largest student-organised hackthon in India. Anyway, coming to the point, I headed the technical department of Megathon'17, and on the event day, a situation came up.

We were aware that we had more registrations than anticipated, but what we failed to see was the amount of time it was going to take to manually collect and evaluate the ideas. Hence, I was called upon to save the day (heroic music in the background), and I coded this portal in Google Script for uploads.

## Features

**Security**  
The upload is verified by a captcha to nullify bots and crawlers.

**Customizability**  
The code is highly customisable to suit upload needs, one can specify upload size, format among other details.

**Classification**  
Different files can be named differently as per requirements, here, there were five categories, so each upload is saved with a prefix for the category it belongs to.

Do check out the code [here][github]{:target="_blank"}, it's Open Source.

[github]: https://github.com/kaushalvivek/GSUploader
[megathon]: http://www.megathon.tech