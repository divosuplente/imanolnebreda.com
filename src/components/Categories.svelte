<script>
    export let categories;

    const sortedCats = Object.keys(categories).sort();
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

    .categories-list {
        list-style: none;
        margin: 0;
        padding-inline-start: 0;
    }

    .category-name {
        font-size: small;
    }

    .category-number {
        font-size: x-small;
        color: #999;
    }
</style>

<div class="widget">
    <h3 class="widget-title">Categorías</h3>
    <div class="widget-box">
        <ul class="categories-list">
            {#each sortedCats as category}
                <li class="category-name">
                    <a href="/" class="category-link">{category}
                        <span
                            class="category-number">({categories[category].count})</span></a>
                </li>
            {/each}
        </ul>
    </div>
</div>
