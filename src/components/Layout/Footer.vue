<template>
    <div class="footer">
        <p>Stránka je stále ve vývoji. Pokud naleznete chybu, tak nám napište na <a href="https://m.me/kulisekmemo"
                target="_blank">Messenger</a>. Děkujeme.
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

    gap: .5rem;


    text-align: center;
}
</style>