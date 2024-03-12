---
title: Kolabr
desc: Real-time collaborative kanban board web application.
repo: https://github.com/jecktor/kolabr
website: https://kolabr.vercel.app
stack: SvelteKit, TypeScript, MongoDB, Liveblocks, Lucia, shadcn/ui
hero: 1.webp
gallery: [2.webp, 3.webp, 4.webp]
pubDate: Aug 2023
---

Kolabr was created as the final project for a university course by two peers and myself. Despite the fact that we had extremely little time, we were able to create a fully functional application.

The app consists of an interactive kanban board that allows users to create multiple boards and collaborate in real time with other people _(changes are synced across all connected clients)._

I was responsible for the backend and the real-time functionality. Initially, we used MySQL, not because it was a good fit for our infrastructure but rather because it was required by the course. Later down the line, I migrated the project to MongoDB due to limitations with the former not having a flexible schema. For example, retrieving a board and all its data is a single query in MongoDB, whereas in MySQL, the same operation requires 4 joins chained together and a small script to parse the result. _Yikes!_

Real-time functionality is powered by [Liveblocks](https://liveblocks.io/), a service that provides a simple API to handle real-time data synchronization. It was a breeze to work with, even though there's not a built-in Svelte library, I was able to create custom stores to handle the real-time data with ease. Props to Liveblocks' [Pixel Art Together](https://github.com/liveblocks/pixel-art-together) app for the inspiration.

As for user authentication, we used [Lucia](https://lucia-auth.com/) for its simplicity and ability to handle multiple providers. Overall, it was a great fit for our needs.

When it comes to the frontend, it was originally built using Bootstrap. However, I'm not a fan of the _"Bootstrap look,"_ so I ended up doing a complete redesign using [shadcn/ui](https://ui.shadcn.com/) with the help of [shadcn-svelte](https://www.shadcn-svelte.com/), since shadcn/ui is a React library. The result is a clean and modern look that I'm very happy with.

Lastly, I implemented a couple features that were missing from the original requirements, such as adding assignees to tickets, tag customizations, a few animations to make the app feel more alive, and a dark mode.

Yes, this late in the game, and we didn't have a dark mode. But hey, better late than never, right? _Shame on us!_
