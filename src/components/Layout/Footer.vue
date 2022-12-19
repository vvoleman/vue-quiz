<template>
    <div class="footer">
        <p class="footer__content">Stránka je stále ve vývoji. Pokud naleznete chybu, tak nám napište na
            <a href="https://m.me/kulisekmemo" target="_blank"><font-awesome-icon
                    icon="fa-brands fa-facebook-messenger" /></a> | <a href="https://www.instagram.com/memousek/"
                target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" /></a>. Děkujeme.
        </p>

    </div>
</template>

<script>
export default {
    name: "FooterComp",
}
</script>

<style scoped lang="scss">
.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 100%;
    text-align: center;
    padding: 0 1rem;

    &__content {
        width: 100%;
        max-width: 100%;

        color: var(--footer-text);

        svg {
            max-width: 20px;
            padding: 0 0.5rem;
        }
    }
}
</style>