---
title: "Hugo: Things I've learned so far"
date: 2017-09-01T08:48:13-04:00
categories:
- programming
tags:
- hugo
#thumbnailImage: //example.com/image.jpg
slug: hugo-questions
---

I now have more indepth experience with the [Hugo Static Site Generator](https://gohugo.io/).
This post will be a collection of things I learned, and solutions to issues I encountered.
<!--more-->
## Hugo in a nutshell

Remember how websites used to be made in the 1990's? My very first websites were static HTML files.  To me, it was amazing technology. You opened Microsoft Notepad, typed some HTML code and opened the file in Internet Explorer. Website done. That was it!  No PHP, Node.js, MySQL.

For the early web, static websites were sufficient for most people.  But what if you wanted to build a website with dynamic content, like a blog, e-commerce or social media site?  That's where solutions like **Wordpress** come in: a fully dynamic blogging system backed by MySQL and PHP.

I've made sites using Wordpress.  It works.  It's also slow, hard to upgrade, and easy to break.  If the database is down, site won't work.  If PHP isn't the right version, site won't work.  If the Wordpress version is out of date, you could have security holes.

[Hugo](https://gohugo.io/) exists today to fill a niche for web content creators.  It is a tool that makes static websites: sites that are backed by nothing but HTML files.  It's for people who want a simple blog, portfolio or marketing site, without any hassles.

I'm using Hugo to power this blog.  It has worked very well for me so far, and I think the tool is sufficiently simple enough that non-technical people can use it.  But like all things web related, a little technical know-how can go a long way!

##### If you've never used Hugo before, I highly recommend doing the [quick start tutorial](https://gohugo.io/getting-started/quick-start/).

## What operating systems does Hugo support?

This was important for me, because I do my development on MacOS, Linux and Windows.  The Hugo software has builds for all three operating systems.  I can test my site on a Macbook Pro, and then deploy it to Dreamhost which runs on Linux.

[Hugo Releases](https://github.com/gohugoio/hugo/releases) has a list of all the builds.

## How to deploy

Here's my solution for deploying my Hugo generated site to Dreamhost.

1. Download the **hugo_0.26_Linux-64bit.tar.gz** binary from [Hugo Releases](https://github.com/gohugoio/hugo/releases).
2. Copy the `hugo` binary to my webserver, using `scp` or an FTP program.
3. Commit the entire site folder to `git` and push it to Github (or Bitbucket).  This includes all folders, including `content`, `static`, and `themes`.  Checkin everything, but **do not commit the `public/` folder**.
4. SSH into your Dreamhost webserver, and run `git clone <github repo url> <website directory>`.  For me, it would be: `git clone git@github.com:robinfhu/personal-site.git robinforest.net/`.
5. Run the Linux `hugo` binary while inside your website directory.  If you put the `hugo` binary in `~/bin`, the command might be:

    ```
        cd robinforest.net/
        ~/bin/hugo
    ```
6. Next time you make a change, commit it and push it to Github. Then SSH into Dreamhost, and run

    ```
        cd robinforest.net/
        git pull
        ~/bin/hugo
    ```
7. Make sure Dreamhost is configured so that the domain is pointed to the `public/` directory.


If the above is too complicated, you can always just copy the `public/` folder to Dreamhost using FTP.

## How do I configure the way URL's look?

When I first loaded my blog, the URL's looked like this: `robinforest.net/2016/08/my-post-name`.  I wanted to configure it so that it would be `robinforest.net/post/my-post-name`.  I like to have clean URLs.

The feature exists, and it's called [permalinks](https://gohugo.io/content-management/urls/#permalinks).  There is a configuration you can set and Hugo takes care of it all.  Just be careful not to change it too often, as your hyperlinks will break.

## How can I make a standalone page?

By standalone page, I mean a non blog post page.  For example, you want to make a special page that is just your biography and have the URL be `robinforest.net/about`.

I figured out that standalone pages basically live in the top level of the `content/` folder.  If you create a file like `content/about.md`, it will create a page at `yourwebsite.com/about`.

## How to run custom Javascript programs in a post

This is something I could not find a good answer to when I was researching Hugo.  What if I have a blog post, and I want to show people a sample program I built. How could I do that?

Turns out this is fairly easy, and you can see some live examples of embedded Javascript programs on [my projects page](/categories/projects).

First you need to realize that Markdown syntax supports raw HTML.  So it is perfectly fine to add this to your markdown file:

```
## My blog post

<div id='app'></div>
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<script src='js/app/main.js'></script>

```

The code will execute when you load the blog post.  This works very well and I haven't had any issues with it.
