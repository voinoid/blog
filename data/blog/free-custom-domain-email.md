---
authors: [default]
title: Free custom domain email using Gmail, Cloudflare and an SMTP server
summary: I wanted an easy way to use a custom domain email address, without paying yearly subscriptions. This guide explains the steps required to do so.
date: 2022.09.15
images:
  - '/static/images/cloudflare-email-routing.png'
layout: PostLayout
aliases: []
tags: [how-to, cloudflare]
draft: false
blog: true
---

# Set up free custom domain email using Gmail, Cloudflare and an SMTP server

I wanted an easy way to use a custom domain email addresses, without paying yearly subscriptions.

The only cost is a domain if you don't have one already.

The goals:

- use existing email inbox with a custom domain,
- send and receive email,
- must be completely free

## Things you will need

- An existing email account, I use Gmail.
- A [Cloudflare account](https://www.cloudflare.com/).
- A custom domain name on Cloudflare. Transfer it to or buy one using the [Cloudflare registrar](https://www.cloudflare.com/products/registrar/).
- An email SMTP server such as [sendinblue](https://sendinblue.com), [SendGrid](https://sendgrid.com/) or another of your choice. These allow you to send between 100 and 300 emails a day for free.

## Enable email forwarding

This part is done within Cloudflare. Cloudflare will forward any emails recieved on your domain name to an email address of your choice.

This means you can forward contact@domain.com to youremail@gmail.com.

- Go to _Email_ on the left menu bar.
- Enable email forwarding for your domain.
- Add the email DNS settings required by Cloudflare. This can be done automatically.
- Add a destination address, and verify it.
- You can either use a catch-all which forwards every email sent to your domain, or only forward specific email addresses.

In the end, you should have something that looks similar to this:

![Cloudflare email routing dashboard](/static/images/cloudflare-email-routing.png)

## Enable email sending

This part will be done within your SMTP provider and Gmail (or another email provider of your choice).

### SMTP service setup

- Authorize/validate your domain under Senders and IPs by adding all the records from the email sender to your Cloudflare DNS page.
- Add the SPF record to your existing SPF record which was created by Cloudflare instead of creating a new one.

### Gmail setup

- Open Gmail settings and go to the _Accounts and Import_ page.
- Click _Add another email address_
- In the popup window, leave _treat as Alias_ enabled and enter your custom email address that you wish to send from.
- In the SMTP page, fill in the SMTP settings from the SMTP provider you set up earlier.
- Validate the email address. This allows you to test that everything is working.
- Optional: Set this as your default email address in Gmail.

## Prevent your custom domain email from being detected as spam

Custom domains are often flagged by the spam filters on many email services.

There are a few ways to reduce this from happening. If you try several, you'll at least improve your delivery rate. These steps should have been done if you followed the instructions above, but if you are having trouble, you can double-check that all the records exist.

- Have an MX record for your domain, so you're able to accept responses.
- Set up an SPF record for your domain.
- Check to see if your sending IP address is on any blacklists. Get it off if you can.
- Set up [DKIM authentication](http://dkim.org/).

## Conclusion

You should be able to send and receive your email on your custom domain name, completely for free.

Thanks for reading, and let me know if you encountered any issues.
