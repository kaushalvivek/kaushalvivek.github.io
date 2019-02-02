---
layout: post
title: "Movie Ticket Availability Notifier"
date: 2018-11-24 07:32
description: Cronjob for notification on availability of tickets for a new movie.
image: /assets/images/movie.png # Add image post (optional)
headerImage : true
tags:
- Python
- Scripts
- Open Source
author: vivekkaushal
category: projects
projects: true
---


There have been times when I wanted to, but could not watch a movie on its first weekend because I was late in booking the tickets. I do not like missing out on early shows, and felt that something needs to be done about this. Hence, this project. This cronjob will notify you, when tickets to the target movie are available, so you never miss a first-day-first-show again.

Fill in the movie, your location and set the cronjob. BookMyShow is used for scraping availability, so check if your city has bookings through BMS before using.

Checkout the code and deployment instructions [here.](https://github.com/kaushalvivek/Ticket-Availability-Notifier)