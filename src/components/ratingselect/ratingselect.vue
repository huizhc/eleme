<template>
    <div class="ratingselect">
        <div class="rating-type border-1px">
            <span @click="select(2)" class="block positive" :class="{'active': cSelectType === 2}">{{ desc.all }}<span
                    class="count">{{ ratings.length }}</span></span>
            <span @click="select(0)" class="block positive" :class="{'active': cSelectType === 0}">{{ desc.positive }}<span
                    class="count">{{ positives.length }}</span></span>
            <span @click="select(1)" class="block negative" :class="{'active': cSelectType === 1}">{{ desc.negative }}<span
                    class="count">{{ negatives.length }}</span></span>
        </div>
        <div @click="toggleContent" class="switch" :class="{'on': cOptionContent}">
            <i class="icon-check_circle"></i>
            <span class="text">只看有内容的评价</span>
        </div>
    </div>
</template>

<script>
// import Bus from '../../../public/js/EventBus';
const POSITIVE = 0;
const NEGATIVE = 1;
const ALL = 2;
export default {
    props: {
        ratings: {
            type: Array,
            default () {
                return [];
            }
        },
        selectType: {
            type: Number,
            default: ALL
        },
        onlyContent: {
            type: Boolean,
            default: false
        },
        desc: {
            type: Object,
            default () {
                return {
                    all: '全部',
                    negative: '不满意',
                    positive: '满意'
                }
            }
        }
    },
    data () {
        return {
            cSelectType: this.selectType,
            cOptionContent: this.onlyContent
        }
    },
    methods: {
        select (type) {
            this.cSelectType = type;
            this.$emit('ratingtypeSelect', type);
        },
        toggleContent () {
            this.cOptionContent = !this.cOptionContent;
            this.$emit('toggleContent', this.cOptionContent);
        }
    },
    computed: {
        positives() {
            return this.ratings.filter((rating) => {
                return rating.rateType === POSITIVE
            });
        },
        negatives() {
            return this.ratings.filter((rating) => {
                return rating.rateType === NEGATIVE
            });
        }
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    @import "../../../public/stylus/mixin";
    .ratingselect {
        .rating-type {
            padding: 18px 0;
            margin: 0 18px;
            border-1px(rgba(7, 17, 27, .1));
            font-size: 0;
            .block {
                display: inline-block;
                padding: 8px 12px;
                margin-right: 8px;
                border-radius: 1px;
                line-height: 16px;
                color: rgb(77, 85, 93);
                font-size: 12px;
                &.active {
                    color: #fff;
                }
                &.positive {
                    background: rgba(0, 160, 220, .2);
                    &.active {
                        background: rgb(0, 160, 220);
                    }
                }
                &.negative {
                    background: rgba(77, 85, 93, .2);
                    &.active {
                        background: rgb(77, 85, 93);
                    }
                }
                .count {
                    font-size: 8px;
                    margin-left: 2px;
                }
            }
        }
        .switch {
            padding: 12px 18px;
            line-height: 24px;
            border-bottom: 1px solid rgba(7, 17, 27, .1);
            color: rgb(147, 153, 159);
            font-size: 0;
            &.on {
                .icon-check_circle {
                    color: #00c850;
                }
            }
            .icon-check_circle {
                display: inline-block;
                vertical-align: top;
                margin-right: 4px;
                font-size: 24px;
            }
            .text {
                display: inline-block;
                vertical-align: top;
                font-size: 12px;
            }
        }
    }
</style>
