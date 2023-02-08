---
authors: [jnye]
title: Increasing the amount of renewables on the distribution grid - Part 1
summary: The world needs to transition to a renewable energy future to limit climate change. Part one of the series investigates the reasons for why we need to update the distribution network to handle more renewables.
date: 2021.11.13
tags: ['renewables', 'power-systems']
images: []
layout: PostLayout
draft: false
blog: true
---

This is the first post in a multipart series that will investigate various ways to increase the amount of renewable energy on the distribution grid.

It is based on the work of my [MSc thesis](https://scholar.sun.ac.za/handle/10019.1/86605).

# Introduction

The introduction of renewable generation onto an electricity grid can have profound impact on its reliability, power quality and operation.
I come from a background in South Africa where a significant amount of renewables will be connected to the medium voltage (MV) distribution network.
A MV distribution network typically has voltages in the range of 11-33 kV.
Large plants will be connected to the high voltage (HV) network at 66 kV to 400 kV.

# Third world problems

The power networks in countries such as South Africa, and other third world countries are significantly different to those in the first world.

The power networks can be characterised by:

- large distances between generation and load
- voltage drop rather than current constraints
- different load profiles

Generally, the amount of renewables that can be installed on the MV networks are limited due to the long, weak MV distribution networks that service most of the areas that renewables can be installed.

Over the next few years most of the potential renewable sites, with a strong connection to the grid, will have been used.
Most of the open land and renewable resources lie where no existing infrastructure exists.
In many cases renewables will have to be connected to weak feeders far away from substations and load centres.
Costs rise dramatically if long dedicated power lines need to be built to access these resources.

# Technical limitations

Most distribution systems are passively controlled, designed for one way power flow and control problems are solved during the network planning stage using simple load flow tools.
To connect the amount of renewables to the power network there are many technical challenges that must be overcome.

- Power quality: Voltage regulation, harmonic distortion, rapid voltage changes, flicker and voltage unbalance
- Protection: Relay co-ordination, anti-islanding, relay blinding, DG protection from fault currents
- Stability: Transient stability, long term dynamic stability and voltage collapse

There are basic guidelines to determine if detailed studies need to be performed when connecting a power plant to the grid.
These guidelines can be summariezed by four main criteria:

1. Voltage regulation or voltage rise
2. Rapid voltage changes
3. Thermal limits
4. Protection limits

These criteria ensure that voltages and currents will never exceed the defined limits during worst case loading scenarios.
Protection issues are more of a concern when integrating synchronous and induction generators into the distribution network.
Fault current from generation, with power electronic converters, is limited to about double the rated power of the inverter.

The voltage rise, caused by a power plant, is dependent on the amount of power that the DG generates and the short circuit power level at it's point of connection.
The [EPRI](https://www.epri.com/) planning guideline, specifies a 1% voltage change limit for renewable generation and a 5% voltage change limit for fixed generation.

On feeders that have a large amount of connected generation, the voltage can be supported along the length of the feeder, depending on where the generators are placed.
There are various methods which will be discussed in subsequent posts, on how to regulate the voltage of the MV network when renewables have been installed.

Ultimately, I forsee the transformation of the distribution system from a passive network to an distributely controlled, intelligent network.

# Objectives

This series will address some of the issues relating to the installation of renewable generation onto the grid, such as:

1. Assess the impact of PV distributed generation on MV distribution feeders voltage and voltage control devices
2. Investigate various methods that can be used to increase penetration levels
3. Provide solutions to combine the various voltage control techniques to increase penetration levels further, without negatively impacting power quality
