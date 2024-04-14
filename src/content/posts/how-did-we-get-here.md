---
title: How did we get here?
desc: Anecdotes from my early programming days.
pubDate: Apr 14, 2024
---

It was 8 years ago, in informatics class. I think I was 13 at the time.

I was minding my own business, probably drawing doodles of my friends in MS Paint. Then suddenly, the instructor handed us a couple sheets with a bunch of code. One of the blocks read something like this:

```vb
Public Property NumberOfSegments() As clsSegment()
    Get
        Dim cSegments(qSegments.Count - 1) As clsSegment
        qSegments.CopyTo(cSegments, 0)
        Return cSegments
    End Get
        Set(value As clsSegment())
        End Set
End Property
```

At first glance, I couldn’t make sense of it. The instructor _(poorly)_ explained that all that code was a simple snake game, and we were gonna copy the whole thing line by line into Visual Studio.

It was one of the worst programming experiences I’ve ever had.

From Visual Studio taking forever to open on the crappy school computers, to the sheets of code being mostly incomplete and passed around the classroom out of order. At the end of the class, all I had was a broken game that didn’t even work, and I thought to myself:

> _"Man, programming sure is lame."_

And I don’t blame myself; it was Visual Basic, after all.

After that, not much happened. I would occasionally make something using GameMaker Studio, but I never got too far. I didn’t really get into programming again again until I was 15, when I chose it as a technical career in high school.

Now's when the good stuff begins.

We started with C, writing simple programs. I don't recall most of them, but I do remember that each time we wrote a program in Code::Blocks, we also had to write it down by hand in a notebook. Because god forbid we forget the syntax of `printf`.

But that's not the worst part. The instructor was such a madman that one day he made us buy a flipchart to draw a flowchart of a program that compared 10 numbers and printed the highest and lowest. We spent the whole class drawing the damn thing, which I'm sure nobody understood because everything was so cramped it barely fit. All of that for the instructor to immediately introduce us to chained conditionals and loops in the next class.

> _"Hey, remember that flowchart you drew? That can be done in 10 lines of code with a loop."_

Well, at least he didn't make us write the code in the notebook.

The next semester we learned a bit of Java using NetBeans. Now, just like in middle school, the instructor didn't know how to teach, so at the end of the day, we were just copying code from sheets again.

One time I forgot my USB drive where I had all my shitty NetBeans applications. Given my luck, that was the day we had to present our projects. I ended up writing all of them from scratch while the instructor was complaining about my classmates' projects. I finished 30 minutes before the class ended, and one of my friends lent me his USB drive. I copied my programs and presented them. The instructor didn't notice a thing.

Man, if only I had known about Git back then.

In my last year of high school, we did some web development. And you guessed it. It's DreamWeaver time, baby! And I'm not talking about the good ol' Macromedia Dreamweaver; I'm talking about post-Adobe DreamWeaver CS6. The one that made you wish you were using Notepad instead.

And again, we had to write all the code by hand in a notebook. HTML, CSS, and JavaScript. Everything. First, we had to write the code in the notebook _(because that's how you learn, right?)_. Then in DreamWeaver. And wanna know the best part? If you made a mistake, you had to write it all over again. From the beginning.

**Every. Single. Time.**

And that's how I learned to write code. By writing it down on paper and copying it to a computer. I got my worthless technician degree without even knowing what an array or a function were. But hey, at least I knew how to draw a flowchart.
