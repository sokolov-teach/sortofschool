---
title: Equation renderer (TeX to SVG and PNG)
date: 2024-12-16
draft: false
tags: 
weight: 1
author: Sviatoslav Sokolov
header_img: 
header_img_descript: 
toc: true
---
<style>
	.download {
		padding-top: 1em; 
		justify-content: space-evenly;  
		display: flex;
	}

	div.equation {
		padding-top: 1em;
		padding-bottom: 1em;
		margin-top: 1em;
	}

	.equation{
	  font-family: sans-serif;
	  font-size: 1.2em;
	  text-align: center;
	}

	textarea {
		width:100%;
	}
</style>
<script src="tex_to_svg.js"></script>

## Tool
This is a tool I frequently use to create visually appealing equations for presentations, videos, and animations. It converts TeX input into SVG and PNG formats, allowing you to easily incorporate mathematical equations into various digital formats. The tool offers two color options: black and white, making the equations suitable for different backgrounds and visual contexts.

> [!WARNING]+ Please note that the **equations are rendered with transparent backgrounds**; 
> therefore, the white version may not be visible on a white background, and the black version may not be visible on a black background.

**Enter TeX equation:**
<textarea id="latex-input" rows="4" cols="45">f(x) = \frac{1}{\sigma \sqrt{2\pi} } e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}</textarea><br>
<label><input type="checkbox" id="white-checkbox"> Create white version</label>
<button id="convert-btn">RENDER</button>

<div class = "equation" id="svg-output"></div>
<div class = "download">
	<a id="download-link" download="equation.svg" style="display: none;">Download SVG</a>
	<a id="download-png-link" download="equation.png" style="display: none;">Download PNG</a>
</div>

## Showcase
---

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| $F(n) = \begin{cases} n, & n > 2026 \\ n \times F(n + 2), & n \leq 2026 \end{cases}$ |
| `F(n) = \begin{cases} n, & n > 2026 \\ n \times F(n + 2), & n \leq 2026 \end{cases}` |
| $^{238}_{92}\text{U} \xrightarrow{\alpha} \, ^{A}_{Z}\text{X} + ^{4}_{2}\text{He}$   |
| `^{238}_{92}\text{U} \xrightarrow{\alpha} \, ^{A}_{Z}\text{X} + ^{4}_{2}\text{He}`   |

---

|                                                     |                                                     |
| --------------------------------------------------- | --------------------------------------------------- |
| $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$            | `x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}`            |
| $a^2 + b^2 = c^2$                                   | `a^2 + b^2 = c^2`                                   |
| $e^{i\pi} + 1 = 0$                                  | `e^{i\pi} + 1 = 0`                                  |
| $S_n = \frac{n(a_1 + a_n)}{2}$                      | `S_n = \frac{n(a_1 + a_n)}{2}`                      |
| $\int\limits_a^b f(x) dx$                           | `\int\limits_a^b f(x) dx`                           |
| $\sum\limits_{n=1}^{\infty} \frac{1}{n^2}$          | `\sum\limits_{n=1}^{\infty} \frac{1}{n^2}`          |
| $\lim\limits_{x \to 0} \frac{\sin x}{x}$            | `\lim\limits_{x \to 0} \frac{\sin x}{x}`            |
| $\begin{cases} x + y = 1 \\ x - y = 3 \end{cases}$  | `\begin{cases} x + y = 1 \\ x - y = 3 \end{cases}`  |
| $\vec{p} = (6, 4)$                                  | `\vec{p} = (6, 4)`                                  |
| $\frac{3\pi}{2} < \beta < 2\pi$                     | `\frac{3\pi}{2} < \beta < 2\pi`                     |
| $a, b, c \in \mathbb{Z}$                            | `a, b, c \in \mathbb{Z}`                            |
| $25 \cdot \log_{12}{\sqrt[5]{144}}$                 | `25 \cdot \log_{12}{\sqrt[5]{144}}`                 |
| $\sqrt[6]{3^7} \cdot 144^\frac{11}{12}$             | `\sqrt[6]{3^7} \cdot 144^\frac{11}{12}`             |
| $f^{(n)} \equiv f\overbrace{''^{...}{'}}^{n}(x)$    | `f^{(n)} \equiv f\overbrace{''^{...}{'}}^{n}(x)`    |
| $a^n = \underbrace{a \times ... \times a}_\text{n}$ | `a^n = \underbrace{a \times ... \times a}_\text{n}` |
## Cheatsheet
---
### Lowercase Greek
---

|               |               |             |             |             |             |            |            |
| ------------- | ------------- | ----------- | ----------- | ----------- | ----------- | ---------- | ---------- |
| $\alpha$      | `\alpha`      | $\beta$     | `\beta`     | $\gamma$    | `\gamma`    | $\delta$   | `\delta`   |
| $\epsilon$    | `\epsilon`    | $\zeta$     | `\zeta`     | $\eta$      | `\eta`      | $\theta$   | `\theta`   |
| $\iota$       | `\iota`       | $\kappa$    | `\kappa`    | $\lambda$   | `\lambda`   | $\mu$      | `\mu`      |
| $\nu$         | `\nu`         | $\xi$       | `\xi`       | $o$         | `o`         | $\pi$      | `\pi`      |
| $\rho$        | `\rho`        | $\sigma$    | `\sigma`    | $\tau$      | `\tau`      | $\upsilon$ | `\upsilon` |
| $\phi$        | `\phi`        | $\chi$      | `\chi`      | $\psi$      | `\psi`      | $\omega$   | `\omega`   |
| $\varepsilon$ | `\varepsilon` | $\varkappa$ | `\varkappa` | $\varphi$   | `\varphi`   | $\varpi$   | `\varpi`   |
| $\varrho$     | `\varrho`     | $\varsigma$ | `\varsigma` | $\vartheta$ | `\vartheta` |            |            |
### Uppercase Greek
---

|          |          |          |          |          |          |            |            |
| -------- | -------- | -------- | -------- | -------- | -------- | ---------- | ---------- |
| $\Gamma$ | `\Gamma` | $\Delta$ | `\Delta` | $\Theta$ | `\Theta` | $\Lambda$  | `\Lambda`  |
| $\Xi$    | `\Xi`    | $\Pi$    | `\Pi`    | $\Sigma$ | `\Sigma` | $\Upsilon$ | `\Upsilon` |
| $\Phi$   | `\Phi`   | $\Psi$   | `\Psi`   | $\Omega$ | `\Omega` |            |            |
### Hebrew
---

|            |            |          |          |
| ---------- | ---------- | -------- | -------- |
| $\digamma$ | `\digamma` | $\aleph$ | `\aleph` |
| $\daleth$  | `\daleth`  | $\gimel$ | `\gimel` |
| $\beth$    | `\beth`    |          |          |
### Styles
---

| Style        | Code           | Characters                                                       |
| ------------ | -------------- | ---------------------------------------------------------------- |
| Caligraphic: | `\mathcal{A}`  | $\mathcal{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}$  |
| Mathbb:      | `\mathbb{A}`   | $\mathbb{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}$   |
| Mathfrak:    | `\mathfrak{A}` | $\mathfrak{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}$ |
| Sans serif:  | `\mathsf{A}`   | $\mathsf{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}$   |
| Bold:        | `\mathbf{A}`   | $\mathbf{A B C D E F G H I J K L M N O P Q R S T U V W X Y Z}$   |
### Delimiters
---

|                          |                       |                         |                       |
| ------------------------ | --------------------- | ----------------------- | --------------------- |
| $\left( a + b \right)$   | `( ... )`             | $\lvert a+b \rvert$     | `\lvert ... \rvert`   |
| $\left\{ a + b \right\}$ | `\{ ... \}`           | $\lVert a + b \rVert$   | `\lVert ... \rVert`   |
| $\left[ a + b \right]$   | `[ ... ]`             | $\lceil a + b \rceil$   | `\lceil ... \rceil`   |
| $\langle a + b \rangle$  | `\langle ... \rangle` | $\lfloor a + b \rfloor$ | `\lfloor ... \rfloor` |
### Big Symbols
---

|             |             |              |              |
| ----------- | ----------- | ------------ | ------------ |
| $\int$      | `\int`      | $\oint$      | `\oint`      |
| $\sum$      | `\sum`      | $\prod$      | `\prod`      |
| $\bigcup$   | `\bigcup`   | $\bigcap$    | `\bigcap`    |
| $\bigoplus$ | `\bigoplus` | $\bigotimes$ | `\bigotimes` |
| $\bigvee$   | `\bigvee`   | $\bigwedge$  | `\bigwedge`  |
| $\coprod$   | `\coprod`   | $\biguplus$  | `\biguplus`  |
| $\iint$     | `\iint`     | $\bigodot$   | `\bigodot`   |
| $\bigsqcup$ | `\bigsqcup` |              |              |
### Standard Function Names
---

|           |           |           |           |           |           |
| --------- | --------- | --------- | --------- | --------- | --------- |
| $\sin$    | `\sin`    | $\cos$    | `\cos`    | $\tan$    | `\tan`    |
| $\csc$    | `\csc`    | $\sec$    | `\sec`    | $\cot$    | `\cot`    |
| $\arcsin$ | `\arcsin` | $\arccos$ | `\arccos` | $\arctan$ | `\arctan` |
| $\sinh$   | `\sinh`   | $\cosh$   | `\cosh`   | $\tanh$   | `\tanh`   |
| $\coth$   | `\coth`   | $\exp$    | `\exp`    | $\log$    | `\log`    |
| $\ln$     | `\ln`     | $\max$    | `\max`    | $\min$    | `\min`    |
| $\lim$    | `\lim`    | $\gcd$    | `\gcd`    | $\dim$    | `\dim`    |
| $\det$    | `\det`    | $\Pr$     | `\Pr`     | $\arg$    | `\arg`    |
| $\hom$    | `\hom`    | $\inf$    | `\inf`    | $\ker$    | `\ker`    |
| $\lg$     | `\lg`     | $\liminf$ | `\liminf` | $\limsup$ | `\limsup` |
| $\sup$    | `\sup`    | $\deg$    | `\deg`    |           |           |
### Accents
---

|                       |                       |                      |                      |
| --------------------- | --------------------- | -------------------- | -------------------- |
| $\hat{a}$             | `\hat{a}`             | $\tilde{a}$          | `\tilde{a}`          |
| $\bar{a}$             | `\bar{a}`             | $\vec{a}$            | `\vec{a}`            |
| $\dot{a}$             | `\dot{a}`             | $\ddot{a}$           | `\ddot{a}`           |
| $\acute{a}$           | `\acute{a}`           | $\grave{a}$          | `\grave{a}`          |
| $\breve{a}$           | `\breve{a}`           | $\check{a}$          | `\check{a}`          |
| $\overrightarrow{AB}$ | `\overrightarrow{AB}` | $\overleftarrow{AB}$ | `\overleftarrow{AB}` |
| $\overline{abc}$      | `\overline{abc}`      | $\underline{abc}$    | `\underline{abc}`    |
| $\overbrace{abc}$     | `\overbrace{abc}`     | $\underbrace{abc}$   | `\underbrace{abc}`   |
| $\widetilde{abc}$     | `\widetilde{abc}`     | $\widehat{abc}$      | `\widehat{abc}`      |
### Binary Operations
---

|                   |                   |                |                |              |              |                    |                    |
| ----------------- | ----------------- | -------------- | -------------- | ------------ | ------------ | ------------------ | ------------------ |
| $+$               | `+`               | $-$            | `-`            | $\pm$        | `\pm`        | $\mp$              | `\mp`              |
| $\cdot$           | `\cdot`           | $\times$       | `\times`       | $\div$       | `\div`       | $\ast$             | `\ast`             |
| $\cup$            | `\cup`            | $\cap$         | `\cap`         | $\sqcup$     | `\sqcup`     | $\sqcap$           | `\sqcap`           |
| $\vee$            | `\vee`            | $\wedge$       | `\wedge`       | $\oplus$     | `\oplus`     | $\otimes$          | `\otimes`          |
| $\odot$           | `\odot`           | $\bigcirc$     | `\bigcirc`     | $\diamond$   | `\diamond`   | $\bullet$          | `\bullet`          |
| $\star$           | `\star`           | $\amalg$       | `\amalg`       | $\uplus$     | `\uplus`     | $\triangleleft$    | `\triangleleft`    |
| $\triangleright$  | `\triangleright`  | $\unlhd$       | `\unlhd`       | $\unrhd$     | `\unrhd`     | $\bigtriangledown$ | `\bigtriangledown` |
| $\bigtriangleup$  | `\bigtriangleup`  | $\setminus$    | `\setminus`    | $\centerdot$ | `\centerdot` | $\Box$             | `\Box`             |
| $\circledast$     | `\circledast`     | $\boxplus$     | `\boxplus`     | $\boxminus$  | `\boxminus`  | $\boxtimes$        | `\boxtimes`        |
| $\bot$            | `\bot`            | $\top$         | `\top`         | $\dotplus$   | `\dotplus`   | $\divideontimes$   | `\divideontimes`   |
| $\square$         | `\square`         | $\barwedge$    | `\barwedge`    | $\veebar$    | `\veebar`    | $\circledcirc$     | `\circledcirc`     |
| $\Cap$            | `\Cap`            | $\Cup$         | `\Cup`         | $\intercal$  | `\intercal`  | $\rightthreetimes$ | `\rightthreetimes` |
| $\leftthreetimes$ | `\leftthreetimes` | $\wr$          | `\wr`          | $\dagger$    | `\dagger`    | $\ddagger$         | `\ddagger`         |
| $\curlywedge$     | `\curlywedge`     | $\curlyvee$    | `\curlyvee`    | $\oslash$    | `\oslash`    | $\ominus$          | `\ominus`          |
| $\circ$           | `\circ`           | $\circleddash$ | `\circleddash` | $\boxdot$    | `\boxdot`    |                    |                    |
### Miscellaneous Symbols
---

|                   |                   |                  |                  |                      |                      |
| ----------------- | ----------------- | ---------------- | ---------------- | -------------------- | -------------------- |
| $\infty$          | `\infty`          | $\forall$        | `\forall`        | $\Bbbk$              | `\Bbbk`              |
| $\wp$             | `\wp`             | $\nabla$         | `\nabla`         | $\exists$            | `\exists`            |
| $\bigstar$        | `\bigstar`        | $\angle$         | `\angle`         | $\partial$           | `\partial`           |
| $\nexists$        | `\nexists`        | $\diagdown$      | `\diagdown`      | $\measuredangle$     | `\measuredangle`     |
| $\eth$            | `\eth`            | $\emptyset$      | `\emptyset`      | $\diagup$            | `\diagup`            |
| $\sphericalangle$ | `\sphericalangle` | $\clubsuit$      | `\clubsuit`      | $\varnothing$        | `\varnothing`        |
| $\Diamond$        | `\Diamond`        | $\complement$    | `\complement`    | $\diamondsuit$       | `\diamondsuit`       |
| $\imath$          | `\imath`          | $\Finv$          | `\Finv`          | $\triangledown$      | `\triangledown`      |
| $\heartsuit$      | `\heartsuit`      | $\jmath$         | `\jmath`         | $\Game$              | `\Game`              |
| $\triangle$       | `\triangle`       | $\spadesuit$     | `\spadesuit`     | $\ell$               | `\ell`               |
| $\hbar$           | `\hbar`           | $\vartriangle$   | `\vartriangle`   | $\hslash$            | `\hslash`            |
| $\blacklozenge$   | `\blacklozenge`   | $\cdots$         | `\cdots`         | $\iiiint$            | `\iiiint`            |
| $\iiint$          | `\iiint`          | $\lozenge$       | `\lozenge`       | $\blacksquare$       | `\blacksquare`       |
| $\vdots$          | `\vdots`          | $\ldots$         | `\ldots`         | $\iint$              | `\iint`              |
| $\mho$            | `\mho`            | $\blacktriangle$ | `\blacktriangle` | $\blacktriangledown$ | `\blacktriangledown` |
| $\sharp$          | `\sharp`          | $\prime$         | `\prime`         | $\blacktriangle$     | `\blacktriangle`     |
| $\backprime$      | `\backprime`      | $\Im$            | `\Im`            | $\flat$              | `\flat`              |
| $\square$         | `\square`         | $\Re$            | `\Re`            | $\natural$           | `\natural`           |
| $\surd$           | `\surd`           | $\circledS$      | `\circledS`      |                      |                      |
### Relation Symbols
---

|           |           |               |               |               |               |             |             |
| --------- | --------- | ------------- | ------------- | ------------- | ------------- | ----------- | ----------- |
| $\equiv$  | `\equiv`  | $\leq$        | `\leq`        | $\geq$        | `\geq`        | $\perp$     | `\perp`     |
| $\cong$   | `\cong`   | $\prec$       | `\prec`       | $\succ$       | `\succ`       | $\mid$      | `\mid`      |
| $\neq$    | `\neq`    | $\preceq$     | `\preceq`     | $\succeq$     | `\succeq`     | $\parallel$ | `\parallel` |
| $\sim$    | `\sim`    | $\ll$         | `\ll`         | $\gg$         | `\gg`         | $\bowtie$   | `\bowtie`   |
| $\simeq$  | `\simeq`  | $\subset$     | `\subset`     | $\supset$     | `\supset`     | $\Join$     | `\Join`     |
| $\approx$ | `\approx` | $\subseteq$   | `\subseteq`   | $\supseteq$   | `\supseteq`   | $\ltimes$   | `\ltimes`   |
| $\asymp$  | `\asymp`  | $\sqsubset$   | `\sqsubset`   | $\sqsupset$   | `\sqsupset`   | $\rtimes$   | `\rtimes`   |
| $\doteq$  | `\doteq`  | $\sqsubseteq$ | `\sqsubseteq` | $\sqsupseteq$ | `\sqsupseteq` | $\smile$    | `\smile`    |
| $\propto$ | `\propto` | $\dashv$      | `\dashv`      | $\vdash$      | `\vdash`      | $\frown$    | `\frown`    |
| $\models$ | `\models` | $\in$         | `\in`         | $\ni$         | `\ni`         | $\notin$    | `\notin`    |
### Relation Symbols (Other)
---

|                      |                      |                       |                       |                    |                    |
| -------------------- | -------------------- | --------------------- | --------------------- | ------------------ | ------------------ |
| $\approxeq$          | `\approxeq`          | $\leqq$               | `\leqq`               | $\geqq$            | `\geqq`            |
| $\lessgtr$           | `\lessgtr`           | $\thicksim$           | `\thicksim`           | $\leqslant$        | `\leqslant`        |
| $\geqslant$          | `\geqslant`          | $\lesseqgtr$          | `\lesseqgtr`          | $\backsim$         | `\backsim`         |
| $\lessapprox$        | `\lessapprox`        | $\gtrapprox$          | `\gtrapprox`          | $\lesseqqgtr$      | `\lesseqqgtr`      |
| $\backsimeq$         | `\backsimeq`         | $\lll$                | `\lll`                | $\ggg$             | `\ggg`             |
| $\gtreqqless$        | `\gtreqqless`        | $\triangleq$          | `\triangleq`          | $\lessdot$         | `\lessdot`         |
| $\gtrdot$            | `\gtrdot`            | $\gtreqless$          | `\gtreqless`          | $\circeq$          | `\circeq`          |
| $\lesssim$           | `\lesssim`           | $\gtrsim$             | `\gtrsim`             | $\gtrless$         | `\gtrless`         |
| $\bumpeq$            | `\bumpeq`            | $\eqslantless$        | `\eqslantless`        | $\eqslantgtr$      | `\eqslantgtr`      |
| $\backepsilon$       | `\backepsilon`       | $\Bumpeq$             | `\Bumpeq`             | $\precsim$         | `\precsim`         |
| $\succsim$           | `\succsim`           | $\between$            | `\between`            | $\doteqdot$        | `\doteqdot`        |
| $\precapprox$        | `\precapprox`        | $\succapprox$         | `\succapprox`         | $\pitchfork$       | `\pitchfork`       |
| $\thickapprox$       | `\thickapprox`       | $\Subset$             | `\Subset`             | $\Supset$          | `\Supset`          |
| $\shortmid$          | `\shortmid`          | $\fallingdotseq$      | `\fallingdotseq`      | $\subseteqq$       | `\subseteqq`       |
| $\supseteqq$         | `\supseteqq`         | $\smallfrown$         | `\smallfrown`         | $\risingdotseq$    | `\risingdotseq`    |
| $\sqsubset$          | `\sqsubset`          | $\sqsupset$           | `\sqsupset`           | $\smallsmile$      | `\smallsmile`      |
| $\varpropto$         | `\varpropto`         | $\preccurlyeq$        | `\preccurlyeq`        | $\succcurlyeq$     | `\succcurlyeq`     |
| $\Vdash$             | `\Vdash`             | $\therefore$          | `\therefore`          | $\curlyeqprec$     | `\curlyeqprec`     |
| $\curlyeqsucc$       | `\curlyeqsucc`       | $\vDash$              | `\vDash`              | $\because$         | `\because`         |
| $\blacktriangleleft$ | `\blacktriangleleft` | $\blacktriangleright$ | `\blacktriangleright` | $\Vvdash$          | `\Vvdash`          |
| $\eqcirc$            | `\eqcirc`            | $\trianglelefteq$     | `\trianglelefteq`     | $\trianglerighteq$ | `\trianglerighteq` |
| $\shortparallel$     | `\shortparallel`     | $\neq$                | `\neq`                | $\vartriangleleft$ | `\vartriangleleft` |
| $\vartriangleright$  | `\vartriangleright`  | $\nshortparallel$     | `\nshortparallel`     |                    |                    |
| $\ncong$             | `\ncong`             | $\nleq$               | `\nleq`               | $\ngeq$            | `\ngeq`            |
| $\nsubseteq$         | `\nsubseteq`         | $\nmid$               | `\nmid`               | $\nleqq$           | `\nleqq`           |
| $\ngeqq$             | `\ngeqq`             | $\nsupseteq$          | `\nsupseteq`          | $\nparallel$       | `\nparallel`       |
| $\nleqslant$         | `\nleqslant`         | $\ngeqslant$          | `\ngeqslant`          | $\nsubseteqq$      | `\nsubseteqq`      |
| $\nshortmid$         | `\nshortmid`         | $\nless$              | `\nless`              | $\ngtr$            | `\ngtr`            |
| $\nsupseteqq$        | `\nsupseteqq`        | $\nshortparallel$     | `\nshortparallel`     | $\nprec$           | `\nprec`           |
| $\nsucc$             | `\nsucc`             | $\subsetneq$          | `\subsetneq`          | $\nsim$            | `\nsim`            |
| $\npreceq$           | `\npreceq`           | $\nsucceq$            | `\nsucceq`            | $\supsetneq$       | `\supsetneq`       |
| $\nVDash$            | `\nVDash`            | $\precnapprox$        | `\precnapprox`        | $\succnapprox$     | `\succnapprox`     |
| $\subsetneqq$        | `\subsetneqq`        | $\nvDash$             | `\nvDash`             | $\precnsim$        | `\precnsim`        |
| $\succnsim$          | `\succnsim`          | $\supsetneqq$         | `\supsetneqq`         | $\nvdash$          | `\nvdash`          |
| $\lnapprox$          | `\lnapprox`          | $\gnapprox$           | `\gnapprox`           | $\varsubsetneq$    | `\varsubsetneq`    |
| $\ntriangleleft$     | `\ntriangleleft`     | $\lneq$               | `\lneq`               | $\gneq$            | `\gneq`            |
| $\varsupsetneq$      | `\varsupsetneq`      | $\ntrianglelefteq$    | `\ntrianglelefteq`    | $\lneqq$           | `\lneqq`           |
| $\gneqq$             | `\gneqq`             | $\varsubsetneqq$      | `\varsubsetneqq`      | $\ntriangleright$  | `\ntriangleright`  |
| $\lnsim$             | `\lnsim`             | $\gnsim$              | `\gnsim`              | $\varsupsetneqq$   | `\varsupsetneqq`   |
| $\ntrianglerighteq$  | `\ntrianglerighteq`  | $\lvertneqq$          | `\lvertneqq`          | $\gvertneqq$       | `\gvertneqq`       |
### Arrows
---

| Symbol                  | Code                     | Symbol                  | Code                     | Symbol                  | Code                     |
|-------------------------|--------------------------|-------------------------|--------------------------|-------------------------|--------------------------|
| $\leftarrow$            | `\leftarrow`            | $\longleftarrow$        | `\longleftarrow`        | $\uparrow$             | `\uparrow`              |
| $\Leftarrow$            | `\Leftarrow`            | $\Longleftarrow$        | `\Longleftarrow`        | $\Uparrow$             | `\Uparrow`              |
| $\rightarrow$           | `\rightarrow`           | $\longrightarrow$       | `\longrightarrow`       | $\downarrow$           | `\downarrow`            |
| $\Rightarrow$           | `\Rightarrow`           | $\Longrightarrow$       | `\Longrightarrow`       | $\Downarrow$           | `\Downarrow`            |
| $\leftrightarrow$       | `\leftrightarrow`       | $\longleftrightarrow$   | `\longleftrightarrow`   | $\updownarrow$         | `\updownarrow`          |
| $\Leftrightarrow$       | `\Leftrightarrow`       | $\Longleftrightarrow$   | `\Longleftrightarrow`   | $\Updownarrow$         | `\Updownarrow`          |
| $\mapsto$               | `\mapsto`               | $\longmapsto$           | `\longmapsto`           | $\nearrow$             | `\nearrow`              |
| $\hookleftarrow$        | `\hookleftarrow`        | $\hookrightarrow$       | `\hookrightarrow`       | $\searrow$             | `\searrow`              |
| $\leftharpoonup$        | `\leftharpoonup`        | $\rightharpoonup$       | `\rightharpoonup`       | $\swarrow$             | `\swarrow`              |
| $\leftharpoondown$      | `\leftharpoondown`      | $\rightharpoondown$     | `\rightharpoondown`     | $\nwarrow$             | `\nwarrow`              |
| $\rightleftharpoons$    | `\rightleftharpoons`    | $\leadsto$              | `\leadsto`              |                        |                          |
| $\dashrightarrow$       | `\dashrightarrow`       | $\dashleftarrow$        | `\dashleftarrow`        | $\leftleftarrows$      | `\leftleftarrows`       |
| $\leftrightarrows$      | `\leftrightarrows`      | $\Lleftarrow$           | `\Lleftarrow`           | $\twoheadleftarrow$    | `\twoheadleftarrow`     |
| $\leftarrowtail$        | `\leftarrowtail`        | $\looparrowleft$        | `\looparrowleft`        | $\leftrightharpoons$   | `\leftrightharpoons`    |
| $\curvearrowleft$       | `\curvearrowleft`       | $\circlearrowleft$      | `\circlearrowleft`      | $\Lsh$                 | `\Lsh`                  |
| $\upuparrows$           | `\upuparrows`           | $\upharpoonleft$        | `\upharpoonleft`        | $\downharpoonleft$     | `\downharpoonleft`      |
| $\multimap$             | `\multimap`             | $\leftrightsquigarrow$  | `\leftrightsquigarrow`  | $\rightrightarrows$    | `\rightrightarrows`     |
| $\rightleftarrows$      | `\rightleftarrows`      | $\twoheadrightarrow$    | `\twoheadrightarrow`    | $\rightarrowtail$      | `\rightarrowtail`       |
| $\looparrowright$       | `\looparrowright`       | $\rightleftharpoons$    | `\rightleftharpoons`    | $\curvearrowright$     | `\curvearrowright`      |
| $\circlearrowright$     | `\circlearrowright`     | $\Rsh$                  | `\Rsh`                  | $\downdownarrows$      | `\downdownarrows`       |
| $\upharpoonright$       | `\upharpoonright`       | $\downharpoonright$     | `\downharpoonright`     | $\rightsquigarrow$     | `\rightsquigarrow`      |
| $\nleftarrow$           | `\nleftarrow`           | $\nrightarrow$          | `\nrightarrow`          | $\nLeftarrow$          | `\nLeftarrow`           |
| $\nRightarrow$          | `\nRightarrow`          | $\nleftrightarrow$      | `\nleftrightarrow`      | $\nLeftrightarrow$     | `\nLeftrightarrow`      |
