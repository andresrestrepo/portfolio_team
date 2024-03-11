---
title: Single Sign On
publishDate: 2020-03-02 00:00:00
img: /portfolio_team/assets/sso.png
img_alt: Single Sign On Architecture
description: |
  We designed a single sign on service for all the services inside our customer network
tags:
  - AWS Cognito
  - AWS DynamoDB
  - AWS ECS
  - FAST API
  - REST API
  - AWS ECS
  - AWS ECR
---


### Project Description
Our Client have 3 big service that offers to their clients. Every one of these services were using different authentication implementations.
The problem was the users need to have username/password for every app. Also they  login multiple time to use the different services

We designed a new Single sign on service to allow the users to login only once. But also we improve the security because our main backend component
is aws cognito. Now we support advance security, once time passwords flow and authentication federation using external providers like azure or pink