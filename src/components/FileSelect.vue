<template>
    <div class="file-select">
        <div class="first">
            <b> Vyber soubor s daty:
            </b>
            <input type="file" ref="file" @change="change">
        </div>
        <button @click="load" class="loadBtn" v-if="isLoaded">Načíst</button>
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
            };
            reader.onerror = (err) => alert(err);
            reader.readAsText(file);
        }
    }
}
</script>

<style scoped>
.file-select {
    padding: 20px;
    background: #eee;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    border:1px solid #ccc;
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
}

@media only screen and (max-width: 720px) {
.file-select { width: 90%; }
}
</style>