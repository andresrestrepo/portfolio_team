---
title: Monolith to Distributed monolith
publishDate: 2019-12-01 00:00:00
img: /portfolio_team/assets/monolithic_service.png
img_alt: A bright pink sheet of paper used to wrap flowers curves in front of rich blue background
description: |
  How to reduce contention. Team, technology and deployment...
tags:
  - Monolithic Apps
  - Distributed Monolithic
  - MicroFrontends
  - SQLALCHEMY
  - REST API
  - AWS ECS
  - AWS ECR
  - FLASK
---

### Project Description
We took a project with 5 different modules. Every one of these modules were in the same repository. Every module have its own team in 3 different countries.

These project suffer from a lot of contetion. The teams were not able to work independently in a isolated way. The degree of coupling was high. for the teams
was impossible to deploy, innovate or upgrade independently the projects.

We took the monolith and refactored and transition to a distributed monolith. We used docker and ngix locally to split the services. And in AWS we used 
load balancer networking rules. 

These was one of the more complicate projects we faced. Because while the 5 teams continue working we were spliting and improving the project.

Now we have 10 different projects that can be deploy faster and are easier to modernize