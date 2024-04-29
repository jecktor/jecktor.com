---
title: Clever-Fit
desc: Clever gym management system for fitness centers.
repo: https://github.com/jecktor/clever-fit
website: https://clever-fit.vercel.app
stack: React.js, Express.js, Node.js, TypeScript, Firebase, Stripe, shadcn/ui, IoT
hero: 1.webp
gallery: [2.webp, 3.webp, 4.webp]
pubDate: Mar 2024
---

_"Many fitness centers still rely on pen and paper to manage their members subscriptions. This isn't just inefficient and prone to human errors; it's also a hassle for the members themselves, who have to carry around a physical card to check in and bring their own lock to secure their belongings._

_Clever-Fit aims to solve these issues by providing a modern and user-friendly gym management system that allows fitness centers to manage their members, subscriptions, and lockers with ease, allowing staff and members to focus on what truly matters most."_

This was the final project for a university course. I was responsible for the Node.js backend and the Stripe integration, as well as the IoT embedded system that controls the lockers.

The backend was built with Express.js and Node.js, using TypeScript for type safety. It exposes a REST API that allows the frontend to manage members and get business statistics. It also handles the Stripe integration for processing payments using WebSockets for real-time updates when a payment is successful or a subscription is updated/canceled.

As for the embedded system, I used an ESP32 microcontroller to control the lockers. The microcontroller communicates with Firebase using Wi-Fi, allowing the frontend and the mobile app to open the lockers. The system uses a relay and a 12V lock to control the opening mechanism. Also, an ultrasonic sensor detects if the locker has items inside. _(It almost never works properly, btw.)_

Here's a funny story: The last weekend before the project's presentation, the ESP32's USB port broke while I was showcasing the system to my brother, and I don't even know why. I just softly pulled the cable, and it snapped. I tried to solder the pins back, but it was a lost cause. I ended up buying a new one the next day. I guess that's what I get for showing off.

![The piece of junk in question.](/works/clever-fit/susodicho.webp)

Anyway, back to the project.

The frontend is divided into two parts: a web app for the staff and a mobile app for the members.

The mobile app was built with React Native, and it allows members to open their assigned locker using their phone. It also shows the member's subscription status and allows them to check in by scanning a generated QR code.

Lastly, the admin dashboard was created using React.js and shadcn/ui for the UI components. It allows staff to manage members, subscriptions, lockers, and a detailed log of all gym activities.
