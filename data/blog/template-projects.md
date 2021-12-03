---
title: How to use template projects and repositories
date: '2021-12-03'
tags:
- development
- teams
- growth
draft: true
summary: Templates are one of my favourite ways to speed up your workflow. Whether
  you are working alone, or part of a larger team, templates have many advantages.
authors:
- default
layout:
- PostLayout
lastmod: '2021-12-03'
images: []

---
# introduction

Templates are a quick way to bootstrap a repository for a new project and then keep it up to date with your best practices.

A good template allows you to:

* update all sub projects easily
* get to production quickly
* have a consistent development environment

Templates allow any improvements to be made in one place and then merged into all the projects that use the template as a base. They are vital when working in teams. Nobody likes repeating work many times over when you are working on multiple different projects at the same time.

# template repositories

You have two choices when deciding to use templates.

The first, is creating a new repository from a template, without including the git history. This is effectively a snapshot at the point in time of your template repository. Any changes you make to the template repository will need to be manually merged into all the projects that use it.

The second, and the method which I prefer, is to add a template repository as a remote repository on an empty git-repo. The advantage is that you can pull any changes from your template repository into your projects that derive from it.

# how to use templates

Before we get into the details, let's look at how to use templates.

## step one: create a repository

I like to standardise my project names when they are based upon a template.
For example, a project that is based on a template for a machine learning API could be named something like:

`repository-name = <project_name>-ml-api`

where **project_name** is the name of your project.

After deciding on a name, create the repository.
Clone this new repository to your local machine.

## step two: add the template repository as a remote

Follow the following steps to setup the new repository with your template repository. It will be configured as a remote where it is only possible to pull from.

Initially only the new repository origin will be a remote.
You can check this by running the following command:

```bash
$ git remote -v
origin git@github.com:<organisation>/<project-name>-ml-api.git (fetch)
origin git@github.com:<organisation>/<project-name>-ml-api.git (push)
```

We will now add the template as a remote:

`git remote add upstream git@github.com:<organisation>/template-ml-api.git`

Then we want to ensure you cannot push to this remote:

`git remote set-url --push upstream no_push`

After executing the above commands, you should see the following output:

```bash
$ git remote -v
origin git@github.com:<organisation>/<project-name>-ml-api.git (fetch)
origin git@github.com:<organisation>/<project-name>-ml-api.git (push)
upstream        git@github.com:<organisation>/template-ml-api.git (fetch)
upstream        no_push (push)
```

## step three: start your project with the template

Pull from the template repository and allow you to merge any changes that occurred in the base repository by running the following command:

`git pull upstream master`

Commit any changes and push back to your newly created repository.
Congratulations, you have now created a new repository based on a template.

It should be possible to run `git pull upstream master` to merge any changes in the template into your project in the future.

# what to include in your template

A template repository should include:

* standard env files for your particular setup
* deployment files
* CI/CD templates and scripts
* standard secret names

change files for each new project
To use this template in each project, there are files which you will need to change so that
it works with your project. See

In general this include things like project naming, URLS, naming in k8s files and
environment variables.