import "./about.css";

const renderAbout = () => {
    const aboutSection = document.querySelector("#about");

    if (!aboutSection) {
        throw new Error("About mount point #about was not found.");
    }

    aboutSection.innerHTML = `
<section
class="about section"
aria-labelledby="about-title"
>
<div class="container">

<!-- About Introduction -->
<div class="about__intro">

<div class="about__intro-content">

<p class="about__eyebrow">
About
</p>

<h2
id="about-title"
class="about__title"
>
I turn ideas into
<span>interfaces.</span>
</h2>

<div class="about__description">

<p>
I'm a frontend developer who enjoys taking an idea,
breaking it down into a clear structure, and turning
it into a responsive web experience.
</p>

<p>
My focus is not just making a page look good.
I care about how the interface is structured, how it
behaves across devices, and how maintainable the
code will be as the project grows.
</p>

</div>

</div>

<div class="about__profile">
<img
src="/assets/images/profile/profile.png"
alt="Profile portrait"
class="about__profile-image"
/>
</div>

</div>


<!-- About Development Approach -->
<div class="about__details">

<!-- How I Work -->
<div class="about__workflow">

<h3 class="about__subheading">
How I Work
</h3>

<div class="about__steps">

<article class="about__step">

<div class="about__step-number">
01
</div>

<div class="about__step-content">
<h4>Understand</h4>

<p>
Understand the problem, requirements,
and experience before writing the
interface.
</p>
</div>

</article>


<article class="about__step">

<div class="about__step-number">
02
</div>

<div class="about__step-content">
<h4>Structure</h4>

<p>
Build a clear foundation that keeps
the project organized and maintainable.
</p>
</div>

</article>


<article class="about__step">

<div class="about__step-number">
03
</div>

<div class="about__step-content">
<h4>Build</h4>

<p>
Turn the structure into responsive,
functional interfaces.
</p>
</div>

</article>


<article class="about__step">

<div class="about__step-number">
04
</div>

<div class="about__step-content">
<h4>Refine</h4>

<p>
Test, improve, and polish the experience
until the details feel right.
</p>
</div>

</article>

</div>

</div>


<!-- Current Focus -->
<div class="about__focus">

<div class="about__focus-header">

<h3 class="about__subheading">
Current Focus
</h3>

<p>
What I'm developing right now.
</p>

</div>


<div class="about__focus-list">

<article class="about__focus-item">

<div class="about__focus-icon">
<i data-lucide="code-2"></i>
</div>

<div class="about__focus-content">
<h4>Frontend Development</h4>

<p>
Building responsive, reusable interfaces
with HTML, CSS, and JavaScript.
</p>
</div>

</article>


<article class="about__focus-item">

<div class="about__focus-icon">
<i data-lucide="layers-3"></i>
</div>

<div class="about__focus-content">
<h4>UI Architecture</h4>

<p>
Creating clear component structures that
keep projects organized and maintainable.
</p>
</div>

</article>


<article class="about__focus-item">

<div class="about__focus-icon">
<i data-lucide="monitor-smartphone"></i>
</div>

<div class="about__focus-content">
<h4>Responsive Design</h4>

<p>
Designing experiences that work naturally
across desktop, tablet, and mobile devices.
</p>
</div>

</article>


<article class="about__focus-item">

<div class="about__focus-icon about__focus-icon--text">
JS
</div>

<div class="about__focus-content">
<h4>JavaScript</h4>

<p>
Deepening my understanding of JavaScript
and using it to build more interactive,
reliable interfaces.
</p>
</div>

</article>


<article class="about__focus-item">

<div class="about__focus-icon">
<i data-lucide="code-2"></i>
</div>

<div class="about__focus-content">
<h4>Clean &amp; Maintainable Code</h4>

<p>
Writing code that is structured, readable,
and easier to improve as a project grows.
</p>
</div>

</article>


<article class="about__focus-item">

<div class="about__focus-icon">
<i data-lucide="book-open"></i>
</div>

<div class="about__focus-content">
<h4>Continuous Learning</h4>

<p>
Learning through real projects,
experimentation, debugging, and
continuous refinement.
</p>
</div>

</article>

</div>

</div>

</div>

</div>
</section>
`;

    if (window.lucide) {
        window.lucide.createIcons();
    }
};

export { renderAbout };