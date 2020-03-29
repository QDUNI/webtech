BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "Students" (
	"students_id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"student_nr"	INTEGER NOT NULL UNIQUE,
	"firstname"	varchar(30) NOT NULL,
	"lastname"	varchar(30) NOT NULL,
	"programm"	varchar(30) NOT NULL,
	"acd_level"	varchar(30) NOT NULL,
	"password"	varchar(60) NOT NULL
);
CREATE TABLE IF NOT EXISTS "Teachers" (
	"teacher_id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"firstname"	varchar(30),
	"lastname"	varchar(30) NOT NULL,
	"src_img"	varchar(30)
);
CREATE TABLE IF NOT EXISTS "Courses" (
	"course_id"	INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE,
	"teacher_id"	INTEGER NOT NULL,
	"title"	VARCHAR(50) NOT NULL,
	"program"	VARCHAR(50) NOT NULL,
	"ac_level"	VARCHAR(10) NOT NULL,
	"semester"	INTEGER NOT NULL,
	"description"	TEXT NOT NULL,
	FOREIGN KEY("teacher_id") REFERENCES "Teachers"("teacher_id") ON UPDATE RESTRICT
);
INSERT INTO "Students" VALUES (1,6781349,'Phil','Spaans
','informatica','level 1','75217d9213ccf4650b929b3d85fec11e');
INSERT INTO "Teachers" VALUES (1,'H.
','Philipini','h.philipini');
INSERT INTO "Teachers" VALUES (2,'J.D.','Fokker','j.fokker');
INSERT INTO "Teachers" VALUES (3,'L.','Herlaar','l.herlaar');
INSERT INTO "Teachers" VALUES (4,'T.L.','McDonell','t.mcdonell');
INSERT INTO "Teachers" VALUES (5,'G.','Tel
','g.tel');
INSERT INTO "Teachers" VALUES (6,'F.','Staals','f.staals');
INSERT INTO "Teachers" VALUES (7,'R.C.','Veltkamp','r.veltkamp');
INSERT INTO "Teachers" VALUES (8,'J.','Bikker','j.bikker');
INSERT INTO "Teachers" VALUES (9,'W.S.','Swierstra','w.swierstra');
INSERT INTO "Teachers" VALUES (10,'J.','Egges','j.egges');
INSERT INTO "Teachers" VALUES (11,'G.T.','Barkema','g.barkema');
INSERT INTO "Teachers" VALUES (12,'F.','Wiering','f.wiering');
INSERT INTO "Teachers" VALUES (13,'S.J.','Overbeek','s.overbeek');
INSERT INTO "Teachers" VALUES (14,'R.','vanderfeesten','r.vanderfeesten');
INSERT INTO "Teachers" VALUES (15,'C.','van Nimwegen','c.nimwegen');
INSERT INTO "Teachers" VALUES (16,'J.M.E.M.','van der Werf','j.werf');
INSERT INTO "Teachers" VALUES (17,'M.M.A','de Graaf','m.graaf');
INSERT INTO "Teachers" VALUES (18,'S.','Espana Cubillo','s.cubillo');
INSERT INTO "Teachers" VALUES (19,'I.','Lykourentzou','i.lykourentzou');
INSERT INTO "Teachers" VALUES (20,'S.M.','Verduyn Lunel','s.lunel');
INSERT INTO "Teachers" VALUES (21,'F.J.','Ziltener','f.ziltener');
INSERT INTO "Teachers" VALUES (22,'M.J.C. ','Bootsma','m.bootsma');
INSERT INTO "Teachers" VALUES (23,'S.A.','Wepster','s.wepster');
INSERT INTO "Teachers" VALUES (24,'G.L.M.','Cornelissen','g.cornelissen');
INSERT INTO "Teachers" VALUES (25,'S.','Dirksen','s.dirksen');
INSERT INTO "Teachers" VALUES (26,'D.','Schindler','d.schindler');
INSERT INTO "Teachers" VALUES (27,'T.','van Leeuwen','t.leeuwen');
INSERT INTO "Teachers" VALUES (28,'S.C.J.','Bakkes','s.bakkes');
INSERT INTO "Teachers" VALUES (29,'H.','Prakken','h.prakken');
INSERT INTO "Teachers" VALUES (30,'J.M. ','Houtkamp','j.houtkamp');
INSERT INTO "Teachers" VALUES (31,'J.A. ','Hoogeveen','j.hoogeveen');
INSERT INTO "Courses" VALUES (1,1,'Databases','Computer Science','level1',3,'Business processes mainly revolve around information processing. This information has to be kept, that is what database management systems are for. The differences with simple file systems are countless. For example, there are "query languages" to easily find information, "transaction systems" to allow many users to access and change the information at the same time, and schema information to know what the data actually means.
This course deals with the basics of relational databases, with an emphasis on design and question languages. We also look inside a DBMS to gain insight into transaction processing and query processing. In a guest lecture, a link will be made with developments such as data mining.');
INSERT INTO "Courses" VALUES (2,2,'Imperative Programming','Computer Science','level1',1,'In this course you will learn the programming language C #, in which commands are bundled in so-called methods that edit an object. It is therefore also an introduction to object-oriented programming.
We look at how you change the memory and how you program choice and repetition. You describe new types of objects yourself with associated methods, but you are also introduced to the standard methods associated with C #. Topics covered include methods for creating interactive user interfaces, creating animations with a Thread, manipulating files, and managing collections of data (collections).
In the lecture some larger programs are discussed as an example of applications: a graphic bitmap editor, a vector drawing program, a route finder. and automatic language recognition through letter frequency analysis. In addition, we immediately see why it is useful to organize object classes hierarchically, and how to put rows of objects in an array.
Special attention is paid to the use of object-oriented techniques in the design of somewhat larger programs, using standard libraries for collections and file I / O as examples.');
INSERT INTO "Courses" VALUES (3,3,'Computer Architecture and Networks','Computer Science','Level1',1,'Nowadays computers are mostly used in networks where they have to cooperate with other computers. A computer usually also contains a collection of programs that have to work together. All in all, a modern computer network and computer system consists of a complex set of interlocking components and processes. Fortunately, we can make things clearer by introducing a good structure. In this course we study how computers are constructed and how the software uses them. You will also learn how computer networks such as the Internet are constructed. We look at the different protocols and you also learn to make calculations about, for example, the capacity of a network connection. Of course we also pay attention to wireless networks, telephone calls over the internet and security.');
INSERT INTO "Courses" VALUES (4,4,'Concurrency','Computer Science','level3',2,'The course introduces concepts of concurrency and parallelism through the programming language Haskell.

Concrete topics treated in this course include explicit management and synchronisation of threads, as well as higher-level concurrency and parallelism abstractions. These ideas appear not only in Haskell, but in other modern languages such as C#, Scala, and Swift. An important part of the course is devoted to reasoning about the properties of concurrent programs.

The language Haskell imposes a strong separation between pure computations, which are always safe to execute in parallel, and those with side-effects, which may result in non-deterministic behaviour when executed concurrently.');
INSERT INTO "Courses" VALUES (5,5,'Datastructures','Computer Science','level2',4,'Before one can write a computer program to solve a problem, an approach (a series of steps) must be devised that the program can follow to solve the problem. Such a series of steps is called an algorithm. This course discusses algorithms for sorting and searching a collection of data. Search algorithms play a special role because they depend on how the data is stored. A method of data storage is called a data structure. Various data structures are discussed in the lecture.
For many problems, fundamentally different algorithms or data structures can be devised. In Data Structures you will also learn how to estimate the maturity of algorithms (and the memory use of data structures) without the need for implementation.
Some of the topics covered are: sorting (quicksort, heap sort, bucket sort, ...); hash tables; search trees; red-black-trees, ski lists, ...
In addition, a number of topics from mathematics will be discussed. These are necessary for the analysis of the algorithms and data structures.');
INSERT INTO "Courses" VALUES (6,6,'Functioneel Programmeren','Computer Science','level2',1,'In the course imperative programming you have become acquainted with the language C #. In that language, a program consists of assignments: do this, do that. In a functional language, a program consists of functions as you know them from mathematics. Writing programs in such a language requires a different way of thinking and that is exactly what we are going to talk about in this profession. In concrete terms, we are going to solve problems using the functional language Haskell. This language has extensive abstraction possibilities, which makes programs often very compact. You don''t have to worry about many details, such as calculation order and memory allocation. The emphasis is on what and not how. Haskell also has an extensive typing system, of which more and more elements are also included in other languages.
Functional language recursion is the equivalent of loop constructs (for, while) in C #. It is the way to write programs that walk across a data structure or do repeated calculations. Since functional programs have no variables that can change value during the processing of the program, it is easy to reason about such programs. We will show how to systematically derive and transform programs, and how to prove properties. We can use these properties to make statements about correctness or to rewrite programs. If the program contains recursive functions then the concept of induction is necessary during proofs.');
INSERT INTO "Courses" VALUES (7,7,'Gameprogramming','Computer Science','level1',1,'In this course you learn to program games in the programming language C #, in which assignments are bundled in so-called methods that edit an object. It is therefore also an introduction to object-oriented programming. C # is a modern programming language, which is also used in game engines such as Unity3D. Switching to C ++, still an important language in the game industry, is relatively easy. We look at how you change the memory and how you program choice and repetition. You describe new types of objects yourself with the associated methods, but you are also introduced to the standard methods associated with C #. You also get to know the game loop, which is the basis of each game. Although you can develop full 3D games with C # and the associated game engine we use, we focus on developing 2D games in the college. We will develop a number of different sample games during the course, including a shooting game and a puzzle game. At the end of the course, a full platform game is developed with graphics, sound, and animation.');
INSERT INTO "Courses" VALUES (8,8,'Graphics','Computer Science','level2',4,'The course will start with a short coverage of the mathematical basics needed for computer graphics. This part will introduce fundamental concepts of linear algebra and other areas of higher mathematics that are important far beyond the field of graphics. Next, we discuss the foundations of computer graphics, such as transformations and projection of 3D models, hidden surface removal, triangle rasterization, shading, texture mapping, shadows, and ray tracing. Finally, we will also look briefly into more advanced topics in physically-based global illumination.');
INSERT INTO "Courses" VALUES (9,9,'Logic for Computer Science','Computer Science','level1',2,'Logic is often seen as the foundation for science. It examines the rules for valid reasoning. Reasoning is the process by which conclusions are drawn from a number of statements, arguments or facts. Logic has many interfaces with computer science. Different areas within computer science, such as databases, software systems, artificial intelligence, theoretical computer science, games and simulations, use logical tools, methods and techniques. For example, logical verification tools are used to analyze software systems and check for correctness. Logical proof techniques are used to reason about information and to draw correct conclusions from it. Logical methods make it possible to specify, model and develop intelligent virtual characters for computer games and simulations.');
INSERT INTO "Courses" VALUES (10,10,'Modeling and system development','Computer Science','level2',1,'This course ("MSO") deals with the art of object oriented analysis and design. Attention is also paid to the various issues that, in addition to actual programming, are discussed during the building of software, such as requirements engineering, testing, refactors, and software development processes.
MSO continues where Imperative Programming ends. At MSO you learn more about analyzing the problems that customers come up with and designing suitable solutions.');
INSERT INTO "Courses" VALUES (11,11,'Research Methods for Informatics','Computer Science','level3',1,'The different parts of the course are:
Lectures (Statistics and Research Methods).
Seminar Statistics.
Statistics button.
Literature study and paper.
Lectures (including flash presentations)
Research project.
The research projects are done in groups of 3 or 4 students; the literature study and paper are done individually.
The lectures are sometimes 2, sometimes 4, and sometimes 0 hours per week. The tutorials are in groups of about 15 students, except for the tutorials statistics. They are with the whole group. In these groups you hold your flash presentation and research presentation, you listen to and discuss the research lectures of your group members, and you hold the interim and final presentation of the project together with the others from your project group.');
INSERT INTO "Courses" VALUES (12,12,'Computational Thinking','Information Science','level1',2,'Computational thinking is one of your most important competencies as an information scientist. During and after your studies you will work on the interface between people and information technology, organizations and information systems, the physical world and digital data. As an ''architect'' of digital solutions, you need to know your building material (data, algorithms, programming languages, modules, user interfaces) and be able to use it productively and creatively. You can think about and explain the possibilities and limitations of certain solutions. You are able to demonstrate why a proposed solution works, by programming prototypes and demos yourself and by showing insight into the technical implementation of prototypes programmed by others. More and more, you are also expected to be able to predict where technical choices can have socially undesirable consequences.

As the name of the course shows, computational thinking is the central theme of this course. But you have already become acquainted with certain aspects in the courses Data modeling and People, Society and ICT. Many subjects in the rest of your education contribute to the computational thinking curriculum, such as the Introduction Project, System Development Methods and Data Analytics. You can use the skills you acquire in the Computational Thinking (CODE) course throughout your training, for example when making prototypes and performing analyzes. If you later want to learn a new programming language, your experience from this course will make it possible to quickly acquire the basic concepts.

In this course we follow the description of computational thinking by Denning and Tedre (2019): Computational thinking is the mental skills and practices for (1) designing computations that get computers to do jobs for us, and (2) explaining and interpreting the world as a complex of information processes. That is why we have also added two (related) lines in this box:

designing: the Python programming language. Python is an ''imperative'' programming language that is widely used in science and industry to perform all kinds of small and large tasks, such as analysis of data and text, visualization, for deep learning, and much more. There is a global community of users who provide modules for just about every conceivable task, from music analysis to climate science.
explaining: we cover a number of parts of the information retrieval, the field that concerns the development of search technology. How can you make texts, but also images and music, searchable? Which models and algorithms are used for this? How do you give a user the optimal answer to his / her search question?
Both lines come together in the concluding assignment of the tutorial: programming a simple search engine yourself in Python.');
INSERT INTO "Courses" VALUES (13,13,'Datamodelleling','Information Science','level1',1,'The Data Modeling course introduces the student to database design, with particular emphasis on conceptual data modeling. Databases are ubiquitous in today''s information society and are at the core of (web-based) business applications, including decision support systems, Enterprise Resource Planning (ERP) systems and Customer Relationship Management (CRM) systems. Knowledge of conceptual data modeling is again addressed in subsequent subjects of the Information Science curriculum, which include the subjects Information Systems and Organizations and ICT.
The conceptual modeling languages ​​covered in the course are: Entity-Relationship Modeling (ERM), Data Flow Diagramming (DFD) and Unified Modeling Language (UML) class diagrams. From these languages, the modeling concepts, the fundamental modeling principles, as well as the rules for constructing syntactically correct and semantically meaningful models will be discussed and the student will work on them in practical exercises. On the basis of concrete examples, typical pitfalls in the design of conceptual data models are discussed and possible solutions are discussed. In the practical, students will work in group form to design a database in the context of a practical case.');
INSERT INTO "Courses" VALUES (14,14,'Informatica Introductieproject','Computer Science','level1',2,'During this project, a game is developed in a team of about 5 students. Participants are expected to have taken the Impertive Programming course and to be able to program in C #.
Each project group consists of approximately 5 students from the same tutor group. Any senior students are divided among the different groups. The main working method is self-motivation of the team.
The team also receives support through
regular project meetings with the supervisor
some lectures
consultations with experts
The team will show the result at a closing symposium.
');
INSERT INTO "Courses" VALUES (15,10,'Game Technology Introduction Project','Computer Science','level1',2,'The game technology introductory project is specifically intended for first-year students of Computer Science who follow the game technology study path.
During this project, a game is developed in a team of about 5 students. Participants are expected to have completed the game programming course and to be able to program in C # and XNA.
Each project group consists of approximately 5 students from the same tutor group. Any senior students are divided among the different groups. The main working method is self-motivation of the team.
The team also receives support through
regular project meetings with the supervisor
some lectures
consultations with experts
The team will show the result at a closing symposium.');
INSERT INTO "Courses" VALUES (16,15,'Information exchange','Information Science','level1',2,'In this field, our current information society is regarded as a network of human systems and computer systems that exchange information with each other. Three disciplines are linked: human communication, human-computer communication and computer communication. People communicate with each other via computer systems or not - think of an everyday conversation and the use of social media. But people also communicate with computers via user interfaces - we are talking about human-computer interaction. And finally, computers also communicate with each other in networks of different computer systems. In this course we will study these different forms of information exchange and discuss the similarities and differences.

Specific topics covered: Communication networks and protocols, stratification of communication, security, multimedia and modality, representation forms and techniques, verbal and non-verbal communication, harmonization, argumentation, cooperation, World Wide Web, usability, e- commerce, trust.

Transitional arrangement: This course replaces the former Web design course. Older students of Information Science who previously did the Web Design course may include information exchange in their profiling space, but not if they have already done Computer Architecture & Networks and / or Cognition & Communication. The new course has overlap with WD and NW and CC. If you have done two of these courses, the overlap is too large to be allowed to enter IUW in the profiling space. Informatics students may not take this course if they also take the course Web Technology. Also view the EER for the exact arrangements.');
INSERT INTO "Courses" VALUES (17,15,'Information Science Introduction Project
','Information Science','level1',4,'"Design an information and communication system that contributes to a social need." Think in particular of sustainability or applications within the domain of health.
In short, that is the assignment that the students will face in this project. This is by no means an easy task, since the development of such a system is generally extensive and complex and involves a wide range of activities: analysis, design, production and implementation, use and management of the system.
In the previous courses of the first year of the Information Science study, the student has studied all kinds of aspects of ICT from different perspectives and perspectives. Now it is time to apply the acquired knowledge and skills in an integrated project in which the student works in a team on the design of an information and communication system that contributes to a social need. In the project, the student also takes the following steps in the development of the communicative, reflective, cooperation and management skills required for an information scientist.');
INSERT INTO "Courses" VALUES (18,16,'Information Systems','Information Science','level1',4,'
Informatiesystemen zijn niet weg te denken uit onze maatschappij: ze dienen de mens in haar behoefte naar informatie. Een belangrijk onderdeel van informatie is de stroom van informatie: op verschillende momenten is op verschillende plaatsen verschillende informatie nodig. Een informatiesysteem helpt hierin. In dit vak maak je kennis met informatiesystemen en technieken die gebruikt worden om deze systemen te ontwerpen. Een belangrijk aspect in informatiesystemen is het modelleren van deze informatiestromen.
Je leert in dit vak:
Grondslagen van informatiesystemen: wat is informatie? Hoe verwerk je informatie?
Toepassen van specificatietechnieken om een informatiesysteem te ontwerpen
Modelleren en controleren van processen
Het maken van een executeerbare specificatie van een informatiesysteem
We gebruiken hierbij naast het boek "Business Process Management" een aparte syllabus met additionele informatie en opgaven.');
INSERT INTO "Courses" VALUES (19,17,'People, society and ICT','Information Science','level1',1,'A new society has emerged since the 1970s. Almost everyone in the Netherlands has one or more computers that are connected to the internet. An infrastructure of information and communication technology (ICT) has emerged that enables us to view a virtual world from the living room, shop, arrange banking or communicate with anyone in the world. Linking information systems together has created chains of enormous numbers of independent organizations and professionals who work together. In short, we have left the industrial era behind and ended up in the information society.
The information society has confronted us with new challenges, because we are not always fond of all that information (e.g. spam), we sometimes have problems dealing with it or we fear that others will get information that is not intended for them ( privacy). We have overcrowded email boxes or we don''t know what to take for granted. In the worst case, we are robbed of our money or even of our identity.
This course explores the role of information in our current information society and how people function and handle information in this. We look at rules and laws in the field of information, but also at the ethical aspects of information. We ask ourselves who we actually are in the virtual world of the information society. The way in which people process information and make decisions is discussed, and concepts such as identity and information overload are introduced. In addition to these individual aspects, we look at communicative aspects, such as cooperation principles and group dynamics, and how they can be supported with the aid of ICT.
Keywords
social aspects of ICT, health and ICT, ethics, information law, intellectual property, privacy, chain computerization');
INSERT INTO "Courses" VALUES (20,12,'Designing interactive systems','Information Science','level1',3,'Vaak zijn gebruikers niet tevreden over computersystemen omdat deze systemen niet goed aangepast zijn aan de wensen, doelen en vaardigheden van gebruikers. In deze inleidende cursus zul je het proces bestuderen van het ontwerpen van interactieve systemen vanuit het perspectief van human-centred design. De belangrijkste fasen van dit proces omvatten kennisverwerving over de cognitieve, perceptuele en motorische eigenschappen en beperkingen van gebruikers, requirementsanalyse, prototyping en evaluatie. De belangrijkste technieken voor het verzamelen van data, requirementsanalyse, ontwerp, prototyping en evaluatie worden beknopt geintroduceerd. We zullen specifieke aspecten bespreken die van belang zijn voor het ontwerpen van websites, games, en andere systemen. Op basis van theorie zullen studenten in groepen een interactieve applicatie ontwerpen die rekening houdt met de requirements van de eindgebruikers.');
INSERT INTO "Courses" VALUES (21,18,'Organizations and ICT','Information Science
','level1',3,'Organisation and ICT(OICT) is an English-taught course that introduces the students with the interplay between organizations and information & communication technology (ICT). The main thrust behind the course is to create awareness and deliver knowledge on the importance of considering ICT within the context of the organization(s) that make use of ICT systems. OICT is an essential component of the information science curriculum (informatiekunde), but it is also useful for students attending computer science (informatica). OICT is about understanding and analysing an organizational context where an ICT solution is to be devised, in order to identify the problem and the needs in that context. This is a preliminary and necessary step to the design and engineering of information systems--taught in the follow-up course Informatiesystemen--that fulfill the identified problems and needs.
In order to achieve these objectives, the course will be taught as an interplay of lectures, practical activities in the lab, and guest lectures on selected topic given by experts in the field. An integral part of the course will be a project, delivered by weekly or bi-weekly assignments, where groups of students will take an organization of their choice, and will use various modeling techniques and frameworks to represent and analyze the organizational structure, business processes, business strategies, security and risk, knowledge management, and strategic objectives.');
INSERT INTO "Courses" VALUES (22,19,'Scientific research methods','Information Science','level1',1,'What is a research project? How shall I start to do research? What are the steps to follow from the problem investigation to the implementation of new solutions? How do I prepare my first research project? If you like to be creative, become the creator of novel inventions, and contribute to the scientific world, this course is your first step. During this course, you will be introduced to the research world. You will have room to be a creative but rigorous scientist by selecting the most efficient and effective research methods. In addition, you will learn how to write your first scientific research paper.');
INSERT INTO "Courses" VALUES (23,20,'Analysis','Mathematics','level1',3,'In the course Introduction Analysis some fundamental topics from the analysis on Rn are discussed. Some of these subjects have already been touched on in the Infinitesimaal Account lectures. There, however, the emphasis was on working and calculating with the concepts, while here the emphasis is on understanding, formulating and proving. The tutorials will practice practicing proof of results and writing it clearly and completely. In this course, new subjects are also tapped that provide a different view of the analysis than the infinitesimal account and which are fundamental for the further construction of the analysis. It is a compulsory subject for all math students and provides a good preparation for level 2 lectures.');
INSERT INTO "Courses" VALUES (24,21,'Analysis in more variables','Mathematics','level2',4,'This course is an elective for math students. It covers various aspects of the analysis in several real variables. It is prior knowledge for the directions differential geometry, differential equations and dynamic systems. For more information about the study paths, see the student website.
 
Learning goals:
The following topics are covered in this course:

total derivative of a vector-valued function of multiple variables, also higher order.
inverse and implicit function statement.
sub-variety of Rn
representation of a sub-variety by means of immersions and submersions.
tangent spaces to a sub-variety.
Riemann integration in Rn
Fubini''s theorem, repeated integration and exchange of integration order
Jordan size
substitution theorem
Green''s theorem
Riemann integration over a sub-variety of Rn
Stokes'' theorem
divergence theorem of Gauss
After completion of the course, the student knows the above definitions and the statements and evidence of the above statements. Furthermore, the student is able to apply the definitions and propositions to examples.');
INSERT INTO "Courses" VALUES (25,22,'Proofs in Mathematics','Mathematics','level1',1,'In the course Proofs in Mathematics, the student is introduced to the abstract reasoning style in mathematics and practices various methods of proof. This course is a compulsory course for all math students and provides essential prior knowledge for all other math courses in the bachelor.
 
Learning goals:
 The following topics are covered in this course:
introduction to set theory
introduction to logic
evidence methods
set theory and cardinalities
(equivalence) relationships and functions
module calculations
introduction to the analysis
 Knowledge and insight: After completing the course, the student knows:
different methods of proof
the usual modern notation
the basis of set theory, logic, functions, number theory, analysis
 
Skills: After completing the course, the student can:
reading and writing mathematical proofs
write simple math texts in LaTeX
determine the correctness of a (simple) mathematical proof
 apply different methods of proof
communicate mathematical proofs and ideas clearly
fundamental propositions about numbers, sets, functions and evidences');
INSERT INTO "Courses" VALUES (26,23,'Communication in Mathematics','Mathematics','level2',4,'There are three aspects of communication that will be addressed in this course: working together on an end product (where you will of course communicate with each other); presenting orally; present in writing (write in LaTeX). You will mainly work independently with your team members to collaborate on an end product. This process is supervised to a limited extent by a staff member, but the initiative for contact will come from the team members. The oral presentation will be practiced in the seminar sessions with varying emphasis on different aspects. Peer feedback will play an important role in practicing written presentation: teams give each other feedback on the written texts. An important aspect of peer feedback is that it makes you look at texts more critically (including your own).');
INSERT INTO "Courses" VALUES (27,23,'Infinite Simulation and Linear Algebra 1','Mathematics','level1',1,'In this part of the course we work on strengthening and expanding pre-university pre-university knowledge in the field of basic functions and general algebraic skills. In addition, you will undergo a culture change from VWO mathematics to a more advanced way of dealing with mathematics. This is reflected, among other things, in the nature and difficulty of the assignments you make, the creativity and flexibility that is sometimes required for this, and the (formal) requirements that are set for your elaborations in the field of mathematical and linguistic correctness and comprehensibility. . The treatment of the theory is informal and little will be proven. Subjects that can be tested include:
algebraic skills
absolute value function, even and odd functions
write the power of a summation with Pascal''s triangle
Finding the job description of the inverse of a job if it turns out to be bijective
logarithmic and exponential functions
trigonometric functions and their inverses
trigonometric sum and difference formulas (know)
hyperbolic functions (superficial; can work with)
job research, sketching the graph of a job
calculating simple limits
differentiate (also logarithmic differentiate)
basic understanding of differential equations
solving homogeneous 1st order equations by separating variables
solving 1st order (in) homogeneous initial value problems
basic understanding of definite and indefinite integrals, geometric interpretation
determining simple improper integrals
integration techniques including: rewriting the integrand, partial integration, substitution method, simplifying rational functions and fractional splits');
INSERT INTO "Courses" VALUES (28,23,'Infinite Simulation and Linear Algebra 2','Mathematics','level1',2,'This course is a continuation of the course Infinitesimal Calculation and Linear Algebra 1, and just like that course consists of the treatment of two different basic subjects of mathematics - Infinitesimal Calculation and Linear Algebra - which will be treated separately: on Monday Linear Algebra, on Tuesday and Thursday Infinitesimal account. The course is compulsory for all math students. It provides prior knowledge for almost all mathematics subjects in the bachelor.');
INSERT INTO "Courses" VALUES (29,24,'Introduction Groups and Rings','Mathematics','level1',4,'A "group" is the mathematical formalization of the term "symmetry" and a "ring" is a formalization of a structure with addition and multiplication. In this course, the student is introduced to these two abstract structures, their properties, and concrete manifestations. The course is compulsory for math students. The course provides prior knowledge for all algebra, analysis, geometry and topology courses in the bachelor.');
INSERT INTO "Courses" VALUES (30,25,'Introduction to probability theory and statistics','Mathematics','level1',2,'In this course we cover:
Opportunities
independence and conditional opportunities
discrete and continuous random variables
expectation and variance
the central limit theorem
tests
confidence intervals
estimators.
After successful completion of the block, the student knows:
The basic concepts of probability theory, including probability spaces, independence, conditional probabilities, random variables, discrete and continuous probability distributions, cumulative distribution function, discrete / continuous probability density, expectation and variance.
Some basic concepts of statistics, including tests, estimators, confidence intervals.
The inequalities of Markov and Chebyschev, the law of large numbers, the central limit theorem.
Some of the most common discrete and continuous probability distributions, including uniform, binomial, geometric, Poisson, exponential, Cauchy, normal
Some simple stochastic processes, such as gambler''s gelding.');
INSERT INTO "Courses" VALUES (31,26,'Introduction Topology','Mathematics','level2',2,'The aim of the course Introduction to Topology is to familiarize the student with the fundamental concepts of topology, in particular open and closed collections, compactness, coherence, compactification, metrizability. After the course, the student should be able to work with these concepts and apply them in mathematical situations.
 
The course Topology is a bound elective for mathematics students. The course is essential for many disciplines in pure mathematics, but is recommended for a wide group of students, also in the disciplines of measure and integration theory, differential equations and dynamic systems.');
INSERT INTO "Courses" VALUES (32,27,'Programming for Mathematics','Mathematics','level1',4,'As a mathematician you can come into contact with programming in several ways, for example in development
of algorithms for simulations (eg weather models), finding structure in large data sets (eg Google or
Facebook) and even number theory (e.g. the decomposition of numbers).

Computer experiments, in addition to experiments and theory, are an important tool in operating
science. It is therefore important that a computer experiment meets all the requirements that you also have of one
normal experiment would expect: the setup (computer code) should be correct and the experiment should
be reproducible.');
INSERT INTO "Courses" VALUES (33,28,'Game-Design','Computer Science','level2',3,'The course will introduce students to game design in a broad sense. There are three aspects covered:
Analyzing game design. Reasoning about game design: "What is the effect of a certain design decision on the experience of the game?" And also reasoning on a fundamental level: "What are games and what types of experiences can be created?" You will learn terminology and theories, and apply these in the second and third assignment and the exam.
The role of the game designer. Executing tasks of the game designer in a game development team such as: communicating game ideas, creating design decisions, and properly evaluating a prototype. You will practise these skills in the first and second assignment.
Knowledge about game design and the game development world. Knowing a game designer''s vocabulary is important to properly communicate in a development team. Having knowledge about the game development world and the societal context is essential for you to manoeuver in the game industry. You will have to learn the material of each lecture which is assessed in the final exam.');
INSERT INTO "Courses" VALUES (34,3,'Interaction technology','Computer Science','level3',3,'One of the basic components of computer systems is the interaction between human users and the systems. Good interaction does not only provide enjoyable experiences but also increase productivity and efficiency. A field that focuses on developing computer interactions is called Human-Computer Interaction (HCI). This course is part of HCI, yet emphasizing on the technological aspects rather than the human aspects. Interaction technologies are crucial in many applications, particularly in computer games');
INSERT INTO "Courses" VALUES (35,29,'Law and Computer Science','Computer Science','level2',4,'Anyone going to work as a computer scientist today is almost inevitably confronted with legal questions. Automation projects are recorded in contracts, and if something goes wrong, the question arises who is liable. The internet makes possible new forms of business (e-commerce) that require new forms of legal protection. The internet also makes possible large-scale forms of abuse and crime, such as exchanging software and digital music, but also child pornography or racist material. Finally, internet users leave many digital traces, which raises questions about privacy protection.
In addition, ICT is increasingly used on a larger scale in law and public administration. For example, the contact between citizen and government is becoming increasingly digital (e-democracy, e-government), and ICT is increasingly being used to support the administration of justice, implementation of the law and the legal profession, in the form of, for example, databases, knowledge systems and case management. systems. Legal disputes about e-commerce can sometimes even be fought online nowadays. Finally, ICT can provide technical protection of legal rights, such as with ''digital rights management''.
The first (and major) part of this course will deal with legal aspects of computer science, such as liability in automation projects and internet providers, digital contracts, intellectual property of software and digital information, computer crime, and privacy protection. The purpose of this part is to make the student aware of the legal issues that a computer scientist can encounter in professional practice.
In the second (smaller) part, the student is introduced to the main IT applications in law and public administration. The aim of this part is to show how IT can be used to regulate society, including promoting democracy and good governance.');
INSERT INTO "Courses" VALUES (36,15,'Usability engineering and user experience','Information Science','level3',4,'Bad designs and unexpected problems in the use of (digital) systems are still a source of annoyance in our daily lives and can cause serious errors. That is why it is important to involve users in the development process from the start. In addition, there is increasing attention for User eXperience (UX) when designing systems, which must also be beautiful, entertaining and ''fun'' to use.
Usability Engineering (UE) and UX offers a deepening of topics that have been discussed in Designing Interactive Systems, but more specifically focuses on the treatment of methods that are available to evaluate and evaluate the usability and experience of (digital) systems. optimize. UE is characterized by systematically drawing up criteria that systems must meet, by taking them into account during the development process and by evaluating whether these criteria are also met.
There are various methods available to the usability engineer. The most important methods, such as task analysis, requirements analysis, heuristic evaluation, thinking aloud, cognitive walkthrough and usability testing are discussed in this module, both in the lectures and in practical assignments. Also empirical research is discussed into the reliability and validity of the methods, different methods are compared with each other, and we discuss when which method can best be used.');
INSERT INTO "Courses" VALUES (37,28,'Applied Games','Information Science','level3',1,'Applied games are games that have a different primary purpose than entertainment. The main goal can be, for example, education, training, raising awareness and understanding, or changing attitudes and behavior. Applied games and gamification (the use of game techniques to motivate people, influence behavior or solve problems, for example) have now been extensively used in (among others) the fields of health, security and defense, education, social media, marketing and communication. Games and gamification are also interesting subjects for scientific research, because they provide insight into human behavior, behavioral change and learning processes, among other things; and the effects of emotions and factors such as motivation and involvement on the effectiveness of games. In this course we will discuss different facets of games and gamification, using the usual working methods such as lectures and tutorials, but also playing games and applying gamification.');
INSERT INTO "Courses" VALUES (38,30,'Cognition and Emotion','Information Science','level3',2,'In the course Cognition and Emotion we deal with cognitive processes (such as perceiving, processing, using and remembering information), emotions and the interaction between the two. Particular attention is paid to the role of these phenomena in the design and use of ICT.

Traditionally, cognition and emotion have been treated separately in research and literature. However, the reciprocal influence of emotions and cognitive processes is obvious and very relevant to the design and evaluation of a wide range of computer applications: for example, systems that help users make good decisions in a stressful situation; training applications in which virtual characters must be able to show emotions; and games that should be both fun and educational. But the user''s emotions and cognitive processes also play a role in daily applications: when an application offers too much information at the same time, for example, the user can make mistakes and become frustrated. A beautifully designed and well-designed application, on the other hand, ensures that the user has a pleasant experience and wants to use it more often.

The course is important for students with an interest in (applied and entertainment) games, and human-machine interaction in general.');
INSERT INTO "Courses" VALUES (39,31,'Discrete Mathematics','Mathematics','level3',3,'The three main questions in combinatorics are:
How many solutions are there (counting problem)?
Is there a solution (decision problem)?
Which is the best solution (optimization problem)?
This course mainly focuses on the first and third questions. The necessary techniques are also discussed.
Content:
Basic rules for counting the number of possibilities
Generating functions
Drawing up and resolving recurring relationships.
Counting using the Inclusion / Exclusion technique.
Pólya theory.
Dynamic programming;
Shortest path and minimal spanning tree;
Matching and allocation problems;
Max flow and min cost max flow problems;
Complexity theory.');
INSERT INTO "Courses" VALUES (40,27,'Numerical Mathematics','Mathematics','level2',2,'Computers are widely used in science and business for, for example, weather forecasts, designing aircraft, processing measurements or studying the climate. The models underlying these calculations are often based on differential equations, systems of equations or integrals. We can solve these by hand for very simple models, but this is no longer possible for more complex models. How can we approach the sought solutions with the computer? And how do we know for sure that the answer is reliable; after all, we cannot compare it to the exact answer.

In this course we learn techniques for numerically approximating solutions of systems of equations and integrals. We also learn how to analyze such approaches in order to characterize the error and to say something about the reliability and stability of a chosen method. The course consists of a theoretical part and a computer practical where we will work with Python to put the learned methods into practice.');
COMMIT;
