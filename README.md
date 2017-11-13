# About Snew

Snew is an open-source parody client for reddit.

It is a client forked from the reddit source code that runs entirely in your browser.

Snew attempts to undo reddit's pervasive censorship

Content is pulled directly from the reddit api and pushshift.io


## Application Mirrors

 * [snew.github.io](https://snew.github.io)
 * [ceddit.com](https://ceddit.com)
 * [politicbot.github.io](https://politicbot.github.io)
 * [r.go1dfish.me](https://r.go1dfish.me)

## Open-Source Development

    Snew is an MIT licensed ES6 React App
    With a reddit CPAL-1.0 LESS design

[snew@github](https://github.com/snew/snew)
[design@github](https://github.com/decred/snew-classic-ui)
[reddit@github](https://github.com/reddit/reddit)

No endorsement by or for reddit inc. is implied.

###### Local Installation Instructions (Mac/Linux)

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.6/install.sh | bash
    nvm install 8 && nvm use 8 && npm install -g yarn
    cd && git clone https://github.com/snew/snew.git && cd snew
    yarn && yarn start

## Frequently Asked Questions

###### Does snew recover things authors delete?

Absolutely not.  Snew does not and will not ever attempt to restore content that is deleted by its original author.

All content restored by snew is content that appears to have been removed by moderators or admins against the wishes of the original contributor.

###### Why are the listing numbers mixed up?

Reddit no longer sorts hot in the same way or is [otherwise manipulating](https://snew.github.io/r/changelog/comments/5cysso/upcoming_experiments_the_relevance_team_and_front/) hot sorts and/or displayed post scores.

Snew sorts known things in listings using the [hotness algorithm from open-source reddit.](https://medium.com/hacking-and-gonzo/how-reddit-ranking-algorithms-work-ef111e33d0d9)

Snew displays the listing numbers from reddit (or as recorded by transparency bots like u/FrontpageWatch)

The discrepancy between the sort and the numbers is evidence of [this manipulation](https://snew.github.io/r/ModSupport/comments/77o0wm/friday_discussion_thread_what_unique_challenges/dons0qo/)

###### What is nsfb? (Not Safe For Brand)

Reddit's api returns an undocumented brand_safe field for content.  It appears to be applied on a subreddit basis.

Snew displays a nsfb indicator when a post has a false brand_safe value.

[It is believed that all subreddits are nsfb until manually reviewed as safe](https://snew.github.io/r/modhelp/comments/64qgv2/my_subreddit_is_not_brand_safe_what_does_it_mean/)

## History

> Neither Alexis [u/kn0thing] nor I created Reddit to be a bastion of free speech
>
> — u/spez 2015

&nbsp;

> A bastion of free speech on the World Wide Web? I bet they would like it," he replies. [reddit]'s the digital form of political pamplets.
>
> — u/kn0thing 2012

&nbsp;

> We will tirelessly defend the right to freely share information on reddit in any way we can, even if it is offensive or discusses something that may be illegal.
>
> — u/reddit 2012

&nbsp;


> We want to democratize the traditional model by giving editorial control to the people who use the site, not those who run it.
>
> — Reddit FAQ 2005

&nbsp;

> We've always benefited from a policy of not censoring content
>
> — u/kn0thing 2008

&nbsp;

> We stand for free speech. This means we are not going to ban distasteful subreddits. We will not ban legal content even if we find it odious or if we personally condemn it. Not because that's the law in the United States - because as many people have pointed out, privately-owned forums are under no obligation to uphold it - but because we believe in that ideal independently, and that's what we want to promote on our platform. We are clarifying that now because in the past it wasn't clear, and (to be honest) in the past we were not completely independent and there were other pressures acting on reddit. Now it's just reddit, and we serve the community, we serve the ideals of free speech, and we hope to ultimately be a universal platform for human discourse (cat pictures are a form of discourse).
>
> — u/yishan 2012

## Alternatives

 * [voat.co](https://voat.co)
 * [raddle.me](https://raddle.me)
 * [steemit.com](https://steemit.com)
 * [gab.ai](https://gab.ai)
