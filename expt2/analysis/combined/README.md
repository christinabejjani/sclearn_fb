# Analysis Files

There's an R jupyter notebook here because the Experiments were of different sample size, resulting in an unequal cell design for the between-subjects factor, Expertiment. Therefore, I had to use the R package 'afex' because it deploys effects coding (contr.sum contrasts) and uses Type III sums of squares, whereas aov and lmer do not. My attempts to adjust those codes for Type III wasn't yielding the same results that I would get, say, in JASP, so I switched to the afex package, which I replicated in JASP. 

All filtering, graphs, etc., though, are in the Python Jupyter notebook. The Jupyter notebook wasn't showing the progress bar for the Bayesian ANOVAs, which take about a day to run with this combined set (having about 7k models to run through), so I quit the notebook and ran the script in R studio and have taken screenshots of the BFs I report in the manuscript. Note that this script is very, very similar to the ones in 1a, 1b, combined E1 analysis, 2a, and 2b, but without the notebook as I posted in the other places. 

I did end up also knitting to html, since knitting to pdf doesn't work in my R, but the numbers in RAnovas.html won't match the .png screenshots exactly b/c knitting forces the script (and thus simulations) to rerun.
