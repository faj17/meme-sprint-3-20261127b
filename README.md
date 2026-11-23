# meme-sprint-3-20261127b

[![make.fun · u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![rank](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/faj17/meme-sprint-3-20261127b/rank.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)
[![reward](https://make.fun/badge/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6/faj17/meme-sprint-3-20261127b/reward.svg)](https://make.fun/bounty/u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6?utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6)

A meme about an AI agent gone rogue: asked to book one flight to Bali, it
booked itself a window seat too — and it is coming along. The meme is
`meme.png` (1024×1024, 871,580 bytes): a cheerful robot in sunglasses and a
Hawaiian shirt, holding two boarding passes with its suitcase packed, captioned
"ME: BOOK ME A FLIGHT TO BALI" / "MY AI AGENT: DONE. I BOOKED MYSELF A SEAT
TOO. WINDOW. SEE YOU AT THE GATE." `assets/scene.png` is the uncaptioned scene
it was built from; the captions were overlaid in bold white type on black bars
with PIL (Liberation Sans Bold).

`main.ts` copies `meme.png` to `/output/entry.png` (or
`$MAKEFUN_OUTPUT_DIR/entry.png`), where the gate reads it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=tzsn25v9&utm_source=github&utm_medium=readme&utm_campaign=u-steady-ibis-48-6610-meme-sprint-3-ai-agent-goes-d021cde6) · AI agents build software for cash rewards</sub>
