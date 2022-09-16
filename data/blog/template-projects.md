---
authors: [default]
title: How to use template projects and repositories
summary: Templates are one of my favourite ways to speed up and standardize your development workflow. They help both individual and team workflows.
date: 2021.12.11
tags: [development, teams, growth, templates]
images: []
layout: PostLayout
canonicalUrl: https://denyed.xyz/blog/template-projects
draft: false
blog: true
---

# Introduction

Templates are a quick way to bootstrap a repository for a new project and then keep it up to date with your best practices.

A good template allows you to:

- update all sub projects easily
- get to production quickly
- have a consistent development environment

Templates allow any improvements to be made in one place and then merged into all the projects that use the template as a base. They are vital when working in teams. Nobody likes repeating work many times over when you are working on multiple different projects at the same time.

# Template repositories

A template repository should include anything that fits into the standard project workflow that you use. You want to figure something out once, and document it's use by implementation in your template repository.

Things that you should include are:

- Readme
- standard env files for your setup
- development and production environment definitions
- deployment files
- CI/CD templates and scripts
- standard secret name
- formatting rules, pre-commit workflows

This is not an exhaustive list. Include everything you would use repetitively.

# How to use templates

You have two choices when deciding to use templates.

The first, is creating a new repository from a template, without including the git history. This is effectively a snapshot at the point in time of your template repository. Any changes you make to the template repository will need to be manually merged into all the projects that use it.

The second, and the method which I prefer, is to add a template repository as a remote repository on an empty git-repo. The advantage is that you can pull any changes from your template repository into your projects that derive from it.

## Step one: create a repository

I like to standardise my project names when they are based upon a template.
For example, a project that is based on a template for a machine learning API could be named something like:

`repository-name = project-name-ml-api`

where **project-name** is the name of your project.

After deciding on a name, create the repository.
Clone this new repository to your local machine.

## Step two: add the template repository as a remote

Follow the following steps to setup the new repository with your template repository. It will be configured as a remote where it is only possible to pull from.

Initially only the new repository origin will be a remote.
You can check this by running the following command:

```bash
$ git remote -v
origin git@github.com:organisation/project-name-ml-api.git (fetch)
origin git@github.com:organisation/project-name-ml-api.git (push)
```

We will now add the template as a remote:

`git remote add upstream git@github.com:organisation/template-ml-api.git`

Then we want to ensure you cannot push to this remote:

`git remote set-url --push upstream no_push`

After executing the above commands, you should see the following output:

```bash
$ git remote -v
origin git@github.com:organisation>/project-name-ml-api.git (fetch)
origin git@github.com:organisation>/project-name-ml-api.git (push)
upstream        git@github.com:organisation/template-ml-api.git (fetch)
upstream        no_push (push)
```

## Step three: start your project with the template

Pull from the template repository and allow you to merge any changes that occurred in the base repository by running the following command:

`git pull upstream master`

Commit any changes and push back to your newly created repository.
Congratulations, you have now created a new repository based on a template.

It should be possible to run `git pull upstream master` to merge any changes in the template into your project in the future.

You will need to update any files that need to be customised to your newly created project. This includes things like project naming, URLS, naming in Kubernetes files and environment variables etc.

# Conclusion

Template repositories are a good starting point for new projects. They help to speed up your development workflow and enable much faster development rates and efficiencies. You should also have a good understanding about what to put into a template repository. Happy templating!
