<template>
    <div class="file-selection grid grid--fluid grid--center stack">
        <div class="grid__row">
            <div class="grid__col-24">
                <div class="file-select card card--animated card--file-select ">
                    <div class="first card__body">
                        <span class="card__title">Vyberte soubor s daty</span>
                        <div class="card__input">
                            <input type="file" ref="file" @change="change" accept="application/JSON">
                        </div>
                    </div>
                    <button @click="load" class="loadBtn btn" v-if="isLoaded">Načíst</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FileSelect",
    data() {
        return {
            isLoaded: false,
        }
    },
    methods: {
        change() {
            const file = this.$refs.file.files[0];
            this.isLoaded = file !== null;
        },
        load() {
            const file = this.$refs.file.files[0];

            const reader = new FileReader();
            reader.onload = (res) => {
                const data = JSON.parse(res.target.result);
                this.$emit('loaded', data);
                document.querySelector(".file-selection").style.display = "none"
            };
            reader.onerror = (err) => alert(err);
            reader.readAsText(file);
        }
    }
}
</script>

<style scoped lang="scss">
.file-select {
    margin: 0 auto;
    border: 1px solid #ccc;
}

.first {
    display: block;
}

.loadBtn {
    margin-top: 15px;
    width: 100%;
    color: white;
    font-weight: bold;
    border: 1px solid #777;
    background: #666666;
    padding: 5px 15px;
    position: relative;
    z-index: 5;
}

.card {
    &--file-select {
        .card__body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            margin: 0 auto;
        }

        .card__input * {
            background: none;
            margin-left: 10%;
            max-width: 80%;

            &::file-selector-button {
                color: var(--surface-1);
                padding: 0.5em;
                border-radius: 3px;
            }
        }
    }
}
</style>