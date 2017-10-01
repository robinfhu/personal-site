---
title: "How I recovered my Windows XP Password"
date: 2017-09-30T23:26:25-04:00
categories:
- programming
tags:
- passwordrecovery
- windowsxp
slug: ophcrack-review
#thumbnailImage: //example.com/image.jpg
---

I found my old laptop from college and tried logging in.  Couldn't remember my password!  Find out how I managed to figure it out...
<!--more-->

## Background

While I was at my parents home this weekend, I came across my old laptops from college. I had a Compaq Presario, and an Acer Aspire One netbook.  The Compaq was the very first laptop I ever owned, and I loved that computer!  I continued using it even after I moved to NYC.

The first problem I had when trying to turn the laptop on, was that I was missing a power cable!  Luckily my dad has this Targus Brand universal AC Adapter, which was able to power on the Compaq.

After I booted the laptop, I hit another stumbling block: the password login screen.  I thought this would be easy, so I tried one of my commonly used passwords.  No luck.

I tried another password.  Then another.  I went back to the first one again. Each time the password failed.  Occasionally the computer would wait a bit, and I would sit up in anticipation...only to have the password fail again.

Needless to say, **I was stumped**.  Being unable to login to your own laptop feels very dumb, and I nearly gave up.

## Time to crack the password

I searched Google for some solutions.  After browsing through some articles, I came across a well reviewed program called [Ophcrack](http://ophcrack.sourceforge.net/).  The program is free and touts its ability to crack a Windows XP password in seconds.  I was sold!

The first thing I did was download the **Ophcrack XP Live CD**.  This is an ISO Image file that must be burned onto a CD or USB Hard Drive.  I had a USB stick handy, so I chose that solution.  I downloaded a program called [Rufus](https://rufus.akeo.ie/) that can burn ISO images to USB sticks.

Next, I inserted the USB stick into the Compaq and turned the computer on.  You need to enter the BIOS setup to make sure the USB stick is higher up in the boot order.  Once that is done, the computer will boot from the USB stick and you will see the Ophcrack home screen.  Ophcrack runs on a lite portable version of Linux.

Ophcrack offers a quick automatic password recovery option.  You literally press [ENTER] and it begins searching.  I was super impressed after Ophcrack found the password after 2 seconds.  Turns out my password was a simple two character combination I had set for my laptop, to make it faster to sign in.  How silly!

## Detailed Instructions

I am not going to write out detailed instructions and troubleshooting steps.  Instead I'll point you to the website that helped me: [Lifewire](https://www.lifewire.com/how-to-recover-passwords-using-ophcrack-livecd-2626168).

## Conclusion

I learned that cracking a Windows XP password is dead easy.  This gives me a better appreciation of the extra security features Windows 10 has implemented.  Passwords are that one layer of protection between our data and a hacker, and thus the most vulnerable to attack.

I also learned that you can make a password recovery disk for Windows.  This would have prevented all the hassle of having to crack the password.

Anyway, it's one more tool I have now!
