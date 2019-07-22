# Analysis Files

There's an R jupyter notebook here because the Experiments were of different sample size, resulting in an unequal cell design for the between-subjects factor, Expertiment. 
Therefore, I had to use the R package 'afex' because it deploys effects coding (contr.sum contrasts) and uses Type III sums of squares, whereas aov and lmer do not. My attempts to adjust those codes 
for Type III wasn't yielding the same results that I would get, say, in JASP, so I switched to the afex package, which I replicated in JASP. I also ran my Bayesian ANOVAs in R, so the the R Jupyter notebook has those as well.

All filtering, graphs, etc., though, are in the Python Jupyter notebook.
