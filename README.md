# Workshop Accessibility for Front-end Developers

In this repository you will find our example site and some relevant links.

## General

* [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices-1.1/) (note: test with users before using, consider making it work with less ARIA)
* [Accessible Name and Description Computation 1.1](https://www.w3.org/TR/accname-1.1/)
* [W3C/WAI](https://www.w3.org/WAI/)

## Accessibility and standards

* [WCAG 2.1 QuickRef](https://www.w3.org/WAI/WCAG21/quickref/?versions=2.1)
* [An Alphabet of Accessibility Issues](https://the-pastry-box-project.net/anne-gibson/2014-july-31) by Anne Gibson
* [Motor impairments](https://webaim.org/articles/motor/motordisabilities) and [Assistive Technologies for Motor Impairments](https://webaim.org/articles/motor/assistive) at WebAIM
* [Testing with VoiceOver](https://webaim.org/articles/voiceover/), [Testing with NVDA](https://webaim.org/articles/nvda/), [Testing with JAWS](https://webaim.org/articles/jaws/), all on WebAIM, [Testing with VoiceOver](https://www.apple.com/voiceover/info/guide/_1124.html), [Testing with Narrator](https://support.microsoft.com/en-us/windows/chapter-2-narrator-basics-5ff4591e-7b6d-245e-c95d-ce83c0a1a8d4)

## The business case

* [Accessibility core value at Apple, therefore impacts performance-based bonuses](https://www.applevis.com/blog/apple-executives-bonuses-be-tied-their-performance-respect-accessibility-and-companys-other)
* [Accessibility features in Microsoft products](https://www.microsoft.com/en-us/research/group/enable/)
* [Tijdelijk besluit digitale toegankelijkheid - voor wie is het verplicht?](https://www.digitoegankelijk.nl/wetgeving/voor-wie-is-het-verplicht) (NL)
* [Directive (EU) 2019/882 on the accessibility requirements for products and services]https://eur-lex.europa.eu/legal-content/EN/LSU/?uri=CELEX:32019L0882) or [Een update over de European Accessibility Act](https://medium.com/eleven-ways/een-update-over-de-european-accessibility-act-70993ab0b77) (NL) 

## Toolbelt for developers

### Structure

* [Léonie Watson demos how shes uses a screenreader to navigate the web](https://www.youtube.com/watch?v=iUCYPM6up9M) (Smashing TV)
* [Heading structures are tables of contents](https://hiddedevries.nl/en/blog/2018-09-01-heading-structures-are-tables-of-contents )
* [How to structure headings for web accessibility](https://www.nomensa.com/blog/2017/how-structure-headings-web-accessibility)

### Use the right elements 

* [HTML Living Standard, Developer Edition](https://developer.whatwg.org)

### Naming things

* [WebAIM million](https://webaim.org/projects/million/)
* [Naming things to improve accessibility - hiddedevries.nl](https://hiddedevries.nl/en/blog/2019-04-18-naming-things-to-improve-accessibility)

### Text alternatives

* [How to Design Great Alt Text: An Introduction](https://www.deque.com/blog/great-alt-text-introduction/)
* [An Alt  Decision  Tree](https://www.w3.org/WAI/tutorials/images/decision-tree/)
* [Thoughts on screenreaders and image recognition](https://tink.uk/thoughts-on-screen-readers-and-image-recognition/) by Léonie Watson
* [The Good, The Bad and The Interesting](https://vasilis.nl/gbi/2018/04/13/robert-jan-verkade/) (audio with transcript)
* [Fronteers conference videos](https://fronteers.nl/congres/2016-spring/sessions/front-end-performance-the-dark-side-by-mathias-bynens) (video with captions and transcript)

### Hiding

* [WebAIM: Invisible content](http://webaim.org/techniques/css/invisiblecontent/)
* [Hiding content - hiddedevries.nl](https://hiddedevries.nl/en/blog/2017-04-11-on-hiding-content)

### Keyboard and other inputs

Console.logging the active element ([details](https://hiddedevries.nl/en/blog/2019-01-30-console-logging-the-focused-element-as-it-changes)): 

```js
document.addEventListener('focus', function() {
  console.log('focused: ', document.activeElement)
}, true);
```

## Using ARIA

### What is it, how does it help?

* [Using ARIA](https://www.w3.org/TR/using-aria/)
* [How accessibility trees inform assistive tech - Mozilla Hacks](https://hacks.mozilla.org/2019/06/how-accessibility-trees-inform-assistive-tech/)

### Using ARIA effectively for users

* [A11y Support](https://a11ysupport.io/)

### Current page indication

* [The aria-current attribute](https://tink.uk/using-the-aria-current-attribute/) by Léonie Watson
* [Sensible ARIA usage - Accessibility Developer Guide](https://www.accessibility-developer-guide.com/examples/sensible-aria-usage/current/)

### Client side routing

* [What we learned from user testing of accessible client-side routing techniques with Fable Tech Labs](https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/)
* [Improved accessible routing in Vue.js (updated)](https://marcus.io/blog/improved-accessible-routing-vuejs)

## Building accessible components

* [Inclusive Components](//inclusive-components.design)
* [ally.js](//allyjs.io)
* Patterns section on [The A11y Project](https://a11yproject.com)


## Staying up to date

* [A11Y Weekly](//a11yweekly.com)
* [WebAIM](https://webaim.org) 

## Tools

* [aXe Core](https://axe-core.org)
* [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/#nightly) with Accessibility Tree inspector (in regular Firefox from 61; [some background](https://www.marcozehe.de/2018/04/11/introducing-the-accessibility-inspector-in-the-firefox-developer-tools/))


## Online learning

* [Google's Udacity Course](https://eu.udacity.com/course/web-accessibility--ud891)
* [Marcy Sutton's online course](https://egghead.io/courses/start-building-accessible-web-applications-today)

## Offline learning (books)

* [Apps for all](https://shop.smashingmagazine.com/products/apps-for-all) / [Inclusive Design Patterns](https://shop.smashingmagazine.com/products/inclusive-design-patterns) by Heydon Pickering
* [Accessibility for everyone](https://abookapart.com/products/accessibility-for-everyone) by Laura Kalbag

## Pattern libraries with accessibility in mind

Look for test results and rationale before patterns from the web.

* [Deque Cauldron](https://pattern-library.dequelabs.com/)
* [Tenon UI](https://www.tenon-ui.info/)
* [GOV.UK](https://design-system.service.gov.uk/)