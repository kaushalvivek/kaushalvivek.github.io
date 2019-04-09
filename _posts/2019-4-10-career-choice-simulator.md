---
layout: post
title: "Career Choice Simulator"
date: 2019-4-9 22:32
description: Research in risk and decision making
image: /assets/images/career.png # Add image post (optional)
headerImage : true
tags:
- Risk
- Decision Making
- Neuroeconomics
- Behavioural Economics
- Human Computer Interaction
author: vivekkaushal
category: projects
projects: true
---

Link : [http://web2py.iiit.ac.in/research_centres/publications/view_publication/inproceedings/1541](http://web2py.iiit.ac.in/research_centres/publications/view_publication/inproceedings/1541)

```
Motive : To explore correlation between risk behaviour and academic performance
Method : Created a simple binary choice career simulator with an intuitive interface.
Notes  : Presented results at Foundation of Utility and Risk Conference, 2018 - University of York.
```

### Abstract

We studied financial decision-making behavior and assessed risk propensity using a career choice simulator to understand correlations between academic performance and risk propensity, academic performance and risk-intelligence, net-worth and risk behaviour. The effect of ‘brands’ on logical decision-making was also studied. The main objective of the experiment was to check the balance between logical choices and risk propensity in financial decisions. An interactive game-like app -- the career choice simulator --was designed and developed as a part of the setup.

### Keywords
Risk; Risk Propensity; Financial Risk-Taking; Academic Performance, Risk Intelligence

### Introduction 

Risk is defined as chance taken when uncertainty is involved, by weighing the probabilities of a win or loss. Human decision making includes a constant perception of risk involved. The said perception of risk is an intuitive judgement, which is different from risk assessment, the latter being a statistical analysis of a given situation with a final contemplative decision. [3] Our innate tendency to minimise loss is a potent force behind our decisions. [1] Our adeptness at evaluating choices, given context and information, based on a subjective interpretation of involved probabilities is called Risk Intelligence. [2] 
As discussed in Figner B & Weber EU' 2011 [5], there are four crucial determinants of risk, them being: (a) decision between options varying in risk occurs in different domains (b) risky decisions involve different psychological processes (c) greater risks typically comes with greater returns (d) risk taking is neither a single phenomenon nor a single personality trait, and it can be motivated by various processes, not just risk attitudes [5]. Hence, Risk taking is not just an expression of a single personality trait, one’s risk propensity cannot be estimated from a  single situation as it is affected by various environmental and contextual factors. This could include conflicting motivations like greed and fear/avoidance. Observed differences in an individual’s risk taking can be driven by various parameters such as their perception of expected reward, general risk perceptions or level of risk they are willing to accept in exchange for specific returns and competitiveness in case of peer presence. Prize, price and probability of a win are three important factors in decision making under risk (Ziller, 1957). Prize here is the object or amount to be gained in a case of success (reward), price is the object or amount to be lost in a case of failure and probability of win is the chance of winning. An individual can be gain sensitive, loss sensitive and/or probability sensitive.

Hence, it isn’t essentially a surprise that different risk taking measures (self-report, surveys, lottery choices, real world choices) do not always strongly correlate [reference]. The context and situation matter, and each event presents a different context for risk-evaluation. At the same time, the risk taking behavior as reported by various methods can give insights into the factors influencing risk taking.
This paper looks at academic performance as a possible indicator of higher risk intelligence, and examine possible correlations between academic performance and risk propensity. 

### Methodology

#### Section 1 : Structure of the Setup

An interactive browser-based game was created where the objective was to maximize one’s Net Worth by choosing a job out of the two available choices in each round. There were a total of 15 rounds, divided into 3 stages of 5 rounds each. The first stage had the metrics    Salary and Performance Cutoff associated with each job option. The second and third stages had an additional factor -  Company Name added to both the job options.
When the user selected a job in a round, a Performance Score was selected from a randomly generated predefined set. If the Performance Score was lower than the the selected job’s Performance Cutoff, a penalty amount was deducted from user’s Net Worth and he/she was lead to the next round. Else, if the Performance Score was greater than the selected job’s Performance Cutoff, then the Salary amount was added to user’s Net Worth and he/she was lead to the next round. The Performance Cutoff  was not known to the student at the time of decision-making, hence it created a scenario where decision-making happened under uncertainty, with self-estimation of risk involved based on visible information. After recording responses for all 15 rounds, users were presented with a questionnaire comprising of standard questions from the DOSPERT (reference) Scale for self-estimation of Risk Propensity in Financial and Social domains and responses were recorded. Preference order for Location, Salary and Company while choosing a job was also collected.

#### Section 2 : The Subject of Experiment and its Execution

50 sophomore Computer Science students (aged 19-21), 25 with a GPA above 8.0 and 25 with a GPA below 8.0, were asked to play the game and their response were carefully recorded.A high level of immersion was created by carefully designing a user interface which displayed relevant information in an intuitive layout. The goal was to drive the user’s attention towards the decision-making process while providing necessary information in a clean, non-intrusive manner.

A High Score was displayed through the gameplay to add an element of competition and peer influence to user’s decision-making in the game. Peer influence and competition have been shown to enhance risk-taking in adolescents. In each round, one job option had a high Performance Cutoff and another had a low Performance Cutoff. The Salary for both job options were different accordingly, such that a high-risk-high-reward scenario was created. In the second stage, a Company Name with a higher brand perception (reference)was added to the high-risk-high-reward job option, while a Company Name with a low reward perception  (reference), was added to the low-risk-low-reward job option. In the third stage, we did the opposite, a Company Name with a low reward perception (reference)was added to the high-risk-high-reward job option, while a Company Name with a high reward perception  reference), was added to the low-risk-low-reward job option.Comparison of performance across the three stages provided insights into the effect of brand allegiance on logical decision making.

### Results

The average in-game Net Worth of students with a GPA ≥ 8, ($1.14 million) was 30.7% higher than the average net-worth of students with a GPA < 8 ($0.87 million), at the end of all 15 rounds. Students with a GPA ≥ 8 took 186 high risk decisions. 10.2% lower than students with a GPA < 8, who took 205 high risk decisions. Students who had a lower GPA faced the penalty 99 times in the game. 43.5% higher than students with a GPA ≥ 8, who faced the penalty 69 times. A weakly negative correlation of -0.3 was observed between the DOSPERT Scale and risk-taking behavior observed in this experimental setup. (will break it up  into correlations of high and low GPA separately if needed)

24 students (out of the 50) ranked Salary as the most important factor while choosing a job, followed by 16 for Company and 10 for Location. Average Net Worth of students who chose Company as the most important parameter in job selection was $981,000, 7% lower than the average net worth of students who chose Company as the least important parameter in selecting a job.

### Discussion

The 30.7% higher average net-worth of students with a GPA ≥ 8 might be attributed to higher risk intelligence of students with a higher GPA. Students with lower GPA also face a penalty 43.5% more times, this can be seen in the above light or that the high performing students are better adept assessing risk-reward situations. This would bring to light a positive correlation between risk intelligence and academic performance, though further studies are necessary to establish a correlation between risk intelligence and other forms of intelligence.

Students with lower GPA took 10.2% more risks, an interesting result that needs to be examined with respect to the effect of  lower expectation from society and hence propensity for high risk behavior [4].

Students who ranked Company as the most important factor in making job-choices had a 7\% lower net-worth than students who ranked Company as the least important factor. One can infer that allegiance to ‘brands’ interferes with the logical decision making, more studies are needed to show conclusive evidence for the same.

Contrary to expectations, no direct correlation was observed between net-worth of an individual and risk-taking, which indicated that the tendency to risk is independent of net-worth and people are inherently either high or low risk takers. The findings from this study highlights certain constraints of the educational and career choice expectation on Indian students. The data brings a unique testing tool for risk and goals adding to rational choice theory experiments.

### References

- Ariely, Dan. Predictably Irrational : the Hidden Forces That Shape Our Decisions. New York :Harper Perennial, 2010. Print.
- Evans D. (2012) Risk Intelligence. In: Roeser S., Hillerbrand R., Sandin P., Peterson M. (eds) Handbook of Risk Theory. Springer, Dordrecht
- Perception of risk, P Slovic (1987)
- O‘Stark and & Zawojska. E (2015)
- Figner, B., & Weber, E. U. (2011). Who takes risks when and why? Determinants of risk taking. Current Directions in Psychological Science, 20(4), 211-216.
