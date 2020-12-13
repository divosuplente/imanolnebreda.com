<script>
    export let tags;

    const sortedTags = Object.keys(tags).sort();
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

    .tags-list {
        list-style: none;
        margin: 0;
        padding-inline-start: 0;
    }

    .tag-name {
        font-size: small;
    }

    .tag-number {
        font-size: x-small;
        color: grey;
    }
</style>

<div class="widget">
    <h3 class="widget-title">Etiquetas</h3>
    <div class="widget-box">
        <ul class="tags-list">
            {#each sortedTags as tag}
                <li class="tag-name">
                    <a href="/" class="tag-link">{tag}
                        <span class="tag-number">({tags[tag].count})</span></a>
                </li>
            {/each}
        </ul>
    </div>
</div>
