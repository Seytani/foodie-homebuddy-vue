<template>
    <div class="menu-bar">
        <button class="menu-bar__icon">
            <span className="material-icons">format_bold</span>
        </button>
        <button class="menu-bar__icon">
            <span className="material-icons">
                format_italic
            </span>
        </button>
        <button class="menu-bar__icon">
            <span className="material-icons">
                strikethrough_s
            </span>
        </button>
        <button class="menu-bar__icon">
            <span className="material-icons">
                format_size
            </span>
        </button>
        <button class="menu-bar__icon">
            <span className="material-icons">
                text_fields
            </span>
        </button>
        <button class="menu-bar__icon">
            <span className="material-icons">
                list
            </span>
        </button>
        <button class="menu-bar__icon">
            <span className="material-icons">
                format_list_numbered
            </span>
        </button>
    </div>
</template>

<script>
export default {
    name: 'EdtorMenuBar'
};
</script>

<style lang="scss" scoped>
.menu-bar {
    border-bottom: 1px solid $color-gray-3;
    margin-bottom: 20px;
    padding: 7px;

    &__icon {
        background: none;
        border: none;
        border-radius: 4px;
        color: $color-gray-4;
        height: 28px;
        margin-right: 10px;
        padding: 0;
        text-align: center;
        width: 28px;

        &:hover {
            background: $color-gray-3;
        }

        span {
            display: flex;
            font-size: 22px;
            justify-content: center;
        }
    }
}
</style>