---
layout: post
title: "IIIT Courier Notification System"
date: 2018-12-14 07:32
description: A simple notification system to inform when a new parcel is delivered.
image: /assets/images/courier.png # Add image post (optional)
headerImage: true
tags:
- Scripts
- Python
- Selenium
- Open Source
- Automation
author: vivekkaushal
category: projects
projects: true
---
![python](https://img.shields.io/badge/python-3-green.svg)

IIIT Hyderabad has a central location where all letters and parcels addressed to residents are stored. There is an intranet portal where one can check for any new parcels addressed to one. The problem is that, it seems trivially easy to setup a parallel mailing system, such that upon delivery of a letter/courier one would get an instant notification on the official institute ID. Unfortunately, nothing of sorts has been deployed yet. This script is a fix for that.

This script is a cron job and has been written with an intention to notify you via email whenever you get a new parcel, courier, letter etc. at IIIT Hyderabad, and your delivery is logged at Nilgiri. Read up ahead for usage instructions and setup.

Checkout the code and deployment instructions [here.](https://github.com/kaushalvivek/IIIT-Courier-Notification)