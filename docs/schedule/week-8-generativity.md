---
title: "Week 7: Generativity"
---

# Week 7: Generativity

## Tuesday, November 10th Overview

- Project 2 is due before class.

- Review of  Project 2 (cont)

- Volunteers to show yours or your partner's project to the class
- Introduce[Final Project](/assignments/final-project)
- Generativity Description
- What does generative art mean to you?

Review of past and present generative works.

- Non-computational Generative Works

[Hans Haacke's Condensation Cub](https://www.macba.cat/en/condensation-cube-1523)e

[Nicholas Schoffer's](https://monoskop.org/Nicolas_Sch%C3%B6ffer) Kinetic Sculptures

[Yoko Ono's Cut Piece](https://vimeo.com/106706806)

- Noise-based Generative Art
[Lillian Schwartz](http://lillian.com/) [Pixillation, 1970](https://vimeo.com/56480534)[Karl Sims'](https://www.karlsims.com/) Evolved Virtual Creatures, 1994:
[Marius Watz' Abstract 01](https://mariuswatz.com/)[Manolo Gamboa Naon:](https://katevass.medium.com/the-generative-art-that-wears-the-colors-of-the-soul-cc8d3081c199) [Interview on Artnome](https://www.artnome.com/news/2018/8/8/generative-art-finds-its-prodigy)[Memo Akten's Waves](https://www.memo.tv/works/waves/)

[Ling Dong's Procedural Fish Generator](https://github.com/LingDong-/fishdraw)

[Brian Eno Documentary](https://www.nytimes.com/2024/07/12/movies/brian-eno-documentary.html)

- Diffusion and other neural-based Generative Methods
[Nettrice Gaskin's AI/ photoshop-created portraiture](https://www.nettricegaskins.com/gallery)[Memo Akten's Waves 2.0 (latent diffusion)](https://www.memo.tv/works/waves-2-0-terra/)[Casey Reas' compressed cinema](https://reas.com/)

[Weidi Zhang's Cangjie's Poetry](https://www.zhangweidi.com/cangjiepoetry)

[Sougwen Chung's robotic drawing](https://sougwen.com/)

- Diffusion-based image generation software

[Midjourney](https://docs.midjourney.com/)/[DallE](https://openai.com/research/dall-e)/[Stable Diffusion](https://stablediffusionweb.com/WebUI#demo)

[Artists' response](https://www.nytimes.com/2023/07/15/technology/artificial-intelligence-models-chat-data.html)[Protecting Artists from GenAI training](https://glaze.cs.uchicago.edu/)

## Assignment

- Reading

- [Porquet et al. Copying style, Extracting value: Illustrators’ Perception of AI Style Transfer and its Impact on Creative Labor](https://drive.google.com/open?id=1G_0RJl8RP4Py5OmwzF3KujgrE6Zwf9JI&usp=drive_fs)

Complete a reading reflection in the [slide deck](https://docs.google.com/presentation/d/1ViEznOkF1dAoHcaWhA55JFzrJT8MeZE01VYyeKkOR-o/edit?slide=id.g24abd6a728b_0_0#slide=id.g24abd6a728b_0_0)

## Thursday, November 12th Overview

Reading Discussion- Porquet et al.

### Procedural Generativity

Gaussian Distributions to Drive Geometric Placement

Perlin Noise

Creating complex generative designs with simple noise patterns using particle systems

[All p5 examples on Github](https://github.com/CSVAD26/code_samples/tree/main/generativity/procedural_generativity_p5)

[Original Processing Examples](https://github.com/CSVAD26/code_samples/tree/main/generativity/procedural_generativity_processing)

### Additional Generative Examples

[Bohnacker's Generative Design - Randomness and Noise](http://www.generative-gestaltung.de/2/)

### Diffusion-based Generativity

--Disclaimer: ALL LLM tools, has been trained on [large amounts of image data](https://laion.ai/blog/laion-5b/) from the web, [much of which is subject to active dispute](https://interaktiv.br.de/ki-trainingsdaten/en/index.htmlhttps://www.theverge.com/2023/1/17/23558516/ai-art-copyright-stable-diffusion-getty-images-lawsuit)over[intellectual property](https://interaktiv.br.de/ki-trainingsdaten/en/index.htmlhttps://www.theverge.com/2023/1/17/23558516/ai-art-copyright-stable-diffusion-getty-images-lawsuit). For the purposes of this class, you have the opportunity to experiment with different models to critically investigate the affordances and limitations of LLM text-to-image generation. Be aware that artists and other creators have [actively solicited that their work be removed many training dataset](https://decrypt.co/150575/greg-rutkowski-removed-from-stable-diffusion-but-brought-back-by-ai-artists)s and/or [sued the companies responsible for training the models for copyright violation](https://www.theguardian.com/books/2025/apr/04/us-authors-copyright-lawsuits-against-openai-and-microsoft-combined-in-new-york-with-newspaper-actions). You may choose to refrain from using any LLM tools if you wish. With that being said, here are some resources:---

### Using a generative model to create bitmap images from a text prompt

Model: p[ollinations.ai](http://ollinations.ai): an open-source gen AI startup based in Berlin, providing the most easy-to-use, free text and image generation API available. No signups or API keys required. Benefit- FREE! Tradeoffs: smaller training dataset, less accurate image results.

Python script for prompting pollination [model to generate image](https://github.com/CSVAD26/code_samples/blob/main/generativity/diffusion_generativity/Model_API_scripts/prompt_image_poll.py)

P5+Websockets example to incorporate image generation from [text prompt in sketch](https://github.com/CSVAD26/code_samples/tree/main/generativity/diffusion_generativity/p5_image_generation)

### Using a generative model to create code from a text prompt

Model: Gemini 2.5 Flash (and variations): [One of Google's current models](https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/gemini/2-5-flash). Benefit: Free to use for returning text with an unpaid license. Tradeoffs: Without paying for tokens you have limited access to models- e.g. no image generation feasible, later more powerful models unavailable.

[Python script for listing available models for a given API key](https://github.com/CSVAD26/code_samples/blob/main/generativity/diffusion_generativity/Model_API_scripts/prompt_available_models_gemini.py)

[Python script for getting text output from a text prompt with Gemini](https://github.com/CSVAD26/code_samples/blob/main/generativity/diffusion_generativity/Model_API_scripts/prompt_text.py)

[P5+Websockets example to use Gemini prompting to create drawing commands for P5](https://github.com/CSVAD26/code_samples/tree/main/generativity/diffusion_generativity/p5_code_generation) (inspired by Siddarth)- uses code verification for security purposes. DO NOT execute arbitrary code generated by Gemini!

All Gemini examples require signing up for a (free) Gemini account to access an API key. Instructions are on the [readme](https://github.com/CSVAD26/code_samples/tree/main/generativity#gemini-api-python-setup)

### To do for Tuesday's Class

Create a slide for your final project proposal in this [slide deck](https://docs.google.com/presentation/d/1mrVe2PmQ0X3aP5baXC41zzsMqm177bAt5dj7ZKS_D4k/edit?slide=id.g3a6940f98a5_0_0#slide=id.g3a6940f98a5_0_0)
