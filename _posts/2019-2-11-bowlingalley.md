---
layout: post
title: "Bowling Simulation - Code Refactoring"
date: 2019-2-11 22:32
description: Removed code smells and optimized performance
image: /assets/images/messenger.png # Add image post (optional)
headerImage : false
tags:
- Java
- Software Engineering
author: vivekkaushal
category: projects
projects: true
---

![Language : Java](https://img.shields.io/badge/Language-Java-orange.svg) ![Status : Running](https://img.shields.io/badge/Status-Running-brightgreen.svg)

The refactoring task was undertaken as a team project for the Software Engineering course at IIIT Hyderabad. A codebase sized at 5000 locs was studied and refactored. The repository for the codebase and modifications made will be added right here as soon as the evaluations are in, till then, as per academic regulations, they remain private. The documentation of changes made and the study itself can be found below.

## Overview of Project:

The designed software is focused on  automating a chain of bowling establishments owned by the Lucky Strikes Bowling Center (LSBC). The final product needs to have certain basic functionalities which are listed below this paragraph. Besides the mentioned functionality, the project has been coded in line with established industry standards in Java, with proper documentation for easy understanding of the codebase and possible future refactoring and/or extension. List of functionalities:

- Detection of the number of bowling pins knocked down after a bowler has bowled.
- The bowling alley's scoring station displays information corresponding to the current bowler’s score in respective bowling lanes.
- Addition of new bowlers and edits to existing patrons.
- A service to maintain history of a bowler’s score, average and relevant information is provided for.

## Features of Project:

### Lane Management

When a bowler enters a LSBC, he checks in at the control desk for a lane assignment. Bowlers may check in as a group or party so that they will be assigned to the same lane. Each lane can accommodate one to five bowlers. The order in which a party checks in determines the order in which they will bowl. Once a party has started bowling, the control desk can monitor the number of **frames** completed by each bowler. When a bowler has completed a game, the control desk is notified of the bowler's score for that game. When the last bowler in the party has completed his game, the party may start a new game or check out at the control desk.

### Scoring Station

Each lane is equipped with a stand-alone scoring station that lists the bowlers' names (in the order they checked in) and a graphic representation of their scores. A typical score sheet for one bowler looks like this:

![](https://i.ibb.co/kgS8R1H/Screenshot-2019-01-28-at-1-31-38-AM.png)

Bowlers alternate rolling the ball or taking throws according to the scoring rules of bowling referenced in the following section. The automatic pinsetter is able to detect the number of pins still standing on a lane after each throw. This information is then transmitted back to the scoring station. The scoring station also displays the pins that are still standing after each throw. More details on how to keep scores in bowling can be found [here.](http://slocums.homestead.com/gamescore.html)

### Pinsetter Interface

The pinsetter interface communicates to the scoring station the pins that are left standing after a bowler has completed a throw. A throw is complete when the bowling ball hits the end of the alley beyond the last row of pins. The pinsetter will re-rack the pins (places all ten down) after two consecutive throws have been detected. The pinsetter interface also accepts a command that will be treated in the same manner as a thrown ball.

### Bowler Management

A history of all bowler's scores and their current average per game is maintained for patrons. Bowlers perform a one-time registration the first time they check in at the control desk by providing their full name and an email address. They also provide a preferred nickname to be displayed on the scoring station when they are bowling. When a bowler has checked out at the control desk after completing his/her games, a report is generated containing the bowler's scores from games just completed, previous scores and his/her current average. This report is automatically emailed to the bowler with the option of a printout.

### Additional Control Desk Functions

The control desk operator has the ability to monitor the scores of any active lane. A configurable display option will allow the operator to view the score of an individual scoring station or multiple scoring stations. In the event a lane has a mechanical problem – ball not returned, pinsetter did not re-rack, etc.– the bowler may contact the control desk through an interface on the scoring station. The control station sends an acknowledgement of the request back to the scoring station.

## Diagrammatic Representation:

### Class Diagrams

**1. Abstract Representation** 

![Abstract Class Diagram](https://i.ibb.co/8NZPTkZ/UML-2.png)

**2. Detailed Representation** 

![Class Diagram](https://i.ibb.co/GtY9FjS/UML-1.jpg)

**3. Abstract Diagram After Refactoring** 

![Abstract Class Diagram After Refactoring](https://i.ibb.co/xJYpg8R/abstract.png)

**4. Detailed Class Diagram After Refactoring** 

![Class Diagram after refactoring](https://i.ibb.co/gdJ8SKw/new-class-diagram.jpg)

### Sequence Diagram: 

![Sequence Diagram](https://i.ibb.co/gZNTVPz/sequence-diagram.png)

### Use-Case Diagram: 

![Use-Case Diagram](https://i.ibb.co/whYVK3y/bowling.png)

## Responsibility of Each Major Class:

| **Class**           | **Responsibility**                                                                                                                                                                                                                                                                    |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Alley           | The Alley class is a container for the bowling simulator.                                                                                                                                                                                                                         |
| Bowler          | The Bowler class holds information about the bowlers.                                                                                                                                                                                                                             |
| ControlDesk     | The Control Desk class manages all functionalities of the control desk in the bowling alley simulation.  It keeps tabs on availability of subscribers, queues,  lanes and also assigns lanes to bowlers. The Control  Desk also prints score.                                     |
| Drive           | The Drive class is the primary entry point for the program and it calls the ControlDesk and Alley classes.                                                                                                                                                                        |
| EndGameReport   | The EndGameReport class creates the final score reports in a proper pre-defined format.                                                                                                                                                                                           |
| Lane            | The Lane class handles the lane end of the bowling alley simulation. It keeps a tab on games and bowling frames,  while also displaying scores that are sent to it.                                                                                                               |
| Pinsetter       | The Pinsetter class represents the Pinsetter in the bowling simulation. It senses the number of pins knocked down by a  thrown ball and also simulates the throw of the bowling ball.                                                                                             |
| AddPartyView    | Defines functions like Add Party, add party panel, setting layout and border of the bowling alley, etc. Adds the list of bowlers (team wise and individually) to be a list to make them play one after the other. Sets the functionalities of buttons and adds listeners to them. |
| ControlDeskView | The ControlDeskView class shows the score and pinsetter details  for each player/team that is currently playing in the alley.                                                                                                                                                     |

## Study of the Original Code:

### Strengths of the Original Codebase:

#### 1. Usage of Object Oriented Design patterns

The codebase is built in an object oriented design with the usage of proper Object Oriented Design patterns. Programming structures of object oriented concepts are deftly applied.

**Inheritance**
```java
public class Lane extends Thread implements PinsetterObserver {
```
In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation.

**Encapsulation**
```java
private String fullName;
    private String nickName;
    private String email;
```
Encapsulation is defined as the wrapping up of data under a single unit. Technically in encapsulation, the variables or data of a class is hidden from any other class and can be accessed only through any member function of own class in which they are declared. As in encapsulation, the data in a class is hidden from other classes, so it is also known as data-hiding.

**Abstraction**
```java
private ControlDesk controlDesk;
```
Abstraction is selecting data from a larger pool to show only the relevant details to the object. It helps to reduce programming complexity and effort. In Java, abstraction is accomplished using Abstract classes and interfaces. As in here, ```controlDesk``` is an abstract object.

#### 2. Less Within-Class Code Smells
There are very few code smells that are related to variable names and comments. Thus we can say that the code is easy to understand and intuitive in that sense.

#### 3. Use of Standard Object Oriented Patterns

Widely accepted Object Oriented patterns have been used.
```java
public interface LaneEventInterface extends java.rmi.Remote {
    public int getFrameNum( ) throws java.rmi.RemoteException;
    public HashMap getScore( ) throws java.rmi.RemoteException;
    public int[] getCurScores( ) throws java.rmi.RemoteException;
    public int getIndex() throws java.rmi.RemoteException;
    public int getFrame() throws java.rmi.RemoteException;
    public int getBall() throws java.rmi.RemoteException;
    public int[][] getCumulScore() throws java.rmi.RemoteException;
    public Party getParty() throws java.rmi.RemoteException;
    public Bowler getBowler() throws java.rmi.RemoteException;

}
```

#### 4. Impressive Graphical User Interface

![GUI Image](https://i.ibb.co/XCfkJGp/GUI1.png)

### Weaknesses of the Original Codebase:

#### 1. The Blob *(Kitchen Sink)*

![Lane Class](https://i.ibb.co/JyjPmt5/Screenshot-2019-02-11-at-5-08-44-AM.png)

The ```Lane``` class is the perfect example of a **kitchen sink** class, or a **Blob.** The Blob is found in designs where one class monopolizes the processing, and other classes primarily encapsulate data. This AntiPattern is characterized by a class diagram composed of a single complex controller class surrounded by simple data classes. The key problem here is that the majority of the responsibilities are allocated to a single class.

The Blob contains the majority of the process, and the other objects contain the data. Architectures with the Blob have separated process from data; in other words, they are procedural-style rather than object-oriented architectures.

#### 2. The MiddleMan class

![MiddleMan in UML](https://i.ibb.co/T2c7r87/middleman.jpg)

The class ```Alley``` is the perfect example of a middleman class. The primary logic behind this code smell is the idea that if a class is delegating all its work, why does it exist? We can cut out the middleman. Classes like these are merely wrappers over other classes or existing functionality in the framework.

#### 3. Long Parameter List

```java
public LaneEvent( Party pty, ArrayList<Integer> params, Bowler theBowler, int[][] theCumulScore, HashMap theScore, int[] theCurScores, boolean mechProblem) {
        p = pty;
        index = params.get(0);
        bowler = theBowler;
        cumulScore = theCumulScore;
        score = theScore;
        curScores = theCurScores;
        frameNum = params.get(2);
        ball = params.get(1);	
        mechProb = mechProblem;
    }
```

The original codebase contains multiple methods with long parameter lists. It’s hard to understand such lists, which become contradictory and hard to use as they grow longer. Instead of a long list of parameters, a method can use the data of its own object. If the current object doesn’t contain all necessary data, another object (which will get the necessary data) can be passed as a method parameter. Here, the method ```LaneEvent()``` is highlighted with it's extremely long parameter list.

#### 4. High Average Number of Attributes Per Class

```java
public class AddPartyView implements ActionListener, ListSelectionListener {

    private int maxSize;

    private JFrame win;
    private JButton addPatron, newPatron, remPatron, finished;
    private JList partyList, allBowlers;
    private Vector party, bowlerdb;
    private Integer lock;

    private ControlDeskView controlDesk;

    private String selectedNick, selectedMember;
```

The original codebase has a significantly high number of Attributes per Class, with a high of **14** in the class ```AddPartyView```.

## Our Workflow:

### 1. Understanding the Codebase

We went through the codebase in detail with careful emphasis on understanding the implementation. Focus was laid on analyzing different classes, interpreters and included methods to better understand the functioning of the codebase and understand the flow of control.

### 2. Drawing UML Representation of the Codebase

Upon getting comfortable with the codebase we proceeded to draw a UML Class diagram representing the structure of the codebase along with a sequence diagram to show the flow of control in the codebase. This helped clarify our own understanding as well as brought implementation defects and code-smells to light.

### 3. Identifying Stakeholders

We used the UML Sequence Diagram to work upon our understanding of the various stakeholders in the Bowling Alley Management System. Identifying stakeholders enabled us to look at the flow of control from different perspectives, including user-end views, which brought implementation and code-smells improvements to light.

### 4. Understanding Features

We used the UML Class Diagram to understand the various functionalities of the codebase. Isolating each functionality and understanding its flow of control played an important role in understanding multiple feature-related code-smells and defects in implementation.

### 5. Identify Code Smells

Based on our understanding of the project gained through an in-depth reading of the codebase and study of UML Class and Sequence diagrams we isolated code smells in the project that we believed could be fixed iteratively with constant testing. Following sections of this document lay greater emphasis on the categories of code-smells identified and our counter-strategy for them.

### 6. Fixing and Logging the Code Smells

Post isolation, we went ahead and fixed the code-smells using strategies highlighted in later sections. During the entire iterative refactoring process we tested the codebase for functionality at each stage. Each code-smell was logged upon being worked upon and the work was documented thereafter.

## How Our Design is an Improvement and Code Smells Solved:

### 1. High Cohesion

Cohesion refers to the degree to which the elements inside a module belong together. It is a measure of the strength of relationship between the methods and data of a class and some unifying purpose or concept served by that class. In another sense, it is a measure of the strength of relationship between the class’s methods and data themselves. Modules with high cohesion tend to be preferable, because high cohesion is associated with several desirable traits of software including robustness, reliability, reusability, and understandability. 

For example, in the refactored codebase, the originally **Blob Class** ```Lane``` has been simplified to make it more cohesive.

```java
public class Lane extends Thread implements PinsetterObserver {	
    private Party party;
    private Pinsetter setter;
    private HashMap scores;
    private Vector subscribers;

    private boolean gameIsHalted;

    private boolean partyAssigned;
    private boolean gameFinished;
    private Iterator bowlerIterator;
    private int ball;
    private int bowlIndex;
    private int frameNumber;
    private boolean tenthFrameStrike;

    private int[] curScores;
    private int[][] cumulScores;
    private boolean canThrowAgain;
    
    private int[][] finalScores;
    private int gameNumber;
    
    private Bowler currentThrower;			
```

### 2. Lazy MiddleMan Class Removed

Classes that largely delegate a majority, or in cases, all of their functionality to other classes, or rely on calling methods from other classes for their functioning and lack any useful methods or their own are classified as a lazy class. For example, in our codebase, the class ```Alley``` was a lazy class, which was merely delegating it's functionality to other classes.

```java
public class Alley {
	public ControlDesk controldesk;

    public Alley( int numLanes ) {
        controldesk = new ControlDesk( numLanes );
    }

	public ControlDesk getControlDesk() {
		return controldesk;
	}
}
```

The class ```Alley``` seemed integral to the project, but upon closer investigation it turned out to be middleman calling other class' methods. Hence, the class was eliminated and it's functionality re-distributed. In-line with the characteristics of **Poltergeist Anti-Pattern**, the management of functionality and complexity of the code was increasing. This issue was deftly dealt with.

![MiddleMan in UML](https://i.ibb.co/T2c7r87/middleman.jpg)

### 3. Cyclomatic Complexity Reduced

The Cyclomatic complexity of a method is calculated by developing a Control Flow Graph of the code that measures the number of linearly-independent paths through a program module. We have set the limit for cyclomatic complexity to 12. Hence we reduced the complexities of methods and classed to less than 12. Cyclomatic complexity found: 

| Method                        | Previous Cyclomatic Complexity       | New Cyclomatic Complexity |
|-------------------------------|--------------------------------------|---------------------------|
|```receiveLaneEvent()```       | 19                                   | 11                        |
|```receivePinsetterEvent()```  | 14                                   | 12                        |
|```getScore()```               | 38                                   | 9                         |
|```run()```                    | 19                                   | 10                        |
|```addPartyView()```           | 21                                   | 10                        |


We created two new methods i.e. ```gameNotFinished()``` and ```runLaneMethod()``` that are independent of each other and will be called inside the run function at the time of execution. This reduces the cyclomatic complexity of ```getScore()``` to 9. Similarly, a new method named ```frameNumber9()``` which handles conditions that don't allow users another throw and handles the case of 10th frame first was created to reduce the cyclomatic complexity of ```run()``` to 10.


A new method named ```laneEventBowlers()``` was created that handles the lane events for Bowlers and hence reduced the cyclomatic complexity to of ```receiveLaneEvent()``` to 11. Similarly, the method ```partyContentCheck()``` handles the checking of whether a player belongs to a party and reduces the cyclomatic complexity of ```addPartyView()``` to 10.

### 4. Long Methods reduced in size without loss in functionality

Shorter methods are easier to extend, easier to understand and easier to maintain, hence long methods in the existing codebase were identified as code-smells and acted upon. Methods were simplified by splitting independent parts of code into new methods. A trade-off here is that the total number of methods increased. Methods which violate the rule are: 

| Method             | Previous Line Count       | New Line Count      |
|--------------------|---------------------------|---------------------|
|```getScore```      | 135                       | 40                  |
|```run```           | 92                        | 32                  |
|```addPartyView```  | 132                       | 90                  |

### 5. Long Parameter List Restrained

The more parameters a method has, the more complex it is. Hence, maximum number of parameters are set to 7.
Classes which violate the rule were modified to reduce the number of required parameters. For example, in```LaneEvent``` integral parameters were grouped together into a single ```ArrayList``` of adequate dimensions. Classes which were corrected are as follows: 

| Class              | Previous Parameter Count  | New Parameter Count |
|--------------------|---------------------------|---------------------|
|```LaneEvent```     | 9                         | 7                   |

### 6. Removing Dead Code
Dead code is a section in the source code of a program which is executed but whose result is never used in any other computation. The execution of dead code wastes computation time and memory. We found dead code in the following classes and simply deleted those lines of code.

-  ```getScore()``` 
    Several lines of dead code were deleted which were commented out and were not serving any purpose.

### 7. Nested Block Depth
Nested block depth is defined as the depth of the nested block of code. Greater depth makes the understanding, extension and refactoring of code complicated. Hence, its desirable to reduce the nested block depth. We worked on the ```getScore()``` method and reduced its effective nested block depth significantly.

### 8. Lack of Descriptive Comments
The project contains a skeletal amount of documentation, with bare-minimum descriptive comments for certain classes. Hence, documentation was added for the following classes to make the code more readable, extensible and understandable:

- ```ScoreReport```
- ```ScoreHistoryFile```
- ```Score```
- ```Queue```


### 9. Uncommunicative Names
Uncommunicative or unintuitive class names make it extremely hard to understand and extend a codebase. The general rule of thumb is that if the name of the method succinctly describes what that method does then it's an acceptable name. Else, there is an urgent need to rewrite it. The classes and methods we renamed are as follows:

| Old Name      | New Name      |
|---------------|---------------|
|NewPatternView | AddPatternView|
|assignParty()  | startParty()  |

-----------------------------------------------------------