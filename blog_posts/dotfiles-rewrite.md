---
title: Dotfiles
author: Thomas Leon Highbaugh
date: "2020-01-03"
subtitle: A general guide for using git to backup files, especially dotfiles.
alt_text: "git"
banner: gitx.png
tags: [Dotfiles, Git]
---

# Dotfiles

Nothing have I rewritten from scratch more times than my dotfiles. Generally the causis belli of such an arduous task is because I am modifying my overall color scheme or changing how I set them up on my system. I somewhat enjoy the former but the later is migraine inducing just to consider. Nonetheless, I recently found a repository that used loops in the z-shell configuration at the same time I was considering using bash scripts for the installation and provisioning processes and next thing I knew I was neck deep in another rewrite of my all encompassing and important dotfiles.

## Dotfiles Are Meant to be Modular

Forget Holman, don't just fork my dotfiles repo for your own sake, those configurations are highly specific to me and crafted according to my rather uncommon taste that you will probably hate. Though Holman was right in suggesting we should share our dotfiles, but when you are using _[insert dotfiles management software or paradigm]_ they are rather hard to break apart and try incorporating within your environment. This is especially true of window manager configurations where there are scripts referenced from outside that specific subdirectory of `.config` (or where ever the configuration file is symlinked to within your `home` directory).

Instead of ignoring this annoyance I can't hope to change in the many dotfiles repos scattered about Github, I have taken it upon myself to be the change I want to see in the world and begun writing my configurations in as modular a format as I possibly can. This is not to say I am done with this process nor that it won't probably change several hundred times, just that I am trying to make them easy for you to pull out the pieces you want and drop them into your local environment to check them out or what have you.

## No Submodules Zone

Detached Heads suck and they ruin the use case of submodules for me in keeping my larger configuration subdirectories out of my main dotfiles repo. My AwesomeWM configuration is 50 extra files that are honestly better off in their own repo and I don't want to reattach the head to the repo each time I change some minor setting in that configuration. That is a pain, the whole point is to reduce those not double them.

Instead I have opted to `git clone` the separate repos that are part of my dotfiles but fitting of their own repository instead of the submodules disaster that has already cost me precious work after a reinstall. I wrote up a quick little update script that's in the project's root directory that goes through each of these repositories where they were cloned to on the system and goes through the `git add .`, `git commit` and `git push` cycle thus reducing the amount of places I have to remember to do that in. Sure it means a more limited set of commit messages than I would prefer but that's a price I am more than willing to pay to avoid forgetting some critical upload as I am preparing to reinstall my OS again.

## So Long Makefile

For about a year, I was a fan of using Makefile for the provisioning of my systems, including linking in my dotfiles, however I came to scrap that entirely in the last rewrite of my dotfiles for a simple reason, I discovered BASH functions. With these nuggets of syntax goodness I probably should have already noticed would work for such a task, I don't need to fight with another syntax (Makefile's) or read anymore of what GNU thinks is passable as documentation. I use the conceptual and functional blocks of the BASH function to isolate each relevant program I want to install or provision on my system that are run individually from within another function specific to the system I am provisioning. I even included a BASH menu to select which system the user is provisioning which is far in excess of what Makefile considers `user experience`. Even if it is just for me, I also like decent interfaces and am no where near the level of the `emacs as a window manager` crowd at this time.

## Looping Structures

I have long known about looping and employed loops for all sorts of tasks in a variety of languages, including the installation script's menu, but for some reason never thought to include them in my shell configuration. Were my system slower, I could see why I would avoid them as they seem to slow things down a bit at shell startup but offer a lot of room to change things without needing to adjust several scripts or have the dreaded monolithic nightmare file of thousands of lines so easy to get lost in.

Adding loops to my z shell and general shell configurations means I can have a directory full of aliases, for example, and within it files specific to the aliases, which then means if I want to add a new alias all I have to do is add a new file. No need to modify my `.profile` or `.aliases` file to include the new file because the loop will handle that when the shell starts.

## Never Minimalist

I am not someone who is overly concerned with trends, I do what makes sense to me and when it comes to configuring my systems running Linux, minimalism makes almost no sense. I neither enjoy having less to deal with, when after all most of my dotfiles require very little additional configuration once set up properly, nor is almost any of the system's default behavior something I can tolerate without some modification. To those that seek minimalism, my dotfiles are not for you whatsoever and you will probably begin to hyperventilate if you dive too deeply into them.

There is something to be said about debugging when you have say 10 files instead of several dozen, however being that I have written this whole set of files from the ground up more than once, I am fully aware of where things are located and can pretty quickly address any glaring issues. Other issues of less importance to me and generally merely a minor annoyance.

# Concluding Thoughts

At present, I am considering merging the dotfiles repository with the repository hosting my rather fancy installation script for Arch Linux and including them on the `Electric Tantra Linux` so that I can install and provision my system all at once, using a nice terminal menu, and streamline the entire process to one step that will handle all of my needs at once and leave me with a system I need not tinker with anymore after the script is finished and I reboot. This remains a way off, probably requiring that I first master the creation of meta-packages that will simplify the install script's functions by lumping in large numbers of installation candidates into a single step each, which thus means fully figuring out running my own unofficial repository and signing the thing. I would then need to further lint my dotfiles and probably create overlays in a way similar to Manjaro to expediate the installation process and tailor it to specific window managers/desktop environments. All of which is a lot of **research, trial and error** which I will get around to but I can't be certain as to when.

The point being that even now there are dozens of changes for this repository lined up and certainly dozens more will enter my awareness as time goes on, which I suspect is true of many people's dotfiles repositories if they actually care enough to maintain them. I envy those satisfied with defaults (or in the case of mac owners, old hardware and sane defaults) but that's not me, after all I use Linux.
