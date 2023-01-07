<template>
    <button @click="test()" class="theme-toggle" id="theme-toggle" title="Toggles light & dark" aria-live="dark">
        <svg class="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
            <circle class="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" fill="currentColor" />
            <g class="sun-beams" stroke="currentColor">
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
            <mask class="moon" id="moon-mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle cx="24" cy="10" r="6" fill="black" />
            </mask>
        </svg>
    </button>
</template>

<style scoped lang="scss">
@import"https://unpkg.com/open-props/easings.min.css";

.sun-and-moon>:is(.moon, .sun, .sun-beams) {
    transform-origin: center center
}

.sun-and-moon>:is(.moon, .sun) {
    fill: var(--icon-fill)
}

.theme-toggle:is(:hover, :focus-visible)>.sun-and-moon>:is(.moon, .sun) {
    fill: var(--icon-fill-hover)
}

.sun-and-moon>.sun-beams {
    stroke: var(--icon-fill);
    stroke-width: 2px
}

.theme-toggle:is(:hover, :focus-visible) .sun-and-moon>.sun-beams {
    stroke: var(--icon-fill-hover)
}

[data-theme=dark] .sun-and-moon>.sun {
    transform: scale(1.75)
}

[data-theme=dark] .sun-and-moon>.sun-beams {
    opacity: 0
}

[data-theme=dark] .sun-and-moon>.moon>circle {
    transform: translate(-7px)
}

@supports (cx: 1) {
    [data-theme=dark] .sun-and-moon>.moon>circle {
        transform: translate(0);
        cx: 17
    }
}

@media (prefers-reduced-motion: no-preference) {
    .sun-and-moon>.sun {
        transition: transform .5s var(--ease-elastic-3)
    }

    .sun-and-moon>.sun-beams {
        transition: transform .5s var(--ease-elastic-4), opacity .5s var(--ease-3)
    }

    .sun-and-moon .moon>circle {
        transition: transform .25s var(--ease-out-5)
    }

    @supports (cx: 1) {
        .sun-and-moon .moon>circle {
            transition: cx .25s var(--ease-out-5)
        }
    }

    [data-theme=dark] .sun-and-moon>.sun {
        transform: scale(1.75);
        transition-timing-function: var(--ease-3);
        transition-duration: .25s
    }

    [data-theme=dark] .sun-and-moon>.sun-beams {
        transform: rotate(-25deg);
        transition-duration: .15s
    }

    [data-theme=dark] .sun-and-moon>.moon>circle {
        transition-delay: .25s;
        transition-duration: .5s
    }
}

.theme-toggle {
    --size: 2rem;
    --icon-fill: var(--stone-8);
    --icon-fill-hover: var(--stone-7);
    ;
    background: none;
    border: none;
    padding: 0;
    inline-size: var(--size);
    block-size: var(--size);
    aspect-ratio: 1;
    border-radius: 50%;
    cursor: pointer;
    touch-action: manipulation;
    -webkit-tap-highlight-color: transparent;
    outline-offset: 5px;

    max-width: 20px;
    max-height: 20px;
}

.theme-toggle>svg {
    inline-size: 100%;
    block-size: 100%;
    stroke-linecap: round
}

[data-theme=dark] .theme-toggle {
    --icon-fill: var(--text-1);
    --icon-fill-hover: var(--text-2);
}

@media (hover: none) {
    .theme-toggle {
        --size: 48px
    }
}

* {
    box-sizing: border-box;
    margin: 0
}

html {
    block-size: 100%;
    color-scheme: light
}

html[data-theme=dark] {
    color-scheme: dark
}

@supports not (color-scheme: dark) {
    html[data-theme=dark] {
        background: #111
    }
}

@-webkit-keyframes octocat-wave {

    0%,
    to {
        transform: rotate(0)
    }

    20%,
    60% {
        transform: rotate(-25deg)
    }

    40%,
    80% {
        transform: rotate(10deg)
    }
}

@keyframes octocat-wave {

    0%,
    to {
        transform: rotate(0)
    }

    20%,
    60% {
        transform: rotate(-25deg)
    }

    40%,
    80% {
        transform: rotate(10deg)
    }
}
</style>

<script setup>
const getColorPreference = () => {
    if (localStorage.getItem('theme-preference'))
        return localStorage.getItem('theme-preference')
    else
        return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
}

const setPreference = () => {
    localStorage.setItem('theme-preference', theme.value)
    reflectPreference()
}

const reflectPreference = () => {
    document.firstElementChild.setAttribute('data-theme', theme.value)
    document.querySelector('#theme-toggle')?.setAttribute('aria-live', theme.value)
}

const theme = {
    value: getColorPreference(),
}

const test = () => {
    theme.value = theme.value === 'light'
        ? 'dark'
        : 'light'
    setPreference()
}

// set early so no page flashes
reflectPreference()

window.onload = () => {
    reflectPreference()
}

window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches: isDark }) => {
        theme.value = isDark ? 'dark' : 'light'
        setPreference()
    })
</script>