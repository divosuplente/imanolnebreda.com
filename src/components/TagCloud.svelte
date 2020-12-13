<script>
    export let tags;

    const generateFontSizes = (tags) => {
        const data = { ...tags };
        let min = 9999;
        let max = 0;

        for (let tag in data) {
            if (data[tag]["count"] < min) {
                min = data[tag]["count"];
            }
            if (data[tag]["count"] > max) {
                max = data[tag]["count"];
            }
        }

        const tenth = (max - min) / 10;

        for (let tag in data) {
            const relsize = Math.floor((data[tag]["count"] - min) / tenth);
            data[tag]["fontSize"] = 70 + relsize * 10 + "%";
        }

        return data;
    };

    const tagsWithSizes = generateFontSizes(tags);
</script>

<style>
    .widget {
        margin: 50px 0;
    }

    .widget-title {
        text-decoration: none;
        margin-bottom: 1em;
        margin-left: 5px;
        line-height: 1em;
        font-weight: bold;
        letter-spacing: 1px;
        color: #999;
    }
    .widget-box {
        border: 1px solid rgba(58, 61, 98, 0.1);
        padding: 15px;
        border-radius: 3px;
    }

    .tag {
        margin-right: 5px;
        display: inline-block;
    }
</style>

<div class="widget">
    <h3 class="widget-title">Nube de etiquetas</h3>
    <div class="widget-box">
        {#each Object.keys(tagsWithSizes) as tag}
            <a
                class="tag"
                href="/"
                style="font-size: {tagsWithSizes[tag].fontSize}">{tag}</a>
        {/each}
    </div>
</div>
