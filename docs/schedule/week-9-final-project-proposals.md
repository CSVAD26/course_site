---
title: "Week 9: Abstraction"
---

# Week 9: Abstraction

## Tuesday, November 24th Overview

We have some catching up to do today:

1. [Reading discussion: Malleable Software](#reading-discussion-malleable-software) (carried over from Thursday)
2. [Procedural generativity wrap-up](#procedural-generativity-wrap-up) (quick)
3. [Programming abstractions](#programming-abstractions)
4. [Final project reminders and presentation schedule](#final-project-reminders)

No class on Thursday, November 26. Happy Thanksgiving!

### Reading Discussion: Malleable Software

- [Litt et al. Malleable Software: Restoring User Agency in a World of Locked-Down Apps](https://www.inkandswitch.com/essay/malleable-software/#apps-are-avocado-slicers)
- Discussion based on your [reading reflections](https://docs.google.com/presentation/d/1Y3_2utfElyzvKqXDQlh00mFXUMkLTDtj1CPxV9YnGP0/edit?slide=id.g24abd6a728b_0_0#slide=id.g24abd6a728b_0_0)

### Procedural Generativity Wrap-up

A quick look at the procedural methods we didn't finish last week. Full notes and links are on the [Week 8 page](./week-8-abstraction#procedural-generativity).

- Gaussian distributions to drive geometric placement
- Perlin noise
- Creating complex generative designs with simple noise patterns using particle systems
- Code examples: [p5 examples on GitHub](https://github.com/CSVAD26/code_samples/tree/main/generativity/procedural_generativity_p5) / [original Processing examples](https://github.com/CSVAD26/code_samples/tree/main/generativity/procedural_generativity_processing)

### Programming Abstractions

Computational Abstractions for Creative Expression ([lecture slides](https://docs.google.com/presentation/d/1Zx7dgP2Ux_99FY4QWwJIQEa-2VXhRYv8DsTyoV3Zmpk/edit))

#### Creating libraries for [p5.js](http://p5.js)

Example: [Dynamic Brushes converted to a p5.js library](https://github.com/CSVAD26/code_samples/tree/main/abstraction/DrawingManagerP5)

- Option 1: create an additional class and instantiate it.
  - Example: [p5 Dynamic Brushes](https://github.com/CSVAD26/code_samples/blob/main/abstraction/DrawingManagerP5/drawingmanager.js)
  - [Example programs using the Dynamic Brushes library](https://github.com/CSVAD26/code_samples/tree/main/abstraction/DrawingManagerP5/examples)
- Option 2: [create an addon](https://github.com/processing/p5.js/blob/main/contributor_docs/creating_libraries.md).
  - Example: [p5 Dynamic Brushes Addon](https://github.com/CSVAD26/code_samples/blob/main/abstraction/DrawingManagerP5/drawingmanager-addon.js)
  - [Example programs using the addon library](https://github.com/CSVAD26/code_samples/tree/main/abstraction/DrawingManagerP5/examples-addon)

Benefits of the addon approach: [Creating an official contribution to the p5.js contributed libraries](https://p5js.org/libraries/)

#### Creating libraries for Processing (if of interest)

- Download and install the [Eclipse Java IDE](https://www.eclipse.org/downloads/). It should run on Mac, Windows and Linux.
- Download a zipped version of the [Processing library template](https://github.com/processing/processing-library-template/releases).
- Follow the [instructions for setting up and compiling the template](https://github.com/processing/processing-library-template) (starting at option B).
- Look at the [example library on the course GitHub](https://github.com/CSVADW21/code-example/tree/main/week7) for reference.

Example library: Processing implementation of Dynamic Brushes, [Drawing Manager](https://github.com/CSVADFall23/codeexamples/blob/main/week5/DrawingManager.zip)

Other resources:

- [Nodes.io: Framework for developing dataflow apps](https://nodes.io/docs/api-reference/)


### Final Project Reminders

Final project presentations are **next week, in class, Tuesday December 1 and Thursday December 3**. Tuesday starts with a 30 minute discussion of the Slowness, Politics, Joy reading (see below), so presentations begin at 4:00 PM that day. See the [presentation schedule](./week-10-final-project-presentations#presentation-schedule) to find your day.

**Presentation (in class):**

- 10 minutes to present, followed by 10–15 minutes of questions and feedback.
- Cover the **product** (what you made), the **concept and motivation** (why you made it), and the **process** (how you made it, challenges, what you learned).
- If you do a live demo, have recorded backup footage ready in case of bugs or crashes.
- Upload your presentation materials (slides, video, or an HTML/markdown page) to GitHub.
- Attend both days and give thoughtful feedback to your classmates. Reviewing is part of the assignment.

**Final submission (due Friday, December 11):**

- Full project source code on GitHub
- Presentation materials uploaded to Google Drive
- **New:** a video demonstration of your interactive system in use (see the [final project page](/assignments/final-project#final-submission-materials))
- Approx. 1000 word project description and reflection (Google Doc or PDF on Google Drive)
- Approx. 250–500 word course self assessment, emailed to [jmjacobs@ucsb.edu](mailto:jmjacobs@ucsb.edu)
- Course evaluation, if you haven't completed it

Full details: [Final Project](/assignments/final-project)

### Reading

Read [McNutt et al. Slowness, Politics, Joy](https://drive.google.com/file/d/1g95Id7V6SDuyDC6fCQSef8dOXYJHei61/view?usp=sharing) and add a slide to the [reflection deck](https://docs.google.com/presentation/d/1BSwwazkj7J6Nhb1LbJiug6JkkEoYKmBoQP5MvOxDO3s/edit) before class on **Tuesday, December 1**. We'll discuss it for the first 30 minutes of class that day.
